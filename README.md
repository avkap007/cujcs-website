# 🧠 CUJCS Website

Welcome to the official website repo for the **Canadian Undergraduate Journal of Cognitive Science** — built with ❤️ by students, for students.

---

## 🔧 Tech Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [React Router](https://reactrouter.com/) for page routing

---

## 🚀 Getting Started

### Prerequisites

- Node.js v20+
- npm v10+

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

Then go to http://localhost:5173.

---

## 🗂 Folder Structure

```
src/
│
├── components/       # Reusable UI components (Navbar, Footer, Layout, Dropdown, etc.)
├── pages/            # Individual routes/pages (Home, About, Submissions, Editions, Art, Contact, etc.)
├── data/             # JSON files for dynamic content (e.g., editions.json, team.json)
├── assets/           # Images, logos, and other static assets
├── index.css         # Tailwind and global CSS
└── main.tsx          # App entry point
```

- **components/**: All reusable UI building blocks. Import these into pages or layouts as needed.
- **pages/**: Each file is a route/page. Add new pages here for new routes.
- **data/**: Store editable JSON files for dynamic content (e.g., team members, editions, etc.). Import these into components/pages as needed.
- **assets/**: Store images, logos, and other static files here. Reference them in your components/pages.
- **index.css**: Tailwind directives and global styles. Do not add max-width or margin constraints here unless you want them everywhere.
- **main.tsx**: App entry point. Handles rendering and bootstrapping.

## 🧠 Current Pages

- `/` — Home
- `/about`
- `/editions`
- `/submissions`
- `/art`
- `/contact`

---

## 🧩 How to Add or Edit Content

- **Add/Edit a Page:** Create or edit a file in `src/pages/`. Each file is a route.
- **Add/Edit a Component:** Create or edit a file in `src/components/`. Import into pages/layouts as needed.
- **Add/Edit Data:** Place JSON files in `src/data/` and import them into your components/pages for dynamic content.
- **Add/Edit Images:** Place images in `src/assets/` or `public/` and reference them in your code.

---

## 🎨 Design Reference
See attached screenshots or Figma for the current design.

## 🎨 Color Palette
- **Bright Orange:** #F57C00
- **Light Peach:** #FAC090
- **Deep Red:** #A70039
- **Pink:** #F06292
- **White:** #FFFFFF
- **Muted Purple-Gray:** #D7C1C8

## 🅰️ Font
- **IBM Plex Sans** (imported from Google Fonts)

---

## 🛠️ Contribution Guidelines
- Each component/page is in `src/components` or `src/pages`.
- Use the color palette and font as specified above.
- Refer to the design screenshot or Figma for layout and spacing.
- Keep all global styles in `index.css` and use Tailwind for layout and spacing.
- Do not add max-width or margin constraints in global CSS unless you want them everywhere.
- Use `w-full` and centering utilities in your components for layout control.
- For dynamic content, use JSON files in `src/data/` and import them as needed.

---

For any questions, contact the project lead or open an issue on GitHub.
