import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import MainFeature1 from "components/features/TwoColWithButton.js";
import Features from "components/features/ThreeColSimple.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import Footer2 from "components/footers/MiniCenteredFooter.js";
import MainFeature3 from "components/features/ThreeColCenteredStatsPrimaryBackground";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import SimpleIconImage from "images/simple-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import ReliableIconImage from "images/reliable-icon.svg";
import FastIconImage from "images/fast-icon.svg";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";
// import Toastmasters from "images/toastmaster1.png";
// import Toastmasters2 from "images/toastmaster2.png";
// import Daffodils from "images/dtm.jpg";
const Heading = tw(SectionHeading)`text-center`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0  lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const Image = styled.div`
  ${props => css`background: url("${props.imageSrc}") no-repeat;`}
  ${tw`w-full h-144 bg-contain bg-center rounded`}
`
const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default (navLinks) => {
  return (
    <AnimationRevealPage>
      <Hero navLinks={navLinks}/>
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
        imageSrc = "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/old%2Ftoastmaster11.jpg?alt=media&token=080c243e-8cd1-48de-9c0b-961cf61daa3a"/>
      <MainFeature3/>
      <MainFeature1
        subheading={<Subheading>Club Number: 1766 | Area C4 | District 92  | Region 13</Subheading>}
        heading="DAFFODILS
        TOASTMASTERS CLUB"
        description="Daffodils Toastmasters Club was chartered on 12th
        June 2003 and is a community club based in
        Malleswaram. We are part of Area C4, Division C,
        District 92 of Toastmasters International.
        Our
          biggest testimony comes from the
          Executive Director of TMI, Daniel
          Rex who termed Daffodils “The
          Best Club In the World”.
        Daffodils has the right mix of youngsters and seasoned members,
        making it the ideal place for learning coupled with fun."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc="https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/old%2Fdtm.jpg?alt=media&token=8dc224d8-df59-4460-88a6-58ce936aa4b0"
        textOnLeft={false}
      />
      <Features
        subheading={""}
        heading="Our Club's Mission"
        description="Creating a warm, encouraging environment where one
        can acquire the poise, constructive feedback and confidence to address an audience. To help
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
      <Heading>DCP STATUS</Heading>;
        <Description> The Distinguished Club Program (DCP) includes 10 goals that a club should strive to achieve each year, using the Club Success Plan as a guide.</Description>;
      <Image imageSrc={"https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/new%2FWhatsApp%20Image%202021-06-11%20at%208.16.15%20AM.jpeg?alt=media&token=5e5662a9-186a-418e-87c0-fc9006f44594"}></Image>
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
