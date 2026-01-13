import { defineStore } from 'pinia'

// Theme store
// Dark mode handled instantly without watcher
export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: false
  }),
  actions: {
    toggleTheme() {
      this.dark = !this.dark
      const html = document.documentElement
      if (this.dark) html.classList.add('dark')
      else html.classList.remove('dark')

      
    }
  }
})
