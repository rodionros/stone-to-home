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
              priority={true}
              style={{objectFit:"cover"}}
              alt="card"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              quality={100}
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