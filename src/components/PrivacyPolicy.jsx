import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Politique de Confidentialité - FrAIde</h1>
        <p className="text-sm text-gray-500 mb-8">Date d'entrée en vigueur : 13 avril 2025</p>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h2>
          <p className="text-gray-600 mb-4">
            La présente Politique de Confidentialité explique comment FrAIde ("nous", "notre", "nos") collecte, utilise, 
            partage et protège les informations personnelles que nous recueillons lorsque vous utilisez notre service 
            d'assistant mathématique par WhatsApp. Nous nous engageons à protéger votre vie privée et à traiter vos 
            données conformément aux lois et règlements applicables en matière de protection des données.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Informations que nous collectons</h2>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Informations que vous nous fournissez</h3>
            <p className="text-gray-600 mb-2">Lorsque vous utilisez FrAIde, nous collectons uniquement :</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-1">Votre numéro de téléphone WhatsApp</li>
              <li className="mb-1">Votre solde de compte et votre statut d'utilisateur (actif, en période d'essai)</li>
              <li className="mb-1">La date de création de votre compte et de votre dernière activité</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Informations traitées temporairement</h3>
            <p className="text-gray-600 mb-2">Nous traitons temporairement, sans stockage permanent :</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-1">Les messages textuels que vous envoyez à notre service</li>
              <li className="mb-1">Les images d'exercices de mathématiques que vous partagez</li>
              <li className="mb-1">L'historique récent de conversation (limité aux 10 derniers messages) pour assurer la cohérence des échanges</li>
            </ul>
            <p className="text-gray-600 mt-2">
              Ces données sont conservées uniquement en mémoire pendant la session active et sont automatiquement 
              effacées lors du redémarrage du service ou après une période d'inactivité.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Informations traitées par des tiers</h3>
            <p className="text-gray-600">
              Informations de paiement : Nous ne collectons ni ne stockons vos informations de paiement. 
              Lorsque vous rechargez votre compte, vous êtes redirigé vers Stripe, notre prestataire de 
              services de paiement, qui traite votre paiement de manière sécurisée. Nous recevons uniquement 
              une confirmation du paiement effectué avec le montant associé à votre numéro de téléphone.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Comment nous utilisons vos informations</h2>
          <p className="text-gray-600 mb-2">Nous utilisons les informations collectées pour :</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-1">Fournir, maintenir et améliorer notre service d'assistance mathématique</li>
            <li className="mb-1">Gérer votre compte utilisateur et votre solde</li>
            <li className="mb-1">Vous envoyer des notifications concernant votre solde et l'état de votre compte</li>
            <li className="mb-1">Résoudre les problèmes techniques et assurer la sécurité de notre service</li>
            <li className="mb-1">Respecter nos obligations légales</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Partage de vos informations</h2>
          <p className="text-gray-600 mb-4">Nous pouvons partager certaines informations avec :</p>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Nos fournisseurs de services</h3>
            <p className="text-gray-600 mb-2">Nous travaillons avec des tiers qui nous fournissent des services essentiels :</p>
            <ul className="list-disc pl-6 text-gray-600">
              <li className="mb-1">Render (hébergement de l'application)</li>
              <li className="mb-1">Stripe (traitement des paiements, qui reçoit uniquement votre numéro de téléphone pour l'association des paiements)</li>
              <li className="mb-1">OpenAI (services d'intelligence artificielle, qui reçoit temporairement le contenu de vos messages pour traitement mais ne le conserve pas)</li>
              <li className="mb-1">WhatsApp (Meta) pour la transmission des messages</li>
            </ul>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Conformité légale</h3>
            <p className="text-gray-600">
              Nous pouvons divulguer vos informations si nous estimons de bonne foi que cette divulgation est nécessaire 
              pour respecter la loi, protéger nos droits ou assurer votre sécurité.
            </p>
          </div>
          
          <p className="text-gray-600 font-medium">FrAIde ne vend pas vos données personnelles à des tiers.</p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Sécurité des données</h2>
          <p className="text-gray-600">
            Nous prenons des mesures raisonnables pour protéger vos informations contre tout accès non autorisé, 
            altération, divulgation ou destruction. Cependant, aucune méthode de transmission sur Internet ou 
            de stockage électronique n'est totalement sécurisée. Par conséquent, nous ne pouvons garantir une 
            sécurité absolue.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Conservation des données</h2>
          <p className="text-gray-600">
            Nous conservons vos informations de compte (numéro de téléphone, solde, statut) aussi longtemps 
            que nécessaire pour fournir nos services et respecter nos obligations légales. Les contenus 
            des conversations ne sont pas conservés de façon permanente. Si vous souhaitez que nous 
            supprimions vos données, veuillez nous contacter à l'adresse indiquée ci-dessous.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Droits des utilisateurs</h2>
          <p className="text-gray-600 mb-2">
            Selon votre lieu de résidence, vous pouvez avoir certains droits concernant vos informations 
            personnelles. Ces droits peuvent inclure :
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li className="mb-1">Accès à vos données personnelles</li>
            <li className="mb-1">Rectification de vos données</li>
            <li className="mb-1">Suppression de vos données</li>
            <li className="mb-1">Opposition au traitement</li>
            <li className="mb-1">Portabilité des données</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Pour exercer ces droits, veuillez nous contacter via les coordonnées fournies ci-dessous.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Utilisation par les mineurs</h2>
          <p className="text-gray-600">
            Notre service est destiné aux personnes de tous âges qui ont besoin d'aide en mathématiques. 
            Si vous avez moins de 16 ans, veuillez obtenir le consentement d'un parent ou tuteur avant 
            d'utiliser notre service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Modifications de cette politique</h2>
          <p className="text-gray-600">
            Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous 
            informerons de tout changement important par un message sur WhatsApp ou par d'autres moyens 
            appropriés.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Nous contacter</h2>
          <p className="text-gray-600 mb-2">
            Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité 
            ou nos pratiques en matière de données, veuillez nous contacter à :
          </p>
          <div className="text-gray-600">
            <p>Email : contact@fraide.com</p>
            <p>WhatsApp : +33 XXXXXXXXX</p>
          </div>
        </section>
        
        <div className="text-gray-600 mt-12 text-sm">
          <p>En utilisant notre service FrAIde, vous acceptez les termes de cette politique de confidentialité.</p>
        </div>
        
        <div className="mt-8">
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            &larr; Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;