'use client'

import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 460px;
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--card-background);
`
export const CardName = styled.span`
  position: absolute;
  top: -25px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: var(--card-name-background);
  color: var(--white);
  padding: 0 20px;
  font-weight: 300;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
`
export const CardTextWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 40%;
  padding: 0 20px;
  font-size: 16px;
  white-space: pre-line;
  font-weight: 400;
    
    
  @media screen and (max-width: 375px) {
      font-size: 14px;
  }
`
