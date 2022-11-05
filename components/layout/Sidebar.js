import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { NavLink } from '../common/Links'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleToggle = () => setIsOpen((prev) => !prev)
  const { pathname } = useRouter()

  return (
    <>
      <div
        onClick={handleToggle}
        className={clsx('block cursor-pointer border px-3 py-2 lg:hidden')}
      >
        {isOpen ? 'Close' : 'Menu'}
      </div>
      <div
        className={clsx(
          'h-max-content border-r-1 absolute w-screen bg-white p-3 shadow transition-all duration-300 ease-in-out lg:relative lg:block lg:max-w-[15vw] lg:translate-x-0 lg:border-gray-200',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <nav
          onClick={handleToggle}
          className={clsx('flex h-full flex-col px-3 py-6')}
        >
          <NavLink active={pathname === '/'} href={'/'}>
            Home
          </NavLink>
          <NavLink
            active={pathname === '/customers' || pathname === '/customer'}
            href={'/customers'}
          >
            Customers
          </NavLink>
          <NavLink
            active={pathname === '/orders' || pathname === '/order'}
            href={'/orders'}
          >
            Orders
          </NavLink>
          <NavLink
            active={pathname === '/products' || pathname === '/product'}
            href={'/products'}
          >
            Products
          </NavLink>
          <button
            className={clsx(
              'ease my-2 rounded border border-gray-200 p-2 text-center font-semibold text-gray-800 hover:text-sky-600 hover:shadow-sm focus:text-sky-600'
            )}
          >
            Log out
          </button>
        </nav>
      </div>
    </>
  )
}

export default Sidebar
