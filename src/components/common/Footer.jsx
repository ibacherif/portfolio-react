import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import React from 'react';  

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1 */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </h3>
            <p className="text-gray-400 mb-4">
              Développeur Full Stack passionné par la création d'expériences web modernes et innovantes.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/votre-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/votre-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:votre@email.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Colonne 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projets</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Compétences</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:votre@email.com" className="hover:text-white transition-colors">
                  votre@email.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Paris, France
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Portfolio. Tous droits réservés. Développé avec ❤️ par Votre Nom</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;