function Contact() {
  return (
    <section className="w-full px-sm md:px-lg py-xl max-w-container-max mx-auto">
      <div className="grid gap-md lg:grid-cols-[0.9fr_1.1fr] items-start">
        <div className="rounded-3xl bg-primary-container text-on-primary p-md md:p-xl shadow-premium">
          <p className="font-label-sm text-label-sm uppercase tracking-widest opacity-90">
            Contact
          </p>
          <h1 className="mt-sm font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg">
            Let&apos;s build something
          </h1>
          <p className="mt-sm font-body-md md:font-body-lg max-w-xl opacity-90">
            A responsive contact section that adapts cleanly from mobile to large desktop screens.
          </p>
        </div>
        <form className="rounded-3xl bg-surface-card border border-border-light shadow-premium p-md md:p-xl grid gap-sm">
          <input className="w-full rounded-xl border border-border-light bg-surface-main px-sm py-sm" placeholder="Name" />
          <input className="w-full rounded-xl border border-border-light bg-surface-main px-sm py-sm" placeholder="Email" />
          <textarea className="w-full min-h-40 rounded-xl border border-border-light bg-surface-main px-sm py-sm" placeholder="Message" />
          <button className="rounded-xl bg-primary-container text-on-primary px-md py-sm font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
