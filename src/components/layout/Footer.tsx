import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-white border-t border-neutral-gray/15 py-10 md:py-12">
      <div className="max-w-gallery mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <p className="font-mono text-xs text-medium-gray tracking-wide">
            {currentYear} Archive
          </p>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a
              href="mailto:luca47hall@gmail.com"
              className="font-mono text-xs text-medium-gray hover:text-charcoal transition-colors duration-300 tracking-wide focus-ring rounded"
            >
              Contact
            </a>
            <a
              href="https://www.instagram.com/arkturus.exe/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-medium-gray hover:text-charcoal transition-colors duration-300 tracking-wide focus-ring rounded"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
