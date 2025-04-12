
import React from "react";
import { ArrowDownCircle, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-blue-400/10 dark:bg-blue-400/5 blur-3xl"></div>
      </div>

      <div className="section-container flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-secondary to-blue-500 bg-clip-text text-transparent">
              Omkar Vasekar
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
            Computer Engineering Student & ML Enthusiast
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button asChild size="lg" className="rounded-full">
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)"
            }}
            className="inline-block rounded-full"
          ><Button
          variant="outline"
          size="lg"
          className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
          asChild
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          <a href="#"><Download className="w-5 h-5" />Resume</a>
        </Button>
        </motion.div>
            
          </div>
        

          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/omkarvasekar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/omkar-vasekar-1a6130229"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            
          </div>

          <div className="flex justify-center">
            <a
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors animate-bounce"
            >
              <span className="text-sm mb-1">Scroll Down</span>
              <ArrowDownCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      
          
        
    </section>
  );
};

export default Hero;
