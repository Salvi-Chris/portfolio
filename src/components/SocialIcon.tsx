import React from "react";
import { Mail } from "lucide-react";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";

const SocialIcon = () => {
  return (
    <div className="fixed right-0 top-1/3 transform rotate-90 -translate-x-1/2 z-50">
      <div className="bg-zinc-800 shadow-lg border text-white rounded-2xl flex space-x-4 items-center px-4 py-2 hover:pr-6 transition-all duration-300">
        <a
          href="mailto:your@email.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="transform rotate-270"
        >
          <Mail className="w-6 h-6 hover:text-blue-600" />
        </a>
        <a
          href="https://linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="transform rotate-270"
        >
          <LiaLinkedin className="w-6 h-6 hover:text-blue-600" />
        </a>
        <a
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transform rotate-270"
        >
          <BsTwitter className="w-6 h-6 hover:text-sky-500" />
        </a>
        <a
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transform rotate-270"
        >
          <BsInstagram className="w-6 h-6 hover:text-pink-500" />
        </a>
      </div>
    </div>
  );
};

export default SocialIcon;
