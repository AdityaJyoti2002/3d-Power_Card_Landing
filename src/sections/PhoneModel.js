import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, AdaptiveEvents, Environment, OrbitControls } from "@react-three/drei";
import Model from "../components/Scene";
import { Suspense } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  background-color: transparent;
  transition: all 0.3s ease;
`;

const PhoneModel = () => (
  <Container id="phone-model">
    <Canvas camera={{ fov: 50 }}>
      <ambientLight intensity={2.25} />
      <directionalLight intensity={3.4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <Environment preset="night" />
      <AdaptiveDpr pixelated />
      <AdaptiveEvents />
      {/* <OrbitControls /> */}
    </Canvas>
  </Container>
);

export default PhoneModel;
