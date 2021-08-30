import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Image = ({ className, alt, height, width, src }) => {
    return (
        <LazyLoadImage
            className={className}
            alt={alt}
            width={width}
            height={height}
            src={src}
            effect="blur"
        />
    );
}

export default Image;