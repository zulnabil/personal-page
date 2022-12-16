import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({ theme: 'light', toggleTheme: (_theme) => {} })

function useTheme() {
  const themeContext = useContext(ThemeContext)
  if (themeContext === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return themeContext
}

const getInitialTheme = () => {
  if (typeof window === 'undefined' || !window.localStorage) return 'light'
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
    return 'dark'
  }

  document.documentElement.classList.add('light')
  return 'light'
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    setTheme(getInitialTheme())
  }, [])

  const toggleTheme = (newTheme: string) => {
    document.documentElement.classList.replace(theme, newTheme)
    localStorage.theme = newTheme
    setTheme(newTheme)
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { useTheme, ThemeProvider }
