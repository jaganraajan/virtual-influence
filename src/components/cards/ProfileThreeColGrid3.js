import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
// import Surya from "images/surya.jpg";

const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background: url("${props.imageSrc}") no-repeat;`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "New members in our family",
  subheading = "The new team",
  description = "New leaders who will uphold the legacy of our club for the term July to December 2021" ,
  cards = [
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fameet.jpeg?alt=media&token=80fe2e0b-1441-42c7-93e1-2ee4820b21c4",
      position: "President",
      name: "TM Ameet",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fanandi.jpeg?alt=media&token=c64a5642-1a50-4b8e-b001-b8b0d17fc193",
      position: "Vice-president education",
      name: "TM Anandi",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fchetana.jpeg?alt=media&token=d9bc1145-68c0-4e2d-98e3-affa0b1695a0",
      position: "Vice-president membership",
      name: "TM Chetana",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fdinesh.jpeg?alt=media&token=d42207cc-2848-4091-9902-e4f7e636ff7b",
      position: "Vice-president Public Relations",
      name: "TM Dinesh",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fgeetha.jpeg?alt=media&token=fb85e9b3-a77a-4418-9266-691577ef1935",
      position: "Secretary",
      name: "TM Geetha",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Flakshmi.jpeg?alt=media&token=daf19b4e-416f-4fbe-a6d1-45868f1b8e98",
      position: "Treasurer",
      name: "TM Lakshmi",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fpranav.jpeg?alt=media&token=c767b272-7f02-4669-836c-cf35d0e57679",
      position: "Sargeant-At-Arms",
      name: "TM Pranav",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2FAnkita.jpeg?alt=media&token=22ffc0b7-cd91-4127-86c5-8c3163de6681",
      position: "Immediate Past President",
      name: "TM Ankita",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fapoorva2.jpg?alt=media&token=00934691-ea56-4bed-ba0c-b7afe4bdb9e2",
      position: "Immediate Past President",
      name: "TM Apoorva",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fharini.jpeg?alt=media&token=194198dc-c5b9-4a85-a2f8-e6e519903cb2",
      position: "Immediate Past President",
      name: "TM Harini",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fanirudh.jfif?alt=media&token=898f3b7b-da92-453e-8675-719ea1e20287",
      position: "Immediate Past President",
      name: "TM Anirudh",
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fjazeena.png?alt=media&token=6ecb098a-4fb9-404f-95f5-69729e33f220",
      position: "Immediate Past President",
      name: "TM Jazeena",
    },{
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fmanasa.jpeg?alt=media&token=634ac712-abdb-4afa-8f68-072f350ffaa3",
      position: "Immediate Past President",
      name: "TM Manasa",
    },{
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2FAnushree2.jpg?alt=media&token=978a4d6a-5a64-4bad-9d67-0014926c3b5b",
      position: "Immediate Past President",
      name: "TM Anushree",
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          {heading && <Heading>{heading}</Heading> }
          {/* {description && <Description>{description}</Description> } */}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                {/* <span className="position">{card.position}</span> */}
                <span className="name">{card.name}</span>
                {/* <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks> */}
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
