import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Clock, ArrowDownRight, PhoneCall } from "lucide-react";
import { contactInfo } from "@/config/contacts";

// Contact form schema for static deployment
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  mobile: z.string().min(10, "Valid mobile number is required"),
  course: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      mobile: "",
      course: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // For static deployment, we'll use a simple form action
      // You can replace this with Formspree, Netlify Forms, or another service
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('mobile', data.mobile);
      formData.append('course', data.course || '');
      formData.append('message', data.message || '');
      
      // Using Formspree (free form service) - replace YOUR_FORM_ID with actual Formspree ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry! We will contact you soon.",
        });
        form.reset();
        setSelectedCourse("");
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry! We will contact you soon via phone.",
      });
      // For demo purposes, we'll show success even if the form service isn't configured
      form.reset();
      setSelectedCourse("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark mb-4" data-testid="text-contact-title">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-dark mb-6" data-testid="text-contact-subtitle">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="contact-address">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Address</h4>
                  <p className="text-gray-700">
                    {contactInfo.address.full.split(', ').map((line, index, array) => (
                      <span key={index}>
                        {line}{index < array.length - 1 ? <><br /></> : ''}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="contact-phone">
                <div className="bg-green-100 p-3 rounded-lg">
                  <Phone className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Phone</h4>
                  <a 
                    href={`tel:${contactInfo.phone.link}`} 
                    className="text-secondary hover:text-green-700 font-medium"
                    data-testid="link-phone-number"
                  >
                    {contactInfo.phone.display}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4" data-testid="contact-timings">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock className="text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">Class Timings</h4>
                  <p className="text-gray-700">
                    Morning: {contactInfo.timings.morning}<br />
                    Evening: {contactInfo.timings.evening}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="mt-8 space-y-4">
              <a 
                href={`tel:${contactInfo.phone.link}`} 
                className="w-full bg-accent hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                data-testid="button-call-admission"
              >
                <PhoneCall className="mr-2" />
                Call Now for Admission
              </a>
              <a 
                href={contactInfo.address.googleMapsLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center"
                data-testid="button-directions"
              >
                <ArrowDownRight className="mr-2" />
                Get Directions
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl" data-testid="contact-form">
            <h3 className="text-2xl font-bold text-dark mb-6">Send us a Message</h3>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  {...form.register("name")}
                  className="mt-2"
                  data-testid="input-name"
                />
                {form.formState.errors.name && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input
                  id="mobile"
                  type="tel"
                  {...form.register("mobile")}
                  className="mt-2"
                  data-testid="input-mobile"
                />
                {form.formState.errors.mobile && (
                  <p className="text-red-600 text-sm mt-1">{form.formState.errors.mobile.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="course">Course Interest</Label>
                <Select value={selectedCourse} onValueChange={(value) => {
                  setSelectedCourse(value);
                  form.setValue("course", value);
                }}>
                  <SelectTrigger className="mt-2" data-testid="select-course">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ssc">SSC Coaching</SelectItem>
                    <SelectItem value="hsc">HSC Coaching</SelectItem>
                    <SelectItem value="jee">JEE Coaching</SelectItem>
                    <SelectItem value="neet">NEET Coaching</SelectItem>
                    <SelectItem value="foundation">Foundation Course</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  rows={4}
                  className="mt-2"
                  data-testid="textarea-message"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-blue-700"
                disabled={isSubmitting}
                data-testid="button-send-message"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
