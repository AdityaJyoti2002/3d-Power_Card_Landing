import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import styled from "styled-components";
import Model from "../components/Scene";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #000000, #1a1a1a);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  color: white;
  font-size: 2rem;
  animation: bounce 1.5s infinite ease-in-out;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
`;

const ShowSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  transition: opacity 0.5s ease-in-out;
`;
const StyledModel = styled.div`
  filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8));
  animation: glow 2s infinite alternate;

  @keyframes glow {
    from {
      filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.8));
    }
    to {
      filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 1));
    }
  }
`;

const ScrollSection = ({onArrowClick}) => {

  return (
    <>
      <Container>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[2, -1, 5]} intensity={2} />
          <Suspense fallback={null}>
              <Model scale={2} position={[0, -0.6, 0]} />
          </Suspense>
          <Environment preset="sunset" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
        <Arrow onClick={onArrowClick}>⬇</Arrow>
      </Container>
    </>
  );
};

export default ScrollSection;
