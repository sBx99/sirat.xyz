import Image from "next/image";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

const CustomImage = ({ src, alt, width, height, ...props }) => {
    const isAmp = useAmp();

    return (
        <>
            {isAmp ? (
                <amp-img src={src} alt={alt} width={width} height={height} layout="responsive" />
            ) : (
                <Image src={src} alt={alt} width={width} height={height} />
            )}
        </>
    );
};

export default CustomImage;
