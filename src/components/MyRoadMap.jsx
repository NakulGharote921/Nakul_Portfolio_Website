import { useEffect, useRef, useState } from 'react'

function MyRoadMap() {
  const [progress, setProgress] = useState(0)
  const [lineProgress, setLineProgress] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    let frameId
    const duration = 3500
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const nextProgress = Math.min(100, Math.round((elapsed / duration) * 100))

      setProgress(nextProgress)

      if (elapsed < duration) {
        frameId = requestAnimationFrame(animate)
      }
    }

    frameId = requestAnimationFrame(animate)

    return () => {
      if (frameId) {
        cancelAnimationFrame(frameId)
      }
    }
  }, [])

  useEffect(() => {
    let frameId = null

    const updateLineProgress = () => {
      const timelineElement = timelineRef.current

      if (!timelineElement) {
        return
      }

      const rect = timelineElement.getBoundingClientRect()
      const scrollTop = window.scrollY || window.pageYOffset
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight
      const sectionTop = scrollTop + rect.top
      const sectionBottom = sectionTop + rect.height
      const maxTravel = Math.max(1, sectionBottom - sectionTop - viewportHeight)
      const travelled = scrollTop - sectionTop
      const nextProgress = Math.max(
        0,
        Math.min(100, Math.round((travelled / maxTravel) * 100)),
      )

      setLineProgress(nextProgress)
      frameId = null
    }

    const onScroll = () => {
      if (frameId !== null) {
        return
      }

      frameId = window.requestAnimationFrame(updateLineProgress)
    }

    updateLineProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

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
            Full Stack Dev Roadmap
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
                My Journey Progress
              </span>
              <span className="font-label-xs sm:font-label-md text-label-xs sm:text-label-md text-primary-container font-bold">
                {progress}%
              </span>
            </div>
            <div className="w-full h-2 sm:h-3 bg-border-light/70 rounded-full overflow-hidden relative">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-container via-primary to-secondary-container shadow-[0_0_18px_rgba(0,0,0,0.16)] transition-[width] duration-150 ease-out"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full rounded-full bg-white/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Interactive Timeline Section */}
      <section
        ref={timelineRef}
        className="w-full py-md sm:py-md md:py-xl px-xs sm:px-sm md:px-lg max-w-container-max mx-auto relative"
      >
        {/* Central Line (Desktop) / Left Line (Mobile) */}
        <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-1 bg-border-light transform md:-translate-x-1/2 z-0 rounded-full">
          {/* Progress fill line */}
          <div
            className="w-full bg-primary-container rounded-full absolute top-0 left-0 transition-[height] duration-300 ease-out"
            style={{ height: `${lineProgress}%` }}
          />
        </div>
        <div className="relative z-10 flex flex-col gap-xl">
          {/* Step 1: Completed */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md text-right">
              <div className="bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-success p-sm inline-block max-w-md text-left transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-premium-float">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs flex items-center gap-xs">
                  Internet Fundamentals
                  <span
                    className="material-symbols-outlined text-success"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Understand how the web works, HTTP/HTTPS, DNS, and hosting
                  basics.
                </p>
                <div className="flex flex-wrap gap-xs">
                  <span className="px-xs py-[2px] bg-success/10 text-success font-label-sm text-label-sm rounded-full">
                    Completed
                  </span>
                  <a
                    className="px-xs py-[2px] border border-border-light text-on-surface-variant font-label-sm text-label-sm rounded-full hover:bg-surface-container transition-colors"
                    href="#"
                  >
                    Review Course
                  </a>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-8 h-8 bg-success text-white rounded-full flex items-center justify-center shadow-md border-4 border-surface-main z-10">
                <span
                  className="material-symbols-outlined text-[16px]"
                  data-icon="done"
                >
                  done
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              {/* Mobile content duplicate for layout simplicity in this low-effort mode */}
              <div className="md:hidden bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-success p-sm max-w-md text-left ml-[60px] -mt-[60px]">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs flex items-center gap-xs">
                  Internet Fundamentals
                  <span
                    className="material-symbols-outlined text-success"
                    data-icon="check_circle"
                  >
                    check_circle
                  </span>
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Understand how the web works, HTTP/HTTPS, DNS, and hosting
                  basics.
                </p>
                <div className="flex flex-wrap gap-xs">
                  <span className="px-xs py-[2px] bg-success/10 text-success font-label-sm text-label-sm rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Step 2: Completed */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md" />
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-18 h-18   text-2xl rounded-full flex items-center justify-center  z-10  ">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
                  <svg className='w-10' viewBox="-52.5 0 361 361" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L255.554813,70.7657143 Z" fill="#E44D26"> </path> <path d="M128,337.950242 L212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L128,337.950242 Z" fill="#F16529"> </path> <path d="M82.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L48.6814945,132.562989 L56.530989,220.572835 L128,220.572835 L128,188.636132 L85.7389011,188.636132 L82.8202198,155.932132 L82.8202198,155.932132 Z" fill="#EBEBEB"> </path> <path d="M90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L90.0177582,236.54189 Z" fill="#EBEBEB"> </path> <path d="M24.1807473,0 L40.4107253,0 L40.4107253,16.0351648 L55.2573187,16.0351648 L55.2573187,0 L71.488,0 L71.488,48.5584176 L55.258022,48.5584176 L55.258022,32.2981978 L40.4114286,32.2981978 L40.4114286,48.5584176 L24.1814505,48.5584176 L24.1814505,0 L24.1807473,0 L24.1807473,0 Z" fill="#000000"> </path> <path d="M92.8309451,16.1026813 L78.5427692,16.1026813 L78.5427692,0 L123.356835,0 L123.356835,16.1026813 L109.06233,16.1026813 L109.06233,48.5584176 L92.8316484,48.5584176 L92.8316484,16.1026813 L92.8309451,16.1026813 L92.8309451,16.1026813 Z" fill="#000000"> </path> <path d="M130.469275,0 L147.392703,0 L157.802901,17.061978 L168.202549,0 L185.132308,0 L185.132308,48.5584176 L168.969143,48.5584176 L168.969143,24.4901978 L157.802901,41.7554286 L157.523692,41.7554286 L146.349714,24.4901978 L146.349714,48.5584176 L130.469275,48.5584176 L130.469275,0 L130.469275,0 Z" fill="#000000"> </path> <path d="M193.20967,0 L209.444571,0 L209.444571,32.5077802 L232.268659,32.5077802 L232.268659,48.5584176 L193.20967,48.5584176 L193.20967,0 L193.20967,0 Z" fill="#000000"> </path> <path d="M127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L127.889582,188.636132 L127.889582,220.572835 L127.889582,220.572835 Z" fill="#FFFFFF"> </path> <path d="M127.889582,155.854066 L127.889582,155.932132 L205.032791,155.932132 L205.673495,148.753582 L207.128615,132.562989 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.854066 L127.889582,155.854066 Z" fill="#FFFFFF"> </path> </g> </g></svg>

                  <svg className='rounded-4xl w-10'  viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1ca3c5" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="0" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#d72323" stroke-width="0.24000000000000005"> <path opacity="0.4" d="M6 12H18" stroke="#1295af" stroke-width="2.136" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 18V6" stroke="#1295af" stroke-width="2.136" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path opacity="0.4" d="M6 12H18" stroke="#1295af" stroke-width="2.136" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 18V6" stroke="#1295af" stroke-width="2.136" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>

                  <svg className='w-10' viewBox="-52.5 0 361 361" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M127.843868,360.087912 L23.6617143,331.166242 L0.445186813,70.7657143 L255.554813,70.7657143 L232.31367,331.125451 L127.843868,360.087912 L127.843868,360.087912 Z" fill="#264DE4"> </path> <path d="M212.416703,314.546637 L232.277802,92.0573187 L128,92.0573187 L128,337.950242 L212.416703,314.546637 L212.416703,314.546637 Z" fill="#2965F1"> </path> <path d="M53.6685714,188.636132 L56.530989,220.572835 L128,220.572835 L128,188.636132 L53.6685714,188.636132 L53.6685714,188.636132 Z" fill="#EBEBEB"> </path> <path d="M47.917011,123.994725 L50.8202198,155.932132 L128,155.932132 L128,123.994725 L47.917011,123.994725 L47.917011,123.994725 Z" fill="#EBEBEB"> </path> <path d="M128,271.580132 L127.860044,271.617407 L92.2915165,262.013187 L90.0177582,236.54189 L57.957978,236.54189 L62.4323516,286.687648 L127.853011,304.848879 L128,304.808088 L128,271.580132 L128,271.580132 Z" fill="#EBEBEB"> </path> <path d="M60.4835165,0 L99.1648352,0 L99.1648352,16.1758242 L76.6593407,16.1758242 L76.6593407,32.3516484 L99.1648352,32.3516484 L99.1648352,48.5274725 L60.4835165,48.5274725 L60.4835165,0 L60.4835165,0 Z" fill="#000000"> </path> <path d="M106.901099,0 L145.582418,0 L145.582418,14.0659341 L123.076923,14.0659341 L123.076923,16.8791209 L145.582418,16.8791209 L145.582418,49.2307692 L106.901099,49.2307692 L106.901099,34.4615385 L129.406593,34.4615385 L129.406593,31.6483516 L106.901099,31.6483516 L106.901099,0 L106.901099,0 Z" fill="#000000"> </path> <path d="M153.318681,0 L192,0 L192,14.0659341 L169.494505,14.0659341 L169.494505,16.8791209 L192,16.8791209 L192,49.2307692 L153.318681,49.2307692 L153.318681,34.4615385 L175.824176,34.4615385 L175.824176,31.6483516 L153.318681,31.6483516 L153.318681,0 L153.318681,0 Z" fill="#000000"> </path> <path d="M202.126769,188.636132 L207.892396,123.994725 L127.889582,123.994725 L127.889582,155.932132 L172.892132,155.932132 L169.98611,188.636132 L127.889582,188.636132 L127.889582,220.572835 L167.216527,220.572835 L163.509451,261.992791 L127.889582,271.606857 L127.889582,304.833407 L193.362286,286.687648 L193.842637,281.291956 L201.347516,197.212132 L202.126769,188.636132 L202.126769,188.636132 Z" fill="#FFFFFF"> </path> </g> </g></svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-primary-container p-sm max-w-md text-left ml-[60px] md:ml-0 -mt-[60px] md:mt-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-premium-float">
                <div className="flex items-center justify-between mb-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    HTML &amp; CSS Mastery
                  </h3>
                  <span className="font-label-sm text-label-sm text-success bg-success/10 px-xs py-[2px] rounded-full">
                    Completed
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Semantic markup, modern layouts with Flexbox and Grid,
                  responsive design principles.
                </p>
                <div className="flex flex-col gap-xs mb-sm">
                  <a
                    className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-container transition-colors group/link"
                    href="#"
                  >
                    <span className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
                      <span
                        className="material-symbols-outlined text-primary-container text-[20px]"
                        data-icon="play_circle"
                      >
                        play_circle
                      </span>
                      Advanced CSS Grid
                    </span>
                    <span className="font-label-sm text-label-sm text-text-muted">
                      Completed
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-between p-xs rounded-lg hover:bg-surface-container transition-colors group/link"
                    href="#"
                  >
                    <span className="font-label-md text-label-md text-on-surface flex items-center gap-xs">
                      <span
                        className="material-symbols-outlined text-primary-container text-[20px]"
                        data-icon="article"
                      >
                        article
                      </span>
                      Responsive Design Patterns
                    </span>
                    <span className="font-label-sm text-label-sm text-text-muted">
                      Completed
                    </span>
                  </a>
                </div>
                <button className="w-full font-label-md text-label-md font-semibold bg-success text-white py-xs rounded-lg hover:bg-success/90 transition-colors">
                  Review Course
                </button>
              </div>
            </div>
          </div>

          {/* Step 3: Completed */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full">
            <div className="hidden md:block w-1/2 pr-md text-right">
              <div className="bg-surface-card rounded-xl shadow-sm border border-border-light border-t-4 border-t-outline-variant p-sm inline-block max-w-md text-left">
                <div className="flex items-center justify-between mb-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    JavaScript Deep Dive
                  </h3>
                  <span className="font-label-sm text-label-sm text-success bg-success/10 px-xs py-[2px] rounded-full">
                    Completed
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  ES6+, async programming, DOM manipulation, and logic building.
                </p>
                <button className="w-full font-label-md text-label-md font-semibold bg-success text-white py-xs rounded-lg hover:bg-success/90 transition-colors">
                  Review Course
                </button>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-8 h-8 bg-outline-variant text-white rounded-full flex items-center justify-center border-4 border-surface-main z-10">
                <svg className='border-0 rounded-xl' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd"> <rect width="24" height="24" fill="#F1DC50"></rect> <path stroke="#333" stroke-width="2" d="M12,11 C12,15.749205 12,18.4158717 12,19 C12,19.8761925 11.4771235,21 10,21 C7.61461794,21 7.5,19 7.5,19 M20.7899648,13.51604 C20.1898831,12.5053467 19.3944074,12 18.4035378,12 C16.8563489,12 16,13 16,14 C16,15 16.5,16 18.5084196,16.5 C19.7864643,16.8181718 21,17.5 21,19 C21,20.5 19.6845401,21 18.5,21 C16.9861609,21 15.9861609,20.3333333 15.5,19"></path> </g> </g></svg>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="md:hidden bg-surface-card rounded-xl shadow-sm border border-border-light border-t-4 border-t-outline-variant p-sm max-w-md text-left ml-[60px] -mt-[60px]">
                <div className="flex items-center justify-between mb-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    JavaScript Deep Dive
                  </h3>
                  <span className="font-label-sm text-label-sm text-success bg-success/10 px-xs py-[2px] rounded-full">
                    Completed
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  ES6+, async programming, DOM manipulation, and logic building.
                </p>
                <button className="w-full font-label-md text-label-md font-semibold bg-success text-white py-xs rounded-lg hover:bg-success/90 transition-colors">
                  Review Course
                </button>
              </div>
            </div>
          </div>
          {/* React.jsx Mastery */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md" />
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-8 h-8 bg-outline-variant text-white rounded-full flex items-center justify-center border-4 border-surface-main z-10">
                <svg className='border rounded-xl' viewBox="0 -14 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M210.483381,73.8236374 C207.827698,72.9095503 205.075867,72.0446761 202.24247,71.2267368 C202.708172,69.3261098 203.135596,67.4500894 203.515631,65.6059664 C209.753843,35.3248922 205.675082,10.9302478 191.747328,2.89849283 C178.392359,-4.80289661 156.551327,3.22703567 134.492936,22.4237776 C132.371761,24.2697233 130.244662,26.2241201 128.118477,28.2723861 C126.701777,26.917204 125.287358,25.6075897 123.876584,24.3549348 C100.758745,3.82852863 77.5866802,-4.82157937 63.6725966,3.23341515 C50.3303869,10.9571328 46.3792156,33.8904224 51.9945178,62.5880206 C52.5367729,65.3599011 53.1706189,68.1905639 53.8873982,71.068617 C50.6078941,71.9995641 47.4418534,72.9920277 44.4125156,74.0478303 C17.3093297,83.497195 0,98.3066828 0,113.667995 C0,129.533287 18.5815786,145.446423 46.8116526,155.095373 C49.0394553,155.856809 51.3511025,156.576778 53.7333796,157.260293 C52.9600965,160.37302 52.2875179,163.423318 51.7229345,166.398431 C46.3687351,194.597975 50.5500231,216.989464 63.8566899,224.664425 C77.6012619,232.590464 100.66852,224.443422 123.130185,204.809231 C124.905501,203.257196 126.687196,201.611293 128.472081,199.886102 C130.785552,202.113904 133.095375,204.222319 135.392897,206.199955 C157.14963,224.922338 178.637969,232.482469 191.932332,224.786092 C205.663234,216.837268 210.125675,192.78347 204.332202,163.5181 C203.88974,161.283006 203.374826,158.99961 202.796573,156.675661 C204.416503,156.196743 206.006814,155.702335 207.557482,155.188332 C236.905331,145.46465 256,129.745175 256,113.667995 C256,98.2510906 238.132466,83.3418093 210.483381,73.8236374 L210.483381,73.8236374 Z M204.118035,144.807565 C202.718197,145.270987 201.281904,145.718918 199.818271,146.153177 C196.578411,135.896354 192.205739,124.989735 186.854729,113.72131 C191.961041,102.721277 196.164656,91.9540963 199.313837,81.7638014 C201.93261,82.5215915 204.474374,83.3208483 206.923636,84.1643056 C230.613348,92.3195488 245.063763,104.377206 245.063763,113.667995 C245.063763,123.564379 229.457753,136.411268 204.118035,144.807565 L204.118035,144.807565 Z M193.603754,165.642007 C196.165567,178.582766 196.531475,190.282717 194.834536,199.429057 C193.309843,207.64764 190.243595,213.12715 186.452366,215.321689 C178.384612,219.991462 161.131788,213.921395 142.525146,197.909832 C140.392124,196.074366 138.243609,194.114502 136.088259,192.040261 C143.301619,184.151133 150.510878,174.979732 157.54698,164.793993 C169.922699,163.695814 181.614905,161.900447 192.218042,159.449363 C192.740247,161.555956 193.204126,163.621993 193.603754,165.642007 L193.603754,165.642007 Z M87.2761866,214.514686 C79.3938934,217.298414 73.1160375,217.378157 69.3211631,215.189998 C61.2461189,210.532528 57.8891498,192.554265 62.4682434,168.438039 C62.9927272,165.676183 63.6170041,162.839142 64.3365173,159.939216 C74.8234575,162.258154 86.4299951,163.926841 98.8353334,164.932519 C105.918826,174.899534 113.336329,184.06091 120.811247,192.08264 C119.178102,193.65928 117.551336,195.16028 115.933685,196.574699 C106.001303,205.256705 96.0479605,211.41654 87.2761866,214.514686 L87.2761866,214.514686 Z M50.3486141,144.746959 C37.8658105,140.48046 27.5570398,134.935332 20.4908634,128.884403 C14.1414664,123.446815 10.9357817,118.048415 10.9357817,113.667995 C10.9357817,104.34622 24.8334611,92.4562517 48.0123604,84.3748281 C50.8247961,83.3942121 53.7689223,82.4701001 56.8242337,81.6020363 C60.0276398,92.0224477 64.229889,102.917218 69.3011135,113.93411 C64.1642716,125.11459 59.9023288,136.182975 56.6674809,146.725506 C54.489347,146.099407 52.3791089,145.440499 50.3486141,144.746959 L50.3486141,144.746959 Z M62.7270678,60.4878073 C57.9160346,35.9004118 61.1112387,17.3525532 69.1516515,12.6982729 C77.7160924,7.74005624 96.6544653,14.8094222 116.614922,32.5329619 C117.890816,33.6657739 119.171723,34.8514442 120.456275,36.0781256 C113.018267,44.0647686 105.66866,53.1573386 98.6480514,63.0655695 C86.6081646,64.1815215 75.0831931,65.9741531 64.4868907,68.3746571 C63.8206914,65.6948233 63.2305903,63.0619242 62.7270678,60.4878073 L62.7270678,60.4878073 Z M173.153901,87.7550367 C170.620796,83.3796304 168.020249,79.1076627 165.369124,74.9523483 C173.537126,75.9849113 181.362914,77.3555864 188.712066,79.0329319 C186.505679,86.1041206 183.755673,93.4974728 180.518546,101.076741 C178.196419,96.6680702 175.740322,92.2229454 173.153901,87.7550367 L173.153901,87.7550367 Z M128.122121,43.8938899 C133.166461,49.3588189 138.218091,55.4603279 143.186789,62.0803968 C138.179814,61.8439007 133.110868,61.720868 128.000001,61.720868 C122.937434,61.720868 117.905854,61.8411667 112.929865,62.0735617 C117.903575,55.515009 122.99895,49.4217021 128.122121,43.8938899 L128.122121,43.8938899 Z M82.8018984,87.830679 C80.2715265,92.2183886 77.8609975,96.6393627 75.5753239,101.068539 C72.3906004,93.5156998 69.6661103,86.0886276 67.440586,78.9171899 C74.7446255,77.2826781 82.5335049,75.9461789 90.6495601,74.9332099 C87.9610684,79.1268011 85.3391054,83.4302106 82.8018984,87.8297677 L82.8018984,87.830679 L82.8018984,87.830679 Z M90.8833221,153.182899 C82.4979621,152.247395 74.5919739,150.979704 67.289757,149.390303 C69.5508242,142.09082 72.3354636,134.505173 75.5876271,126.789657 C77.8792246,131.215644 80.2993228,135.638441 82.8451877,140.03572 L82.8456433,140.03572 C85.4388987,144.515476 88.1255676,148.90364 90.8833221,153.182899 L90.8833221,153.182899 Z M128.424691,184.213105 C123.24137,178.620587 118.071264,172.434323 113.021912,165.780078 C117.923624,165.972373 122.921029,166.0708 128.000001,166.0708 C133.217953,166.0708 138.376211,165.953235 143.45336,165.727219 C138.468257,172.501308 133.434855,178.697141 128.424691,184.213105 L128.424691,184.213105 Z M180.622896,126.396409 C184.044571,134.195313 186.929004,141.741317 189.219234,148.9164 C181.796719,150.609693 173.782736,151.973534 165.339049,152.986959 C167.996555,148.775595 170.619884,144.430263 173.197646,139.960532 C175.805484,135.438399 178.28163,130.90943 180.622896,126.396409 L180.622896,126.396409 Z M163.724586,134.496971 C159.722835,141.435557 155.614455,148.059271 151.443648,154.311611 C143.847063,154.854776 135.998946,155.134562 128.000001,155.134562 C120.033408,155.134562 112.284171,154.887129 104.822013,154.402745 C100.48306,148.068386 96.285368,141.425078 92.3091341,134.556664 L92.3100455,134.556664 C88.3442923,127.706935 84.6943232,120.799333 81.3870228,113.930466 C84.6934118,107.045648 88.3338117,100.130301 92.276781,93.292874 L92.2758697,93.294241 C96.2293193,86.4385872 100.390102,79.8276317 104.688954,73.5329157 C112.302398,72.9573964 120.109505,72.6571055 127.999545,72.6571055 L128.000001,72.6571055 C135.925583,72.6571055 143.742714,72.9596746 151.353879,73.5402067 C155.587114,79.7888993 159.719645,86.3784378 163.688588,93.2350031 C167.702644,100.168578 171.389978,107.037901 174.724618,113.77508 C171.400003,120.627999 167.720871,127.566587 163.724586,134.496971 L163.724586,134.496971 Z M186.284677,12.3729198 C194.857321,17.3165548 198.191049,37.2542268 192.804953,63.3986692 C192.461372,65.0669011 192.074504,66.7661189 191.654369,68.4881206 C181.03346,66.0374921 169.500286,64.2138746 157.425315,63.0810626 C150.391035,53.0639249 143.101577,43.9572289 135.784778,36.073113 C137.751934,34.1806885 139.716356,32.3762092 141.672575,30.673346 C160.572216,14.2257007 178.236518,7.73185406 186.284677,12.3729198 L186.284677,12.3729198 Z M128.000001,90.8080696 C140.624975,90.8080696 150.859926,101.042565 150.859926,113.667995 C150.859926,126.292969 140.624975,136.527922 128.000001,136.527922 C115.375026,136.527922 105.140075,126.292969 105.140075,113.667995 C105.140075,101.042565 115.375026,90.8080696 128.000001,90.8080696 L128.000001,90.8080696 Z" fill="#00D8FF"> </path> </g> </g></svg>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-outline-variant p-sm max-w-md text-left ml-[60px] md:ml-0 -mt-[60px] md:mt-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-premium-float">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  React.jsx Mastery
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Components, Hooks, State Management, and foundations.
                </p>
                <span className="px-xs py-[2px] bg-success/10 text-success font-label-sm text-label-sm rounded-full">
                  Completed
                </span>
                <button className="w-full font-label-md text-label-md font-semibold bg-success text-white py-xs rounded-lg hover:bg-success/90 transition-colors">
                  Review Course
                </button>
              </div>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md" />
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-8 h-8 bg-outline-variant text-white rounded-full flex items-center justify-center border-4 border-surface-main z-10">
                <svg viewBox="0 -51 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs> <linearGradient x1="-2.77777778%" y1="32%" x2="100%" y2="67.5555556%" id="linearGradient-1"> <stop stop-color="#2298BD" offset="0%"> </stop> <stop stop-color="#0ED7B5" offset="100%"> </stop> </linearGradient> </defs> <g> <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" fill="url(#linearGradient-1)"> </path> </g> </g></svg>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-outline-variant p-sm max-w-md text-left ml-[60px] md:ml-0 -mt-[60px] md:mt-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-premium-float">
                <div className="flex items-center justify-between mb-xs">
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    Tailwind CSS
                  </h3>
                  <span className="font-label-sm text-label-sm text-success bg-success/10 px-xs py-[2px] rounded-full">
                    Completed
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Utility-first styling, responsive design tokens, and layout
                  scaling for every screen size.
                </p>
                
              </div>
            </div>
          </div>

          
          
          
          {/* Milestone (High Contrast Red) */}
          
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group relative z-20">
            <div className="hidden md:block w-1/2 pr-md text-right">
              <div className="bg-surface-card rounded-xl shadow-premium border-2 border-secondary-container p-sm inline-block max-w-md text-left transform scale-105">
                <div className="flex items-center gap-xs mb-xs text-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    data-icon="workspace_premium"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    workspace_premium
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                    Completed Milestone
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Frontend Basics Certification From IT Vedant&nbsp;
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  You completed the capstone project and earned your first
                  verifiable certificate.
                </p>
                <button className="font-label-md text-label-md font-semibold bg-success text-white px-sm py-xs rounded-lg hover:bg-success/90 transition-colors shadow-sm w-full">
                  Review Certificate
                </button>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-12 h-12 bg-secondary-container text-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface-main z-10">
                <span
                  className="material-symbols-outlined text-[24px]"
                  data-icon="star"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="md:hidden bg-surface-card rounded-xl shadow-premium border-2 border-secondary-container p-sm max-w-md text-left ml-[60px] -mt-[60px]">
                <div className="flex items-center gap-xs mb-xs text-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    data-icon="workspace_premium"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    workspace_premium
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                    Completed Milestone
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Frontend Basics Certification
                </h3>
                <button className="font-label-md text-label-md font-semibold bg-success text-white px-sm py-xs rounded-lg hover:bg-success/90 transition-colors shadow-sm mt-xs">
                  Review Certificate
                </button>
              </div>
            </div>
          </div>
          {/* Java & Spring Boot */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md text-right">
              <div className="bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-outline-variant p-sm inline-block max-w-md text-left transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-premium-float">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Java &amp; Spring Boot Backend
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Enterprise development with Spring Boot, Security, and
                  Microservices.
                </p>
                <span className="px-xs py-[2px] bg-success/10 text-success font-label-sm text-label-sm rounded-full">
                  Completed
                </span>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-8 h-8 bg-outline-variant text-white rounded-full flex items-center justify-center border-4 border-surface-main z-10">
               <svg className=' rounded-4xl w-5xl'  viewBox="0 0 192.756 192.756" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill-rule="evenodd" clip-rule="evenodd"> <path fill="#ffffff" d="M0 0h192.756v192.756H0V0z"></path> <path d="M80.372 101.729s-4.604 2.679 3.28 3.584c9.554 1.091 14.434.934 24.959-1.057 0 0 2.771 1.735 6.639 3.236-23.601 10.113-53.413-.585-34.878-5.763zM77.487 88.532s-5.165 3.823 2.726 4.639c10.206 1.054 18.262 1.14 32.211-1.544 0 0 1.926 1.955 4.957 3.023-28.531 8.345-60.307.657-39.894-6.118z" fill="#3174b9"></path> <path d="M101.797 66.143c5.818 6.697-1.525 12.72-1.525 12.72s14.766-7.621 7.984-17.168c-6.332-8.899-11.189-13.32 15.102-28.566-.001-.001-41.27 10.303-21.561 33.014z" fill="#ca3132"></path> <path d="M133.01 111.491s3.408 2.81-3.754 4.983c-13.619 4.125-56.694 5.369-68.659.164-4.298-1.872 3.766-4.467 6.303-5.015 2.646-.572 4.156-.468 4.156-.468-4.783-3.368-30.916 6.615-13.272 9.479 48.112 7.801 87.704-3.512 75.226-9.143zM82.587 74.857s-21.908 5.205-7.757 7.097c5.977.799 17.883.615 28.982-.316 9.068-.761 18.17-2.389 18.17-2.389s-3.195 1.371-5.51 2.949c-22.251 5.853-65.229 3.127-52.855-2.856 10.462-5.061 18.97-4.485 18.97-4.485zM121.891 96.824c22.617-11.75 12.16-23.044 4.859-21.522-1.785.373-2.586.695-2.586.695s.666-1.042 1.932-1.49c14.441-5.075 25.545 14.972-4.656 22.911-.001 0 .347-.314.451-.594z" fill="#3174b9"></path> <path d="M108.256 8.504s12.523 12.531-11.881 31.794c-19.571 15.458-4.462 24.269-.006 34.34-11.426-10.307-19.807-19.382-14.185-27.826 8.254-12.395 31.125-18.406 26.072-38.308z" fill="#ca3132"></path> <path d="M84.812 128.674c21.706 1.388 55.045-.771 55.836-11.044 0 0-1.518 3.894-17.941 6.983-18.529 3.488-41.386 3.082-54.938.845 0 0 2.777 2.298 17.043 3.216z" fill="#3174b9"></path> <path d="M139.645 147.096h-.66v-.37h1.781v.37h-.66v1.848h-.461v-1.848zm3.554.092h-.008l-.656 1.755h-.301l-.652-1.755h-.008v1.755h-.438v-2.218h.643l.604 1.569.604-1.569h.637v2.218h-.424v-1.755h-.001zM81.255 167.921c-2.047 1.774-4.211 2.772-6.154 2.772-2.768 0-4.27-1.663-4.27-4.324 0-2.881 1.608-4.989 8.044-4.989h2.379v6.541h.001zm5.65 6.374v-19.732c0-5.043-2.876-8.371-9.809-8.371-4.045 0-7.591.999-10.474 2.272l.83 3.495c2.271-.834 5.207-1.607 8.089-1.607 3.994 0 5.713 1.607 5.713 4.934v2.495h-1.996c-9.702 0-14.08 3.764-14.08 9.423 0 4.876 2.885 7.648 8.316 7.648 3.491 0 6.099-1.441 8.534-3.55l.443 2.993h4.434zM105.762 174.295h-7.045l-8.483-27.601h6.154l5.265 16.961 1.172 5.096c2.656-7.371 4.541-14.854 5.484-22.057h5.984c-1.602 9.088-4.488 19.066-8.531 27.601zM132.799 167.921c-2.053 1.774-4.217 2.772-6.156 2.772-2.768 0-4.268-1.663-4.268-4.324 0-2.881 1.609-4.989 8.041-4.989h2.383v6.541zm5.652 6.374v-19.732c0-5.043-2.885-8.371-9.811-8.371-4.049 0-7.594.999-10.477 2.272l.83 3.495c2.271-.834 5.213-1.607 8.096-1.607 3.988 0 5.709 1.607 5.709 4.934v2.495h-1.996c-9.703 0-14.078 3.764-14.078 9.423 0 4.876 2.879 7.648 8.311 7.648 3.494 0 6.098-1.441 8.539-3.55l.445 2.993h4.432zM58.983 178.985c-1.61 2.353-4.214 4.216-7.061 5.267l-2.79-3.286c2.169-1.113 4.027-2.91 4.892-4.582.745-1.49 1.056-3.406 1.056-7.992v-31.515h6.005v31.08c0 6.134-.49 8.613-2.102 11.028z" fill="#ca3132"></path> </g> </g></svg>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="md:hidden bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-outline-variant p-sm max-w-md text-left ml-[60px] -mt-[60px]">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Java &amp; Spring Boot Backend
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Enterprise development with Spring Boot, Security, and
                  Microservices.
                </p>
                <span className="px-xs py-[2px] bg-success/10 text-success font-label-sm text-label-sm rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>
          {/* Python for Backend */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md" />
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-8 h-8 bg-outline-variant text-white rounded-full flex items-center justify-center border-4 border-surface-main z-10">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z" fill="url(#paint0_linear_87_8204)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z" fill="url(#paint1_linear_87_8204)"></path> <defs> <linearGradient id="paint0_linear_87_8204" x1="12.4809" y1="2" x2="12.4809" y2="22.7407" gradientUnits="userSpaceOnUse"> <stop stop-color="#327EBD"></stop> <stop offset="1" stop-color="#1565A7"></stop> </linearGradient> <linearGradient id="paint1_linear_87_8204" x1="19.519" y1="9.25928" x2="19.519" y2="30" gradientUnits="userSpaceOnUse"> <stop stop-color="#FFDA4B"></stop> <stop offset="1" stop-color="#F9C600"></stop> </linearGradient> </defs> </g></svg>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-outline-variant p-sm max-w-md text-left ml-[60px] md:ml-0 -mt-[60px] md:mt-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-premium-float">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Python for Backend
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Django and Flask frameworks, RESTful APIs, and automation
                  scripts.
                </p>
                <span className="px-xs py-[2px] bg-success/10 text-success font-label-sm text-label-sm rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>
          {/* Backend Completed Milestone */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group relative z-20">
            <div className="hidden md:block w-1/2 pr-md text-right">
              <div className="bg-surface-card rounded-xl shadow-premium border-2 border-secondary-container p-sm inline-block max-w-md text-left transform scale-105">
                <div className="flex items-center gap-xs mb-xs text-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    data-icon="workspace_premium"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    workspace_premium
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                    Completed Milestone
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Backend Specialization Certification
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  You completed the advanced server-side challenge and
                  certified your skills.
                </p>
                <button className="font-label-md text-label-md font-semibold bg-success text-white px-sm py-xs rounded-lg hover:bg-success/90 transition-colors shadow-sm w-full">
                  Review Certificate
                </button>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-12 h-12 bg-secondary-container text-white rounded-full flex items-center justify-center shadow-lg border-4 border-surface-main z-10">
                <span
                  className="material-symbols-outlined text-[24px]"
                  data-icon="military_tech"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  military_tech
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="md:hidden bg-surface-card rounded-xl shadow-premium border-2 border-secondary-container p-sm max-w-md text-left ml-[60px] -mt-[60px]">
                <div className="flex items-center gap-xs mb-xs text-secondary-container">
                  <span
                    className="material-symbols-outlined"
                    data-icon="workspace_premium"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    workspace_premium
                  </span>
                  <span className="font-label-sm text-label-sm uppercase tracking-widest font-bold">
                    Completed Milestone
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  Backend Specialization Certification
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  You completed the advanced server-side challenge and
                  certified your skills.
                </p>
                <button className="font-label-md text-label-md font-semibold bg-success text-white px-sm py-xs rounded-lg hover:bg-success/90 transition-colors shadow-sm w-full">
                  Review Certificate
                </button>
              </div>
            </div>
          </div>
          {/* Databases */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md" />
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-8 h-8 bg-outline-variant text-white rounded-full flex items-center justify-center border-4 border-surface-main z-10">
               <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-database" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>645</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(1.000000, 0.000000)" fill="#434343"> <ellipse cx="6.43" cy="2.421" rx="6.43" ry="2.421" class="si-glyph-fill"> </ellipse> <path d="M6.463,11.08 C2.947,11.08 0.016,10.1 0.016,9.444 L0.016,12.713 C0.016,13.901 2.903,14.859 6.463,14.859 C10.023,14.859 12.91,13.9 12.91,12.713 L12.91,9.444 C12.91,10.1 9.979,11.08 6.463,11.08 L6.463,11.08 Z" class="si-glyph-fill"> </path> <path d="M6.494,6.051 C2.978,6.051 0.047,5.049 0.047,4.377 L0.047,7.723 C0.047,8.937 2.934,9.919 6.494,9.919 C10.054,9.919 12.941,8.937 12.941,7.723 L12.941,4.377 C12.941,5.049 10.01,6.051 6.494,6.051 L6.494,6.051 Z" class="si-glyph-fill"> </path> </g> </g> </g></svg>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="bg-surface-card rounded-xl shadow-premium border border-border-light border-t-4 border-t-outline-variant p-sm max-w-md text-left ml-[60px] md:ml-0 -mt-[60px] md:mt-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-premium-float">
                <h3 className="font-headline-md text-headline-md text-on-surface mb-xs">
                  MongoDB &amp; SQL Database Certification
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-sm">
                  Master relational and non-relational data modeling and
                  optimization.
                </p>
                <span className="px-xs py-[2px] bg-success/10 text-success font-label-sm text-label-sm rounded-full">
                  Completed
                </span>
              </div>
            </div>
          </div>
          {/* Final Achievement */}
          <div className="flex flex-col md:flex-row items-start md:items-center w-full group">
            <div className="hidden md:block w-1/2 pr-md text-right">
              <div className="bg-primary p-lg rounded-2xl shadow-xl text-white inline-block max-w-md text-left">
                <div className="flex items-center gap-sm mb-sm">
                  <span
                    className="material-symbols-outlined text-4xl text-inverse-primary"
                    data-icon="emoji_events"
                  >
                    emoji_events
                  </span>
                  <h3 className="font-headline-lg text-headline-lg">
                    Final Achievement
                  </h3>
                </div>
                <h4 className="font-headline-md text-headline-md mb-xs">
                  Complete Full Stack Developer
                </h4>
                <p className="font-body-md text-body-md text-primary-fixed-dim opacity-90">
                  Congratulations! You've mastered the stack from frontend to
                  cloud deployments.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-center w-[48px] h-[48px] md:mx-auto mb-sm md:mb-0">
              <div className="absolute w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-xl border-4 border-surface-main z-10">
                <span
                  className="material-symbols-outlined text-[32px]"
                  data-icon="verified"
                >
                  verified
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-md">
              <div className="md:hidden bg-primary p-md rounded-2xl shadow-xl text-white max-w-md text-left ml-[60px] -mt-[60px]">
                <div className="flex items-center gap-sm mb-sm">
                  <span
                    className="material-symbols-outlined text-2xl text-inverse-primary"
                    data-icon="emoji_events"
                  >
                    emoji_events
                  </span>
                  <h3 className="font-headline-lg text-headline-lg">
                    Final Achievement
                  </h3>
                </div>
                <h4 className="font-headline-md text-headline-md mb-xs">
                  Complete Full Stack Developer
                </h4>
                <p className="font-body-md text-body-md text-primary-fixed-dim opacity-90">
                  Congratulations! You&apos;ve mastered the stack from frontend
                  to cloud deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default MyRoadMap
