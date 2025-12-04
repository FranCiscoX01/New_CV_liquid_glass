import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Download, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { aboutMe } from '../../data/portfolio';

const ValueCard = ({ value }: { value: any }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className="glass-card rounded-2xl p-8 space-y-4 value-card transition-colors relative overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.6), transparent 40%)`
        }}
      />
      <div className="relative z-10">
        <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-black mb-4">
          <value.icon size={24} />
        </div>
        <div className="space-y-2">
          <h4 className="text-xl font-bold text-black">
            {value.title}
          </h4>
          <p className="text-gray-600 leading-relaxed">
            {value.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Creatividad',
      description: 'Creo en el poder del pensamiento innovador para resolver desafíos complejos. Mi enfoque implica ver los problemas desde múltiples ángulos para idear soluciones únicas y efectivas.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'El trabajo en equipo es la piedra angular de los grandes logros. Prospero en entornos colaborativos donde diversas perspectivas y habilidades convergen para crear algo más grande.'
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento Continuo',
      description: 'El panorama tecnológico está en constante evolución, y estoy comprometido con el aprendizaje de por vida. Busco activamente nuevas tecnologías y oportunidades de desarrollo.'
    }
  ];

  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-header", {
        scrollTrigger: { trigger: ".about-header", start: "top 80%", toggleActions: "play none none none" },
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out"
      });

      const mainContentTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-main-content",
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });
      mainContentTl.from(".about-image", { opacity: 0, scale: 0.9, duration: 0.8, ease: "power3.out" })
        .from(".about-content h3", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.5")
        .from(".about-content p", { opacity: 0, y: 20, stagger: 0.2, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(".about-button", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4");

      // Values Header Animation
      gsap.from(".values-header", {
        scrollTrigger: {
          trigger: ".values-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out"
      });

      // Values Cards Animation
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: ".value-card-container",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
      });

    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="section-padding" ref={component}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 about-header">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Sobre Mí
            </h2>
          </div>

          {/* Main Content */}
          <div className="glass-panel rounded-3xl p-8 md:p-12 about-main-content">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              {/* Profile Image */}
              <div className="lg:col-span-1 about-image">
                <div className="relative max-w-sm mx-auto">
                  <div className="aspect-square rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                    <img
                      src="/New_CV_liquid_glass/img/profile.png"
                      alt="Francisco Javier"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-2 space-y-8 about-content">
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">
                    Ingeniero de Sistemas Computacionales
                  </h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                    <p>
                      {aboutMe}
                    </p>
                  </div>
                </div>

                <a
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition-colors about-button"
                  href="/New_CV_liquid_glass/FranciscoJPerezCruz.pdf" download="Curriculum-Francisco Javier Perez Cruz.pdf"
                >
                  <Download size={20} />
                  Descargar CV
                </a>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <div className="text-center space-y-4 values-header">
              <h3 className="text-2xl md:text-3xl font-bold text-black">
                Mis Valores
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 value-card-container">
              {values.map((value, index) => (
                <ValueCard key={index} value={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;