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
import Footer2 from "components/footers/MiniCenteredFooter.js";
import MainFeature3 from "components/features/ThreeColCenteredStatsPrimaryBackground";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import FastIconImage from "images/fast-icon.svg";

import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
import Toastmasters from "images/toastmaster1.png";
import Toastmasters2 from "images/toastmaster2.png";
import Daffodils from "images/dtm.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Hero />
      <MainFeature1
        subheading={"TOASTMASTERS INTERNATIONAL"}
        heading="WHERE LEADERS ARE MADE"
        buttonRounded={false}
        description="Toastmasters International is a nonprofit educational
        organization that teaches public speaking and leadership
        skills through a worldwide network of clubs. Since 1924, Toastmasters International has
        helped people from diverse backgrounds become more
        confident speakers, communicators, and leaders."
        primaryButtonText="See Portfolio"
        imageSrc = {Toastmasters}/>
      <MainFeature3/>
      <MainFeature1
        subheading={<Subheading>Club Number: 1766 | Area C4 | District 92</Subheading>}
        heading="DAFFODILS
        TOASTMASTERS CLUB"
        description="Daffodils was conceptualised by its charter members who were a financial consultant, a laparoscopic surgeon, an orthodontist,
        entrepreneurs in the software services, chemical and forestry
        sectors, an HR professional and a banker!
        The club secured its charter i.e. its official recognition from Toastmasters International on 12th June, 2003 and has gone from
        strength to strength since then!
        Daffodils has the right mix of youngsters and seasoned members,
        making it the ideal place for learning coupled with fun."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc={Daffodils}
        textOnLeft={false}
      />
      <Features
        subheading={""}
        heading="Our Club's Mission"
        description="Creating a warm, receptive environment where one
        can acquire the poise and confidence to address an audience. To help
        each other bloom and become better people."
        cards={[
          {
            imageSrc: SimpleIconImage,
            title: "Loving Community",
            description: "We have excellent speakers in our community who will guide you in your public speaking journey"
          },
          {
            imageSrc: ShieldIconImage,
            title: "Boost Your Confidence",
            description: "Every experience on stage will make you gain strength, courage and confidence"
          },
          {
            imageSrc: ReliableIconImage,
            title: "Constructive Feedback",
            description: "Get valuable feedback on how to master the art of Public Speaking"
          },
        ]}
        linkText=""
      />
      <FAQ
        imageSrc={customerSupportIllustrationSrc}
        imageContain={true}
        imageShadow={false}
        subheading="FAQs"
        heading={
          <>
            Do you have <span tw="text-primary-500">Questions ?</span>
          </>
        }
    />
      {/* <ContactUsForm /> */}
      <Footer2 />
    </AnimationRevealPage>
  );
};
