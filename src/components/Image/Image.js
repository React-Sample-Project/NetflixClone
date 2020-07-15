import React from "react";
import DefaultImage from "../../assets/DefaultImage.jpg";

function Image({ src, className, alt, ...otherProps }) {
  return (
    <img
      src={src ? `${process.env.REACT_APP_IMAGE_BASE_URL}${src}` : DefaultImage}
      className={className}
      alt={alt}
      loading="lazy"
      {...otherProps}
    />
  );
}

export default Image;
