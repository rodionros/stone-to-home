import React from 'react';
import { SectionTitle, SectionWrapper } from "@/app/components/Section/styles";

interface ISectionProps {
  title: string
  children?: React.ReactNode
  image?: string
}

const Section = ({ title, children, image }: ISectionProps) => {
  console.log(image)
  return (
      <section>
        {title && <SectionTitle>{title}</SectionTitle>}
        <SectionWrapper $image={image}>
          {children}
        </SectionWrapper>
      </section>
  );
};

export default Section;