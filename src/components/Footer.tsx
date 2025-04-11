
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 dark:bg-muted/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              &copy; {currentYear} Omkar Bandopant Vasekar. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <p className="text-muted-foreground">
              Built with ❤️ using React + TailwindCSS
            </p>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
