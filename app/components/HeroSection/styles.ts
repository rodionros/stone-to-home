'use client'

import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroText = styled.div`
  color: white;
  text-align: center;
  max-width: 80%;

  h1 {
    font-size: 2.5rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;