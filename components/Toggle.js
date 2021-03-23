import styled from "styled-components";

// styles only
// Button
export const ToggleButton = styled.button`
   border: 1px solid #0000;
   color: #0000;
   background: #0000;
`;

// fixed toggle
export const Toggler = styled.div`
   position: fixed;
   top: 1em;
   left: 1em;
   z-index: 10;

   @media (max-width: 768px) {
      top: 2.5vh;
      left: 5vw;
   }
`;
