import React from "react";
import styled from "styled-components";
import v1 from "../assets/video/1.mp4";

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

const VideoContainer = styled.video`
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  max-height: 100vh; /* Prevent the video from exceeding the viewport height */
  object-fit: cover; /* Ensures the video covers the container */
  
  
`;

const ScrollSection = ({ onArrowClick }) => {
  return (
    <Container>
      <VideoContainer autoPlay loop muted>
        <source src={v1} type="video/mp4" />
      </VideoContainer>
      <Arrow onClick={onArrowClick}>⬇</Arrow>
    </Container>
  );
};

export default ScrollSection;