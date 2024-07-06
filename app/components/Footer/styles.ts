'use client'

import styled from 'styled-components';

export const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: var(--foter-background);
    padding: 40px 80px;
      
    @media screen and (max-width: 1024px) {
        padding: 40px 60px;
    }
  
    @media screen and (max-width: 768px) {
        padding: 20px 40px;
    }
`

export const LinksWrapper = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 60px;
  
    @media screen and (max-width: 768px) {
        margin-bottom: 60px;
    }

    @media screen and (max-width: 425px) {
        margin-bottom: 40px;
        flex-direction: column;
        align-items: center;
    }
`

export const Link = styled.a`
    color: var(--white);
    font-size: 24px;
      
    @media screen and (max-width: 1024px) {
        font-size: 18px;
    }

    @media screen and (max-width: 425px) {
        font-size: 16px;
    }
`

export const PhoneWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 24px;
    font-weight: 300;
    color: var(--white);
      
    @media screen and (max-width: 1024px) {
        font-size: 18px;
    }

    @media screen and (max-width: 425px) {
        align-items: center;
        justify-content: center;
    }
`