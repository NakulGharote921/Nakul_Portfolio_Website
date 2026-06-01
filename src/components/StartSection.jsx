import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 20, suffix: '+', label: 'End-to-End Projects' },
  { value: 5, suffix: '+', label: 'Sold It' },
  { value: 4.9, suffix: '', label: 'Average Rating', decimals: 1 },
  { value: 100, suffix: '%', label: 'User Satisfaction' }
];

function Counter({ value, suffix = '', decimals = 0, active }) {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!active || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    const duration = 1400;
    const start = performance.now();

    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = value * eased;
      setDisplayValue(nextValue);

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function StartSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      {/* Stats Section */}
      <section ref={sectionRef} className="w-full bg-surface-card border-y border-border-light py-lg">
        <div className="max-w-container-max mx-auto px-sm md:px-lg grid grid-cols-2 md:grid-cols-4 gap-md divide-x divide-border-light text-center fade-in-section is-visible">
          {stats.map(stat => (
            <div key={stat.label} className="flex flex-col items-center">
              <h3 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary-container font-bold">
                <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals ?? 0} active={isVisible} />
              </h3>
              <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mt-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default StartSection
