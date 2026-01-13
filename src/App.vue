<template>
  <RouterView />
</template>

<script setup>
import { watch } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { updateFavicon } from '@/utils/favicon' 

const theme = useThemeStore()

// Initial setting of the favicon
updateFavicon(theme.dark)

// When the user changes the theme
watch(() => theme.dark, (isDark) => {
  updateFavicon(isDark)
})

</script>
