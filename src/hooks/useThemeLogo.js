import { useState, useEffect } from 'react'
import logoLight from './../assets/logo-dark.png'
import logoDark from './../assets/logo-white.png'

export function useThemeLogo() {
  const [logo, setLogo] = useState(logoDark)

  useEffect(() => {
    const updateLogo = () => {
      const theme = document.documentElement.getAttribute('data-theme') || 'dark'
      setLogo(theme === 'dark' ? logoDark : logoLight)
    }

    updateLogo() // set correct logo on mount

    // Watch for theme attribute changes (triggered by your Navbar toggle)
    const observer = new MutationObserver(updateLogo)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    return () => observer.disconnect()
  }, [])

  return logo
}