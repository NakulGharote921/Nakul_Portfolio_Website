function MyNotes() {
  return (
    <section className="w-full px-sm sm:px-md md:px-lg py-sm sm:py-md md:py-xl max-w-container-max mx-auto">
      <div className="grid gap-sm sm:gap-md md:gap-md lg:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="rounded-2xl sm:rounded-3xl bg-surface-card border border-border-light shadow-premium p-sm sm:p-md md:p-xl">
          <p className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm uppercase tracking-widest text-primary-container mb-xs sm:mb-sm">
            Study Hub
          </p>
          <h1 className="font-display-lg-mobile sm:font-headline-lg md:font-display-lg text-display-lg-mobile sm:text-headline-lg md:text-display-lg text-on-surface leading-tight sm:leading-tight">
            My Notes
          </h1>
          <p className="mt-xs sm:mt-sm font-body-sm sm:font-body-md md:font-body-lg text-body-sm sm:text-body-md md:text-body-lg text-on-surface-variant max-w-2xl">
            Notes, highlights, and quick references laid out with a mobile-first responsive grid.
          </p>
        </div>
        <div className="rounded-2xl sm:rounded-3xl bg-surface-container-low border border-border-light p-sm sm:p-md md:p-xl">
          <div className="space-y-xs sm:space-y-sm">
            <div className="h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-surface-card border border-border-light" />
            <div className="h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-surface-card border border-border-light" />
            <div className="h-20 sm:h-24 rounded-xl sm:rounded-2xl bg-surface-card border border-border-light" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyNotes
