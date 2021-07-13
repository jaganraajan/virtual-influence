import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading } from "../misc/Headings.js";


const Heading = tw(SectionHeading)`text-gray-900 text-center w-screen mt-5`;
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
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-40 md:h-80 bg-contain bg-no-repeat bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-base leading-loose`;
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
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/meetings%2F1.jpg?alt=media&token=b861cd9f-1c3f-4620-9645-9b05164c669c",
      subtitle: "TM Jagadeesh R",
      title: "International Linkers Meet",
      description:
        "For the first time ever, Daffodils Toastmasters Club conducted an INTERNATIONAL LINKERS MEETING! We collaborated with TGIS Toastmasters Club which is based in Dubai in the United Arab Emirates. The two amazing clubs came together to think, grow, inspire and succeed as one! That day, we broke the barriers of fear, the barriers of distance and the barriers of communication, ",
      url: ""
    },

    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/meetings%2F2.jpg?alt=media&token=65d87456-2e6a-4b2d-9e71-fe3db2dec1b5",
      subtitle: "TM Aashish",
      title: "Reverse Meeting - Madam I’m Adam",
      description:
        "To take a break from the routing virtual meetings, the VPE team decided to do something special. A special and creative meeting was conducted in reverse! Starting from the General Evaluator and the evaluators  evaluating the speeches which were yet to happen.  Every person who took the stage took their role seriously in making sure there did everything in reverse. It surely brought in creativity from members who attended as well.",
      url: "https://timerse.com"
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/meetings%2F3.jpg?alt=media&token=f47374fe-e0a3-41d1-a4b1-90f5a779604b",
      subtitle: "TM Aashish",
      title: "900th Meeting - Justice is Served!",
      description:
        "On the special occasion of the 900th meeting of Daffodils, there was a meeting conducted in courtroom style. The speakers were the accused, the evaluators were the jury and the GE was the chief judge. There was a special education session on how to “Perfect your speech by adding humour”.",
      url: "https://timerse.com"
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/meetings%2F4.jpg?alt=media&token=7f4abb43-bacd-4980-a470-24d3929cb4ba",
      subtitle: "TM Aashish",
      title: "All Presidents Meeting",
      description:
        "To take a break from the routing virtual meetings, the VPE team decided to do something unique and special. This was a special meeting in which 1 President and 9 Past Presidents of Daffodils took the stage one after another. All role takers - the speakers, evaluator, TMOD, GE and TTM were past presidents. The meeting was followed by election for electing the 38th committee members of Daffodils Toastmasters Club.",
      url: "https://timerse.com"
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/meetings%2F5.jpg?alt=media&token=f057f552-d52a-4868-b0ad-53e928c9c930",
      subtitle: "TM Aashish",
      title: "Dr. Ram Jayaraman Debate Contest",
      description:
        "The Quarter Finals of Dr Ram Jayaram Debate Contest was held at Daffodils Toastmasters Club on 12th June 2021. Ten Toastmasters Clubs participated in the debate. It was a thrilling contest in which five topics were given to each pair of teams. For each topic there were five rounds- Opening remarks, Response, Rebuttal, Audience questions and Closing remarks. In this close knit competition, four teams qualified for the semifinals. They are Smedley’s Speaker Society, Banjara Toastmasters, IBM Toastmasters and LA 1924 Toastmasters.",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <Heading>Landmark Meetings</Heading>
          {/* <HeadingDescription>
            At Daffodils Toastmasters Club, the 37th committee goes the extra mile every single day to give you an experience unlike anything you have seen before.
          </HeadingDescription> */}
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                {/* <Subtitle>{card.subtitle}</Subtitle> */}
              </Details>
            </Card>
          ))}
        </Content>
        
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
