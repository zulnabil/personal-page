import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import menus from 'constants/menus'

export default function Nav() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [isMounted, setMounted] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const [isDarkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between w-full">
            <div className="flex">
              👋
              <p className="ml-2 font-semibold">Zulnabil A.</p>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {menus.map((menu) => (
                  <Link key={menu.path} href={menu.path}>
                    <a
                      className={`${
                        router.pathname === menu.path
                          ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800'
                          : 'text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white'
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {menu.name}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="mr-2 ml-10 flex">
            <button
              onClick={switchTheme}
              className={`lg:px-4 inline-flex items-center justify-center p-2 rounded-md text-gray-800 bg-gray-100 dark:bg-white focus:outline-none rounded-full`}
            >
              <span className="sr-only">Switch dark mode</span>
              <p className="capitalize lg:block hidden">{theme}</p>
              <div className="h-6 w-6">{theme === 'light' ? <>🌝</> : <>🌜</>}</div>
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className={`${
                isMenuOpen && 'ring-2 ring-yellow-400'
              } inline-flex items-center justify-center p-2 rounded-md text-gray-800 dark:text-white focus:outline-none`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          !isMenuOpen ? 'invisible transform opacity-0 scale-95' : 'visible transform opacity-100 scale-100'
        } md:hidden absolute w-full border-b border-gray-300 dark:border-gray-700 bg-gray-200 bg-opacity-50 bg-blur-1 dark:bg-gray-800 transition ease-out duration-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menus.map((menu) => (
            <Link key={menu.path} href={menu.path}>
              <a
                className={`${
                  router.pathname === menu.path
                    ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800'
                    : 'text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {menu.name}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
