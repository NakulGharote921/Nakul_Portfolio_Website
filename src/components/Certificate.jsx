import certificatePdf from "../assets/1763223458693.pdf"

function Certificate() {
  return (
    <section
      className="w-full max-w-container-max mx-auto px-sm sm:px-md md:px-lg py-sm sm:py-md md:py-xl fade-in-section is-visible"
      id="certificate"
    >
      <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-surface-card border border-border-light shadow-premium overflow-hidden">
        <div className="p-sm sm:p-md md:p-xl border-b border-border-light text-center">
          <p className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm uppercase tracking-widest text-primary-container mb-xs sm:mb-sm">
            Achievements
          </p>
          <h2 className="font-display-lg-mobile sm:font-headline-lg md:font-display-lg text-display-lg-mobile sm:text-headline-lg md:text-display-lg text-on-surface">
            Certificate
          </h2>
          <p className="mt-xs sm:mt-sm font-body-sm sm:font-body-md md:font-body-lg text-body-sm sm:text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            View and verify my certificate directly below, or open the PDF in a
            new tab for a closer look.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-0">
          <div className="bg-surface-container-lowest p-xs sm:p-sm md:p-md">
            <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-border-light bg-white shadow-premium min-h-[40vh] sm:min-h-[50vh] md:min-h-[70vh]">
              <iframe
                title="Certificate PDF preview"
                src={certificatePdf}
                className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh]"
              />
            </div>
          </div>

          <div className="p-sm sm:p-md md:p-xl flex flex-col justify-center gap-sm md:gap-md">
            <div>
              <p className="font-label-xs sm:font-label-sm text-label-xs sm:text-label-sm uppercase tracking-widest text-primary-container mb-xs">
                File
              </p>
              <h3 className="font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md text-on-surface">
                Verified PDF Certificate
              </h3>
              <p className="font-body-sm sm:font-body-md text-body-sm sm:text-body-md text-on-surface-variant mt-xs">
                The certificate is embedded from the uploaded PDF asset and can
                be opened externally whenever needed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-xs sm:gap-sm">
              <a
                href={certificatePdf}
                target="_blank"
                rel="noreferrer"
                className="bg-primary-container text-on-primary px-sm sm:px-md md:px-lg py-xs sm:py-sm rounded-lg font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md shadow-premium hover:shadow-premium-hover transform hover:-translate-y-1 transition-all duration-300 text-center w-full sm:w-auto"
              >
                Open PDF
              </a>
              <a
                href={certificatePdf}
                download
                className="border border-outline text-on-surface px-sm sm:px-md md:px-lg py-xs sm:py-sm rounded-lg font-headline-sm sm:font-headline-md text-headline-sm sm:text-headline-md hover:bg-surface-card transition-colors duration-200 text-center w-full sm:w-auto"
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
