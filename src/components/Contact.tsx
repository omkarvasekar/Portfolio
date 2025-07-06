
import React from "react";
import { Send, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await emailjs.send(
        'service_n10sa7k',
        'template_na9f7uj',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'a3t5LSTo1wJwlaQWt'
      );
  
      console.log('Email successfully sent!', result.text);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }// Simulate form submission
    
  };

  return (
    <section id="contact" className="bg-muted/30 dark:bg-muted/10 py-20">
      <div className="section-container">
        <h2 className="section-heading">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a 
                    href="mailto:vasekaromkar@gmail.com" 
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    vasekaromkar@gmail.com
                  </a>
                </div>
              </div>


              <div className="flex items-start space-x-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
              
              <div className="pt-6 flex space-x-4">
                <a
                  href="https://github.com/omkarvasekar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/20 p-3 rounded-full hover:bg-secondary/30 transition-colors"
                >
                  <Github className="h-5 w-5 text-secondary" />
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary/20 p-3 rounded-full hover:bg-secondary/30 transition-colors"
                >
                  <Linkedin className="h-5 w-5 text-secondary" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass rounded-xl p-6 neu-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    Sending...
                    <span className="ml-2 animate-spin">⏳</span>
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
