import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
// import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/VerticalWithAlternateImageAndText2.js";
import MainFeature2 from "components/features/VerticalWithAlternateImageAndText3.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
import MainFeature3 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
// import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview";



import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import FastIconImage from "images/fast-icon.svg";

import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
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
      <MainFeature1 />
      <Testimonial />
      <MainFeature2 />
      <MainFeature3 />
      <Footer />
    </AnimationRevealPage>
  );
};
