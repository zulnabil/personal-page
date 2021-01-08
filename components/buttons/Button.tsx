interface Props {
  children: React.ReactNode
  onClick?: (any) => void
  className?: string
  primary?: boolean
}

export default function Button({ children, onClick, className, primary = false }: Props) {
  return (
    <button
      onClick={onClick}
      className={`${
        primary
          ? 'text-white bg-gray-800 hover:bg-black dark:text-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:focus:bg-white dark:focus:ring-yellow-400'
          : 'text-gray-800 hover:bg-gray-50 hover:border-gray-200 dark:text-white dark:hover:bg-black dark:focus:bg-gray-900'
      } px-5 py-2 rounded-full border focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:border-transparent transition ease-in-out duration-100 ${className}`}
    >
      {children}
    </button>
  )
}
