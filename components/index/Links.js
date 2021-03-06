import styled from "styled-components";

const StyledA = styled.a`
   text-shadow: 0 0 0 #0000;
   filter: drop-shadow(0 0 0 #0000);
   transition: all 0.25s linear;

   :hover {
      color: ${({ theme }) => theme.color};
      filter: drop-shadow(0 0 15px ${({ theme }) => theme.link.background});
      text-shadow: 0 0 10px ${({ theme }) => theme.link.background},
         0 0 10px ${({ theme }) => theme.link.background};
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
