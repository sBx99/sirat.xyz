import styled from "styled-components";

import { Meta } from "@components/Layout";
import { WebGif } from "@components/index/Images";
import { NoiseBg } from "@components/index/Noise";

import Content from "@components/index/Content";
import Credits from "@components/index/Credits";

const Styles = styled.div`
   overflow: hidden;
   height: 90vh;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-family: "Avara", serif !important;

   @media (max-width: 768px) {
      font-size: 0.75em;
      height: 85vh;
   }

   @media (max-width: 500px) {
      font-size: 0.5em;
   }
`;

const Home = () => {
   return (
      <>
         <Meta title="Sirat Baweja" desc="this is the home page" />
         <NoiseBg />
         <Styles>
            <WebGif />
            <Content />
            <Credits />
         </Styles>
      </>
   );
};

export default Home;
