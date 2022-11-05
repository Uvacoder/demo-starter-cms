import clsx from 'clsx'
import NextLink from 'next/link'

export const Link = ({ children, ...props }) => {
  return (
    <NextLink {...props}>
      <a className="px-2 text-sky-600 hover:underline">{children}</a>
    </NextLink>
  )
}

export const NavLink = ({ active, children, ...props }) => {
  return (
    <NextLink {...props}>
      <a
        className={clsx(
          'ease my-2 rounded border border-gray-200 p-2 text-center font-semibold text-gray-800 hover:text-sky-600 hover:shadow-sm',
          active && 'text-sky-600'
        )}
      >
        {children}
      </a>
    </NextLink>
  )
}
