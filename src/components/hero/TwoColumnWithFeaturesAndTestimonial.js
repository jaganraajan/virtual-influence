import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import HeaderBase from "components/headers/light.js";
import { SectionHeading } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { Container, ContentWithVerticalPadding } from "components/misc/Layouts.js";
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as QuotesLeftIconBase } from "images/quotes-l.svg"
import { ReactComponent as SvgDecoratorBlob1 } from "images/dot-pattern.svg"
import Linda from "images/linda1.png"
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import Daffodils from "images/dtm.jpg";

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 h-full flex flex-col`;
const StyledHeader = styled(Header)`
  ${tw`bg-black pt-8 max-w-none p-5 w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw` text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const WrapContainer = tw.div`w-screen m-0 p-0`;
const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
// const Header = tw(HeaderBase)`max-w-none`;
const Row = tw.div`flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8`;
const Column = tw.div``;
const TextColumn = tw(Column)`ml-5 lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-900 leading-snug xl:text-6xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-8 inline-block w-56 tracking-wide text-center py-5`;
const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700`;
const ImageColumn = tw(Column)`lg:mr-0 relative mt-16 lg:mt-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform xl:-translate-x-24 xl:-translate-y-16`;
const Image = tw.img`max-w-full w-96 rounded-t sm:rounded relative z-20`;
const Image2 = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`,
]);
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 translate-y-10 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-sm rounded-b md:rounded-none relative sm:absolute bottom-0 inset-x-0 z-20 px-8 py-6 sm:px-10 sm:py-8 bg-primary-900 text-gray-400 font-medium transform md:-translate-x-32 text-sm leading-relaxed md:-mr-16 xl:mr-0`
const QuotesLeftIcon = tw(QuotesLeftIconBase)`w-16 h-16 md:w-12 md:h-12 absolute top-0 left-0 text-gray-100 md:text-red-500 transform translate-x-1 md:-translate-x-1/2 md:-translate-y-5 opacity-10 md:opacity-100`
const Quote = tw.blockquote``
const CustomerName = tw.p`mt-4 font-bold text-white`
const CustomerCompany = tw.p`mt-1 text-sm text-gray-500`


export default ({
  heading = "Exclusive interview with Linda-Marie Miller, DTM",
  description = "Thousands of Toastmasters, representing over 100 countries, battled for the title of World Champion of Public Speaking in the 2020 Virtual Convention. Competing among the elites, Linda-Marie Miller emerged as the First Runner-Up in the 2020 World Championship of Public Speaking.",
  imageSrc = "images/linda1.jpg",
  imageDecoratorBlob = true,
  primaryButtonUrl = "https://google.com",
  primaryButtonText = "Get Started",
  buttonRounded = true,
  features = ["Available in 7 Locations", "Premium Internet Backbone", "99.99% Uptime SLA"],
  testimonial = {
    quote: "The first quality one must cultivate in order to change the world with speaking is the quality of deeply caring about the individual futures of other people and the world as a whole.",
    customerName: "Linda-Marie Miller, DTM",
    customerCompany: "First Runner-up at WCPS 2020"
  }
}) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/interview">Interview</NavLink>
    </NavLinks>,

  ];
  return (
    <WrapContainer>
      <HeroContainer><StyledHeader links={navLinks}/></HeroContainer>
      
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <TextColumn>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              {/* <PrimaryButton as="a" href={primaryButtonUrl} css={buttonRoundedCss}>
                {primaryButtonText}
              </PrimaryButton>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList> */}
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image imageSrc={"https://images.unsplash.com/photo-1605734168002-ecf8b718491b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}/>
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <QuotesLeftIcon/>
                  <Quote>{testimonial.quote}</Quote>
                  <CustomerName>{testimonial.customerName}</CustomerName>
                  <CustomerCompany>{testimonial.customerCompany}</CustomerCompany>
                </Testimonial>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </WrapContainer>
  );
};
