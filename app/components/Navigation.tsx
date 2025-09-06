'use client';

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, X, User } from "lucide-react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";

interface NavigationProps {
  currentSlideGradient?: string;
}

export default function Navigation({ currentSlideGradient }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    // If we're on a course detail page, navigate to home first
    if (typeof window !== 'undefined' && window.location.pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Courses", id: "courses" },
    { label: "About", id: "about" },
    { label: "Pricing", id: "pricing" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-dark-900/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Logo gradient={currentSlideGradient} />
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-blue-400 transition-colors"
                data-testid={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          {/* Auth & CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Button 
              variant="ghost"
              size="icon"
              className="text-white hover:text-blue-400 transition-colors"
              onClick={() => router.push('/signin')}
              data-testid="button-signin-nav"
            >
              <User className="w-5 h-5" />
            </Button>
            <Button 
              className="btn-primary px-4 lg:px-6 py-2 rounded-full font-medium text-sm lg:text-base"
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-started-nav"
            >
              <span className="hidden lg:inline">Get Started</span>
              <span className="lg:hidden">Start</span>
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-dark-900 border-white/10 w-80 sm:w-96">
              <div className="flex flex-col space-y-4 sm:space-y-6 mt-6 sm:mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left hover:text-blue-400 transition-colors text-base sm:text-lg py-2"
                    data-testid={`nav-link-mobile-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  variant="ghost"
                  className="text-white hover:text-blue-400 transition-colors justify-start"
                  onClick={() => router.push('/signin')}
                  data-testid="button-signin-mobile"
                >
                  <User className="w-5 h-5 mr-2" />
                  Sign In
                </Button>
                <Button 
                  className="btn-primary mt-4"
                  onClick={() => scrollToSection('contact')}
                  data-testid="button-get-started-mobile"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
