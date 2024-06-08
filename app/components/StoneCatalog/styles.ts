'use client'

import styled from "styled-components";

export const CatalogContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const LeftColumn = styled.div`
  flex: 1;
  padding-right: 20px;
`;

export const StoneList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StoneItem = styled.li`
  cursor: pointer;
  padding: 10px 0;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StoneName = styled.span`
  font-size: 18px;
`;

export const RightColumn = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export const StoneImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;