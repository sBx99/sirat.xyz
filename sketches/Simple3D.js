import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "react-three-fiber";

const Torus = props => {
   // This reference will give us direct access to the mesh
   const mesh = useRef();

   // Set up state for the hovered and active state
   const [hovered, setHover] = useState(false);
   const [active, setActive] = useState(false);

   // Rotate mesh every frame, this is outside of React without overhead
   useFrame(() => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
   });

   return (
      <mesh {...props} ref={mesh}>
         <torusBufferGeometry attach="geometry" args={[1.5, 0.75, 20, 50]} />
         <meshStandardMaterial attach="material" color={0xffaaff} />
      </mesh>
   );
};

const Simple3D = () => {
   return (
      <Canvas>
         <ambientLight position={[0, 0.4, 0]} intensity={0.3} />
         <directionalLight intensity={0.5} position={[0, 0, 0]} color={0xffffff} />
         <pointLight intensity={1.9} position={[-6, 3, -6]} color={0xffcc77} />
         <pointLight intensity={1.9} position={[6, 3, 6]} color={0xffcc77} />
         <Torus position={[0, 0, 0]} />
      </Canvas>
   );
};

export default Simple3D;
