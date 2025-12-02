import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const ContactInfoItem = ({ info, className = "" }: { info: any, className?: string }) => {
  const divRef = useRef<HTMLAnchorElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <a
      ref={divRef}
      href={info.href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      className={`contact-info-item flex items-center gap-4 p-4 glass-card rounded-2xl transition-colors group relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.6), transparent 40%)`
        }}
      />
      <div className="relative z-10 flex items-center justify-center gap-4 w-full">
        <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
          <info.icon size={24} />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-gray-500">
            {info.label}
          </p>
          <p className="text-black font-medium break-all">
            {info.value}
          </p>
        </div>
      </div>
    </a>
  );
};

const Contact = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".contact-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-header",
          start: "top 80%",
        }
      });

      // Contact Info Animation
      gsap.from(".contact-info-item", {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-info-container",
          start: "top 75%",
        }
      });

      // Social links and availability animation
      gsap.from([".social-links-container", ".availability-box"], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".social-links-container",
          start: "top 85%",
        }
      });

    }, component);
    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'javier030205bt@gmail.com',
      href: 'mailto:javier030205bt@gmail.com'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+52 (55) 7231-4594',
      href: 'tel:+525572314594'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Ciudad de México, México',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/FranCiscoX01', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/francispc', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:javier030205bt@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="section-padding" ref={component}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {/* Header */}
          <div className="text-center space-y-4 contact-header">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Ponte en Contacto
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              ¿Tienes una pregunta o quieres trabajar juntos? Me encantaría saber de ti.
            </p>
          </div>

          <div className="space-y-12">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 contact-info-container">
              {contactInfo.map((info, index) => (
                <ContactInfoItem
                  key={index}
                  info={info}
                  className={index === 0 ? "md:col-span-2" : ""}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Social Links */}
              <div className="space-y-6 text-center md:text-left social-links-container">
                <h4 className="text-2xl font-bold text-black">
                  Sígueme en redes
                </h4>
                <p className="text-gray-600">
                  Conecta conmigo en mis redes sociales profesionales.
                </p>
                <div className="flex justify-center md:justify-start gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="social-link w-14 h-14 glass-card rounded-2xl flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="p-8 glass-panel rounded-3xl availability-box text-center md:text-left">
                <h4 className="text-xl font-bold text-black mb-3">
                  Disponibilidad Actual
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Actualmente estoy disponible para nuevos proyectos y oportunidades de colaboración.
                  ¡No dudes en contactarme para discutir cómo puedo aportar valor a tu equipo!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;