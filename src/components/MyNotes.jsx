function MyNotes() {
  return (
    <section className="w-full px-sm md:px-lg py-xl max-w-container-max mx-auto">
      <div className="grid gap-md md:grid-cols-[1.2fr_0.8fr] items-start">
        <div className="rounded-3xl bg-surface-card border border-border-light shadow-premium p-md md:p-xl">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container mb-sm">
            Study Hub
          </p>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            My Notes
          </h1>
          <p className="mt-sm font-body-md md:font-body-lg text-on-surface-variant max-w-2xl">
            Notes, highlights, and quick references laid out with a mobile-first responsive grid.
          </p>
        </div>
        <div className="rounded-3xl bg-surface-container-low border border-border-light p-md md:p-xl">
          <div className="space-y-sm">
            <div className="h-24 rounded-2xl bg-surface-card border border-border-light" />
            <div className="h-24 rounded-2xl bg-surface-card border border-border-light" />
            <div className="h-24 rounded-2xl bg-surface-card border border-border-light" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyNotes
