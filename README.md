# Wizzy Game - Official Landing Page

Welcome to the official landing page for **Wizzy Game™**, an indie 3D adventure/platformer by AyoubCh. This project serves as the promotional website for the game, featuring banners, logos, and updates.

---

## 🚀 Features

- Fully responsive **Next.js** landing page
- Dynamic sections for:
  - Game banners
  - Logos and characters
  - Coming soon and updates
- Footer with:
  - Copyright and trademark information
  - Legal notes
- Metadata embedded in images (Author, Copyright)
- Easy deployment to **Vercel** with HTTPS

---

## 📁 Project Structure

wizzy_game_website/
├─ app/
│ ├─ components/ # Reusable UI components
│ │ ├─ Footer.tsx
│ │ ├─ ComingSoon.tsx
│ │ └─ ...
│ └─ scripts/ # Scripts for adding metadata to images
│ └─ copyright.py
├─ public/ # Game assets (images, logos, banners)
├─ .gitignore # Ignored files for Git
├─ package.json
├─ next.config.js
└─ README.md

---

## ⚡ Usage

### Install dependencies
```
yarn install
# or
npm install
```
Run locally
```
Copy code
yarn dev
# or
npm run dev
```

Open http://localhost:3000 to view the landing page.

Build for production

```
yarn build
yarn start
# or
npm run build
npm start
```

📝 Legal / Trademark
Wizzy™ / Wizzy Game™ is a trademark of AyoubCh.

All assets, logos, and images are copyrighted by AyoubCh, 2025.

Metadata is embedded in PNG assets for proof of authorship.

### 🖼 Image Metadata Script

The `scripts/copyright.py` script embeds metadata into all PNG images in the `public/` folder:

| Metadata Field | Value                             |
|----------------|-----------------------------------|
| Author         | AyoubCh                           |
| Copyright      | © 2025 AyoubCh. All rights reserved. |

Run the script:

```
python app/scripts/copyright.py
```

📚 Technologies
Next.js — React framework for server-rendered apps

TypeScript — Type safety

TailwindCSS — Styling and layout

Pillow — Python library for adding image metadata

Vercel — Hosting and deployment

⚡ Author
AyoubCh – indie game developer
Website: https://wizzygame.vercel.app
Facebook / Instagram / X: @WizzyGame
