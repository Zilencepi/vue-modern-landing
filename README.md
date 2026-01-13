# Vue Modern Landing Page

A modern, clean, and fully responsive **Vue 3 landing page template** built with **Vite, Tailwind CSS, and Pinia**.  
Perfect for startups, SaaS products, portfolios, and marketing websites.

---

## 🚀 Features

- ⚡ **Vue 3 + Vite** – fast development & build
- 🎨 **Tailwind CSS** – easy styling & customization
- 🌙 **Dark / Light Mode** (with system preference support)
- 🧠 **Pinia Store** – clean state management
- 📱 Fully responsive design
- 🧩 Reusable components & clean structure
- 🧭 Smooth scroll navigation
- 🔝 Back to Top button
- 📄 Legal pages included (Privacy Policy & Terms of Service)
- 🔍 SEO-ready (meta tags, Open Graph, favicon)
- 🛠 Easy to customize – perfect for non-experts

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
└─ main.js

🎨 Dark Mode

Toggle available in the header

Automatically respects system preference

Styles handled via Tailwind dark: classes

State persisted using Pinia


✏️ How to Customize
1️⃣ Change Text Content

All main content is located in:

src/data/


Example:

// src/data/hero.js
export const heroContent = {
  title: 'Your Product Title',
  subtitle: 'Your subtitle here',
  ctaText: 'Get Started'
}

2️⃣ Change Colors

Edit Tailwind styles directly in components or update:

tailwind.config.js

3️⃣ Pricing Plans

Update pricing data here:

src/data/pricing.js

🧪 Development

Install dependencies:

npm install

Run development server:

npm run dev

📦 Production Build
npm run build


The production-ready files will be generated in the dist/ folder.

🌐 SEO & Social Sharing

Meta tags configured in index.html

Open Graph & Twitter cards included

Custom favicon & social share image supported

🛒 License

This template is intended for commercial use.
You may use it for personal or client projects according to the marketplace license.

💬 Support

If you have questions or need help customizing the template, feel free to reach out.

Happy building! 🚀