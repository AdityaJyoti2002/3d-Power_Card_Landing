import React from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Model3 from "../components/Scene3";
import { AdaptiveDpr, AdaptiveEvents, Environment } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useContext } from "react";
import { ColorContext } from "./../context/ColorContext";
import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;

  background-color: var(--white);
  overflow: hidden;
`;
const Section = styled.div`
   width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #9BB5CE;
`;
const Phone = styled.div`
  width: 100%;
  height: 70%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  cursor: grab;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
    top: -24px;
`;

const Title = styled.h2`
  font-size: var(--fontxl);
  padding: 0.3rem;
`;

const SubTitle = styled.h2`
  font-size: var(--fontmd);
  font-family: var(--fontR);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  margin: 0;
  padding: 0.4rem 1rem;
  border-radius: 50px;

  border: none;
  outline: none;

  background-color: var(--blue);
  color: var(--white);
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const IndicatorText = styled.div`
  font-size: var(--fontsm);
  position: absolute;
  top: 1rem;
`;

const PricingSection = () => {
  const sectionRef = useRef(null);
  const { currentColor } = useContext(ColorContext);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.backgroundColor = `rgba(${currentColor.rgbColor},0.4)`;
    }
  }, [currentColor]);

  return (
    <Container>
        <Section ref={sectionRef}>
          <Phone>
            <IndicatorText>360&deg; &#x27F2; </IndicatorText>
            <Canvas camera={{ fov: 14, position: [0,5000,10] }}>
              <ambientLight intensity={1} />
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                <group>
                  <Model3 rotation={[0, Math.PI / 5, 0]} scale={10} position={[0, -0.5, 0]}/>
                </group>
              </Suspense>
              <Environment preset="night" />
              <AdaptiveDpr pixelated />
              <AdaptiveEvents />
              <OrbitControls />
            </Canvas>
          </Phone>
          <Details>
            <SubTitle>Power card</SubTitle>
            <Title>Powercard (last minute)</Title>
            <SubTitle>From ₹180</SubTitle>
            <ButtonContainer>
                <a href="/form" style={{ textDecoration: "none" }}>
                  <Btn>Pre Order</Btn>
                </a>
            </ButtonContainer>
          </Details>
        </Section>
        </Container>
  );
};

export default PricingSection;
