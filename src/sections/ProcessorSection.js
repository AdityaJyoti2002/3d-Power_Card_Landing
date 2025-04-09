import React from "react";
import styled, { keyframes } from "styled-components";

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--dark);
  color: var(--white);
  overflow: hidden;
`;

const Title = styled.h1`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: var(--fontBig);
  font-family: var(--fontL);
  z-index: 1;

  background-image: linear-gradient(90deg, var(--gradient));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 70em) {
    font-size: var(--fontxxxl);
  }
  @media screen and (max-width: 64em) {
    font-size: var(--fontxxl);
  }
  @media screen and (max-width: 48em) {
    font-size: var(--fontxl);
  }
`;

const glow = keyframes`
0%{
    box-shadow: 1px 1px 10px var(--white);
}
50%{
    box-shadow: 2px 2px 25px var(--white);
}
100%{
    box-shadow: 1px 1px 10px var(--white);
}
`;

const Processor = styled.div`
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${glow} 3s ease infinite;
  padding: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 48em) {
    display: none;
  }
`;

const Text = styled.div`
  font-size: var(--fontxs);
  color: var(--greyLight);
  width: 30%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    margin: 0.2rem 0;
    padding-left: 2rem;
  }

  @media screen and (max-width: 64em) {
    width: 50%;
  }
  @media screen and (max-width: 48em) {
    width: 100%;
    font-size: var(--fontxxs);
    span {
      width: 40%;
      padding-left: 1rem;
    }

    & > *:last-child {
      align-self: flex-end;
      padding-left: 0;
      padding-right: 1rem;
      text-align: right;
    }
  }
`;

const ProcessorSection = () => {
  return (
    <Section>
      <Title>Power On, Anytime, Anywhere!</Title>
      <Processor>
        <img src="https://5.imimg.com/data5/ECOM/Default/2023/3/294091309/GT/SZ/AM/137491030/elc5077-55-1000x1000.png" alt="A15 processor" />
      </Processor>
      <Text>
        <span>
        Every year, 150M+ new smartphones are sold in India, and with an average daily battery consumption of 3,500-5,000mAh, users often face battery drain at the worst moments. Whether you're a frequent traveler, student, or corporate employee, staying powered up is essential.
        </span>
        <span>
        That's why our portable emergency charging solution is designed to give you an instant power boost of 1,500mAh–2,000mAh, ensuring your phone stays on when you need it most. Whether you're stuck in traffic, attending an important meeting, or traveling long distances, our compact charger is your lifesaver in critical moments.
        </span>
      </Text>
    </Section>
  );
};

export default ProcessorSection;
