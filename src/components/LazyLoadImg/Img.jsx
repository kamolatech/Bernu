import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Img({ src, alt, className, width, height }) {
  return (
    <LazyLoadImage
      effect="blur"
      className={className}
      alt={alt}
      src={src}
      width={width}
      height={height}
    />
  );
}

export default Img;
