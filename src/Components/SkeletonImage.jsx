import React, { useState } from "react";

/**
 * Renders an image with a shimmer skeleton while it loads.
 *
 * Props:
 *  src, alt, className  — forwarded to <img>
 *  skeletonClassName    — classes for the skeleton placeholder (set height/aspect here)
 *  rest                 — any other img props (loading, style, onLoad, …)
 */
const SkeletonImage = ({ src, alt, className = "", skeletonClassName = "", ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Shimmer skeleton — hidden once image loads */}
      {!loaded && (
        <div className={`skeleton-shimmer absolute inset-0 ${skeletonClassName}`} />
      )}

      <img
        src={src}
        alt={alt}
        className={`transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        onLoad={() => setLoaded(true)}
        {...rest}
      />
    </div>
  );
};

export default SkeletonImage;
