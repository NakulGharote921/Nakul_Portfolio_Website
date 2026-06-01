import React from "react"
import TextType from "./TextType"
import ProfileCard from "./ProfileCard"



function HeroSection() {
  return (
    <div>
  
      {/* Hero Section */}
      <section className="w-full max-w-container-max mx-auto px-sm md:px-lg py-xl flex flex-col md:flex-row items-center gap-xl min-h-[80vh] fade-in-section is-visible">
        <div className="flex-1 flex flex-col gap-md text-center md:text-left">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface">
            Master <br />
            <TextType
              text={["Web Dev ", "AI/LLMs", "Python","Java","JavaScript"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor
              cursorCharacter="_"
              texts={["Welcome to My Portfolio !", "Build some amazing experiences!"]}
              deletingSpeed={50}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.0}
              className="text-primary"
            />
            <br /> with Interactive Learning
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
            I'm Nakul Gharote, a passionate Full Stack Developer focused on creating responsive, user-friendly, and high-performance web applications. I turn ideas into clean digital experiences using modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-sm justify-center md:justify-start mt-sm">
            <button className="bg-primary-container text-on-primary px-lg py-sm rounded-lg font-headline-md text-headline-md shadow-premium hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300 ">
              Contact
            </button>
            <button className="border border-outline text-on-surface px-lg py-sm rounded-lg font-headline-md text-headline-md hover:bg-surface-card transition-colors duration-200 flex items-center justify-center gap-xs">
              <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 3C5.89543 3 5 3.89543 5 5V17.2C5 18.0566 5.00078 18.6389 5.03755 19.089C5.07337 19.5274 5.1383 19.7516 5.21799 19.908C5.40973 20.2843 5.7157 20.5903 6.09202 20.782C6.24842 20.8617 6.47262 20.9266 6.91104 20.9624C7.36113 20.9992 7.94342 21 8.8 21H15.2C16.0566 21 16.6389 20.9992 17.089 20.9624C17.5274 20.9266 17.7516 20.8617 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C18.8617 19.7516 18.9266 19.5274 18.9624 19.089C18.9992 18.6389 19 18.0566 19 17.2V13C19 10.7909 17.2091 9 15 9H14.25C12.4551 9 11 7.54493 11 5.75C11 4.23122 9.76878 3 8.25 3H7ZM10 1C16.0751 1 21 5.92487 21 12V17.2413C21 18.0463 21 18.7106 20.9558 19.2518C20.9099 19.8139 20.8113 20.3306 20.564 20.816C20.1805 21.5686 19.5686 22.1805 18.816 22.564C18.3306 22.8113 17.8139 22.9099 17.2518 22.9558C16.7106 23 16.0463 23 15.2413 23H8.75868C7.95372 23 7.28936 23 6.74817 22.9558C6.18608 22.9099 5.66937 22.8113 5.18404 22.564C4.43139 22.1805 3.81947 21.5686 3.43597 20.816C3.18868 20.3306 3.09012 19.8139 3.04419 19.2518C2.99998 18.7106 2.99999 18.0463 3 17.2413L3 5C3 2.79086 4.79086 1 7 1H10ZM17.9474 7.77263C16.7867 5.59506 14.7572 3.95074 12.3216 3.30229C12.7523 4.01713 13 4.85463 13 5.75C13 6.44036 13.5596 7 14.25 7H15C16.0712 7 17.0769 7.28073 17.9474 7.77263Z" fill="#0F1729"></path> </g></svg>
              View Certificate
            </button>
          </div>
        </div>
        <div className="flex-1 w-full flex justify-center">
          <ProfileCard
            name="Nakul Gharote"
            title="Full stack Dev"
            handle="nakulgharote@gmail.com"
            status="Available for projects"
            contactText="Connect"
            className="w-full max-w-[720px]"
          />
        </div>
      </section>
    </div>
  )
}

export default HeroSection
