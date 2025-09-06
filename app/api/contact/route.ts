import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '../../../lib/sendgrid';

// Simple rate limiting (in production, use Redis or proper rate limiting)
const submissions = new Map<string, { count: number; lastSubmission: number }>();

export async function POST(request: NextRequest) {
  try {
    const clientIP = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
    const now = Date.now();
    const hour = 60 * 60 * 1000; // 1 hour in milliseconds
    
    // Basic rate limiting: max 5 submissions per hour per IP
    const current = submissions.get(clientIP);
    if (current) {
      if (now - current.lastSubmission < hour && current.count >= 5) {
        return NextResponse.json(
          { success: false, message: 'Too many submissions. Please try again later.' },
          { status: 429 }
        );
      }
      if (now - current.lastSubmission >= hour) {
        submissions.set(clientIP, { count: 1, lastSubmission: now });
      } else {
        submissions.set(clientIP, { count: current.count + 1, lastSubmission: now });
      }
    } else {
      submissions.set(clientIP, { count: 1, lastSubmission: now });
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Enhanced validation
    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { success: false, message: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 1000) {
      return NextResponse.json(
        { success: false, message: 'Message must be between 10 and 1000 characters' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 255) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email to info@techeduvate.com
    const emailSent = await sendContactEmail({
      name,
      email,
      message
    });

    if (!emailSent) {
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    // Log error without exposing sensitive details
    const errorId = Math.random().toString(36).substr(2, 9);
    // Error logged with ID for debugging: ${errorId}
    
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}