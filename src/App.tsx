import BackgroundFX from "./components/BackgroundFX";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Services from "./components/Services";
import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-body text-slate-200 antialiased">
      <BackgroundFX />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Certificates />
        <Services />
        <ContactCard />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
