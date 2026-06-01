import React from "react";
import Docter_apponiment from "../assets/Docter.png";



function CoursesSection() {
  return (
    <div>
      {/* Courses Section */}
        <section
          className="w-full max-w-container-max mx-auto px-sm md:px-lg py-xl fade-in-section is-visible"
          id="courses"
        >
          <div className="flex justify-between items-end mb-lg">
            <div>
              <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
                Explore My Projects
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                High-end content structured for professional growth.
              </p>
            </div>
            <button className="hidden md:flex text-primary-container font-label-md text-label-md hover:underline items-center gap-xs">
              View All{" "}
              <span
                className="material-symbols-outlined text-sm"
                data-icon="arrow_forward"
              >
                arrow_forward
              </span>
            </button>
          </div>
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {/* Course Card 1: Featured (Large) */}
            <div className="md:col-span-2 bg-surface-card rounded-2xl shadow-premium border-t-4 border-t-accent border border-border-light overflow-hidden group hover:shadow-premium-hover transition-shadow duration-300 relative flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-48 md:h-auto relative">
                <img
                  alt="Python Code"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-alt="A close-up shot of a dark-themed code editor displaying clean, structured Python code. The screen glows softly in a dimly lit room, conveying deep focus and advanced technical expertise. The composition highlights the syntax highlighting in subtle blues and warm tones, aligning with a premium educational platform aesthetic."
                  src={Docter_apponiment}
                />
                <div className="absolute top-sm left-sm bg-accent text-white px-xs py-base rounded-full font-label-sm text-label-sm font-bold flex items-center gap-xs">
                  <span
                    className="material-symbols-outlined text-[16px] icon-fill"
                    data-icon="local_fire_department"
                  >
                    local_fire_department
                  </span>{" "}
                  Bestseller
                </div>
              </div>
              <div className="p-md flex flex-col justify-between flex-1">
                <div>
                  <div className="flex gap-xs mb-sm flex-wrap">
                    <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                      JavaScript
                    </span>
                    <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                      Exprees.js
                    </span>
                    <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                      fireBase
                    </span>
                    <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                      React.jsx
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                    Doctor Appointment System
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                    Clean medical-themed UI with white, blue, and green color palette.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-md pt-md border-t border-border-light">
                  <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      data-icon="schedule"
                    >
                      schedule
                    </span>{" "}
                    40 Hours
                  </div>
                  <button className="bg-primary-container text-on-primary px-sm py-xs rounded-lg font-label-md text-label-md hover:bg-primary transition-colors">
                   <a href="https://hospital-base-project-wrtl.vercel.app" target="blank">GO TO</a> 
                  </button>
                </div>
              </div>

            </div>
            
            {/* Course Card 2 */}
            <div className="bg-surface-card rounded-2xl shadow-premium border-t-4 border-t-primary-container border border-border-light overflow-hidden flex flex-col group hover:shadow-premium-hover transition-shadow duration-300">
              <div className="p-md flex-grow">
                <div className="flex gap-xs mb-sm flex-wrap">
                  <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                    JavaScript
                  </span>
                  <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                    Frontend
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Modern Web Dev Bootcamp
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  Master React,  and Tailwind CSS to build scalable,
                  high-performance web applications.
                </p>
              </div>
              <div className="p-md pt-0 border-t border-border-light mt-auto">
                <div className="flex items-center justify-between mt-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      data-icon="signal_cellular_alt"
                    >
                      signal_cellular_alt
                    </span>{" "}
                    Advanced
                  </div>
                 
                </div>
              </div>
            </div>
            {/* Course Card 3 */}
            <div className="bg-surface-card rounded-2xl shadow-premium border-t-4 border-t-primary-container border border-border-light overflow-hidden flex flex-col group hover:shadow-premium-hover transition-shadow duration-300">
              <div className="p-md flex-grow">
                <div className="flex gap-xs mb-sm flex-wrap">
                  <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                    Java
                  </span>
                  <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                    Backend
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Enterprise Java Spring Boot
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-3">
                  Architect robust microservices and scalable backend systems used
                  by top tech companies.
                </p>
              </div>
              <div className="p-md pt-0 border-t border-border-light mt-auto">
                <div className="flex items-center justify-between mt-sm">
                  <div className="flex items-center gap-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span
                      className="material-symbols-outlined text-[16px]"
                      data-icon="signal_cellular_alt"
                    >
                      signal_cellular_alt
                    </span>{" "}
                    Intermediate
                  </div>
                  <button className="text-primary-container font-label-md text-label-md hover:underline flex items-center gap-xs">
                    View Course{" "}
                    <span
                      className="material-symbols-outlined text-sm"
                      data-icon="chevron_right"
                    >
                      chevron_right
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* Course Card 4 (Span 2 horizontally on tablet) */}
            <div className="md:col-span-2 bg-surface-card rounded-2xl shadow-premium border-t-4 border-t-primary-container border border-border-light p-md flex flex-col md:flex-row items-center gap-md group hover:shadow-premium-hover transition-shadow duration-300">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary-container">
                <span
                  className="material-symbols-outlined text-3xl icon-fill"
                  data-icon="psychology"
                >
                  psychology
                </span>
              </div>
              <div className="flex-grow text-center md:text-left">
                <div className="flex gap-xs mb-xs justify-center md:justify-start">
                  <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                    Python
                  </span>
                  <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                    Java
                  </span>
                  <span className="bg-primary/10 text-primary-container px-xs py-base rounded-full font-label-sm text-label-sm">
                    JavaScript
                  </span>
                  


                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Applied Software Development
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                  Build practical, production-ready applications with clean architecture, modern frontend tooling, and scalable backend patterns.
                </p>
              </div>
              <button className="border border-primary-container text-primary-container px-sm py-xs rounded-lg font-label-md text-label-md hover:bg-surface-container-low transition-colors w-full md:w-auto mt-sm md:mt-0">
                Explore Syllabus
              </button>
            </div>
          </div>
        </section>
    </div>
  )
}

export default CoursesSection
