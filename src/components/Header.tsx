"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getIcon } from "@/lib/icons";
import { ARIA_LABELS, Z_INDEX } from "@/constants";
import { colorizeJoseGregorio } from "@/lib/text-utils";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navigationItems = [
    { label: "Legado", id: "legado" },
    { label: "Exposición", id: "exposicion" },
    { label: "Contacto", id: "contacto" },
  ];

  const MenuIcon = getIcon("Menu");
  const XIcon = getIcon("X");
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50" style={{ zIndex: Z_INDEX.HEADER }}>
      <div className="container mx-auto px-4 max-w-6xl">
        <nav className="flex items-center justify-between py-4">
          {/* Logo/Title */}
          <div className="flex items-center">
            <h2 className="text-xl font-display text-santo cursor-pointer" onClick={() => scrollToSection("hero")}>
              {colorizeJoseGregorio("José Gregorio Hernández: El Santo del Diálogo")}
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted-foreground hover:text-primary transition-smooth font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            aria-label={ARIA_LABELS.TOGGLE_MENU}
          >
            {isMenuOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-muted-foreground hover:text-primary transition-smooth font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};