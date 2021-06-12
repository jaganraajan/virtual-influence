import React from "react";
import tw from "twin.macro";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { motion } from "framer-motion";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer from "components/footers/MiniCenteredFooter.js";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-center lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-screen`;
const PostsContainer = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-center`;
const Post = tw(motion.a)` flex-1 block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}"), linear-gradient(#000000, #222222);`,
  tw`h-64 bg-cover bg-center rounded bg-no-repeat`
]);
const Title = tw.h5`mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container2 = styled(motion.div)(props => [
  `background-image: url("${props.imageSrc}"), linear-gradient(#000000, #222222);`,
  tw`relative -mx-8 -mt-8 bg-center bg-contain bg-no-repeat h-4/6 min-h-128`
]);


const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-50`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-4/6 min-h-128 flex-auto flex-col `;
const Content = tw.div`absolute left-0 bottom-0 px-4  flex-1 flex-col justify-start items-start`;
// const Content = tw.div`px-4 float-bottom`;

const Heading2 = styled.h1`
  ${tw`p-5 text-3xl text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;



const Text = styled.div`
  ${tw`text-lg text-center mx-auto max-w-4xl mb-10 text-black whitespace-pre-wrap`}
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

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``


const Heading3 = styled.h3`
  ${tw`block p-5 text-3xl text-left sm:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-500 leading-snug my-5 text-right`}`;

  const HorizontalLine = () => (
    <hr
        style={{
            color: "black",
            height: 10
        }}
    />
  );

export default (navLinks) => {
  const navLinks3 = [
    <NavLinks key={1}>
      {navLinks.navLinks.map((navLink) => (
        <NavLink href={navLink.url}>
          {navLink.title}
        </NavLink>
      ))}
    </NavLinks>
  ]
  const poems = [
  {
    title: "At home, we’ve stayed….",
    author: "TM Keshav",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/keshav.jpg?alt=media&token=c20b5165-0439-4704-8ad6-ea29c04e8ef0",
    article: "Stay at Home, Stay Safe is the message we hear each day,\n There is an unseen virus lurking around, let's keep it at bay.\n Our daily routines have been affected, it has taken time to adjust,\nIt's killing many people, businesses have gone bust.\n\nWe can walk the empty streets that are within our gates, \n Greet friends and neighbours, who may not be our best mates.\n But it's interesting how people's lives can be,\n When you take time to talk and share. \n\n Inside the house is polished and the furniture dusted and glows,\n The garden is weed-free, cupboards rearrange, items in a row.\n Old receipts and papers sorted and committed to the bins,\n With so much time to spare each day, where do we begin?\n\n Be thankful for our homes, our families and friends,\n What is happening around the world is hard to comprehend.\n Our village life-style and all it offers gives us a feeling of security,\n And we will adjust to these difficult times because of our maturity.\n Someday this all will end.\n Someday,we just hope this all will end.",
    imgSrc: "https://images.unsplash.com/photo-1585331505473-7586f9cb0854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/harini2.jpg?alt=media&token=043194c0-5a44-4087-b07a-77a4405f65d2",
        title: "Before I'm gone",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Harini",
        authorProfile: "Vlogger",
        url: "/articles/poem/2"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2038&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Manoj.jpg?alt=media&token=baf686d5-524a-4833-8f29-f16a17a7f71c",
        title: "Improve your Writing Style with evocativeness ",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Manoj",
        authorProfile: "",
        url: "/articles/member/3"
      }
    ]
  }, 
  {
    title: "Before I'm gone",
    author: "TM Harini",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/harini2.jpg?alt=media&token=043194c0-5a44-4087-b07a-77a4405f65d2",
    article: "I was hoping to say goodbye to you, not sure how time flew; \n Spring brought tears and in summer, I drowned in my fears.\n I bit my tongue while I cried, no matter how hard I tried;\n I needed to know I’m not alone, so touch me through the phone.\n\n Your words nursed my wounds, your tune guided me away from doom\n I can feel myself slip away; to the darkest parts of reality my mind sways;\n It’s a fall I’m willing to take, my nerves I have to shake.\n I need to find my way back home, so touch me through the phone.\n\n Years turned to days, days turned to seconds, seconds held together by pain I reckon.\n Ink on my paper, forming patterns like Skyscrapers, hoping the highs describe my lows\n I hear the stream flow, I see winter’s first snow.. filling myself up one last time;\n It’s almost time for me to go, so I beg you! Touch me through the phone.",
    imgSrc: "https://images.unsplash.com/photo-1488509082528-cefbba5ad692?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/shreenidhi21.jpg?alt=media&token=0b23a1e9-0527-4a8d-a79e-9d5a3e0f2b81",
        title: "Connect beyond Disconnections",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Shree Nidhi",
        authorProfile: "Vlogger",
        url: "/articles/member/2"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/apoorva2.jpg?alt=media&token=4f5d086d-b8e5-4641-b549-524ead63389b",
        title: "The Ransom",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Apoorva",
        authorProfile: "Vlogger",
        url: "/articles/member/4"
      }
    ]
  },
]
  const { number } = useParams()

  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%"
    },
    hover: {
      backgroundSize: "110%"
    }
  };

  //Recommended: Only 2 Items
  const popularPosts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      title: "Tips on how to travel safely in foreign countries",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Charlotte Delos",
      authorProfile: "",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80",
      authorImageSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
      title: "Enjoying the beach life while on a vacation",
      description:
        "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
      authorName: "Adam Cuppy",
      authorProfile: "",
      url: "https://reddit.com"
    }
  ];

  const recentPosts = [
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Getting the most out of your vacation",
      authorName: "Aaron Patterson",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Choosing the perfect Safaris in Africa",
      authorName: "Sam Phipphen",
      url: "https://reddit.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Hiking during the monsoon in Asia",
      authorName: "Tony Hawk",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80",
      title: "Must carry items while travelling to Thailand",
      authorName: "Himali Turn",
      url: "https://timerse.com"
    },
    {
      postImageSrc:
        "https://images.unsplash.com/photo-1546971587-02375cbbdade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=641&q=80",
      title: "An extremely funny trip to the Swiss Alps",
      authorName: "Naomi Watts",
      url: "https://timerse.com"
    },
  ]

  return (
    <AnimationRevealPage>
      <Container2 imageSrc={poems[number-1].imgSrc}>
        <OpacityOverlay />
        <HeroContainer>
          <StyledHeader links={navLinks3} />
          <Content>
            <Heading2>
            {poems[number-1].title}
            </Heading2>
            {/* <PrimaryAction>Search Events Near Me</PrimaryAction> */}
          </Content>
        </HeroContainer>
      </Container2>
      <Container>
      
      <ContentWithPaddingXl>
      <Text>
            {poems[number-1].article}
      </Text>
      <Heading3>- {poems[number-1].author}</Heading3>
      <HorizontalLine />
        <Row>
          <PopularPostsContainer>
            <Heading>Recommended Posts</Heading>
            <PostsContainer>
              {poems[number-1].popularPosts.map((post, index) => (
                <Post key={index} href={post.url} className="group" initial="rest" whileHover="hover" animate="rest">
                  <Image
                    transition={{ duration: 0.3 }}
                    variants={postBackgroundSizeAnimation}
                    imageSrc={post.postImageSrc}
                  />
                  <Title>{post.title}</Title>
                  {/* <Description>{post.description}</Description> */}
                  <AuthorInfo>
                    <AuthorImage src={post.authorImageSrc} />
                    <AuthorNameAndProfession>
                      <AuthorName>{post.authorName}</AuthorName>
                      <AuthorProfile>{post.authorProfile}</AuthorProfile>
                    </AuthorNameAndProfession>
                  </AuthorInfo>
                </Post>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          {/* <RecentPostsContainer> 
            <Heading>Other Posts</Heading>
            <PostsContainer>
              {recentPosts.map((post, index) => (
              <Post key={index} href={post.url} className="group">
                <PostTextContainer>
                  <Title>{post.title}</Title>
                  <AuthorName>{post.authorName}</AuthorName>
                </PostTextContainer>
                <Image imageSrc={post.postImageSrc} />
              </Post>
              ))}
            </PostsContainer>
          </RecentPostsContainer> */}
        </Row>
      </ContentWithPaddingXl>
    </Container>
    <Footer />
    </AnimationRevealPage>
  );
};
