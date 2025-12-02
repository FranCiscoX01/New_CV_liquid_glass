import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import { name } from '../../data/portfolio';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const titles = [
    'Desarrollador Backend',
    'Analista de Datos',
    'Desarrollador Frontend',
    'Ingeniero de Datos'
  ];

  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".hero-greeting", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
      })
        .from(".hero-name", {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: "power3.out",
        }, "-=0.8")
        .from(".hero-title", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        }, "-=0.8")
        .from(".hero-description", {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: "power3.out",
        }, "-=0.8")
        .from(".hero-scroll", {
          opacity: 0,
          y: -20,
          duration: 1,
          ease: "power2.out",
        }, "-=0.5");
    }, component);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  return (
    <section id="hero" ref={component} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-block glass-panel px-6 py-2 rounded-full hero-greeting">
              <p className="text-gray-600 text-lg font-medium tracking-wide">
                Hola, mi nombre es
              </p>
            </div>

            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-bold text-black tracking-tight hero-name">
              {name}
            </h1>

            <div className="h-20 flex items-center justify-center hero-title">
              <h2 className="text-3xl sm:text-5xl font-light text-gray-800">
                <span className="typewriter">{displayText}</span>
              </h2>
            </div>
          </div>

          <div className="flex justify-center hero-description">
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Soy un ingeniero de software y analista de datos especializado en construir
              experiencias digitales excepcionales. Actualmente, me enfoco en crear productos
              accesibles, robustos y centrados en el usuario.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 hero-scroll animate-bounce">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm uppercase tracking-widest">Scroll</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;