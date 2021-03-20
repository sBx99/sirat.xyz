import Image from "next/image";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

const imageLoader = ({ src, width, quality }) => {
    var extUrl = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    if (src.match(extUrl)) {
        return `${src}?w=${width}&q=${quality || 50}`;
    } else {
        return `https://sirat.xyz/${src}?w=${width}&q=${quality || 50}`;
    }
};

const CustomImage = ({ src, alt, width, height, ...props }) => {
    const isAmp = useAmp();

    return (
        <>
            {isAmp ? (
                <amp-img src={src} alt={alt} width={width} height={height} layout="responsive" />
            ) : (
                <Image
                    loader={imageLoader}
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    layout="intrinsic"
                />
            )}
        </>
    );
};

export default CustomImage;
