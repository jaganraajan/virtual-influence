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
import Footer from "components/footers/MiniCenteredFooter.js";
import { PrimaryButton } from "components/misc/Buttons";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PropTypes from "prop-types";
import ResponsiveVideoEmbed from "helpers/ResponsiveVideoEmbed";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900 text-center my-5 mx-auto`;
// const Heading2 = tw(SectionHeading)`text-right text-gray-500`;
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

const Image2 = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`mt-10 min-h-144 w-full border-gray-500 bg-contain bg-no-repeat bg-top rounded-t-lg`}
`;


const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div`whitespace-pre-wrap`;

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

const Heading2 = styled.h2`
  ${tw`p-5 text-5xl text-center text-gray-500 leading-snug mt-24 sm:mt-10`}
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

const PostContainer2 = tw.div`p-5`


const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
      <iframe
        width="400"
        height="300"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };


export default ({
    navLinks,
    headingText = "Photo by TM Madhusudhan",
    headingText2 = "Featured In The Honorable Section Of Toastmasters International May 2021 Newsletter",
    posts = [
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/art%2F00.jpg?alt=media&token=3133b6bc-8d33-4d1d-a033-280f21bd2271",
        category: "TM Madhusudhan",
        date: "April 21, 2020",
        title: "What Does Toastmasters Mean to You?",
        description:
          "Toastmasters means navigating through unchartered waters of public speaking and leadership. Causing ripple on the waters of time was possible when I started rowing toward the best version of myself. \n\n Click on the image to be redirected to Toastmasters International Website",
        url: "https://www.toastmasters.org/magazine/magazine-issues/2021/may/photo-contest",
        featured: true
      }
    ]
  }) => {
    const { isOpen } = false;
    const navLinks3 = [
        <NavLinks key={1}>
          {navLinks.map((navLink) => (
            <NavLink href={navLink.url}>
              {navLink.title}
            </NavLink>
          ))}
        </NavLinks>
      ];
      const [visible, setVisible] = useState(7);
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
            <HeadingRow>
            <Heading2>{headingText2}</Heading2> 
          </HeadingRow>
          <Posts>
            {posts.slice(0, visible).map((post, index) => (
              <PostContainer key={index} featured={post.featured}>
                <Post className="group" as="a" href={post.url}>
                  <Image imageSrc={post.imageSrc} onClick={console.log("Hello")}/>
                  <Info>
                    <Category>{post.category}</Category>
                    {/* <CreationDate>{post.date}</CreationDate> */}
                    <Title>{post.title}</Title>
                    {post.featured && post.description && <Description>{post.description}</Description>}
                  </Info>
                </Post>
              </PostContainer>
            ))}
          </Posts>
          {/* {visible < posts.length && (
            <ButtonContainer>
              <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
            </ButtonContainer>
          )} */}
        </ContentWithPaddingXl>
        </Container>
        <Container>
            <Heading>Drawing by TM Jagan</Heading>
            <Image2 imageSrc={"https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/art%2Fdrawing_sai_baba.jpeg?alt=media&token=46123859-3a7a-4c48-8fe8-1d7b7a04f62f"}/>
        </Container>
        <Container>
            <Heading>Drawing by TM Ankita</Heading>
            <Image2 imageSrc={"https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/art%2F3.jpg?alt=media&token=050ed55b-5de6-4390-9cec-4ec8720a5489"}/>
        </Container>
        <Container>
            <Heading>Digital Art by TM Suman</Heading>
            <Image2 imageSrc={"https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/art%2F2.jpg?alt=media&token=406edda9-d23c-4227-936c-63590fae4f23"}/>
        </Container>
        <Container>
            <Heading>Comic Strip by TM Dinesh</Heading>
            <Image2 imageSrc={"https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/art%2F1.jpg?alt=media&token=5654f750-da7b-4417-82d5-d666c3a55fd5"}/>
        </Container>
        <Container>
            <Heading>Comic Strip by TM Dinesh</Heading>
            <Image2 imageSrc={"https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/art%2F4.jpg?alt=media&token=35159165-3881-41b3-91be-7f9f6fc38a10"}/>
        </Container>
        
      <Heading>Dance by TM Ankita</Heading>
      <PostContainer2><ResponsiveVideoEmbed url="https://youtube.com/embed/4ClEUNrG3Ww" /></PostContainer2>
      <PostContainer2><ResponsiveVideoEmbed url="https://youtube.com/embed/IhpTIYfCOZU" /></PostContainer2>
      <PostContainer2><ResponsiveVideoEmbed url="https://youtube.com/embed/4dnH-D0hP4s" /></PostContainer2>
        <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
    imageSrc:
      "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    category: "Travel Guide",
    date: "April 19, 2020",
    title: "Visit the beautiful Alps in Switzerland",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://reddit.com"
  });