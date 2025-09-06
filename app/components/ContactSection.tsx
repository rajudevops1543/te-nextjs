"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { useToast } from "../hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: (response: any) => {
      toast({
        title: "Message Sent!",
        description:
          response.message ||
          "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = contactSchema.parse(formData);
      contactMutation.mutate(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormData> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@techeduvate.com",
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
            Get in <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 px-4">
            Ready to start your learning journey? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-800 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter your full name"
                  data-testid="input-name"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-800 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder="Enter your email address"
                  data-testid="input-email"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-dark-800 border border-white/20 rounded-lg sm:rounded-xl focus:border-blue-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder="Tell us about your learning goals..."
                  data-testid="textarea-message"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full btn-primary py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base"
                disabled={contactMutation.isPending}
                data-testid="button-send-message"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-dark-900 to-dark-800 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center">
                      <div
                        className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center mr-4`}
                      >
                        <IconComponent className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <p className="font-semibold">{info.title}</p>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
              alt="Modern Tech EduVate office workspace"
              className="rounded-2xl w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
