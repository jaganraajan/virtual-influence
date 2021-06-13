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

const Heading3 = styled.h3`
  ${tw`block p-5 text-3xl text-left sm:text-2xl lg:text-3xl xl:text-4xl font-black text-gray-500 leading-snug my-5 text-right`}`;



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
  const member = [
  {
    title: "The Invisible Rope",
    author: "Kumaran M. Pethi, DTM",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Kumaran%20sir.jpg?alt=media&token=a9b07163-e683-4643-832f-b93580bb2da3",
    article: "All of you would have heard of the story of the elephant and the chain. Let me anyway revisit this story for you. \n\nA baby elephant is captured and chained to a staff to prevent it from escaping. It tries and tries and gives up. The chain is too strong. Soon it grows into a strong, big elephant and its chain is now replaced by a slender rope tied to a staff. The elephant can easily escape but still it doesn’t. It has given up hope because it remembers its past. The impossibility of the past prevents it from moving forward to the possibility of the future. \n\nLet’s recap this to our current lives. Not exactly great. Stuck at home doing nothing, WFH, struck by Covid ourselves or losing a dear or near one. We find it difficult to move on. The impossibility of the current past prevents us from moving forward to the possibility of the future! \n\n We are bound by an invisible rope. Come to think of it, all our growing lives we were bound by this invisible rope of expectation, parental hope, peer pressure and relationship tangles and now the damn Pandemic. There seems to be no let down. It’s seems an endless stream of happenings. \n\nWait! This invisible rope in fact swings both ways! Backwards and forward. I had this Maths Teacher in school who told me I would never succeed in life and be an abysmal failure. She mentioned it so often that I decided to do something about it. I weighed against the invisible rope and surged forward in life. I sometimes now think, she did me a service by taunting and belittling me.\n\nPhil Knight, the founder of Nike, in his book, ‘Shoe dog’, talks about the time he was a distributor for a Japanese shoe ‘Tiger’ and would have spent the rest of his life being content with the franchise until ‘Tiger’ shoes plucked the franchise. That propelled him to start Nike. Today, Nike is the world’s largest manufacture of shoes and a 59 billion empire.\n\nHe too was an ordinary mortal like you and me, until the invisible rope tugged at him. Maybe, maybe… the invisible ropes in your life are meant for a reason. To serve a purpose, to fuel a cause.\n\nI am not saying the loss of a loved or close doesn’t hurt. It does. We can’t let go of the memories. I ask you not to. Instead, I ask you to move on, holding those memories close .Because that’s what they would have wanted you to do! \n\nThe invisible rope is a lesson for all us. To learn, to lead and surge forward. I am one of those, whose invisible rope propels me forward and guess who I am gonna find? It’s you! Waiting as you have gripped the invisible rope by its neck and have surged forward! ",
    imgSrc: "https://images.unsplash.com/photo-1512758315355-cdbf0fd81fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/shreenidhi21.jpg?alt=media&token=0b23a1e9-0527-4a8d-a79e-9d5a3e0f2b81",
        title: "Connect Beyond Disconnections",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Shree Nidhi",
        authorProfile: "",
        url: "/articles/member/2"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2038&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Manoj.jpg?alt=media&token=baf686d5-524a-4833-8f29-f16a17a7f71c",
        title: "Improve Your Writing Style With Evocativeness ",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Manoj",
        authorProfile: "",
        url: "/articles/member/3"
      },
    ]
  },
  {
    title: "Connect Beyond Disconnections",
    author: "TM Shree Nidhi",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/shreenidhi21.jpg?alt=media&token=0b23a1e9-0527-4a8d-a79e-9d5a3e0f2b81",
    article: "Well, for how many of us was this zoom zone a hate zone?\n\nCount me in, if you mentally said a yes! And a yes! And a Yes!\n\nMy most beloved profession, which I wake up to every day and feel absolutely delighted, was not the same in the zoom zone. Yes, just like yours, but multiplied by a million times more because I just miss meeting my students beyond and above. \n\nBut what if I say, I have managed to stealthily come out of this zone due to efforts? \n\nI stayed back after my class, to speak, to hear and to share everything I feel. When I did this for the first time, almost no student wanted to stay or speak, hear or be heard. \n\nBut things tend to change, doesn’t it? \n\nOne child after another slowly started staying back post classes to build connections, share stories, sorrows and joy. Today, once every class’s agenda is done all of them stay back!\n\nBut it all began with efforts, efforts to hold on to a call irrespective of how disconnected we feel. \n\nTo connect beyond disconnections, takes efforts. I still do miss them but I definitely feel connected. \n\nI did it and so can you!",
    imgSrc: "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2038&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Manoj.jpg?alt=media&token=baf686d5-524a-4833-8f29-f16a17a7f71c",
        title: "Improve Your Writing Style With Evocativeness ",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Manoj",
        authorProfile: "",
        url: "/articles/member/3"
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
        authorProfile: "",
        url: "/articles/member/4"
      }
    ]
  }, 
  {
    title: "Improve Your Writing Style With Evocativeness ",
    author: "TM Manoj",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Manoj.jpg?alt=media&token=baf686d5-524a-4833-8f29-f16a17a7f71c",
    article: 'Writing with evocativeness stokes emotion and triggers imagery, making the writing more stimulating; below are my top tips for bringing out this aspect that I learnt. \n\n1. Decide the tone before you begin: what is the primary purpose of this writing? Is it to inform, to persuade, to inspire, to entertain or something else? Pick a tone that best suits your purpose: whether factual, formal, funny, humble, respectful, authoritative or something else. Tone gives your writing a distinct flavor.  \n\n2. Bring out people and actions: help readers visualize the scene or action you are describing. Write in active voice. Consider the following example of a fire rescue-\n\n“Hundreds of anxious people needed to be rescued by fire fighters to safety”—this starts with facts, below is rewriting starting with people and actions- \n\n“Fire fighters rescued hundreds of anxious people to safety”—this is easier to visualize \n\n3. Make it vivid: if it suits your purpose, make your writing more vivid by inserting a tone or a sensation. Consider the following example \n\n“the foot-bridge on Ganges is at its full capacity and showing signs of breakage” \n\nIf the above was a part of a persuasive communication, you may write it more vividly as: \n\n"the foot-bridge foundation is creaking under the relentless burden of men, women, and children making a beeline on its top; it threatens to burst at the seams any moment, plunging hapless people 30 meters below into the ravaging Ganges” \n\n4. Add variety: sameness is boring; avoid repetition by using alternate words. For example, if you are writing a paragraph on Google that has multiple references to the company, you can avoid repeating “Google” by alternatively referring to it as “Google”, “the company”, “the tech titan”, or “the internet giant” \n\n5. Do not litter your copy with meaningless words: avoid modifiers that do not add much value: “quite good” is same as “good”; “It is somehow simpler” is same as “it is simpler”.  Look out for phrases like “it seems” and “I believe”. \n\n“It seems that China’s growth this time around is less than impressive”—is a complicated way of saying “China’s growth in 2019 is unimpressive” \n\nEven ground-breaking ideas can fail to catch attention unless written evocatively, the above tips will help you spice up your writing. However, evocativeness is a double-edged sword, it can go against clarity and simplicity, so apply it selectively and cautiously.',
    imgSrc: "https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2038&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/apoorva2.jpg?alt=media&token=4f5d086d-b8e5-4641-b549-524ead63389b",
        title: "The Ransom",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Apoorva",
        authorProfile: "",
        url: "/articles/member/4"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1589432249902-15ab45101111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2008&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/amrutha.jpg?alt=media&token=ec23d455-1722-4da1-b0d7-a281db558b8a",
        title: "Some Other Day",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Amrutha",
        authorProfile: "",
        url: "/articles/member/5"
      }
    ]
  },
  {
    title: "The Ransom",
    author: "TM Apoorva",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/apoorva2.jpg?alt=media&token=4f5d086d-b8e5-4641-b549-524ead63389b",
    article: "Our lives have been hijacked by computers and phones. The ransom demanded in return, is more screen time.  But it’s not like we have much of a choice during this pandemic, do we? \n\nMy life too has been affected by the virtual influence. I started my career with work from home. Even though I was robbed of my typical corporate experience at an office, I harbour no resentful thoughts about it.  Work from home has its own perks. Traffic can no longer cause jams and pollution can no longer cause worries! Attending meetings from the comfort of my house wearing pyjamas, is truly a blessing in disguise, literally and figuratively! \n\nThe comfort of work from home, comes with its own discomfort. Building relationships and making new friends in a virtual setting is extremely difficult. As an introvert, I have always relied on actual social interactions to cement my relationship with someone. Even though I’m getting used to making friends and building relationships from behind the screen, I really look back upon the good old days fondly. \n\nAll in all, I feel like the virtual world has definitely taken over our lives. But I wouldn’t be lying when I say amidst all the comfort I get to experience, there’s some discomfort with it. I’m waiting to go back to the world where seeing and talking to your friends wouldn’t happen just over calls and screens. \n\nUntil then, I will continue to pay the ransom of screen time, waiting to be saved from the virtual hijack! ",
    imgSrc: "https://images.unsplash.com/photo-1477039181047-efb4357d01bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1589432249902-15ab45101111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2008&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/amrutha.jpg?alt=media&token=ec23d455-1722-4da1-b0d7-a281db558b8a",
        title: "Some Other Day",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Amrutha",
        authorProfile: "",
        url: "/articles/member/5"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1525540810550-5032f5d191b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/SUMAN.jpeg?alt=media&token=b8f83b50-ddb2-43c7-b381-6ab3da390b4f",
        title: "Alone Together",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Suman",
        authorProfile: "",
        url: "/articles/member/6"
      }
    ]
  },
  {
    title: "Some Other Day",
    author: "TM Amrutha",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/amrutha.jpg?alt=media&token=ec23d455-1722-4da1-b0d7-a281db558b8a",
    article: "A lazy person gets a task done in the shortest amount of time. If you want to find the easiest way to get something done, ask a lazy person. True isn’t? \n\nMy thoughts changed completely after I read the book - The 12 Week Year by Brian Moran and Michael Lennington. Before we dive into the learnings I found in the book, quick fact about me. I get things done in the shortest amount of time and I find the easiest way to get them done too! In other words, I am lazy. My dad believes that too. He has tried several times to tell me the importance of time and productivity. I can’t help but tell him, “Not today, Some Other Day”. That “someother day” has never arrived nor will it arrive anytime soon, I am too lazy to lookout for that day as well, until I stumbled upon this book - The 12 Week Year. Initially my urge was to procrastinate and delay reading it, but the title of the book intrigued me. How can a year be made of 12 weeks, wasn’t it supposed to be 52 weeks? \n\nThe book begins by defining, rather should I say redefining a year to contain 12 weeks. The next year and the year after that also contains 12 weeks according to the author. It makes a quick reference to new year resolutions and how we tend to put them off because we believe we have loads of time.  But a study of organizations productivity and people’s shows that the energy levels are high and focus is prime at the start of the 12-month year. It wavers towards the middle of the year and then gets back up. So true right? New year resolutions begin with Jan and ends with March! The author highlights this element and drives a pertinent point. Most businesses make 40% progress of annual goals in the last quarter. A point which tilts the scales of your progress towards success or failure. That shift in the way I perceive time and productivity changed the moment I understood the essence of what the author was trying to say. \n\nA 12-week year kicks in a constant sense of urgency towards your goals and plans by using several tools and ideas. The book enabled me to get things done in the shortest time and find the easiest way. However, not by being lazy but being productive. I urge you all to read the book and gain wonderful insights. It will help you realise your “someother day” is indeed “today”!",
    imgSrc: "https://images.unsplash.com/photo-1589432249902-15ab45101111?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2008&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1525540810550-5032f5d191b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/SUMAN.jpeg?alt=media&token=b8f83b50-ddb2-43c7-b381-6ab3da390b4f",
        title: "Alone Together",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Suman",
        authorProfile: "",
        url: "/articles/member/6"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Anushree2.jpg?alt=media&token=58b07057-f747-4710-8418-055cc2d842d0",
        title: "Where There Is A Will...",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Anushree",
        authorProfile: "",
        url: "/articles/member/7"
      }
    ]
  },
  {
    title: "Alone Together",
    author: "TM Suman",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/SUMAN.jpeg?alt=media&token=b8f83b50-ddb2-43c7-b381-6ab3da390b4f",
    article: "'The students of the future will demand the learning support that is appropriate for their situation or context. Nothing more, nothing less ' -- Marcus Specht. \n\nMoving forward with the context, in ways that we couldn’t when our connective avenues were limited by human contact, time, geography, Pandemic situation, travel restriction and many more, eventually online platform have become more vital in our lives to recreate ourselves by the belief that we are all influenced and enthralled by technology such as online education platforms, e-learning platforms, communication apps and social media. \n\nA virtual life is shiny and bright with a slogan “Alone Together“ has had a deep impact on our lives. \n\nOur weekly online club meetings shows that everybody is on the internet these days for everything and anything. What a transformation of our lives! We have never been more connected, more linked, and further bound to a virtual reality that many of us can no longer live without. \n\nThe technology has changed the perspective of our traditional learnings, the concept of interface with world and increase in the ease of choices.",
    imgSrc: "https://images.unsplash.com/photo-1525540810550-5032f5d191b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Anushree2.jpg?alt=media&token=58b07057-f747-4710-8418-055cc2d842d0",
        title: "Where There Is A Will...",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Anushree",
        authorProfile: "",
        url: "/articles/member/7"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/vaibhav2.png?alt=media&token=5aa68fe4-be50-4199-a62d-9d92a69d7f91",
        title: "When Life Goes Back To Normal",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Vaibhav",
        authorProfile: "",
        url: "/articles/member/8"
      }
    ]
  },
  {
    title: "Where There Is A Will...",
    author: "TM Anushree",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Anushree2.jpg?alt=media&token=58b07057-f747-4710-8418-055cc2d842d0",
    article: "Despite the difficulty of the past year, I have a lot of good memories to cherish, one of which was having the Toastmasters family around me. It was Febuary of 2020 when I joined Toastmasters for the first time with lot of passion and dreams in my eyes to rock on the stage.\n\nUnfortunately, as soon as I joined everything went virtual. I was not ready for this at all as now the stage was going to be the corner of my house and my audiences were little square boxes in zoom app, where most of the square boxes just blank black boxes. It was hard to find the motivation to continue in my toastmasters journey.\n\nBut as Toastmasters is the place 'Where the leaders are made' and these leaders are the people of growth mindset who know how to take up the new challenges and bring themselves to a whole new level. With this growth mindset and positive attitude, I have started building my relationships in the club and I have also fallen in love with the presence of virtual technology, the new opportunities to influence others.\n\nToday when I reflect back at my journey I realized without building this beautiful relationship with virtual technology and my virtual toastmasters family.\n\nWas it possible for me to attend different clubs meeting around the globe from the comfort of my home?\n\nWas It possible for me to network with so many mind-blowing toastmasters and learn lot of things from them?\n\nWas it possible for me receive motivation, love and support from the amazing people around me?\n\nNo, not at all, and despite of my past challenges, I realized I was having more than what needed. I would like to take this opportunity to pause for a moment and show my gratitude to all those who played an important part in my story directly or indirectly.\n\nMy dear Toastmasters family 'Where there is a will, there is a Highway'. Though we have to pay sometimes extra toll, but the journey is always more memorable in NICE road rather then taking shortcuts.",
    imgSrc: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/vaibhav2.png?alt=media&token=5aa68fe4-be50-4199-a62d-9d92a69d7f91",
        title: "When Life Goes Back To Normal",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Vaibhav",
        authorProfile: "",
        url: "/articles/member/8"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1585331505473-7586f9cb0854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/keshav.jpg?alt=media&token=c20b5165-0439-4704-8ad6-ea29c04e8ef0",
        title: "At Home, We’ve Stayed….",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Keshav",
        authorProfile: "",
        url: "/articles/poem/1"
      }
    ]
  },
  {
    title: "When Life Goes Back To Normal",
    author: "TM Vaibhav",
    authorPic: "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/vaibhav2.png?alt=media&token=5aa68fe4-be50-4199-a62d-9d92a69d7f91",
    article: "The pandemic has accelerated technological advances and enabled us to attend meetings, learn from International speakers and share our knowledge, all within the luxury of our homes. But is this comfort going to make the future of public speaking challenging?\n\nI joined Daffodils Toastmasters Club in March 2019. I had just given two speeches and was in the process of building the core foundations of my public speaking skill.\n\nBoom! The entire world was locked due to the pandemic. \n\nHowever, COVID-19 could not stop the weekly meetings of Daffodils Toastmasters Club so we jumped into online mode, committed to influencing the life of our members virtually. I have used this opportunity to complete my Level 2 in my Pathways and I’m about to complete my Level 3.\n\nThe virtual platform has helped to stay and improve our journey in communication and leadership roles. But recent members who joined Toastmasters and for existing members as well, a real and exciting challenge is about to come.\n\nAlthough we are improving our public speaking skills in the virtual platform, giving a speech within four walls is much easier than to physically stand in front of a live audience and speak.\n\nOnce life goes back to normal, we will go back to our traditional style of public speaking. Instead of virtual screens, we will be talking to people face-to-face.\n\nTo all the new members and existing members, the major challenge is about to come and I hope you are all as excited as I am and experience public speaking in its purest form. ",
    imgSrc: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    popularPosts : [
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1585331505473-7586f9cb0854?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/keshav.jpg?alt=media&token=c20b5165-0439-4704-8ad6-ea29c04e8ef0",
        title: "At Home, We’ve Stayed….",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Keshav",
        authorProfile: "",
        url: "/articles/poem/1"
      },
      {
        postImageSrc:
          "https://images.unsplash.com/photo-1616587226157-48e49175ee20?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        authorImageSrc:
          "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/harini2.jpg?alt=media&token=043194c0-5a44-4087-b07a-77a4405f65d2",
        title: "Before I'm Gone",
        description:
          "Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.",
        authorName: "TM Harini",
        authorProfile: "",
        url: "/articles/poem/2"
      }
    ]
  }
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
      <Container2 imageSrc={member[number-1].imgSrc}>
        <OpacityOverlay />
        <HeroContainer>
          <StyledHeader links={navLinks3} />
          <Content>
            <Heading2>
            {member[number-1].title}
            </Heading2>
            {/* <PrimaryAction>Search Events Near Me</PrimaryAction> */}
          </Content>
        </HeroContainer>
      </Container2>
      <Container>
      
      <ContentWithPaddingXl>
      <Text>
            {member[number-1].article}
      </Text>
      <Heading3>- {member[number-1].author}</Heading3>
      <HorizontalLine />
        <Row>
          <PopularPostsContainer>
            <Heading>Recommended Posts</Heading>
            <PostsContainer>
              {member[number-1].popularPosts.map((post, index) => (
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
