// Type by [Raphaël Bastide](https://raphaelbastide.com/avara/) - [@velvetype](https://twitter.com/velvetype)
// By Raphaël Bastide and some contributions by Wei Huang + Lucas Le Bihan + Walid Bouchouchi + Jérémy Landes!

import styled from "styled-components";
import { CreditLink } from "./Links";

const StyledCredits = styled.div`
    position: fixed;
    bottom: 1.5em;
    right: 1.5em;
    z-index: 10;

    border: 1px solid ${({ theme }) => theme.color};
    border-radius: 10px;
    max-width: 300px;
    word-break: break-word;

    transform: scale(0.75);
    text-align: center;
    padding: 1em;

    :hover,
    :focus,
    :active {
        filter: drop-shadow(0 0 2.5px ${({ theme }) => theme.color});
    }

    @media (max-width: 768px) {
        max-width: 150px;
    }
`;

const Credits = () => {
    return (
        <StyledCredits>
            Typeface by the{" "}
            <CreditLink link="https://velvetyne.fr/fonts/avara" name="Velvetyne Type Foundary">
                Velvetyne Type Foundary
            </CreditLink>
        </StyledCredits>
    );
};

export default Credits;
