import certificatePdf from "../assets/1763223458693.pdf"

function Certificate() {
  return (
    <section
      className="w-full max-w-container-max mx-auto px-sm md:px-lg py-xl fade-in-section is-visible"
      id="certificate"
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-surface-card border border-border-light shadow-premium overflow-hidden">
        <div className="p-md md:p-xl border-b border-border-light text-center">
          <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container mb-sm">
            Achievements
          </p>
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface">
            Certificate
          </h2>
          <p className="mt-sm font-body-md md:font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            View and verify my certificate directly below, or open the PDF in a
            new tab for a closer look.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-0">
          <div className="bg-surface-container-lowest p-sm md:p-md">
            <div className="rounded-2xl overflow-hidden border border-border-light bg-white shadow-premium min-h-[70vh]">
              <iframe
                title="Certificate PDF preview"
                src={certificatePdf}
                className="w-full h-[70vh]"
              />
            </div>
          </div>

          <div className="p-md md:p-xl flex flex-col justify-center gap-md">
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-widest text-primary-container mb-xs">
                File
              </p>
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Verified PDF Certificate
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                The certificate is embedded from the uploaded PDF asset and can
                be opened externally whenever needed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-sm">
              <a
                href={certificatePdf}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-container text-on-primary px-lg py-sm rounded-lg font-headline-md text-headline-md shadow-premium hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Open PDF
              </a>
              <a
                href={certificatePdf}
                download
                className="border border-outline text-on-surface px-lg py-sm rounded-lg font-headline-md text-headline-md hover:bg-surface-card transition-colors duration-200 text-center"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certificate
