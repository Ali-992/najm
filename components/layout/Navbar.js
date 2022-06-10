import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import NavLink from '../ui/NavLink'
import NavLinksMobile from '../ui/NavLinksMobile'

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 w-full">
      <nav className="bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center justify-between w-full">
              <div className="flex-shrink-0">
                <Image
                  src="/images/logo.png"
                  alt="Najm AlMashriq"
                  width={80}
                  height={56}
                />
              </div>
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <NavLink navName="Home" link="/" />
                  <NavLink navName="About" link="/about" />
                  <NavLink navName="Services" link="/services" />
                  <NavLink navName="Projects" link="/projects" />
                  <NavLink navName="Contact" link="/contact" />
                </div>
              </div>
            </div>
            {/* mobile menu */}
            <div className="flex -mr-2 md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-900 rounded-md hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLinksMobile navName="Home" link="/" />
                <NavLinksMobile navName="About" link="/about" />
                <NavLinksMobile navName="Services" link="/services" />
                <NavLinksMobile navName="Projects" link="/projects" />
                <NavLinksMobile navName="Contact" link="/contact" />
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Nav
