import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LegacyBio } from "@/components/LegacyBio";
import { ExhibitModules } from "@/components/ExhibitModules";
import { CuratorialText } from "@/components/CuratorialText";
import { VenueDates } from "@/components/VenueDates";
import { Impact } from "@/components/Impact";
import { Team } from "@/components/Team";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <LegacyBio />
      <ExhibitModules />
      <CuratorialText />
      <VenueDates />
      <Impact />
      <Team />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
