'use client'

import styled from "styled-components";

export const AdvantagesWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding: 60px 0;
    gap: 40px;
    
`

export const Advantage = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    width: 30%;

    @media (max-width: 768px) {
        width: 100%;
    }
`

export const AdvantageHeader = styled.h4`
  
`