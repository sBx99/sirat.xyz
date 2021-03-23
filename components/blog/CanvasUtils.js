// canvas utils (make canvases look cool)

import styled from "styled-components";

export const CanvasWrap = styled.span`
   display: flex;
   align-items: center;
   justify-content: center;
   & canvas {
      border: 2px solid ${({ theme }) => theme.color};
      filter: drop-shadow(0 0 20px ${({ theme }) => theme.selection});
   }
`;

export const CanvasWrap3D = styled.span`
   height: 300px;
   width: 300px;
   display: flex;
   align-items: center;
   justify-content: center;

   & canvas {
      filter: drop-shadow(0 0 20px ${({ theme }) => theme.selection});
   }
`;
