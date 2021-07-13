import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components";
import Footer from "components/footers/MiniCenteredFooter.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";


const StyledHeader = styled(Header)`
  ${tw`p-5 pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container2 = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: linear-gradient(#414141, #000000);`;


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default (navLinks) => {
  // console.log(navLinks.navLinks)
  
  const navLinks3 = [
    <NavLinks key={1}>
      {navLinks.navLinks.map((navLink) => (
        <NavLink href={navLink.url}>
          {navLink.title}
        </NavLink>
      ))}
    </NavLinks>
  ]
  
  return (
    <AnimationRevealPage>
      <Container2><StyledHeader links={navLinks3} /></Container2>
      <Blog />
      <Footer />
    </AnimationRevealPage>
  );
};
