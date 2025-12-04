import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre mí', href: '#about' },
    { name: 'Experiencia', href: '#experience' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ease-in-out ${scrolled
        ? 'top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-full bg-white/30 backdrop-blur-md border border-white/30 shadow-lg shadow-black/5'
        : 'top-0 left-0 w-full bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-black flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-sm">FJ</span>
            </div>
            <span>Pérez Cruz</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-black font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="./public/FranciscoJPerezCruz.pdf" download="Curriculum-Francisco Javier Perez Cruz.pdf"
              className="flex items-center gap-2 px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-black/20"
            >
              <Download size={18} />
              <span>CV</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-xl animate-fade-in">
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-lg font-medium text-gray-900 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/cv.pdf"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Download size={20} />
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;