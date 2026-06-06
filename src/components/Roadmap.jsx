function Roadmap() {
  return (
    <div>
      <section className="w-full pt-sm sm:pt-md md:pt-xl pb-xs sm:pb-sm md:pb-md px-xs sm:px-sm md:px-lg max-w-container-max mx-auto">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-sm sm:space-y-md">
        <div className="inline-flex items-center gap-xs px-xs sm:px-sm py-xs bg-surface-container rounded-full text-primary font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm uppercase tracking-widest">
          <span
            className="material-symbols-outlined text-[14px] sm:text-[16px]"
            data-icon="map"
          >
            map
          </span>
          Career Path
        </div>
        <h1 className="font-display-lg-mobile sm:font-headline-lg md:font-display-lg text-display-lg-mobile sm:text-headline-lg md:text-display-lg text-on-surface leading-tight sm:leading-tight">
          Full Stack Web Dev Roadmap
        </h1>
        <p className="font-body-sm sm:font-body-md md:font-body-lg text-body-sm sm:text-body-md md:text-body-lg text-on-surface-variant max-w-2xl">
          Master the modern web. From foundational markup to scalable cloud
          deployments, follow this step-by-step interactive guide to become an
          industry-ready Full Stack Developer.
        </p>
        {/* Overall Progress */}
        <div className="w-full max-w-xl mt-sm sm:mt-md md:mt-lg bg-surface-card p-xs sm:p-sm rounded-lg sm:rounded-xl shadow-premium border border-border-light text-left">
          <div className="flex justify-between items-center mb-xs">
            <span className="font-label-xs sm:font-label-md text-label-xs sm:text-label-md text-on-surface font-semibold">
              Your Journey Progress
            </span>
            <span className="font-label-xs sm:font-label-md text-label-xs sm:text-label-md text-primary-container font-bold">
              25%
            </span>
          </div>
          <div className="w-full h-2 sm:h-2 bg-border-light rounded-full overflow-hidden">
            <div className="h-full bg-primary-container rounded-full w-1/4 transition-all duration-1000 ease-out" />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Roadmap
