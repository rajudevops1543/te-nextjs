'use client';
import { Button } from "./ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const pricingPlans = [
    {
      id: "individual",
      title: "Individual Plans",
      price: "$299",
      period: "/course",
      features: [
        "Lifetime course access",
        "Hands-on labs & projects",
        "Certificate of completion",
        "Community access"
      ],
      buttonText: "Get Started",
      featured: false
    },
    {
      id: "corporate",
      title: "Corporate Training",
      price: "$2,499",
      period: "/team",
      features: [
        "Up to 20 team members",
        "Custom learning paths",
        "Dedicated support manager",
        "Progress analytics dashboard"
      ],
      buttonText: "Contact Sales",
      featured: true
    },
    {
      id: "custom",
      title: "Custom Learning Paths",
      price: "Custom",
      period: "Contact us",
      features: [
        "Tailored curriculum",
        "1-on-1 mentoring",
        "Flexible scheduling",
        "Enterprise integrations"
      ],
      buttonText: "Contact Us",
      featured: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Choose Your <span className="text-blue-400">Learning Path</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">Flexible pricing options to suit your needs</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border relative transition-all duration-500 hover:scale-105 hover:shadow-2xl card-hover ${
                plan.featured
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/50 transform sm:scale-105 animate-glow sm:col-span-2 lg:col-span-1'
                  : 'bg-gradient-to-br from-dark-800 to-dark-900 border-white/10 hover:border-blue-500/30 hover:shadow-blue-500/20'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.featured && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">{plan.title}</h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 group-hover:scale-110 transition-transform duration-300 inline-block">{plan.price}</span>
                <span className="text-gray-300 block text-xs sm:text-sm group-hover:text-gray-200 transition-colors duration-300">{plan.period}</span>
              </div>
              
              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm sm:text-base">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base ${
                  plan.featured
                    ? 'btn-primary'
                    : plan.id === 'custom'
                    ? 'border-2 border-blue-400 hover:bg-blue-400 hover:text-dark-900 bg-transparent'
                    : 'btn-primary'
                }`}
                variant={plan.id === 'custom' ? 'outline' : 'default'}
                onClick={scrollToContact}
                data-testid={`button-pricing-${plan.id}`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
