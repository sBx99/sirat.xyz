import { StyledLink } from "./Links";
import styled from "styled-components";
// useSound -
// import useSound from "use-sound";
// import boopSfx from "../../sounds/boop.mp3";

const StyledWrapper = styled.div`
    text-align: justify;
    word-break: break-word;
    color: ${({ theme }) => theme.color};
    font-size: 1.45em;
    letter-spacing: 0.05em;
    line-height: 1.25;
    max-width: 575px;
    padding: 1em;
    overflow: hidden;
`;

const WrapName = styled.span`
    text-decoration: underline wavy ${({ theme }) => theme.link.background};
`;

const Content = () => {
    return (
        <StyledWrapper>
            Hey there! I am <WrapName>Sirat Baweja</WrapName> and I like creating things with code.
            Check out my <StyledLink link="https://github.com/sBx99/" name="github" /> or{" "}
            <StyledLink link="https://linkedin.com/in/siratbaweja/" name="linkedin" /> if you want
            to connect!
        </StyledWrapper>
    );
};

export default Content;
