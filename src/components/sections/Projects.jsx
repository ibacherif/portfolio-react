import React, { useState } from 'react';
import { Github, ExternalLink, X, Code2, Layers, Sparkles } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'Tous les projets' },
    { id: 'web', name: 'Web App' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' }
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Plateforme de commerce en ligne complète avec panier, paiement et gestion des stocks',
      longDescription: 'Application e-commerce full-stack avec authentification utilisateur, système de panier, intégration de paiement Stripe, tableau de bord admin, gestion des produits et des commandes. Interface moderne et responsive avec animations fluides.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/username/ecommerce',
      demo: 'https://demo-ecommerce.com',
      featured: true,
      stats: {
        duration: '3 mois',
        team: '4 personnes',
        status: 'En production'
      }
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'web',
      description: 'Application de gestion de tâches avec drag & drop et collaboration en temps réel',
      longDescription: 'Outil de gestion de projets avec tableaux Kanban, drag & drop, notifications en temps réel via WebSocket, système de collaboration, attribution de tâches, deadlines et filtres avancés.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
      github: 'https://github.com/username/task-manager',
      demo: 'https://demo-tasks.com',
      featured: true,
      stats: {
        duration: '2 mois',
        team: 'Solo',
        status: 'Terminé'
      }
    },
    {
      id: 3,
      title: 'Portfolio Designer',
      category: 'frontend',
      description: 'Créateur de portfolio avec templates personnalisables et export en code',
      longDescription: 'Application permettant de créer des portfolios professionnels sans coder. Éditeur drag & drop, bibliothèque de composants, personnalisation des couleurs et polices, preview en temps réel et export du code HTML/CSS.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      technologies: ['React', 'Redux', 'Framer Motion', 'TailwindCSS'],
      github: 'https://github.com/username/portfolio-builder',
      demo: 'https://demo-portfolio.com',
      featured: false,
      stats: {
        duration: '1.5 mois',
        team: 'Solo',
        status: 'En développement'
      }
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      category: 'fullstack',
      description: 'Tableau de bord analytics pour réseaux sociaux avec graphiques interactifs',
      longDescription: 'Dashboard complet pour analyser les performances sur les réseaux sociaux. Intégration des APIs (Twitter, Instagram, Facebook), graphiques interactifs avec Recharts, rapports PDF, alertes personnalisées et planification de posts.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'MongoDB', 'Recharts', 'OAuth', 'Redis'],
      github: 'https://github.com/username/social-dashboard',
      demo: 'https://demo-social.com',
      featured: true,
      stats: {
        duration: '4 mois',
        team: '3 personnes',
        status: 'En production'
      }
    },
    {
      id: 5,
      title: 'Weather App',
      category: 'frontend',
      description: 'Application météo moderne avec prévisions et géolocalisation',
      longDescription: 'Application météo élégante avec prévisions sur 7 jours, données en temps réel, géolocalisation automatique, recherche de villes, cartes météo interactives et thèmes personnalisables.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      technologies: ['React', 'OpenWeather API', 'Leaflet', 'CSS Modules'],
      github: 'https://github.com/username/weather-app',
      demo: 'https://demo-weather.com',
      featured: false,
      stats: {
        duration: '3 semaines',
        team: 'Solo',
        status: 'Terminé'
      }
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      category: 'mobile',
      description: 'Application mobile de suivi fitness avec plans d\'entraînement',
      longDescription: 'App mobile pour suivre ses entraînements, créer des plans personnalisés, suivre ses progrès avec graphiques, calculateur de calories, bibliothèque d\'exercices avec vidéos et système de rappels.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      github: 'https://github.com/username/fitness-tracker',
      demo: 'https://demo-fitness.com',
      featured: false,
      stats: {
        duration: '2.5 mois',
        team: '2 personnes',
        status: 'En développement'
      }
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes
          </p>
        </div>

        {/* Projets Featured */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Projets Phares</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Badge Featured */}
                <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </div>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Contenu */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 shadow'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Tous les projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal détails projet */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header modal */}
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-6 h-6 text-gray-900 dark:text-white" />
                </button>
                {selectedProject.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Featured Project
                  </div>
                )}
              </div>

              {/* Contenu modal */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {selectedProject.title}
                </h2>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Durée</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedProject.stats.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Équipe</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedProject.stats.team}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{selectedProject.stats.status}</p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                  {selectedProject.longDescription}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <Code2 className="w-5 h-5" />
                    Technologies utilisées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    Voir le code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Voir la démo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}