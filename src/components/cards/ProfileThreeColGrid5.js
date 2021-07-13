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
const Card = tw.div`mt-24 mx-10 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
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
  heading = "The 37th Committee of Daffodils Toastmasters Club",
  subheading = "The whole team",
  description = "A bunch of excited and energetic souls took charge of Daffodils Toastmasters Club on 2nd January 2021. The Installation Officer was our club member, Kumaran M. Pethi, DTM. For the first time ever, the Chief Guest for our Installation Ceremony was the International President of Toastmasters, Richard E. Peck, DTM. The ceremony was also attended by dignitaries from the District, guests and fellow Daffodilians." ,
  cards = [
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fmadhu3.jpg?alt=media&token=4474c3f8-96ee-450c-a4c5-2d2cf7f36ba4",
      position: "First Runner-up at International Speech Contest District 92, 2021",
      name: "TM Madhusudhan",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/newmembers%2Fshreenidhi21.jpg?alt=media&token=3d4d5fad-9fed-409a-b805-168996ccbaa7",
      position: "First Runner-up at Evaluation Contest District 92, 2021",
      name: "TM Shree Nidhi",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
        {/* <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer> */}
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
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
    </Container>
  );
};
