import styled from "styled-components";

const StyledA = styled.a`
    text-shadow: 0 0 0 #0000;
    filter: drop-shadow(0 0 0 #0000);
    transition: all 0.25s linear;

    :hover {
        color: ${({ theme }) => theme.color};
        filter: drop-shadow(0 0 20px ${({ theme }) => theme.link.underline});
        text-shadow: 0 0 10px ${({ theme }) => theme.link.underline},
            0 0 20px ${({ theme }) => theme.link.underline};
    }
`;

export const StyledLink = ({ link, name }) => {
    return (
        <StyledA href={link} target="_blank" rel="noopener noreferrer" alt={name}>
            {name}
        </StyledA>
    );
};

const StyledCreds = styled.a`
    color: ${({ theme }) => theme.color};
    transition: all 0.25s linear;
    text-decoration: underline wavy;
`;

export const CreditLink = ({ link, name }) => {
    return (
        <StyledCreds href={link} target="_blank" rel="noopenner noreferrer" alt={name}>
            {name}
        </StyledCreds>
    );
};
