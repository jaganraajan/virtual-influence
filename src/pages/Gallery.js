import React, { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Portfolio from "components/cards/ProfileThreeColGrid2.js";
import Portfolio3 from "components/cards/ProfileThreeColGrid3.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import { PrimaryButton } from "components/misc/Buttons";
import Blog from "components/blogs/ThreeColSimpleWithImage.js"

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const StyledHeader = styled(Header)`
  ${tw`p-5 pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container2 = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: linear-gradient(#414141, #000000);`;

const Container3 = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-4/6 min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1585974738771-84483dd9f89f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-25`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-4/6 min-h-144 flex-auto flex-col `;
const Content = tw.div`absolute left-0 bottom-0 px-4  flex-1 flex-col justify-start items-start`;
// const Content = tw.div`px-4 float-bottom`;

const Heading2 = styled.h1`
  ${tw`p-5 text-3xl text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;



const Text = styled.div`
  ${tw`text-lg  text-gray-800`}
  p {
    ${tw`ml-4 lg:w-1/2 justify-center leading-loose`}
  }
  h1 {
    ${tw`text-3xl font-bold mt-10`}
  }
  h2 {
    ${tw`text-2xl font-bold mt-8`}
  }
  h3 {
    ${tw`text-xl font-bold mt-6`}
  }
  ul {
    ${tw`list-disc list-inside`}
    li {
      ${tw`ml-2 mb-3`}
      p {
        ${tw`mt-0 inline leading-normal`}
      }
    }
  }
`;

const PostTextContainer = tw.div``

export default ({
    navLinks,
    headingText = "One-day Trip To Discovery Village",
    headingText2 = "Unleash Speechcraft Program",
    posts = [
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F1.jpg?alt=media&token=d9cee0a1-afd6-40a9-be25-95b7187d0753",
        category: "Kanakpura Road, Bangalore",
        date: "March 7, 2021",
        title: "Ignite- The Outdoor Extravaganza",
        description:
          "On this day, Daffodilians packed their bags and buckled up to take a break from the pandemic and go out in the sun and make new memories, following the COVID-19 guidelines. The fun and frolic excursion also included the most sensational Cricket Tournament - Daffodils Premier Championship.",
        url: "https://timerse.com",
        featured: true
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F2.jpg?alt=media&token=e9003940-1276-45b6-9232-c71d206dbf1f",
        
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F3.jpg?alt=media&token=3f810819-22b0-4c38-8147-f3a2d7b5e28c",
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F4.jpg?alt=media&token=c787ac72-f151-4627-9f82-b1d4d70c62dc",
      },
      {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F5.jpg?alt=media&token=d64fb6fb-06db-485a-8f51-93fe981f8448",
      },
      {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F6.jpg?alt=media&token=e1e4fcf0-8d1f-4c30-8166-2636c28de523",
      },
      {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F7.jpg?alt=media&token=d897bd16-adcc-48f8-ba16-bf8c0818af17",
      },
      {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F8.jpg?alt=media&token=004cc696-a1e8-4fd3-9bb9-ae1c8d7948c0",
      },
      {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F9.jpg?alt=media&token=461d7809-54b5-44a1-8c7d-31fdfc711517",
      },
      {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F10.jpg?alt=media&token=6f0cdb08-96f2-43e9-807f-f38c6d3a0180",
      }
    ],
    posts2 = [
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F1.jpg?alt=media&token=d9cee0a1-afd6-40a9-be25-95b7187d0753",
        category: "Kanakpura Road, Bangalore",
        date: "March 7, 2021",
        title: "Ignite- The Outdoor Extravaganza",
        description:
          "On this day, Daffodilians packed their bags and buckled up to take a break from the pandemic and go out in the sun and make new memories, following the COVID-19 guidelines. The fun and frolic excursion also included the most sensational Cricket Tournament - Daffodils Premier Championship.",
        url: "https://timerse.com",
        featured: false,
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F2.jpg?alt=media&token=e9003940-1276-45b6-9232-c71d206dbf1f",
        
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F3.jpg?alt=media&token=3f810819-22b0-4c38-8147-f3a2d7b5e28c",
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/discovery%2F4.jpg?alt=media&token=c787ac72-f151-4627-9f82-b1d4d70c62dc",
      },
    ],
  }) => {
    const navLinks3 = [
        <NavLinks key={1}>
          {navLinks.map((navLink) => (
            <NavLink href={navLink.url}>
              {navLink.title}
            </NavLink>
          ))}
        </NavLinks>
      ];
      const [visible, setVisible] = useState(4);
  const onLoadMoreClick = () => {
    setVisible(v => v + 6);
  };
  // This setting is for animating the post background image on hover


  return (
    <AnimationRevealPage>
        <Container2><StyledHeader links={navLinks3} /></Container2>
        <Container>
        <ContentWithPaddingXl>
        <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} />
                  {post.featured && <Info>
                  {post.featured && <Category>{post.category}</Category>}
                    {post.featured && <CreationDate>{post.date}</CreationDate>}
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>}
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
        <ContentWithPaddingXl>
        <HeadingRow>
            <Heading>{headingText2}</Heading>
          </HeadingRow>
          <Blog />
        </ContentWithPaddingXl>
      </Container>

        <Portfolio />
        <Portfolio3 />
        <Footer />
    </AnimationRevealPage>
  );
};

