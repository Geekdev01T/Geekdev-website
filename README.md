# GeekDev IT Solutions

> **Solutions numériques innovantes pour un avenir meilleur**

GeekDev IT Solutions est une application web vitrine moderne destinée à présenter l'activité, les services, l'expertise technique et les moyens de contact de **GeekDev**.

L'application met l'accent sur le développement logiciel sur mesure, les formations IT, l'automatisation des processus et les solutions technologiques modernes.

---

## 📌 Présentation

Le site permet aux visiteurs de :

- découvrir GeekDev et son positionnement ;
- consulter les services proposés ;
- découvrir la stack technique présentée par l'agence ;
- consulter la méthodologie de travail ;
- découvrir l'équipe présentée sur le site ;
- consulter une FAQ ;
- contacter GeekDev et demander un devis ;
- accéder directement à WhatsApp pour échanger avec l'équipe.

Le site est conçu avec une approche **responsive**, avec une navigation adaptée aux ordinateurs, tablettes et smartphones.

---

## 🎯 Objectifs du projet

Les principaux objectifs de l'application sont :

1. **Présenter GeekDev** comme un partenaire technologique.
2. **Valoriser les compétences techniques** et les technologies utilisées.
3. **Présenter les services** de développement et d'accompagnement IT.
4. **Faciliter la prise de contact** avec les prospects et clients.
5. **Présenter une image moderne et professionnelle** de l'entreprise.
6. Proposer une expérience utilisateur fluide grâce aux animations et interactions.

---

## ✨ Fonctionnalités

### 🏠 Accueil

La page d'accueil comprend notamment :

- une section Hero ;
- un slogan et une présentation du positionnement ;
- des appels à l'action vers les services et le contact ;
- une présentation des partenaires ;
- une section À propos ;
- une présentation des services ;
- une section « Pourquoi nous choisir ? » ;
- des témoignages ;
- une présentation des partenaires.

### 👨‍💻 À propos

La page `/a-propos` présente :

- l'agence ;
- son histoire ;
- sa vision ;
- ses valeurs ;
- l'équipe présentée ;
- des indicateurs de performance ;
- la culture d'excellence de GeekDev.

Les valeurs mises en avant comprennent notamment :

- Objectif Client ;
- Collaboration Agile ;
- Code Robuste ;
- Veille Active.

### 💻 Services

La page `/services` présente les principales solutions proposées, notamment :

- développement web sur mesure ;
- solutions mobiles ;
- infrastructures Cloud et API ;
- formations IT ;
- automatisation des processus.

La page présente également :

- la méthodologie de travail ;
- les étapes du processus projet ;
- la stack technique ;
- une FAQ.

### 📞 Contact

La page `/contact` permet au visiteur de :

- renseigner son nom ;
- renseigner son adresse email ;
- renseigner son téléphone ;
- renseigner le sujet de sa demande ;
- rédiger son message ;
- envoyer une demande ;
- contacter GeekDev directement via WhatsApp.

Les informations de contact actuellement configurées dans l'application sont :

- **Téléphone :** +237 682 779 324
- **Téléphone :** +237 687 536 106
- **Email :** tresormetikwe@gmail.com
- **Localisation :** Bonaberi - Douala, Cameroun

> ⚠️ Le formulaire de contact présent dans la version actuelle simule l'envoi côté frontend. Pour une mise en production, il devra être connecté à un backend ou à un service d'envoi d'emails.

---

## 🛠️ Technologies utilisées

Le projet est une application **React + TypeScript** construite avec **Vite**.

### Frontend

- React 19
- TypeScript
- React Router
- Tailwind CSS
- Motion
- Lucide React

### 3D / WebGL

- Three.js
- React Three Fiber
- React Three Drei

La section Hero utilise une visualisation 3D interactive.

### Outils et infrastructure

- Vite
- Node.js
- npm
- TypeScript
- Express
- dotenv

### Intelligence artificielle

Le projet contient la dépendance :

- `@google/genai`

Cette dépendance prépare l'intégration des services Google Gemini. L'utilisation effective de l'API Gemini doit être vérifiée/complétée selon les fonctionnalités souhaitées.

---

## 🎨 Design & expérience utilisateur

L'interface utilise principalement :

- un thème sombre ;
- des nuances `slate` ;
- des accents bleu/cyan ;
- des effets de transparence ;
- des bordures et cartes modernes ;
- des animations d'apparition ;
- des effets au survol ;
- des transitions ;
- des éléments 3D ;
- une navigation responsive.

Le style général vise une identité **technologique, moderne, premium et orientée innovation**.

---

## 🗂️ Architecture du projet

```text
geekdev-it-solutions/
│
├── assets/
│   └── .aistudio/
│
├── public/
│   └── logo.png
│
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Hero3D.tsx
│   │   ├── Partners.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Services.tsx
│   │   ├── Team.tsx
│   │   ├── TechStack.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyUs.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── AboutPage.tsx
│   │   ├── ServicesPage.tsx
│   │   └── ContactPage.tsx
│   │
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🌐 Routes de l'application

L'application utilise **React Router**.

| Route | Page |
|---|---|
| `/` | Accueil |
| `/a-propos` | À propos |
| `/services` | Services |
| `/contact` | Contact |

---

## ⚙️ Prérequis

Avant de lancer le projet, installer :

- **Node.js** ;
- **npm**.

Vérifier les installations :

```bash
node --version
npm --version
```

---

## 🚀 Installation

Cloner ou extraire le projet :

```bash
git clone <URL_DU_REPOSITORY>
cd geekdev-it-solutions
```

Installer les dépendances :

```bash
npm install
```

---

## 🔐 Variables d'environnement

Le projet contient un fichier `.env.example`.

Si l'intégration Gemini est activée, créer un fichier `.env.local` et renseigner la clé correspondante :

```env
GEMINI_API_KEY=your_api_key_here
```

**Ne jamais publier une clé API réelle dans Git ou dans le dépôt public.**

---

## ▶️ Lancer le projet en développement

La commande configurée dans `package.json` est :

```bash
npm run dev
```

Le serveur Vite est configuré pour utiliser le port **3000** et être accessible sur toutes les interfaces réseau :

```text
http://localhost:3000
```

Depuis un autre appareil connecté au même réseau local, l'accès peut être effectué avec l'adresse IP de la machine qui exécute Vite, par exemple :

```text
http://192.168.x.x:3000
```

---

## 🏗️ Construire l'application

Pour générer la version de production :

```bash
npm run build
```

Les fichiers de production sont générés dans le dossier :

```text
dist/
```

Pour tester la version de production localement :

```bash
npm run preview
```

---

## 🔎 Vérification TypeScript

Le projet contient également une commande de vérification :

```bash
npm run lint
```

Cette commande exécute :

```bash
tsc --noEmit
```

---

## 📦 Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Lance le serveur de développement Vite sur le port 3000 |
| `npm run build` | Génère la version de production |
| `npm run preview` | Prévisualise le build de production |
| `npm run lint` | Vérifie le typage TypeScript |
| `npm run clean` | Supprime `dist` et `server.js` |

---

## 📱 Responsive Design

L'interface est pensée pour :

- 💻 Desktop ;
- 💻 Laptop ;
- 📱 Smartphone ;
- 📲 Tablette.

La navigation comporte notamment un menu hamburger pour les écrans mobiles.

---

## 🎞️ Animations

Les animations de l'interface utilisent principalement **Motion**.

Elles sont utilisées pour :

- l'apparition progressive des sections ;
- les animations au scroll ;
- les transitions ;
- les effets de survol ;
- l'ouverture de la FAQ ;
- les interactions de navigation.

---

## 🌐 Déploiement

Le projet est actuellement accessible via Google AI Studio à l'adresse :

**https://geekdev-it-solutions.ai.studio/**

Le projet peut également être déployé sur une infrastructure web compatible avec une application frontend Vite/React.

Pour un déploiement classique :

```bash
npm install
npm run build
```

Puis servir le contenu du dossier `dist/` avec le service d'hébergement choisi.

---

## 🔒 Sécurité

Quelques bonnes pratiques à respecter avant une mise en production :

- ne jamais exposer les clés API ;
- utiliser des variables d'environnement ;
- connecter le formulaire de contact à un backend sécurisé ;
- valider et filtrer les données envoyées par les utilisateurs ;
- activer HTTPS ;
- configurer correctement les politiques CORS si une API est ajoutée ;
- protéger les éventuels endpoints backend ;
- éviter de placer des informations sensibles dans le frontend.

---

## 🔧 Améliorations recommandées pour la production

La version actuelle est principalement une vitrine frontend. Pour passer à une version complète de production, les améliorations suivantes peuvent être envisagées :

### Backend

Ajouter une API avec :

- Node.js + Express ;
- authentification si nécessaire ;
- gestion des demandes de contact ;
- gestion des demandes de devis ;
- stockage en base de données.

### Base de données

Selon les besoins :

- PostgreSQL ;
- MySQL.

### Contact

Remplacer la simulation actuelle par :

- une API backend ;
- Resend ;
- EmailJS ;
- SMTP ;
- ou un autre service transactionnel.

### Administration

Ajouter éventuellement un espace administrateur permettant de gérer :

- services ;
- témoignages ;
- partenaires ;
- projets ;
- FAQ ;
- demandes de contact.

### IA

L'intégration Gemini peut être développée pour ajouter, par exemple :

- assistant conversationnel GeekDev ;
- génération d'avant-projets ;
- assistant de qualification des besoins ;
- analyse automatique des demandes clients ;
- génération d'estimations préliminaires.

---

## 📈 Évolutions possibles

Le projet peut évoluer vers une véritable plateforme digitale GeekDev avec :

```text
                    ┌─────────────────────┐
                    │      GeekDev        │
                    │   Web Platform      │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┼─────────────────┐
             │                 │                 │
             ▼                 ▼                 ▼
       Site vitrine       Espace client      Espace admin
             │                 │                 │
             ▼                 ▼                 ▼
        Services           Projets          Gestion contenu
        Contact            Devis            Statistiques
             │                 │                 │
             └─────────────────┼─────────────────┘
                               ▼
                       API Backend
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
             Database          IA           Services
                            Gemini/API       Email
```

---

## 📞 Contact GeekDev

**GeekDev — Solutions numériques innovantes pour un avenir meilleur**

📍 **Localisation :** Bonaberi - Douala, Cameroun

📞 **Téléphone :**
- +237 682 779 324
- +237 687 536 106

📧 **Email :** tresormetikwe@gmail.com

🌐 **Site :** https://geekdev-it-solutions.ai.studio/

---

## 📄 Licence

Le projet contient actuellement une déclaration de licence Apache-2.0 dans `src/App.tsx`.

Avant toute distribution commerciale ou publication open source, il est recommandé de formaliser la licence applicable à l'ensemble du projet et de vérifier les droits associés aux ressources externes utilisées.

---

## 👨‍💻 Développement

Projet développé pour **GeekDev IT Solutions**.

**Stack principale :**

`React` · `TypeScript` · `Vite` · `Tailwind CSS` · `Motion` · `Three.js` · `React Three Fiber`

---

> **GeekDev — L'expertise technique au service de votre croissance.**
