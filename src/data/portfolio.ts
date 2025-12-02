import { Project, Experience, Skill, SocialLink } from '../types';

export const name = 'Francisco J. Perez C.';

export const aboutMe = 'Ingeniero de Sistemas Computacionales con más de 4 años de experiencia en desarrollo de software y gestión de datos. Especialista en la integración de sistemas, integración de APIs REST, manipulación avanzada de estructuras de datos y desarrollo de módulos backend (.NET Core, Python, C#, NodeJs) y frontend (ReactJs, VueJs, JavaScript). Foco en la mejora continua, optimización de rendimiento, calidad de código y aplicación de metodologías ágiles. Colaborador proactivo en equipos multidisciplinarios, enfocado en resultados y en proponer soluciones innovadoras.';

export const projects: Project[] = [];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Data Business Analyst & Backend Developer',
    company: 'TELEFÓNICA',
    period: 'Oct 2023 - Actualidad',
    description: [
      'Diseñé e implementé pipelines ETL automatizados con PySpark y Python, conectando múltiples fuentes y motores de datos (MySQL, SQL Server, Oracle, Hive, ElasticSearch).',
      'Colaboré en la migración de datos entre servidores on-premise y cloud, asegurando la continuidad operativa.',
      'Optimicé y digitalicé procesos utilizando Power Automate, logrando reducción de errores y fortalecimiento de controles de seguridad y trazabilidad.',
      'Diseñé flujos de automatización de procesos mediante scripting (Python/Shell), reduciendo errores manuales y asegurando la disponibilidad de los datos para el negocio.'
    ],
    technologies: ['PySpark', 'Python', 'SQL Server', 'MySQL', 'Oracle', 'Hive', 'ElasticSearch', 'Power Automate', 'Shell Scripting'],
    type: 'work'
  },
  {
    id: '2',
    title: 'Web Developer',
    company: 'Recurso Confiable',
    period: 'Ene 2022 - Oct 2023',
    description: [
      'Ejecuté el desarrollo y mantenimiento de APIs y módulos de backend (C#, .Net Core) con frontend (ReactJs), facilitando la interoperabilidad entre sistemas internos y externos.',
      'Implementé orquestación de tareas programadas (Airflow/Python) para la gestión eficiente de flujos de información y validación de reglas de negocio.',
      'Colaboré en equipos ágiles de desarrollo, empleando Git para control de versiones y gestión de ramas de trabajo.',
      'Participé en la gestión de proyectos utilizando herramientas modernas de seguimiento, asegurando el cumplimiento de hitos y entregables.'
    ],
    technologies: ['C#', '.NET Core', 'ReactJs', 'Airflow', 'Python', 'Git'],
    type: 'work'
  },
  {
    id: '3',
    title: 'Web Developer Jr.',
    company: 'JC INNOVATION',
    period: 'Nov 2020 - Dic 2021',
    description: [
      'Realicé el rediseño y actualización de sitios y aplicaciones web, enfocándose en la mejora de la experiencia de usuario (UX) y la estructura del código.',
      'Automaticé módulos funcionales que resultaron en una reducción significativa de los tiempos de entrega de proyectos.',
      'Documenté técnicamente los sistemas desarrollados para facilitar el mantenimiento futuro y la transferencia de conocimiento.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'UX Design'],
    type: 'work'
  },
  {
    id: '6',
    title: 'Web Developer Jr.',
    company: 'MIDM Web Systems and Apps',
    period: 'Oct 2020 - Mar 2021',
    description: [
      'Me integré al equipo de desarrollo colaborando en proyectos de E-commerce de gran escala, participando activamente en la implementación de nuevas características y lógica de negocio.',
      'Realicé mantenimiento correctivo y evolutivo en sistemas productivos críticos, fortaleciendo mis habilidades técnicas en la resolución de problemas y manejo de bases de datos.',
      'Apoyé en la modernización de interfaces web, aplicando estándares modernos de HTML, CSS y JavaScript para mejorar la experiencia del usuario final en plataformas de alto tráfico.'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    type: 'work'
  },
  {
    id: '4',
    title: 'Ingeniería en Sistemas Computacionales',
    company: 'UNIVERSIDAD DE CUAUTITLÁN IZCALLI',
    period: '2016 - 2019',
    description: '',
    technologies: [],
    type: 'education'
  },
  {
    id: '5',
    title: 'Bachillerato General',
    company: 'PREPARATORIA OFICIAL NO. 67',
    period: '2016 - 2019',
    description: '',
    technologies: [],
    type: 'education'
  }
];

export const skills: Skill[] = [
  // Backend
  { name: '.NET Core', level: 80, category: 'backend', description: 'Desarrollo de APIs y servicios robustos' },
  { name: 'C#', level: 85, category: 'backend', description: 'Lenguaje principal para desarrollo en .NET' },
  { name: 'Python', level: 90, category: 'backend', description: 'Para scripting, automatización y desarrollo web (Django, PySpark, FastAPI)' },
  { name: 'Node.js (NestJS)', level: 80, category: 'backend', description: 'Construcción de backends eficientes y escalables con TypeScript' },

  // Frontend
  { name: 'JavaScript', level: 90, category: 'frontend', description: 'Potenciando experiencias web dinámicas' },
  { name: 'ReactJS', level: 75, category: 'frontend', description: 'Creación de interfaces de usuario interactivas' },
  { name: 'VueJS', level: 80, category: 'frontend', description: 'Desarrollo de aplicaciones web progresivas' },
  { name: 'HTML', level: 95, category: 'frontend', description: 'Estructura semántica de contenido web' },
  { name: 'CSS', level: 90, category: 'frontend', description: 'Diseño y estilización de aplicaciones web' },
  { name: 'Tailwind', level: 85, category: 'frontend', description: 'Framework CSS para desarrollo rápido' },

  // Database
  { name: 'SQL Server', level: 85, category: 'database', description: 'Gestión y diseño de bases de datos relacionales' },
  { name: 'MySQL', level: 80, category: 'database', description: 'Administración de bases de datos de código abierto' },
  { name: 'PostgreSQL', level: 85, category: 'database', description: 'Bases de datos relacionales objeto-relacional' },
  { name: 'Oracle', level: 70, category: 'database', description: 'Sistema de gestión de bases de datos de Oracle' },
  { name: 'Hive', level: 70, category: 'database', description: 'Almacén de datos para grandes conjuntos de datos' },

  // DevOps
  { name: 'Git', level: 95, category: 'devops', description: 'Control de versiones para desarrollo de software' },
  { name: 'CI/CD (Jenkins, Airflow)', level: 55, category: 'devops', description: 'Integración y despliegue continuo' },

  // Mobile
  { name: 'iOS', level: 25, category: 'mobile', description: 'Desarrollo de aplicaciones para iOS, contantes de aprendizaje' },
];

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/francispc', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:javier030205bt@gmail.com', icon: 'mail' },
  { name: 'GitHub', url: 'https://github.com/FranCiscoX01', icon: 'github' }
];
