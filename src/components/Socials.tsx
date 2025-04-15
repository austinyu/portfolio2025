import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import React from "react";

import FloatingCard from "@/components/FloatingCards";


export default function SocialsCard({ className }: { className?: string }) {
  return (
    <FloatingCard className={className}>
      {/* GitHub */}
      <a
        href="https://github.com/austinyu"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FaGithub size={24} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FaLinkedin size={24} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform transform hover:scale-110"
      >
        <FaTwitter size={24} />
      </a>

      {/* Email */}
      <a
        href="mailto:yourname@example.com"
        className="transition-transform transform hover:scale-110"
      >
        <FaEnvelope size={24} />
      </a>
    </FloatingCard>
  );
}
