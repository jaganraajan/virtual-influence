import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";
import Hero from "components/hero/TwoColumnWithFeaturesAndTestimonial";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Footer2 from "components/footers/MiniCenteredFooter.js";
import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "components/headers/light.js";



const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-auto`;
const Description = tw(SectionDescription)`w-auto text-center text-black m-auto mt-5 mb-20`;

const Column = tw.div`flex flex-col items-center `;
const HeaderContent = tw.div``;
const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div` select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800  bg-gray-200  transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = (tw.dd`whitespace-pre-wrap pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;


const StyledHeader = styled(Header)`
  ${tw`p-5 pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300 `}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const Container2 = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: linear-gradient(#414141, #000000);`;



export default ({
  navLinks,
  subheading = "Interview",
  heading1 = "Hello Linda,",
  heading2 = "Blessings to All. Stand and speak!!!",
  description = "Linda Marie",
  faqs = [
    {
      question: "Tell us about your journey from Linda-Marie Miller to Toastmaster Linda-Marie Miller, First Runner-up at World Championship of Public Speaking, 2020?",
      answer:
        "I joined Toastmasters in the fall of 2019 and was asked to step in right away as the VP of Education.  Because I was an officer, I attended a TLI in December of 2019.  At that TLI, I attended a session delivered by a prior Finalist and it awakened in me a desire to think about competing in the contest because it sounded like a lot of fun.  I entered the contest that began in my home club in early 2020 and just kept winning at every level.  I never expected to find myself in the Semifinals and I was thrilled to have made it that far, knowing that there was no way a new Toastmaster that nobody had ever heard of would make it to the final stage.\n\nWhen they announced my name, I was shocked. I was even more shocked that I was the 1st Runner-Up in The World Championship of Public Speaking. Since then, I have spoken to thousands of people all over the world and I am honored that I have a platform to make a difference for others."
    },
    {
      question: "What keeps you motivated to become a better Toastmaster?",
      answer:
        "I am motivated by one thing…making a difference in the world.  When I improve my speaking ability and when I improve my ability to deliver powerful messages, I increase the chance that I can make a difference for the greatest number of people"
    },
    {
      question: "What are the qualities that one must cultivate to reach world-class excellence in Public Speaking?",
      answer:
        "In my opinion, the first quality one must cultivate in order to change the world with speaking is the quality of deeply caring about the individual futures of other people and the world as a whole.  If you are speaking so that you can get trophies or so that you look good, then it is all about you and your audience will sense that when you speak.  There are many “performers” of speeches that are more worried about looking good than they are about making a difference in the world."
    },
    {
      question: "What do you think is the future of online meetings in Toastmasters",
      answer:
        "Virtual clubs are here to stay and I like that!  Travel the world without leaving home sounds good to me!"
    },
    {
      question: "Leadership or Communication, which one is more important according to you and why?",
      answer: "They are both spokes in the same wheel called IMPACT.  You can’t communicate effectively without coming from the distinctions of leadership and you can’t lead effectively unless you can communicate authentically and powerfully.  These two pillars are so important.  They are the basis for everything I teach in Empowered Living and Speaking.\n\nIf anyone is interested in being added to the email list for upcoming workshop sessions on these topics, let me know at miller.lindamarie@gmail.com."
    },
    {
      question: "Could you share a few words on the impact you are trying to achieve in your latest project - One Shared Humanity?",
      answer: "I was shocked that the speech I delivered at finals titled “Pretending Not to Know” impacted as many people as it did.  I received thousands of emails from people wanting to know if there was a way for them to connect with other people that were also affected.  The speech seemed to open the hearts and minds of many white people and also gave a bit of hope to non-white people.  As a result, One Shared Humanity was formed.  I have three other partners and we work to create a world where everyone belongs and can be fully-expressed and celebrated. Anyone that want to join the private facebook page called One Shared Humanity can do so by looking us up on facebook and answering three questions.\n\nBlessings to All. Stand and speak!!!"
    }
  ]
}) => {
  console.log(navLinks);
  const navLinks3 = [
    <NavLinks key={1}>
      {navLinks.map((navLink) => (
        <NavLink href={navLink.url}>
          {navLink.title}
        </NavLink>
      ))}
    </NavLinks>
  ]
//   const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

//   const toggleQuestion = questionIndex => {
//     if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
//     else setActiveQuestionIndex(questionIndex);
//   };

  return (
    <>
    
    <AnimationRevealPage>
      <Container2><StyledHeader links={navLinks3} /></Container2>
      <Hero />
        
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading1}</Heading>
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                //   toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  {/* <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon> */}
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="open"
                //   animate={activeQuestionIndex === index ? "open" : "collapsed"}
                //   transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
        <Description> Linda was kind enough to take the time off her schedule for this interview. We thank her with whole of our heart and wish her
bond with Daffodils Toastmasters Club grows stronger in the future. </Description>
      {/* <DecoratorBlob1/> */}
      {/* <DecoratorBlob2 /> */}
      
      <Footer2 />
    </AnimationRevealPage>
    </>
  );
};
