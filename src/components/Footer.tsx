import { FadeIn } from "./FadeIn";
import { content } from "@/content";
import { colorizeJoseGregorio } from "@/lib/text-utils";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 [&_a]:text-accent-gold [&_a:hover]:text-accent-gold-hover [&_a:focus]:text-accent-gold [&_a:focus]:underline [&_a:visited]:text-accent-gold">
      <div className="container mx-auto px-4 max-w-6xl">
        <FadeIn>
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl text-accent-gold mb-2 font-display">
                José Gregorio Hernández: <span className="font-santo">El Santo del Diálogo</span>
              </h3>
              <p className="text-primary-foreground/80">
                Un legado de ciencia, fe y servicio
              </p>
            </div>

            <div className="border-t border-primary-foreground/20 pt-8">
              <p 
                className="text-sm text-primary-foreground/80"
                dangerouslySetInnerHTML={{ __html: content.footer.attributionHtml }}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};