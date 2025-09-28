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
  labelMobile = "Hacer una donación", 
  useIconMobile = true,
}: DonateTabProps) => {
  // Don't render if no phone number
  if (!phone) return null;

  const encodedMessage = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
  
  const sideClasses = side === "right" 
    ? "right-0 translate-x-1/2" 
    : "left-0 -translate-x-1/2";

  return (
    <>
      {/* Desktop/Tablet Vertical Tab (≥ sm) */}
      <div className={`fixed top-1/2 -translate-y-1/2 ${sideClasses} z-30 hidden sm:block`}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hacer una donación por WhatsApp"
          className="block bg-accent hover:brightness-110 text-primary rounded-2xl shadow-lg py-8 px-4 transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <span 
            className="block font-display font-medium text-sm tracking-widest transform -rotate-90 whitespace-nowrap"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {labelDesktop}
          </span>
        </a>
      </div>

      {/* Mobile FAB (< sm) */}
      <div className="fixed bottom-6 right-4 z-30 sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hacer una donación por WhatsApp"
          className="flex items-center justify-center bg-accent hover:brightness-110 text-primary rounded-full shadow-lg transition-smooth focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background min-w-14 min-h-14 p-4"
        >
          {useIconMobile ? (
            <>
              <MessageCircle className="w-6 h-6" />
              <span className="sr-only">{labelMobile}</span>
            </>
          ) : (
            <span className="font-display font-medium text-sm">
              {labelMobile}
            </span>
          )}
        </a>
      </div>
    </>
  );
};