import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

const StyledProgress = styled.progress`
   position: fixed;
   top: 0;
   left: 0;
   -webkit-appearance: none;
   appearance: none;
   width: 100%;
   height: 2vh;
   border: none;
   background: transparent;
   color: transparent;

   & ::-webkit-progress-value {
      background: transparent;
   }

   & ::-moz-progress-bar {
      background: ${({ theme }) => theme.selection};
   }

   & ::-webkit-progress-value {
      background: ${({ theme }) => theme.selection};
   }

   & ::-webkit-progress-bar {
      background: transparent;
   }
`;

const Progress = () => {
   useEffect(() => {
      gsap.to(".progress", {
         value: 100,
         ease: "power0.out",
         scrollTrigger: { scrub: 1.5 },
      });
   });

   return (
      <>
         <StyledProgress max="100" value="0" className="progress" />
      </>
   );
};

export default Progress;
