'use client';
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Michael Chen",
      title: "Senior DevOps Engineer at Google",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Michael Chen - Senior DevOps Engineer",
      content: "Tech EduVate's DevOps course was a game-changer. The hands-on labs and real-world projects prepared me perfectly for my current role. Highly recommended!"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Cloud Architect at Microsoft",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "Sarah Johnson - Cloud Architect",
      content: "The Azure training exceeded my expectations. Expert instructors and comprehensive curriculum made all the difference in my career advancement."
    },
    {
      id: 3,
      name: "David Rodriguez",
      title: "DevSecOps Lead at AWS",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      alt: "David Rodriguez - DevSecOps Lead",
      content: "Outstanding DevSecOps program! The security-focused approach and practical exercises gave me the skills I needed to land my dream job."
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            What Our <span className="text-blue-400">Students Say</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">Real success stories from our graduates</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-105 card-hover"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.alt}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300 ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 flex-shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-base sm:text-lg group-hover:text-blue-400 transition-colors duration-300 truncate">{testimonial.name}</h4>
                  <p className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300 text-sm sm:text-base leading-tight">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mb-3 sm:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300 animate-pulse" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              <p className="text-gray-300 italic group-hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base leading-relaxed">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
