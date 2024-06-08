import { HeroContainer, HeroImage, HeroOverlay, HeroText } from "@/app/components/HeroSection/styles";
import React from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle, backgroundImage }) => {
  return (
      <HeroContainer>
        <HeroImage src={`/images/${backgroundImage}`} alt={title} />
        <HeroOverlay>
          <HeroText>
            <h1>{title}</h1>
            <p>{subtitle}</p>
          </HeroText>
        </HeroOverlay>
      </HeroContainer>
  );
};

export default HeroSection;