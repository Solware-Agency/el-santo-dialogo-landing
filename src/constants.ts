// Shared constants and configuration
export const Z_INDEX = {
  HEADER: 10,
  DONATION_TAB: 30,
  MODAL: 50,
} as const;

export const ARIA_LABELS = {
  DONATE_WHATSAPP: "Donar por WhatsApp",
  TOGGLE_MENU: "Abrir menú de navegación",
  SCROLL_TO_SECTION: "Ir a la sección",
} as const;

export const ANIMATION_DELAYS = {
  STEP_1: 0.2,
  STEP_2: 0.4,
  STEP_3: 0.6,
  ITEM_STAGGER: 0.1,
} as const;

export const BREAKPOINT_CLASSES = {
  CONTAINER: "container mx-auto px-4 max-w-6xl",
  SECTION_PADDING: "py-20",
  CARD_ROUNDED: "rounded-xl shadow-sm border-border/50 bg-card",
  BUTTON_PRIMARY: "bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-8 py-4 text-lg font-medium transition-smooth shadow-elegant",
  BUTTON_OUTLINE: "border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl px-8 py-4 text-lg font-medium transition-smooth",
  ICON_BADGE: "w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow",
  PROSE_JUSTIFIED: "prose-justify leading-relaxed",
} as const;

export const CONTACT_CONFIG = {
  PHONE: "584141234567",
  DEFAULT_MESSAGE: "Hola, estoy interesado y me gustaría contribuir con el proyecto.",
  FORM_MAX_LENGTHS: {
    NAME: 100,
    EMAIL: 255,
    ORGANIZATION: 100,
    TOPIC: 50,
    MESSAGE: 1000,
  },
} as const;