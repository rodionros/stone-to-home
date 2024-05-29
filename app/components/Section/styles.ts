'use client'

import styled from 'styled-components';

interface SectionProps {
  $image?: string
}

export const SectionWrapper = styled.div<SectionProps>`
    background: ${({$image}) => $image && `url(/images/${$image})`};
    
    width: 100%;
    padding: 0 120px;

    @media screen and (max-width: 1440px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 1024px) {
        padding: 0 40px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`

export const SectionTitle = styled.div`
    font-size: 36px;
    font-weight: 600;
    color: var(--foreground);
    margin: 40px 0;
    padding: 0 120px;

    @media screen and (max-width: 768px) {
        font-size: 28px;
    }
  
    @media screen and (max-width: 480px) {
        font-size: 24px;
        margin-bottom: 20px;
    }
`