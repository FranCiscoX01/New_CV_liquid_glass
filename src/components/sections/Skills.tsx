import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Server, Smartphone, Database, Settings } from 'lucide-react';
import { skills } from '../../data/portfolio';

const SkillCard = ({ skill }: { skill: any }) => {
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
      className="glass-card rounded-2xl p-6 transition-colors relative overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.6), transparent 40%)`
        }}
      />
      <div className="relative z-10 space-y-3 skill-bar-item">
        <div className="flex justify-between items-center">
          <h4 className="text-base font-semibold text-black">
            {skill.name}
          </h4>
          <span className="text-sm font-medium text-gray-600">
            {skill.level}%
          </span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <div
            className="skill-bar-fill h-full bg-black rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]"
            style={{ width: `${skill.level}%` }}
          />
        </div>

        <p className="text-sm text-gray-500">
          {skill.description}
        </p>
      </div>
    </div>
  );
};

const StatCard = ({ stat }: { stat: { label: string; value: string } }) => {
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
      className="text-center p-8 glass-card rounded-2xl stat-item transition-colors relative overflow-hidden group"
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isFocused ? 1 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.6), transparent 40%)`
        }}
      />
      <div className="relative z-10">
        <div className="text-4xl font-bold text-black mb-2 stat-value" data-value={stat.value}>
          {stat.value}+
        </div>
        <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">
          {stat.label}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const component = useRef(null);

  const categories = [
    { id: 'all', label: 'Todas', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Code },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'database', label: 'Database', icon: Database },
    { id: 'devops', label: 'DevOps', icon: Settings },
  ];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);

  const groupedSkills = filteredSkills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const getCategoryLabel = (category: string) => {
    const categoryMap: Record<string, string> = {
      frontend: 'Frontend',
      backend: 'Backend',
      mobile: 'Mobile',
      database: 'Base de Datos',
      devops: 'DevOps'
    };
    return categoryMap[category] || category;
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".skills-header", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 80%",
        }
      });

      // Filter Buttons Animation
      gsap.from(".filter-btn", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".filter-buttons",
          start: "top 80%",
        }
      });

      // Skill Bars Animation
      gsap.utils.toArray<HTMLElement>(".skill-bar-item").forEach(item => {
        gsap.from(item.querySelector(".skill-bar-fill"), {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        });
      });

      // Stats Container Animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      // Stats Counter Animation
      gsap.utils.toArray<HTMLElement>('.stat-value').forEach(target => {
        const endValue = parseInt(target.getAttribute('data-value')!, 10);
        let counter = { value: 0 };
        gsap.to(counter, {
          value: endValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: target,
            start: "top 90%",
          },
          onUpdate: () => {
            target.innerHTML = `${Math.ceil(counter.value)}+`;
          }
        });
      });

    }, component);

    // Recalculate all ScrollTriggers after layout changes
    ScrollTrigger.refresh();

    return () => ctx.revert();
  }, [activeCategory]); // Re-run animations when category changes

  return (
    <section id="skills" className="section-padding" ref={component}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4 skills-header">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Habilidades & Tecnologías
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Una muestra de mi pasión por aprender y aplicar tecnologías modernas
              para construir soluciones eficientes y escalables.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 filter-buttons">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`filter-btn flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border ${activeCategory === category.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white/40 text-gray-600 border-white/40 hover:bg-white/60 hover:text-black'
                    }`}
                >
                  <Icon size={16} />
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* Skills Display */}
          {activeCategory === 'all' ? (
            <div className="space-y-12">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-6">
                  <h3 className="text-2xl font-bold text-black text-center">
                    {getCategoryLabel(category)}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categorySkills.map((skill, index) => (
                      <SkillCard key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-black text-center">
                {getCategoryLabel(activeCategory)}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, index) => (
                  <SkillCard key={index} skill={skill} />
                ))}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mt-16 stats-container">
            {[
              { label: 'Años de Experiencia', value: '5' },
              // { label: 'Proyectos Completados', value: '50' },
              { label: 'Tecnologías Dominadas', value: '15' },
              // { label: 'Clientes Satisfechos', value: '30' },
            ].map((stat, index) => (
              <StatCard key={index} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;