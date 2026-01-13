# Vue Modern Landing Page

A modern, clean, and fully responsive **Vue 3 landing page template** built with **Vite, Tailwind CSS, and Pinia**.  
Perfect for startups, SaaS products, portfolios, and marketing websites.

---

## 🚀 Features

- ⚡ **Vue 3 + Vite** – fast development & production build  
- 🎨 **Tailwind CSS** – easy styling & customization  
- 🌙 **Dark / Light Mode** (system preference supported)  
- 🧠 **Pinia** – clean state management  
- 📱 Fully responsive design  
- 🧩 Reusable components & clean project structure  
- 🗨 Smooth scroll navigation  
- 🔝 Back to Top button  
- 📜 Privacy Policy & Terms pages included  
- 🔍 SEO-ready (Open Graph, favicon)  

---

## 📂 Project Structure

```txt
src/
├─ components/        # UI & layout components
├─ sections/          # Page sections (Hero, Features, Pricing, etc.)
├─ layouts/           # Layout wrappers
├─ views/             # Pages (Home, Privacy, Terms)
├─ stores/            # Pinia stores (theme, billing)
├─ data/              # Editable content (text, pricing, features)
├─ router/            # Vue Router configuration
├─ App.vue
└─ main.js
```

---

## 🌙 Dark Mode

- Toggle available in the header  
- Automatically respects system preference  
- Implemented using Tailwind `dark:` classes  
- Theme state persisted via Pinia

---

## ✏️ How to Customize

### 1️⃣ Change Text Content

Main editable content is located in:

```txt
src/data/
```

Example:

```js
// src/data/hero.js
export const heroContent = {
  title: 'Your Product Title',
  subtitle: 'Your subtitle here',
  ctaText: 'Get Started'
}
```

### 2️⃣ Change Colors & Styling

You can customize styles by:

- Editing Tailwind utility classes directly in components
- Updating global configuration in:

```txt
tailwind.config.js
```

### 3️⃣ Pricing Plans

Pricing plans are stored in:

```txt
src/data/pricing.js
```

---

## 🤪 Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project for production:

```bash
npm run build
```

Production-ready files will be generated in the `dist/` folder.

---

## 🌐 SEO & Social Sharing

- Meta tags configured in `index.html`
- Open Graph & Twitter Card support included
- Custom favicon and social share image supported via `public/` folder

---

## 🛒 License

This template is intended for commercial use. You may use it for personal or client projects according to the marketplace license.

---

## 💬 Support

If you have questions or need help customizing the template, feel free to reach out.

Happy building! 🚀

