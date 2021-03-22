// canvas utils (make canvases look cool)

import styled from "styled-components";

export const CanvasWrap = styled.span`
   & canvas {
      border: 2px solid ${({ theme }) => theme.color};
      filter: drop-shadow(0 0 20px ${({ theme }) => theme.link.background});
   }
`;

export const CanvasWrap3D = styled.span`
   height: 300px;
   width: 300px;

   & canvas {
      filter: drop-shadow(0 0 20px ${({ theme }) => theme.link.background});
   }
`;
