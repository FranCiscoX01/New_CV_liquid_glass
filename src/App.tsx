import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import LiquidBackground from './components/canvas/LiquidBackground';

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <LiquidBackground />
      <Header />

      <main className="relative z-10">
        <Hero />
        <div className="space-y-24 pb-24">
          <About />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;