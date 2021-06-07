import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/FiveColumnDark.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";



import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import FastIconImage from "images/fast-icon.svg";

import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";


const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <Blog />
      <Footer />
    </AnimationRevealPage>
  );
};
