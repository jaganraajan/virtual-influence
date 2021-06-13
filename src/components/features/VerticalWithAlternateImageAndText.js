import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import Portfolio from "components/cards/ProfileThreeColGrid4.js"


const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-top mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`mt-4 font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Title2 = tw.h4`text-3xl mt-4 font-bold text-gray-900`;
const Title3 = tw.h4`text-3xl mt-16 text-center font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose whitespace-pre-wrap`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/old%2Fjagan.jpg?alt=media&token=4ed05b4d-16ef-403b-a072-1c4da6f85bf1",
      subtitle: "TM Jagadeesh R",
      title: "Editor's Desk",
      role: "Vice President of Public Relations",
      description:
        "Business partners, leaders, trusted advisors,  sales people, collaborators, experts – every one of us needs influencing skills.  We want people to buy into our ideas, follow our lead and trust what we say.\n\nBut the pandemic has truly changed how we interact in the world. We rely on technology more than ever and most of our interaction with others is virtual. The question now is how do you build these relationships virtually and build the trust?\n\nAt the start of my term as the Vice President of Public Relations, I found it hard to develop virtual relationship with my President and my associates. As I grew and learnt how to navigate this new world, I gained valuable experiences which showed me the optimal way to build stronger relationships.\n\nThis website is our way of influencing you by providing a user-friendly way of reading our newsletter. We hope you enjoy reading this as much as we enjoyed creating this website.  ",
      url: ""
    },

    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/old%2Faashish.jpg?alt=media&token=241caa67-9cd5-43a6-ae38-171a8ff97223",
      subtitle: "TM Aashish",
      title: "President's Desk",
      role: "President of Daffodils Toastmasters Club",
      description:
        "Toastmasters, a non-profit organization is one of the best examples to see the difference between power and influence. It shines because the platform has influence as a diamond made of constructive critisism, rightly valued experience of seasoned Toastmasters, and encouraging environment. Lately, it has been constrained to virtual connections. Although it started slow at the beginning of the pandemic, it has grown exponentially over the last one a half year. A lot of us has adapted quickly to this setting and we are able to virtually influence each other. A good example of that is the building of relationships over the virtual platform in my home club, or rather a family, Daffodils Toastmasters Club!",
      url: "https://timerse.com"
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <Title>#ExtraMileEveryday</Title>
          <HeadingDescription>
            At Daffodils Toastmasters Club, the 37th committee goes the extra mile every single day to give you an experience unlike anything you have seen before.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
            <Card reversed={true}>
              <Image imageSrc={cards[0].imageSrc} />
              <Details>
                <Title>{cards[0].title}</Title>
                <Description>{cards[0].description}</Description>
                <Title2>{cards[0].subtitle}</Title2>
                <Subtitle>{cards[0].role}</Subtitle>
              </Details>
            </Card>
            <Title3>VPPR Associates</Title3>
            <Portfolio />

            <Card reversed={false}>
              <Image imageSrc={cards[1].imageSrc} />
              <Details>
                <Title>{cards[1].title}</Title>
                <Description>{cards[1].description}</Description>
                <Title2>{cards[1].subtitle}</Title2>
                <Subtitle>{cards[1].role}</Subtitle>
              </Details>
            </Card>
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
