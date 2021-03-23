import styled from "styled-components";

const CenterDiv = styled.div`
   height: 90vh;
   width: 100%;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   @media (max-width: 768px) {
      font-size: 0.75em;
      height: 85vh;
   }

   @media (max-width: 500px) {
      font-size: 0.5em;
   }
`;

export default CenterDiv;
