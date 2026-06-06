import { useState } from 'react';

/**
 * OptimizedImage Component
 * - Lazy loads images with blur placeholder
 * - Uses native browser loading="lazy" for better performance
 * - Supports decoding="async" for non-blocking image decoding
 * 
 * Usage:
 * <OptimizedImage
 *   src="/image.png"
 *   alt="Description"
 *   className="w-full"
 * />
 */
export const OptimizedImage = ({ 
  src, 
  alt, 
  className = '',
  width,
  height,
  onLoad,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) {
      onLoad(e);
    }
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className={`${className} ${!isLoaded ? 'blur-sm transition-all duration-300' : 'blur-none'}`}
      onLoad={handleLoad}
      {...props}
    />
  );
};

export default OptimizedImage;
