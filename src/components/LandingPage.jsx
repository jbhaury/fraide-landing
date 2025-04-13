import React, { useState } from 'react';
import { Phone } from 'lucide-react';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">FrAIde</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-blue-600">Fonctionnalités</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600">Comment ça marche</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="relative z-10 pt-16 pb-20 lg:pt-24 lg:pb-28">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Votre répétiteur personnel</span>
                <span className="block text-blue-600">disponible 24/7</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                FrAIde est un assistant virtuel qui vous aide à résoudre vos exercices de mathématiques étape par étape, 
                comme le ferait un véritable professeur.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Commencer maintenant
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Une aide personnalisée pour progresser
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-xl font-semibold mb-4">Pédagogie guidée</div>
                <p className="text-gray-600">
                  FrAIde vous guide pas à pas dans la résolution de vos exercices, 
                  en vous posant les bonnes questions et en vous donnant des indices adaptés.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-xl font-semibold mb-4">Disponible à tout moment</div>
                <p className="text-gray-600">
                  Plus besoin d'attendre ! FrAIde est là pour vous aider 24h/24 et 7j/7, 
                  directement sur WhatsApp.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-xl font-semibold mb-4">Progression assurée</div>
                <p className="text-gray-600">
                  En vous laissant trouver la solution par vous-même avec une aide adaptée, 
                  FrAIde vous permet de vraiment progresser.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div id="how-it-works" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
            Comment ça marche ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    1
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Prenez en photo votre exercice</h3>
                  <p className="mt-2 text-gray-600">
                    Utilisez WhatsApp pour envoyer une photo claire de votre exercice à FrAIde.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    2
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Laissez-vous guider</h3>
                  <p className="mt-2 text-gray-600">
                    FrAIde analyse votre exercice et commence à vous guider avec des questions ciblées.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    3
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Progressez à votre rythme</h3>
                  <p className="mt-2 text-gray-600">
                    Répondez aux questions et recevez des indices adaptés jusqu'à la résolution complète.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Phone size={20} />
                  <span>Exemple de conversation</span>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Bonjour ! Je vois que tu as un exercice sur les équations du second degré. Peux-tu me dire quels sont les termes de l'équation ?</p>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[80%]">
                      <p>Il y a x² + 5x + 6</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    <p className="text-gray-800">Très bien ! Pour résoudre cette équation, quelle méthode penses-tu qu'on pourrait utiliser ?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Prêt à améliorer vos résultats en mathématiques ?
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Commencez dès maintenant avec FrAIde, votre répétiteur personnel disponible 24/7.
          </p>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10">
              Commencer gratuitement
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center text-gray-500 text-sm">
            <div>© 2024 FrAIde. Tous droits réservés.</div>
            <div className="mt-2">
              <a href="/privacy" className="text-blue-600 hover:text-blue-800">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;