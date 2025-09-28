"use client";

import { MessageCircle } from "lucide-react";

interface DonateTabProps {
  phone?: string;
  text?: string;
  side?: "right" | "left";
  labelDesktop?: string;
  labelMobile?: string;
  useIconMobile?: boolean;
}

export const DonateTab = ({
  phone = "584141234567",
  text = "Hola, estoy interesado y me gustaría contribuir con el proyecto.",
  side = "right",
  labelDesktop = "HACER UNA DONACIÓN",
}: DonateTabProps) => {
  // Don't render if no phone number
  if (!phone) return null;

  const encodedMessage = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  const sideClasses = side === "right" 
    ? "right-3 sm:right-2" 
    : "left-3 sm:left-2";

  return (
    <div className={`fixed top-1/2 -translate-y-1/2 ${sideClasses} z-30`}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Hacer una donación por WhatsApp"
        className="flex items-center justify-center bg-accent hover:brightness-110 text-primary rounded-2xl shadow-lg min-h-72 sm:min-h-80 w-12 sm:w-14 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background py-4 sm:py-6 overflow-visible"
        style={{ minTouchTarget: '44px' }}
      >
        {/* Screen reader only horizontal text */}
        <span className="sr-only">{labelDesktop}</span>
        
        {/* Visual vertical text - rotated 180 degrees for right side top-to-bottom reading */}
        <span 
          className="font-display font-semibold text-xs sm:text-sm tracking-wide text-center whitespace-nowrap overflow-visible"
          style={{ 
            writingMode: 'vertical-rl', 
            textOrientation: 'mixed',
            transform: side === 'right' ? 'rotate(180deg)' : 'none'
          }}
          aria-hidden="true"
        >
          {labelDesktop}
        </span>
      </a>
    </div>
  );
};