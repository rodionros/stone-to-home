import React from 'react';
import { SectionTitle, SectionWrapper } from "@/app/components/Section/styles";

interface ISectionProps {
  title?: string
  children?: React.ReactNode
  image?: string
  id?: string
}

const Section = ({ title, children, image, id }: ISectionProps) => {
  return (
      <section id={id}>
        {title && <SectionTitle>{title}</SectionTitle>}
        <SectionWrapper $image={image}>
          {children}
        </SectionWrapper>
      </section>
  );
};

export default Section;