import React from 'react';
import { IFooterLinks } from "@/app/types/product";
import { FooterWrapper, LinksWrapper, Link, PhoneWrapper } from "@/app/components/Footer/styles";
import { PhoneIcon } from '@heroicons/react/24/outline'

interface IFooterProps {
  links: IFooterLinks[]
}

const phone: string = '+7 (980) 392-19-12'

const Footer = ({links}: IFooterProps) => {
  return (
      <FooterWrapper>
        <LinksWrapper>
          {links.map((link) => (
            <Link key={link.id}>{link.name}</Link>
          ))}
        </LinksWrapper>
        <PhoneWrapper>
          <PhoneIcon width={40} color="white"/>
          {phone}
        </PhoneWrapper>
      </FooterWrapper>
  );
};

export default Footer;