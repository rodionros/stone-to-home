import React from 'react';
import { CardName, CardTextWrapper, CardWrapper, ImageWrapper } from "@/app/components/Card/styles";
import Image from "next/image";

interface ICardProps {
  image: string
  name: string
  description: string
}

const Card = ({name, description, image}: ICardProps) => {
  return (
      <CardWrapper>
        <ImageWrapper>
          <Image
              src={image}
              fill
              style={{objectFit: 'cover'}}
              alt="card"
              unoptimized
              priority
          />
        </ImageWrapper>
        <CardTextWrapper>
          <CardName>{name}</CardName>
          {description}
        </CardTextWrapper>
      </CardWrapper>
  );
};

export default Card;