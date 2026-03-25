# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)




## Mise en ligne avec github page

## Résumé des modifications pour le déploiement Lovable → GitHub Pages

Le projet a été configuré pour être déployé sur GitHub Pages. Voici les modifications effectuées :

### 1. Configuration Vite ([`vite.config.ts`](vite.config.ts:8))
- Ajout de la propriété `base: "/harilala-portfolio/"` pour configurer le chemin de base du site sur GitHub Pages
- Le serveur de développement reste configuré sur le port 8080

### 2. Script de build ([`package.json`](package.json:9))
- Ajout d'un script `postbuild` qui copie `dist/index.html` vers `dist/404.html`
- Cela permet de gérer correctement le routing SPA (Single Page Application) sur GitHub Pages

### 3. Workflow GitHub Actions ([`.github/workflows/Static.yml`](.github/workflows/Static.yml:1))
Création d'un pipeline CI/CD qui :
- Se déclenche à chaque push sur la branche `main`
- Utilise Node.js 20
- Nettoie le cache npm et réinstalle les dépendances
- Exécute `npm run build` pour générer le dossier `dist`
- Déploie automatiquement via `actions/deploy-pages@v4`

### URL de déploiement
Une fois déployé, le site sera accessible à :
```
https://[votre-username].github.io/harilala-portfolio/
```

### Notes
- Le projet conserve la dépendance `lovable-tagger` pour le développement local
- Les métadonnées SEO dans [`index.html`](index.html:6) pointent encore vers des ressources Lovable (à mettre à jour pour la production)
