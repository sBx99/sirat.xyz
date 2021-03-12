import Image from "next/image";
import styled from "styled-components";
import { useAmp } from "next/amp";

export const config = { amp: "hybrid" };

// image styling
const StyledImg = styled.span`
    /* mix-blend-mode: screen; */
    filter: drop-shadow(0 0 10px ${({ theme }) => theme.link.shadow});

    & img {
        @media (max-width: 768px) {
            width: 95vw;
        }
    }
`;

export const WebGif = ({ ...props }) => {
    const isAmp = useAmp();

    return (
        <StyledImg>
            {isAmp ? (
                <amp-img
                    src="/assets/index/who-dis.gif"
                    alt="new website who dis"
                    width="500"
                    height="200"
                    layout="responsive"
                />
            ) : (
                <Image
                    src="/assets/index/who-dis.gif"
                    alt="new website who dis"
                    width={500}
                    height={200}
                />
            )}
        </StyledImg>
    );
};

// image styling
const StyledToggle = styled.span`
    filter: drop-shadow(0 0 0.75vw ${({ theme }) => theme.link.shadow});
    & img {
        width: 12.5vw;
    }

    @media (max-width: 768px) {
        filter: drop-shadow(0 0 1.25vw ${({ theme }) => theme.link.shadow});
        & img {
            width: 15vw;
        }
    }
`;

export const LightHeartToggle = ({ ...props }) => {
    const isAmp = useAmp();

    return (
        <StyledToggle>
            {isAmp ? (
                <amp-img
                    src="/assets/theme-switcher/light-theme-heart.gif"
                    alt="a gif of a white rotating heart"
                    width="100"
                    height="100"
                    layout="responsive"
                />
            ) : (
                <Image
                    src="/assets/theme-switcher/light-theme-heart.gif"
                    alt="a gif of a white rotating heart"
                    width={100}
                    height={100}
                />
            )}
        </StyledToggle>
    );
};

export const DarkHeartToggle = ({ ...props }) => {
    const isAmp = useAmp();

    return (
        <StyledToggle>
            {isAmp ? (
                <amp-img
                    src="/assets/theme-switcher/dark-theme-heart.gif"
                    alt="a gif of a dark rotating heart"
                    width="100"
                    height="100"
                    layout="responsive"
                />
            ) : (
                <Image
                    src="/assets/theme-switcher/dark-theme-heart.gif"
                    alt="a gif of a dark rotating heart"
                    width={100}
                    height={100}
                />
            )}
        </StyledToggle>
    );
};

export const ImgStyles = styled.span`
    filter: drop-shadow(0 0 25px ${({ theme }) => theme.link.background});
`;
