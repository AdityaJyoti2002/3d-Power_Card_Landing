import React, { useRef } from "react";
import styled from "styled-components";
import v1 from "../assets/video/1.mp4";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const V1 = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 100vh;
    height: 100vw;
    transform: rotate(90deg);
    transform-origin: center center;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  }
`;

const CameraSection1 = () => {
  const videoRef = useRef(null);

  return (
    <Section>
      <V1 ref={videoRef} src={v1} type="video/mp4" autoPlay muted loop />
    </Section>
  );
};

export default CameraSection1;
