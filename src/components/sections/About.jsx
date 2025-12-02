import React, { useState } from 'react';
import { Briefcase, GraduationCap, Heart, Award, Calendar, MapPin, Code, Coffee } from 'lucide-react';
import profilephoto from '../../assets/ibaexpert.jpeg';
export default function About() {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: 'Développeur Full Stack',
      company: 'Entreprise Tech',
      period: '2023 - Présent',
      location: 'Paris, France',
      description: 'Développement d\'applications web avec React, Node.js et MongoDB. Collaboration avec une équipe agile pour livrer des projets innovants.',
      achievements: [
        'Amélioration des performances de 40%',
        'Migration vers architecture microservices',
        'Mentorat de 2 développeurs juniors'
      ]
    },
    {
      title: 'Développeur Frontend',
      company: 'Startup Innovante',
      period: '2021 - 2023',
      location: 'Lyon, France',
      description: 'Création d\'interfaces utilisateur modernes et responsives. Optimisation de l\'expérience utilisateur.',
      achievements: [
        'Refonte complète de l\'interface',
        'Réduction du temps de chargement de 60%',
        'Mise en place de tests automatisés'
      ]
    }
  ];

  const education = [
    {
      degree: 'Master Informatique',
      school: 'Université de Technologie',
      period: '2019 - 2021',
      location: 'Paris, France',
      description: 'Spécialisation en développement web et intelligence artificielle.',
      highlights: [
        'Mention Très Bien',
        'Projet de fin d\'études primé',
        'Stage de recherche'
      ]
    },
    {
      degree: 'Licence Informatique',
      school: 'Université des Sciences',
      period: '2016 - 2019',
      location: 'Nantes, France',
      description: 'Formation générale en informatique et programmation.',
      highlights: [
        'Major de promotion',
        'Participation à des hackathons',
        'Projet collaboratif récompensé'
      ]
    }
  ];

  const interests = [
    { icon: <Code className="w-6 h-6" />, name: 'Open Source', description: 'Contribution à des projets open source' },
    { icon: <Coffee className="w-6 h-6" />, name: 'Veille Tech', description: 'Apprentissage continu des nouvelles technologies' },
    { icon: <Award className="w-6 h-6" />, name: 'Hackathons', description: 'Participation à des compétitions de code' },
    { icon: <Heart className="w-6 h-6" />, name: 'Mentorat', description: 'Accompagnement de développeurs débutants' }
  ];

  const stats = [
    { value: '3+', label: 'Années d\'expérience' },
    { value: '25+', label: 'Projets complétés' },
    { value: '10+', label: 'Technologies maîtrisées' },
    { value: '100%', label: 'Satisfaction clients' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            À propos de moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mon parcours, mes compétences et ce qui me passionne
          </p>
        </div>

        {/* Profil et présentation */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Photo de profil */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={profilephoto}
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Stats rapides */}
            <div className="mt-8 w-full">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-gray-600 dark:text-gray-400">{stat.label}</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Présentation textuelle */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Bonjour ! Je suis un développeur passionné avec plus de 3 ans d'expérience dans la création 
                d'applications web modernes et performantes. Mon parcours m'a permis de maîtriser un large 
                éventail de technologies et de méthodologies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Je suis constamment à la recherche de nouveaux défis et j'aime transformer des idées complexes 
                en solutions élégantes et intuitives. Mon approche combine créativité technique et attention 
                aux détails pour offrir des expériences utilisateur exceptionnelles.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                En dehors du code, je contribue à la communauté open source, participe à des hackathons et 
                partage mes connaissances à travers le mentorat de développeurs juniors.
              </p>
            </div>

            {/* Centres d'intérêt */}
            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-lg">
                    {interest.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{interest.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{interest.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Onglets Expérience / Formation */}
        <div className="mt-16">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Expérience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Formation
            </button>
          </div>

          {/* Contenu des onglets */}
          <div className="space-y-6">
            {activeTab === 'experience' && (
              <div className="grid md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                        <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="grid md:grid-cols-2 gap-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold">{edu.school}</p>
                      </div>
                      <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{edu.description}</p>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}