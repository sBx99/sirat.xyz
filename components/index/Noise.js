import styled, { keyframes } from "styled-components";

const noiseAnim = keyframes`
0% {
    transform: translate(0);
}
10% {
    transform: translate(-5%, -5%);
}
20% {
    transform: translate(-10%, 5%);
}
30% {
    transform: translate(5%, -10%);
}
40% {
    transform: translate(-5%, 15%);
}
50% {
    transform: translate(-10%, 5%);
}
60% {
    transform: translate(15%);
}
70% {
    transform: translateY(10%);
}
80% {
    transform: translate(-15%);
}
90% {
    transform: translate(10%, 5%);
}
to {
    transform: translate(5%);
}
`;

export const NoiseBg = styled.div`
    position: fixed;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200vh;
    background: ${({ theme }) => theme.background} url("/assets/index/noise.png") repeat 0 0;
    animation: ${noiseAnim} 0.2s infinite;
    background-blend-mode: difference;
    filter: invert(1);
    opacity: 0.15;
    visibility: visible;
    z-index: -1;
    transition: background 0.025s ease-in-out;
`;
