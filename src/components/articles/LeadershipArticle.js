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
  ${tw`text-lg mx-auto max-w-4xl mb-10 text-black whitespace-pre-wrap`}
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
  const leader = [
  {
    title: "Sagnik Biswas, DTM",
    article: "In this year, we have seen and heard a hundred different ways to connect with one another, and we have touched each other's lives through the virtual medium, and we have found new ways to collaborate, connect and influence others. But the basis of it all is in showing up, with the best of our capabilities. I believe that is the root of any form of influence, that you show up consistently and make a difference in the lives of others. Whichever medium it may be, as long as we choose to work together to make life easier for someone in any way, we made a change happen. \n\n I wish the members of Daffodils Toastmasters Club all the very best and I hope that you and your families are doing well and keeping safe.",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/sagnik.jpg?alt=media&token=7c0165d0-9e59-4fc9-9ff0-2fc64f2a918e",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/sagnik.jpg?alt=media&token=7c0165d0-9e59-4fc9-9ff0-2fc64f2a918e",
    popularPosts : [
      {
        postImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/prakash.png?alt=media&token=37e5a77e-a6b7-4879-b638-2ac7fcf412f3",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/prakash.png?alt=media&token=37e5a77e-a6b7-4879-b638-2ac7fcf412f3",
        title: "Virtual Influence",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "Prakash Tamhankar, DTM",
        authorProfile: "District 92 Public Relations Manager",
        url: "/articles/leadership/2"
      },
      {
        postImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/divya.jpg?alt=media&token=636360a1-0bca-4880-acdd-472b2e0f1c19",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/divya.jpg?alt=media&token=636360a1-0bca-4880-acdd-472b2e0f1c19",
        title: "Virtual Influence",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "Divya Rajvanshy, DTM",
        authorProfile: "Division C Director",
        url: "/articles/leadership/3"
      }
    ]
  }, 
  {
    title: "Prakash Tamhankar, DTM",
    article: "If someone would have asked me in Feb 2020 to do all my office work remotely from home, especially with my role as a manager and leader, I would have balked at him.  With all work getting done depending a lot on the relations with and among the team, I would be disinclined to even dream it. \n\n Seventeen months later, I am doing exactly that, building relationships remotely through available technology, getting the office work done remotely with virtual influence.  The skill has become so critical for all of us in this virtual world that the current pandemic situation has forced us into, it is a matter of survival of some of us. \n\n How did this dramatic shift happen?  What made us all convinced that we can overcome the limitation that the virus imposed on us?  What did each of us do to make the change? \n\n It all happened because we decided to change gears, do what it takes to succeed with all the limitations that the situation gave us.  We adapted ourselves quickly to the new normal, so much so that it has become our second nature, and I am facing difficulty with the team when I request them to be back at office. \n\n The key questions are: Will we adapt again? Will we be the agents of change again? Another year will tell.  \n\n Till then, keep learning, keep enjoying!",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/prakash.png?alt=media&token=37e5a77e-a6b7-4879-b638-2ac7fcf412f3",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/prakash.png?alt=media&token=37e5a77e-a6b7-4879-b638-2ac7fcf412f3",
    popularPosts : [
      {
        postImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/divya.jpg?alt=media&token=636360a1-0bca-4880-acdd-472b2e0f1c19",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/divya.jpg?alt=media&token=636360a1-0bca-4880-acdd-472b2e0f1c19",
        title: "Virtual Influence",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "Divya Rajvanshy, DTM",
        authorProfile: "Division C Director",
        url: "/articles/leadership/3"
      }, {
        postImageSrc:
          "https://images.unsplash.com/photo-1512758315355-cdbf0fd81fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Kumaran%20sir.jpg?alt=media&token=a9b07163-e683-4643-832f-b93580bb2da3",
        title: "The Invisible Rope",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "Kumaran M. Pethi, DTM",
        authorProfile: "",
        url: "/articles/member/1"
      }
    ]
  }, 
  {
    title: "Divya Rajvanshy, DTM",
    article: "“You cannot go out or meet anyone” – these are the words that pretty much defined life in the last few months. Home isolation meant no get-togethers, office gossips, gyms, restaurants and of course my favorite part of the weekend – Toastmasters meetings. The thought of not being able to meet anyone created a good deal of anxiety in me. I started calling my family and friends to check if they are okay. Turns out, they were in the same boat, emotionally, as me. This led to more frequent calls and opened a plethora of opportunities to build relations like never before! \n\n Friday evenings turned into long hours Dumb Charades with friends located in different parts of the world. Celebration of birthdays became incomplete without cake cutting over zoom calls. Creativity in Toastmasters Meetings went to a next level altogether making weekends productive. \n\n Daffodils Toastmasters Club has always been a gem for Division C – by setting an example of conducting some of the most interesting online meetings, bringing some joy in our lives during these difficult times. \n\n In the fear of losing connect, we used technology to connect more often than ever before. Let us remember this feeling when we enter the post-covid era and continue to maintain these relationships both offline and online.",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/divya.jpg?alt=media&token=636360a1-0bca-4880-acdd-472b2e0f1c19",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/divya.jpg?alt=media&token=636360a1-0bca-4880-acdd-472b2e0f1c19",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1512758315355-cdbf0fd81fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Kumaran%20sir.jpg?alt=media&token=a9b07163-e683-4643-832f-b93580bb2da3",
        title: "The Invisible Rope",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "Kumaran M. Pethi, DTM",
        authorProfile: "",
        url: "/articles/member/1"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/shreenidhi21.jpg?alt=media&token=0b23a1e9-0527-4a8d-a79e-9d5a3e0f2b81",
        title: "Connect beyond Disconnections",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Shree Nidhi",
        authorProfile: "",
        url: "/articles/member/2"
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
      authorProfile: "Travel Advocate",
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
      authorProfile: "Vlogger",
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
      <Container2 imageSrc={leader[number-1].imgSrc}>
        <OpacityOverlay />
        <HeroContainer>
          <StyledHeader links={navLinks3} />
          <Content>
            <Heading2>
            {leader[number-1].title}
            </Heading2>
            {/* <PrimaryAction>Search Events Near Me</PrimaryAction> */}
          </Content>
        </HeroContainer>
      </Container2>
      <Container>
      
      <ContentWithPaddingXl>
      <Text>
            {leader[number-1].article}
      </Text>
      <HorizontalLine />
        <Row>
          <PopularPostsContainer>
            <Heading>Recommended Posts</Heading>
            <PostsContainer>
              {leader[number-1].popularPosts.map((post, index) => (
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
