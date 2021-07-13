import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm lg:max-w-xs`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-contain bg-no-repeat bg-center h-80 lg:h-64 rounded`
]);
const Category = tw.div`mt-4 text-secondary-100 font-bold text-sm`;
const Title = tw.h4`mt-2 leading-relaxed font-bold text-lg text-center`;
const Link = tw.a`inline-block mt-2 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default () => {
  const blogPosts = [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/gallery%2Ftm.jpeg?alt=media&token=348481af-d3c8-4721-8cdf-592627601302",
      category: "Event Tips",
      title: "TM Fursey Gotuaco using props to demonstrate his point in the educational session",
      url: "https://timerse.com"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/gallery%2Fgrp.png?alt=media&token=9b121a29-07ed-4e8a-a65b-cd82a76fb117",
      category: "Reviews",
      title: "Graduation Ceremony of the Speechcrafters at Unleash on 13th June 2021!",
      url: "https://reddit.com"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/gallery%2Fgrp2.png?alt=media&token=c3c1bc93-41a9-4937-9219-afd2cec3eb9a",
      category: "Discover",
      title: "...and as per tradition there goes all the hats ",
      url: "https://timerse.com"
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          {blogPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Title>{post.title}</Title>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
