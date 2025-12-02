import { i } from "framer-motion/client";

import { useState } from 'react';
import { Code2, Server, Database, Award, CheckCircle, Globe } from 'lucide-react';
function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    {
      id: 'frontend',
      name: 'Frontend',
      icon: <Code2 className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 95, years: '3 ans' },
        { name: 'JavaScript/ES6+', level: 90, years: '4 ans' },
        { name: 'TypeScript', level: 85, years: '2 ans' },
        { name: 'Tailwind CSS', level: 90, years: '2 ans' }
      ]
    },
    {
      id: 'backend',
      name: 'Backend',
      icon: <Server className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90, years: '3 ans' },
        { name: 'Express', level: 85, years: '3 ans' },
        { name: 'REST APIs', level: 90, years: '3 ans' }
      ]
    },
    {
      id: 'database',
      name: 'Bases de données',
      icon: <Database className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 90, years: '3 ans' },
        { name: 'PostgreSQL', level: 80, years: '2 ans' },
        { name: 'Firebase', level: 85, years: '2 ans' }
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Certified Developer', issuer: 'Amazon', year: '2024', verified: true },
    { name: 'Meta React Professional', issuer: 'Meta', year: '2023', verified: true }
  ];

  const languages = [
    { name: 'Français', level: 'Natif', percentage: 100 },
    { name: 'Anglais', level: 'Professionnel', percentage: 85 }
  ];

  const getFilteredCategories = () => {
    if (selectedCategory === 'all') return skillCategories;
    return skillCategories.filter(cat => cat.id === selectedCategory);
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 75) return 'bg-blue-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  const getLevelLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 75) return 'Avancé';
    if (level >= 60) return 'Intermédiaire';
    return 'Débutant';
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Compétences
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            Toutes
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {getFilteredCategories().map((category) => (
            <div
              key={category.id}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-br ${category.color} text-white rounded-xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          ({skill.years})
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-bold px-2 py-1 rounded ${
                          skill.level >= 90 ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                          skill.level >= 75 ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                          'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {getLevelLabel(skill.level)}
                        </span>
                        <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-blue-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex-shrink-0">
                    {cert.verified && (
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-purple-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Langues
              </h3>
            </div>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {lang.name}
                    </span>
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;