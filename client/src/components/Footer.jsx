import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => (
  <footer className="mt-16 border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
    <div className="container py-8 text-sm text-gray-600 dark:text-muted flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-gray-700 dark:text-muted">
        © <span>{new Date().getFullYear()}</span> Jeevanandham Rajasekar
      </p>

      <div className="flex gap-4 items-center">
        <a href="mailto:yourmail@example.com" className="hover:text-accent transition" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>

        <a href="tel:+919876543210" className="hover:text-accent transition" aria-label="Phone">
          <Phone className="w-5 h-5" />
        </a>

        <a href="https://www.linkedin.com/in/jeevaj35" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>

        <a href="https://github.com/jeevaj35.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
