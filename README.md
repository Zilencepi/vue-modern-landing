# Vue Modern Landing Page

A modern, clean, and fully responsive **Vue 3 landing page template** built with **Vite, Tailwind CSS, and Pinia**.
Perfect for startups, SaaS products, portfolios, and marketing websites.

---

## 🚀 Features

* ⚡ **Vue 3 + Vite** – fast development & production build
* 🎨 **Tailwind CSS** – easy styling & customization
* 🌙 **Dark / Light Mode** (system preference supported)
* 🧠 **Pinia** – clean state management
* 📱 Fully responsive design
* 🧩 Reusable components & clean project structure
* 🗨 Smooth scroll navigation
* 🔝 Back to Top button
* 📜 Privacy Policy & Terms pages included
* ✉️ Contact Page with form
* 🔍 SEO-ready (Open Graph, favicon)

---

## 📂 Project Structure

```txt
src/
├─ components/        # UI & layout components
├─ sections/          # Page sections (Hero, Features, Pricing, etc.)
├─ layouts/           # Layout wrappers
├─ views/             # Pages (Home, Privacy, Terms, Contact)
├─ stores/            # Pinia stores (theme, billing)
├─ data/              # Editable content (text, pricing, features, contact)
├─ router/            # Vue Router configuration
├─ App.vue
└─ main.js
```

---

## 🌙 Dark Mode

* Toggle available in the header
* Automatically respects system preference
* Implemented using Tailwind `dark:` classes
* Theme state persisted via Pinia

---

## ✏️ How to Customize

### 1️⃣ Change Text Content

Main editable content is located in:

```txt
src/data/
```

Examples:

```js
// src/data/hero.js
export const heroContent = {
  title: 'Your Product Title',
  subtitle: 'Your subtitle here',
  ctaText: 'Get Started'
}

// src/data/contact.js
export const contactContent = {
  title: 'Get in Touch',
  subtitle: 'We would love to hear from you!',
  info: {
    description: 'Feel free to reach out for collaborations or questions.',
    email: 'hello@example.com',
    phone: '+123 456 7890',
    address: '123 Main Street, Your City'
  },
  form: {
    nameLabel: 'Your Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email',
    messageLabel: 'Message',
    messagePlaceholder: 'Write your message here...',
    submitText: 'Send Message'
  }
}
```

### 2️⃣ Change Colors & Styling

You can customize styles by:

* Editing Tailwind utility classes directly in components
* Updating global configuration in:

```txt
tailwind.config.js
```

### 3️⃣ Pricing Plans

Pricing plans are stored in:

```txt
src/data/pricing.js
```

### 4️⃣ Contact Page

* File: `src/views/ContactView.vue`
* Content: `src/data/contact.js`
* Layout: Two-column responsive design (left info + right form)
* Dark mode supported
* Footer sticks to bottom even with short content
* Form fields include `id` and `autocomplete` attributes for accessibility and browser autofill
* You can integrate backend or Netlify Forms to handle submissions

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

* Meta tags configured in `index.html`
* Open Graph & Twitter Card support included
* Custom favicon and social share image supported via `public/` folder

---

## 🛒 License

This template is intended for commercial use. You may use it for personal or client projects according to the marketplace license.

---

## 💬 Support

If you have questions or need help customizing the template, feel free to reach out.

Happy building! 🚀
