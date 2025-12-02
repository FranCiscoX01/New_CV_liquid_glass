import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Briefcase, GraduationCap, Award, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiences } from '../../data/portfolio';
import { Experience as ExperienceType } from '../../types';

const getIcon = (type: string) => {
  switch (type) {
    case 'work':
      return Briefcase;
    case 'education':
      return GraduationCap;
    case 'certification':
      return Award;
    default:
      return Briefcase;
  }
};

const TimelineItem = ({ experience, isLeft, isExpanded, onToggle }: { experience: ExperienceType; isLeft?: boolean; isExpanded: boolean; onToggle: () => void; }) => {
  const Icon = getIcon(experience.type);
  const isWorkExperience = Array.isArray(experience.description);
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

  const contentVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    collapsed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 0.5
      }
    }
  };

  return (
    <div className={`timeline-item relative flex items-start ${isLeft ? 'lg:flex-row-reverse timeline-item-left' : 'timeline-item-right'} mb-12`}>
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none z-10">
        <div className="w-12 h-12 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
          <Icon size={20} className="text-black" />
        </div>
      </div>

      <div className={`w-full lg:w-1/2 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'} ${isLeft ? 'lg:text-right' : ''}`}>
        <div
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsFocused(true)}
          onMouseLeave={() => setIsFocused(false)}
          className="glass-card rounded-2xl p-8 ml-8 lg:ml-0 transition-colors relative overflow-hidden group"
        >
          <div
            className="pointer-events-none absolute -inset-px transition-opacity duration-300"
            style={{
              opacity: isFocused ? 1 : 0,
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.6), transparent 40%)`
            }}
          />
          <div className="relative z-10 space-y-4">
            <div>
              <h3 className="text-xl font-bold text-black">
                {experience.title}
              </h3>
              <p className="text-gray-600 font-medium mt-1">
                {experience.company} | {experience.period}
              </p>
            </div>

            <div className="overflow-hidden">
              {isWorkExperience ? (
                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.ul
                      key="full-content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={contentVariants}
                      className={`list-disc list-inside space-y-2 text-gray-700 leading-relaxed ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}
                    >
                      {(experience.description as string[]).map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </motion.ul>
                  ) : (
                    <motion.p
                      key="collapsed-content"
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={contentVariants}
                      className="text-gray-700 leading-relaxed"
                    >
                      {experience.description[0]}...
                    </motion.p>
                  )}
                </AnimatePresence>
              ) : (
                <p className="text-gray-700 leading-relaxed">
                  {experience.description}
                </p>
              )}
            </div>

            {isWorkExperience && (
              <button
                onClick={onToggle}
                className={`flex items-center gap-2 text-sm font-semibold text-black hover:text-gray-700 mt-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}
              >
                {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
                <motion.div animate={{ rotate: isExpanded ? 180 : 0 }}>
                  <ChevronDown size={18} />
                </motion.div>
              </button>
            )}

            <div className={`flex flex-wrap gap-2 pt-2 ${isLeft ? 'lg:justify-end' : ''}`}>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium border border-gray-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpanded = (id: string) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return 'Experiencia Laboral';
      case 'education':
        return 'Educación';
      case 'certification':
        return 'Certificaciones';
      default:
        return 'Experiencia';
    }
  };

  const workExperiences = experiences.filter(exp => exp.type === 'work');
  const education = experiences.filter(exp => exp.type === 'education');

  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".experience-header", {
        opacity: 0, y: 30, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ".experience-header", start: "top 80%" }
      });
      gsap.from(".timeline-line", {
        scaleY: 0, transformOrigin: "top", duration: 2, ease: "power2.inOut",
        scrollTrigger: { trigger: ".timeline", start: "top 70%", end: "bottom 80%", scrub: 1 }
      });
      const timelineItems = gsap.utils.toArray(".timeline-item");
      timelineItems.forEach((item: any) => {
        const isLeft = item.classList.contains("timeline-item-left");
        gsap.from(item, {
          opacity: 0, x: isLeft ? -50 : 50, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 85%" }
        });
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="section-padding" ref={component}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="text-center space-y-4 experience-header">
            <h2 className="text-3xl md:text-5xl font-bold text-black">
              Mi Trayectoria
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Una línea de tiempo de mi experiencia profesional y educación.
            </p>
          </div>

          <div className="relative timeline">
            <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 hidden lg:block"></div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-black text-center mb-12">
                {getTypeLabel('work')}
              </h3>
              {workExperiences.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  experience={exp}
                  isLeft={index % 2 === 1}
                  isExpanded={!!expanded[exp.id]}
                  onToggle={() => toggleExpanded(exp.id)}
                />
              ))}
            </div>

            {education.length > 0 && (
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-black text-center mb-12">
                  {getTypeLabel('education')}
                </h3>
                {education.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    experience={exp}
                    isLeft={workExperiences.length % 2 === 0 ? index % 2 === 1 : index % 2 === 0}
                    isExpanded={!!expanded[exp.id]}
                    onToggle={() => toggleExpanded(exp.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;