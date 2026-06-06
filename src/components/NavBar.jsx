import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/1780166454010-removebg-preview.png'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const linkClassName =
    'block px-4 py-2 text-on-surface-variant font-medium hover:text-primary rounded-full hover:bg-surface-container-low/80 transition-all duration-200'

  return (
    <div className="relative">
      <header className="sticky top-0 z-50 border-b border-border-light bg-surface-card/80 flex backdrop-blur-xl shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
      <img alt="Nakul Gharote logo" className="h-10 sm:h-12 w-16 sm:w-20 object-cover m-2 sm:m-3" src={logo} />
        <div className="mx-auto flex min-h-16 sm:min-h-18 md:min-h-20 w-full max-w-container-max items-center justify-between px-xs sm:px-sm md:px-lg py-xs sm:py-sm md:py-sm">
          <NavLink
            to="/"
            className="shrink-0 flex items-center gap-2 font-black leading-none text-primary min-w-0"
          >
            <span className="font-display text-sm sm:text-base md:text-2xl lg:text-3xl truncate max-w-[8rem] sm:max-w-[10rem] md:max-w-none">
              Nakul Gharote
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-xs xl:gap-sm">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${linkClassName} text-primary`
                  : linkClassName
              }
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/certificate"
              className={({ isActive }) =>
                isActive
                  ? `${linkClassName} text-primary`
                  : linkClassName
              }
            >
              Certificate
            </NavLink>

            <NavLink
              to="/roadmap"
              className={({ isActive }) =>
                isActive
                  ? `${linkClassName} text-primary`
                  : linkClassName
              }
            >
              My RoadMap
            </NavLink>

            <NavLink
              to="/notes"
              className={({ isActive }) =>
                isActive
                  ? `${linkClassName} text-primary`
                  : linkClassName
              }
            >
              My Notes
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${linkClassName} text-primary`
                  : linkClassName
              }
            >
              Contact
            </NavLink>
          </nav>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
            className="lg:hidden shrink-0 inline-flex items-center justify-center rounded-full border border-border-light bg-surface-container-low p-1 sm:p-2 text-on-surface-variant hover:text-on-surface text-sm sm:text-base"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]" data-icon="menu">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {isMenuOpen ? (
          <div className="lg:hidden border-t border-border-light bg-surface-card/95 backdrop-blur-xl">
            <div className="mx-auto grid max-w-container-max gap-1 px-xs sm:px-sm md:px-md py-xs sm:py-sm md:py-md">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? `${linkClassName} text-primary` : linkClassName
                }
                end
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/certificate"
                className={({ isActive }) =>
                  isActive ? `${linkClassName} text-primary` : linkClassName
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Certificate
              </NavLink>
              <NavLink
                to="/roadmap"
                className={({ isActive }) =>
                  isActive ? `${linkClassName} text-primary` : linkClassName
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My RoadMap
              </NavLink>
              <NavLink
                to="/notes"
                className={({ isActive }) =>
                  isActive ? `${linkClassName} text-primary` : linkClassName
                }
                onClick={() => setIsMenuOpen(false)}
              >
                My Notes
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? `${linkClassName} text-primary` : linkClassName
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        ) : null}
      </header>
    </div>

  )
}

export default NavBar
