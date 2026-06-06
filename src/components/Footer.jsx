import React from "react";
import LogoLoop from './LogoLoop';
import { SiReact,

  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiMongodb,
  SiFirebase,
  SiThreedotjs,
  SiGreensock, } from 'react-icons/si';
  import { FaDatabase } from "react-icons/fa";
  import { FaJava } from "react-icons/fa6";

const footerLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },

  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com" },
  { node: <FaDatabase />, title: "SQL", href: "https://www.mysql.com" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiFirebase />, title: "Firebase", href: "https://firebase.google.com" },
  { node: <SiThreedotjs />, title: "Three.js", href: "https://threejs.org" },
  { node: <SiGreensock />, title: "GSAP", href: "https://gsap.com" },
]
function Footer() {
  return (
    <div>
      {/* Footer (Generated from JSON) */}
        <footer className="w-full bg-surface-container-lowest border-t border-border-light mt-md sm:mt-lg md:mt-xl">
          <div className="w-full py-sm sm:py-md md:py-xl px-sm sm:px-md md:px-lg max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-sm sm:gap-md md:gap-md">
            {/* Brand & Copyright */}
            <div className="flex flex-col items-center md:items-start gap-xs sm:gap-sm text-center md:text-left">
              <div className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md font-bold text-on-surface">
               Nakul Gharote
              </div>
              <p className="font-body-xs sm:font-body-sm text-body-xs sm:text-body-sm text-on-surface-variant text-sm">
                © 2026 Nakul Gharote Education Inc. All rights reserved.
              </p>
            </div>
            {/* Links */}
            <nav className="flex flex-wrap justify-center gap-xs sm:gap-sm md:gap-md">
              <a
                className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm text-on-surface-variant hover:text-secondary transition-all"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm text-on-surface-variant hover:text-secondary transition-all"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm text-on-surface-variant hover:text-secondary transition-all"
                href="#"
              >
                Contact Us
              </a>
              <a
                className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm text-on-surface-variant hover:text-secondary transition-all"
                href="#"
              >
                Careers
              </a>
            </nav>
          </div>

          <div className="border-t border-border-light py-xs sm:py-sm md:py-md lg:py-lg">
            <div className="max-w-container-max mx-auto px-sm sm:px-md md:px-lg">
              <LogoLoop
                logos={footerLogos}
                speed={100}
                direction="left"
                logoHeight={60}
                gap={60}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="#ffffff"
                ariaLabel="Technology partners"
                className="w-full"
              />
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Footer
