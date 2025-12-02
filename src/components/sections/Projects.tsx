import { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { projects } from '../../data/portfolio';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'ui-ux', label: 'UI/UX' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }: { project: any }) => (
    <div className="group card-hover bg-background-light dark:bg-surface-dark border border-border-light dark:border-border-dark rounded-xl overflow-hidden shadow-lg">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex gap-2">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                className="flex items-center gap-2 px-3 py-2 bg-primary text-background-dark rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-3 py-2 bg-white/20 text-white rounded-lg text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Código
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-2">
            {project.title}
          </h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="section-padding bg-surface-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
              Proyectos Destacados
            </h2>
            <p className="text-text-secondary-light dark:text-text-secondary-dark max-w-2xl mx-auto">
              Una muestra de mi trabajo en front-end, back-end y diseño UI/UX. 
              Haz clic en una tarjeta para saber más.
            </p>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-surface-light dark:bg-surface-dark text-text-secondary-light dark:text-text-secondary-dark hover:bg-primary/20 dark:hover:bg-primary/20 hover:text-primary border border-border-light dark:border-border-dark'
                }`}
              >
                {filter.id === 'all' && <Filter size={16} />}
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No hay proyectos en esta categoría.
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
              ¿Interesado en ver más de mi trabajo?
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              Trabajemos Juntos
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;