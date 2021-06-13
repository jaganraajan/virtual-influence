import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {css} from "styled-components/macro"; //eslint-disable-line
import { SectionHeading as HeadingTitle, Subheading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as TagIcon } from "feather-icons/dist/icons/tag.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-3.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-24 lg:w-1/3`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}"), linear-gradient(#000000, #222222);`,
  tw` bg-contain bg-no-repeat bg-center h-80 lg:h-64 rounded rounded-b-none`
]);

const Details = tw.div`p-6 rounded border-2 border-t-0 rounded-t-none border-dashed border-primary-100 flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`flex items-center`;
const Meta = styled.div`
  ${tw`text-secondary-100 font-medium text-sm flex items-center leading-none mr-6 last:mr-0`}
  svg {
    ${tw`w-4 h-4 mr-1`}
  }
`;

const Title = tw.h5`mt-4 leading-snug font-bold text-lg`;
const Description = tw.p`mt-2 text-sm text-secondary-100`;
const Link = styled(PrimaryButtonBase).attrs({as: "a"})`
  ${tw`inline-block mt-4 text-sm font-semibold`}
`

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`-z-10 absolute bottom-0 right-0 w-48 h-48 transform translate-x-40 -translate-y-8 opacity-25`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`-z-10 absolute top-0 left-0 w-48 h-48 transform -translate-x-32 translate-y-full opacity-25`;

export default ({
  subheading = "Blog",
  heading1 = <>From our Leaders</>,
  heading2 = <><span tw="text-primary-500">Articles</span> from our Members</>,
  heading3 = <>Poem <span tw="text-primary-500">Segment</span></>,
  description = <>on the theme <span tw="text-primary-500">Virtual Influence - Building Relationships through Tech</span></>,

}) => {
  const leadershipPosts = [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/sagnik.jpg?alt=media&token=7c0165d0-9e59-4fc9-9ff0-2fc64f2a918e",
      author: "Sagnik Biswas, DTM - District 92 Program Quality Director",
      category: "SEO",
      title: "Sagnik Biswas, DTM- District 92 Program Quality Director",
      description: "In this year, we have seen and heard a hundred different ways to connect with one another, and we...",
      url: "/articles/leadership/1"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/prakash2.png.jpg?alt=media&token=e973cc9c-faf8-4155-9606-eb320df9cb88",
      author: "Prakash Tamhankar, DTM - District 92 Public Relations Manager",
      category: "SEO",
      title: "Prakash Tamhankar, DTM - District 92 Public Relations Manager",
      description: "If someone would have asked me in Feb 2020 to do all my office work remotely from home, especially with my role as a manager...",
      url: "/articles/leadership/2"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/divya.jpg?alt=media&token=636360a1-0bca-4880-acdd-472b2e0f1c19",
      author: "Owais Khan",
      category: "Advertising",
      title: "Divya Rajvanshy, DTM - Division C Director",
      description: "“You cannot go out or meet anyone” – these are the words that pretty much defined life in the last few months. Home isolation...",
      url: "/articles/leadership/3"
    }
  ];

  const memberPosts = [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Kumaran%20sir.jpg?alt=media&token=a9b07163-e683-4643-832f-b93580bb2da3",
      author: "Kumaran M. Pethi, DTM",
      category: "SEO",
      title: "The Invisible Rope",
      description: "All of you would have heard of the story of the elephant and the chain. Let me anyway revisit this story for you. A baby...",
      url: "/articles/member/1"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/shreenidhi21.jpg?alt=media&token=0b23a1e9-0527-4a8d-a79e-9d5a3e0f2b81",
      author: "TM Shree Nidhi",
      category: "Advertising",
      title: "Connect Beyond Disconnections",
      description: "Well, for how many of us was this zoom zone a hate zone?\n\n Count me in, if you mentally said a yes! And a yes! And a Yes!\n\n....",
      url: "/articles/member/2"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Manoj.jpg?alt=media&token=baf686d5-524a-4833-8f29-f16a17a7f71c",
      author: "TM Manoj",
      category: "Social Media",
      title: "Improve Your Writing Style With Evocativeness",
      description: "Writing with evocativeness stokes emotion and triggers imagery, making the writing more stimulating; below are...",
      url: "/articles/member/3"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/apoorva2.jpg?alt=media&token=4f5d086d-b8e5-4641-b549-524ead63389b",
      author: "TM Apoorva",
      category: "SEO",
      title: "The Ransom",
      description: "Our lives have been hijacked by computers and phones. The ransom demanded in return, is more screen time.  But it’s not like...",
      url: "/articles/member/4"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/amrutha.jpg?alt=media&token=ec23d455-1722-4da1-b0d7-a281db558b8a",
      author: "TM Amrutha",
      category: "Advertising",
      title: "Some Other Day",
      description: "A lazy person gets a task done in the shortest amount of time. If you want to find the easiest way to get something done, ask...",
      url: "/articles/member/5"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/SUMAN.jpeg?alt=media&token=b8f83b50-ddb2-43c7-b381-6ab3da390b4f",
      author: "TM Suman",
      category: "Social Media",
      title: "Alone Together",
      description: "'The students of the future will demand the learning support that is appropriate for their situation or context. Nothing more,...",
      url: "/articles/member/6"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/Anushree2.jpg?alt=media&token=58b07057-f747-4710-8418-055cc2d842d0",
      author: "TM Anushree",
      category: "Social Media",
      title: "Where There Is A Will...",
      description: "Despite the difficulty of the past year, I have a lot of good memories to cherish, one of which was having the Toastmasters family...",
      url: "/articles/member/7"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/vaibhav2.png?alt=media&token=5aa68fe4-be50-4199-a62d-9d92a69d7f91",
      author: "TM Vaibhav",
      category: "Social Media",
      title: "When Life Goes Back To Normal",
      description: "The pandemic has accelerated technological advances and enabled us to attend meetings, learn from International speakers...",
      url: "/articles/member/8"
    }
  ];

  const memberPoemPosts = [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/keshav.jpg?alt=media&token=c20b5165-0439-4704-8ad6-ea29c04e8ef0",
      author: "TM Keshav",
      category: "SEO",
      title: "At home, we’ve stayed….",
      description: "Stay at Home, Stay Safe is the message we hear each day,\n There is an unseen virus lurking around, let's keep...",
      url: "/articles/poem/1"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/virtual-influence.appspot.com/o/harini2.jpg?alt=media&token=043194c0-5a44-4087-b07a-77a4405f65d2",
      author: "TM Harini",
      category: "Through my phone",
      title: "Before I'm gone",
      description: "I was hoping to say goodbye to you, not sure how time flew; \n Spring brought tears and in summer, I drowned in my...",
      url: "/articles/poem/2"
    },
  ];
    
  return (
    <Container>
      <Content>
        <HeadingInfoContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <HeadingTitle>{heading1}</HeadingTitle>
          <HeadingDescription>{description}</HeadingDescription>
        </HeadingInfoContainer>
        <ThreeColumn>
          {leadershipPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      <Content>
        <HeadingInfoContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <HeadingTitle>{heading2}</HeadingTitle>
          {/* <HeadingDescription>{description}</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {memberPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
      
      <Content>
        <HeadingInfoContainer>
          {/* {subheading && <Subheading>{subheading}</Subheading>} */}
          <HeadingTitle>{heading3}</HeadingTitle>
          {/* <HeadingDescription>{description}</HeadingDescription> */}
        </HeadingInfoContainer>
        <ThreeColumn>
          {memberPoemPosts.map((post, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={post.imageSrc} />
                <Details>
                  <MetaContainer>
                    <Meta>
                      <UserIcon />
                      <div>{post.author}</div>
                    </Meta>
                  </MetaContainer>
                  <Title>{post.title}</Title>
                  <Description>{post.description}</Description>
                  <Link href={post.url}>Read Post</Link>
                </Details>
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
