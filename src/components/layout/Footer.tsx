import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/francispc', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:javier030205bt@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white/40 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center border border-black">
                <span className="text-white font-bold text-lg">FJ</span>
              </div>
              <span className="text-xl font-bold text-black">
                Francisco J. Pérez Cruz
              </span>
            </div>
            <p className="text-gray-600 max-w-md">
              Desarrollador Full-Stack apasionado por crear experiencias digitales
              excepcionales y soluciones innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">
              Enlaces Rápidos
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['Sobre mí', 'Experiencia', 'Habilidades', 'Contacto'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '').replace('í', 'i')}`}
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">
              Sígueme
            </h3>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  className="p-3 rounded-xl bg-white/50 text-gray-600 hover:text-black hover:bg-white/80 transition-all duration-300 border border-gray-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Francisco J. Pérez Cruz. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Hecho con <Heart size={16} className="text-red-500" /> usando React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;