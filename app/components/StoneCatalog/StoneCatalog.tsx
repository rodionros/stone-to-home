"use client";

import { useState } from 'react';
import {
  CatalogContainer,
  LeftColumn, RightColumn, StoneImage,
  StoneItem,
  StoneList,
  StoneName
} from "@/app/components/StoneCatalog/styles";

interface Stone {
  name: string;
  images: string[];
}

const stones: Stone[] = [
  {
    name: 'Мрамор',
    images: ['/images/catalog/tile-1.png', '/images/catalog/tile-2.png', '/images/catalog/tile-3.png', '/images/catalog/tile-3.png']
  },
  {
    name: 'Гранит',
    images: ['/images/catalog/tile-4.png', '/images/catalog/tile-5.png', '/images/catalog/tile-6.png']
  },
  {
    name: 'Кварцевый агломерат',
    images: ['/images/catalog/tile-7.png', '/images/catalog/tile-8.png', '/images/catalog/tile-9.png']
  },
  {
    name: 'Акриловый камень',
    images: ['/images/catalog/tile-1.png', '/images/catalog/tile-2.png', '/images/catalog/tile-3.png']
  }
];

const StoneCatalog = () => {
  const [selectedStone, setSelectedStone] = useState<Stone>(stones[0]);

  return (
      <CatalogContainer>
        <LeftColumn>
          <StoneList>
            {stones.map((stone) => (
                <StoneItem key={stone.name} onClick={() => setSelectedStone(stone)}>
                  <StoneName>{stone.name}</StoneName>
                </StoneItem>
            ))}
          </StoneList>
        </LeftColumn>
        <RightColumn>
          {selectedStone.images.map((image, index) => (
              <StoneImage key={index} src={image} alt={selectedStone.name} />
          ))}
        </RightColumn>
      </CatalogContainer>
  );
};

export default StoneCatalog;