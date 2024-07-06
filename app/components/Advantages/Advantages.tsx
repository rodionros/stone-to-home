import React from 'react';
import {AdvantagesWrapper, Advantage, AdvantageHeader} from "@/app/components/Advantages/styles";
import Image from "next/image";

interface IAdvantage {
  id: number;
  name: string;
  icon: string;
}

const advantages: IAdvantage[] = [
  {
    id: 1,
    name: 'Опыт работы',
    icon: 'like'
  },
  {
    id: 2,
    name: 'Качество',
    icon: 'quality'
  },
  {
    id: 3,
    name: 'Монтаж изделий',
    icon: 'settings'
  },
  {
    id: 4,
    name: 'Быстрый расчет',
    icon: 'pen'
  },
  {
    id: 5,
    name: 'Сжатые сроки',
    icon: 'clock'
  },
  {
    id: 6,
    name: 'Доставка',
    icon: 'bus'
  }
];


const Advantages = () => {
  return (
      <AdvantagesWrapper>
        {advantages.map((advantage) => (
          <Advantage key={advantage.id}>
            <Image src={`/images/${advantage.icon}.svg`} alt={advantage.icon} width={160} height={160} unoptimized priority />
            <AdvantageHeader>{advantage.name}</AdvantageHeader>
          </Advantage>
        ))}
      </AdvantagesWrapper>
  );
};

export default Advantages;