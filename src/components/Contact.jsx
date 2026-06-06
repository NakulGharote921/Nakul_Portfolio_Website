function Contact() {
  return (
    <section className="w-full px-sm sm:px-md md:px-lg py-sm sm:py-md md:py-xl max-w-container-max mx-auto">
      <div className="grid gap-sm sm:gap-md lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="rounded-2xl sm:rounded-3xl bg-primary-container text-on-primary p-sm sm:p-md md:p-xl shadow-premium">
          <p className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm uppercase tracking-widest opacity-90">
            Contact
          </p>
          <h1 className="mt-xs sm:mt-sm font-display-md-mobile sm:font-display-lg-mobile md:font-display-lg text-display-md-mobile sm:text-display-lg-mobile md:text-display-lg leading-tight sm:leading-tight">
            Let&apos;s build something
          </h1>
          <p className="mt-xs sm:mt-sm font-body-sm sm:font-body-md md:font-body-lg text-body-sm sm:text-body-md md:text-body-lg max-w-xl opacity-90">
            A responsive contact section that adapts cleanly from mobile to large desktop screens.
          </p>
        </div>
        <form className="rounded-2xl sm:rounded-3xl bg-surface-card border border-border-light shadow-premium p-sm sm:p-md md:p-xl grid gap-xs sm:gap-sm md:gap-sm">
          <input className="w-full rounded-lg sm:rounded-xl border border-border-light bg-surface-main px-xs sm:px-sm py-xs sm:py-sm font-body-sm sm:font-body-md" placeholder="Name" />
          <input className="w-full rounded-lg sm:rounded-xl border border-border-light bg-surface-main px-xs sm:px-sm py-xs sm:py-sm font-body-sm sm:font-body-md" placeholder="Email" />
          <textarea className="w-full min-h-32 sm:min-h-40 rounded-lg sm:rounded-xl border border-border-light bg-surface-main px-xs sm:px-sm py-xs sm:py-sm font-body-sm sm:font-body-md resize-none" placeholder="Message" />
          <button className="rounded-lg sm:rounded-xl bg-primary-container text-on-primary px-sm sm:px-md py-xs sm:py-sm font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md font-semibold w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
