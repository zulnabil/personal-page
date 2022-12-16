import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import menus from 'constants/menus'
import { useTheme } from 'hooks/useTheme.hook'

export default function Nav() {
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()
  const [isMounted, setMounted] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const switchTheme = () => {
    if (isMounted) {
      toggleTheme(theme === 'light' ? 'dark' : 'light')
    }
  }
  return (
    <>
      <nav className="sticky z-10 top-0 bg-white dark:bg-gray-400 bg-opacity-10 dark:bg-opacity-5 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex">
                👋
                <p className="ml-2 font-semibold">Zulnabil Alhadad</p>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-6">
                  {menus.map((menu) => (
                    <Link
                      key={menu.path}
                      href={menu.path}
                      className={`${
                        router.pathname === menu.path
                          ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800'
                          : 'text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {menu.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="mr-2 ml-10 flex">
              <button
                onClick={switchTheme}
                className={`lg:px-4 inline-flex items-center justify-center p-2 rounded-md text-gray-800 bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none`}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          !isMenuOpen ? 'invisible transform opacity-0 scale-95' : 'visible transform opacity-100 scale-100'
        } md:hidden fixed z-50 top-16 w-full shadow-md bg-white dark:bg-gray-400 bg-opacity-10 backdrop-blur-md dark:bg-opacity-5 transition ease-out duration-100`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menus.map((menu) => (
            <Link
              key={menu.path}
              href={menu.path}
              className={`${
                router.pathname === menu.path
                  ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-800'
                  : 'text-gray-800 dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600 hover:text-white'
              } block px-3 py-2 rounded-md text-base font-medium`}
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
