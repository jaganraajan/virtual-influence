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
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-144 md:h-144 bg-contain bg-no-repeat bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-base whitespace-pre-wrap`;
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
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/initiatives%2Fe1.jpg?alt=media&token=b65ca36f-98f8-4b9a-b016-41cbed45305b",
      subtitle: "TM Jagadeesh R",
      title: "Attempt, Articulate and Ace Your Table Topics by Aditya Maheswaran, DTM",
      description:
        "The various types of table topics with example are:\n\n1.	Situation - If you saw a bag of money.. or When you are sitting in a train…\n2. Quotes - Eg: The best thing about future is that it comes one day at a time.\n3. Single words - Eg: Procrastination or Bliss\n4. Open ended questions - Eg: Poverty in India or Reservation is a band.\n5.	Abstract - Eg: How would you put the paste back in the tube or Everything is born out of nothingness.\n\nOne should listen to the topic carefully as the topic can be of two types':\n1. Direct topic - Eg: Honesty is the best policy.\n2. Indirect topic - Eg: The grass is get on the other side of the fence.\n\nTechniques to dissect a topic:\nA. Vital few-Trivial many \nB. 4 Wives and 1 Husband technique\nC. Pros and cons technique\nD. Define-Describe-Define technique",
      url: ""
    },

    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/initiatives%2Ff2.jpg?alt=media&token=a47d320e-bfe8-4aab-accc-c83e3d2ce37e",
      subtitle: "TM Aashish",
      title: "Perfect your speech by adding humor by Luisa Montalvo, DTM",
      description:
        "1.	Embarrass yourself - Don’t make fun of the audience as they might get offended. Instead of attacking or offending your audience, attack and offend yourself.\n2. Use props - Use props to get the audience interested in your speech, but don’t let the props overtake your speech.\n3. Catch audience by surprise - Don't repeat same old jokes. Do something different.\n4. Make a joke about your joke - If your joke fails to evoke laughter from the audience make a joke about that joke falling flat, the audience will laugh for that.\n5. Give audience time to laugh - Pause after you have told the joke, allow them to laugh, let the laughter subside, then move onto the next sentence.\n6. Practice speaking in front of different audiences- What you think is not offensive may be offensive for some in the audience. Ask audience if they were offended.",
      url: "https://timerse.com"
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/initiatives%2Ff3.jpg?alt=media&token=8f2ffee1-031e-45c6-8b27-2c654a9b4038",
      subtitle: "TM Aashish",
      title: "Everyday Creativity by Geetha Prasanna, DTM",
      description:
        "1.	Creativity is the use of skill and imagination to produce something new or to produce art. It is among the top 3 in demand skills in 2022 as per World Economic Forum.\n2.	Types of thinking- Creative thinking and Logical thinking. For creative thinking give shorter time and be spontaneous, because if you think for a longer time you will start thinking logically and not creatively.\n3.	To be more creative:  Be curious about the things around you, challenge your assumptions, disrupt habitual patterns,  ask a lot of questions, focus on quantity, not quality i.e gather a lot of creative ideas and then logically think and select the best idea.\n4.	Ways to build creative confidence: Seek new experiences, think divergently, accept feedback and fail-up and finally build a supportive network.\n5.	Being creative is being spontaneous, curious and thinking fast.\n6.	Keep a book- whenever you get an idea write it down in that book for later reference.\n7.	Brain is a muscle - The more you exercise it, the stronger it becomes. Solve puzzles, riddles, etc.",
      url: "https://timerse.com"
    }
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <Heading>Key Takeaways from Educational Sessions</Heading>
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
