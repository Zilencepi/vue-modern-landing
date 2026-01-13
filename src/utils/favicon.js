export function updateFavicon(isDark) {
  const link = document.querySelector("link[rel~='icon']")
  if (!link) return

  link.href = isDark ? '/favicon-dark.ico' : '/favicon-light.ico'
}
