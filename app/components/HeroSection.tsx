'use client';
import { Button } from "./ui/button";
import { useEffect } from "react";

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  gradient: string;
  icon: string;
  description: string;
}

interface HeroSectionProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

export default function HeroSection({ slides, currentSlide, setCurrentSlide }: HeroSectionProps) {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide, slides.length, setCurrentSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} opacity-10 transition-all duration-1000`}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/90 to-dark-800/90"></div>
      
      {/* Enhanced Animated Particles - Hidden on mobile */}
      <div className="hidden sm:block particle w-4 h-4 top-20 left-20 animate-bounce" style={{ animationDelay: '0s' }}></div>
      <div className="hidden md:block particle w-6 h-6 top-40 right-32 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="hidden sm:block particle w-3 h-3 top-60 left-1/4 animate-ping" style={{ animationDelay: '4s' }}></div>
      <div className="hidden lg:block particle w-5 h-5 bottom-40 right-20 animate-spin" style={{ animationDelay: '6s' }}></div>
      <div className="hidden md:block particle w-8 h-8 top-1/3 left-10 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="hidden sm:block particle w-4 h-4 bottom-1/3 right-10 animate-bounce" style={{ animationDelay: '3s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 text-center z-10">
        <div className="max-w-5xl mx-auto">
          {/* Slide Icon */}
          <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 sm:mb-6 animate-bounce">
            {currentSlideData.icon}
          </div>
          
          {/* Main Title with slide transition */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 transition-all duration-1000 transform leading-tight">
            <span className={`bg-gradient-to-r ${currentSlideData.gradient} bg-clip-text text-transparent animate-pulse`}>
              {currentSlideData.title}
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-3 sm:mb-4 font-semibold transition-all duration-1000 leading-relaxed">
            {currentSlideData.subtitle}
          </h2>
          
          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 max-w-3xl mx-auto px-2">
            {currentSlideData.description}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <Button 
              className="btn-primary px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl w-full sm:w-auto"
              onClick={() => scrollToSection('courses')}
              data-testid="button-explore-courses"
            >
              Explore Courses
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white/30 hover:border-blue-400 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all hover:bg-white/10 bg-transparent text-white transform hover:scale-110 duration-300 w-full sm:w-auto"
              onClick={() => scrollToSection('contact')}
              data-testid="button-get-started-hero"
            >
              Get Started
            </Button>
          </div>
          
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 sm:space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? `bg-gradient-to-r ${currentSlideData.gradient} scale-125` 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
                data-testid={`slide-indicator-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Floating Shapes - Responsive */}
      <div className={`hidden md:block absolute top-20 right-20 w-24 lg:w-32 h-24 lg:h-32 bg-gradient-to-r ${currentSlideData.gradient} opacity-20 rounded-full blur-xl animate-float transition-all duration-1000`}></div>
      <div className={`hidden lg:block absolute bottom-20 left-20 w-32 xl:w-48 h-32 xl:h-48 bg-gradient-to-r ${currentSlideData.gradient} opacity-15 rounded-full blur-2xl animate-float transition-all duration-1000`} style={{ animationDelay: '3s' }}></div>
      <div className={`hidden sm:block absolute top-1/2 right-4 sm:right-10 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r ${currentSlideData.gradient} opacity-25 rounded-full blur-lg animate-pulse transition-all duration-1000`}></div>
    </section>
  );
}
