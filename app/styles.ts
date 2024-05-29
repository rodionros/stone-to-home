'use client'

import styled from 'styled-components'

interface TitleProps {
  weight?: 200 | 300 | 400 | 500 | 600 | 700
}

export const Title1 = styled.h1<TitleProps>`
  font-size: 36px;
  font-weight: ${({ weight = 700 }) => weight};
`

export const Title2 = styled.h2<TitleProps>`
  font-size: 18px;
  font-weight: ${({ weight = 700 }) => weight};
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      gap: 20px;
  }

  @media screen and (max-width: 375px) {
      grid-template-columns: 1fr;
      gap: 20px;
  }
`