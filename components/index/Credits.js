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
    max-width: 150px;
    word-break: break-word;

    font-size: 0.35em;
    text-align: center;
    padding: 1em;

    :hover,
    :active {
        filter: drop-shadow(0 0 2.5px ${({ theme }) => theme.color});
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
