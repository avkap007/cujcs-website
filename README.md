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
├── components/       # Navbar, Footer, Layout, etc.
├── pages/           # Individual routes: Home, About, Submissions, etc.
├── constants/       # Static data like team, issues, etc.
├── assets/          # Images, logos, etc.
├── index.css        # Tailwind directives
└── main.tsx         # App entry
```

## 🧠 Current Pages

- `/` — Home
- `/about`
- `/editions`
- `/submissions`
- `/art`
- `/contact`

---

## 🔍 Development Notes

This project uses Vite with React and TypeScript. The following plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

For production applications, we recommend updating the ESLint configuration to enable type-aware lint rules. See the [Vite documentation](https://vitejs.dev/guide/) for more details.
