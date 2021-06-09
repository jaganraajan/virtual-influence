import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import Jagan from "images/jagan.jpg";
import Aashish from "images/aashish.jpg";


const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-top mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:
        Jagan,
      subtitle: "TM Jagadeesh R",
      title: "Editor's Desk",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reiciendis praesentium perferendis qui quas magnam? Pariatur ratione quidem ipsa illo nihil, molestiae perspiciatis libero soluta consectetur hic consequuntur deserunt et, ab totam accusantium! Excepturi expedita quis culpa debitis illum nobis nam consequatur repellendus, pariatur laboriosam voluptatem quo sed a ex itaque error, recusandae nemo adipisci. Nostrum neque error quis eligendi doloribus velit beatae, asperiores repudiandae id illo vero deleniti facilis, ad distinctio obcaecati ipsum qui consectetur eaque sequi vitae sit. Deserunt nostrum, odio cumque fugiat praesentium totam enim nihil ea voluptatem, nisi impedit accusamus, molestiae exercitationem necessitatibus ex velit. Ratione, obcaecati suscipit quidem natus accusamus nihil repellat magni quae unde minus animi eveniet facilis nam ad corrupti eligendi est! Asperiores, sunt possimus error aperiam esse vero minus necessitatibus molestias facilis magni ad iusto et autem odit quibusdam blanditiis, labore fugit? Impedit ratione quos molestiae error, sit saepe praesentium ea nihil consectetur quam minima corrupti quia laborum soluta quaerat nam doloribus vitae expedita iure voluptates exercitationem consequatur rerum non. ",
      url: ""
    },

    {
      imageSrc:
        Aashish,
      subtitle: "TM Aashish",
      title: "President's Desk",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, ducimus in eveniet assumenda optio sunt cum minima magni, nam harum reiciendis amet recusandae magnam eaque accusamus veritatis culpa reprehenderit asperiores cupiditate blanditiis quaerat eum neque qui numquam? Fugit aliquid quidem, ipsum ad inventore aspernatur itaque a quo nobis quibusdam nesciunt accusantium, sed quae modi repellendus, possimus ducimus eos. Sit doloribus ipsa ad tempora dolores expedita voluptatibus. Est adipisci fugit optio libero cupiditate iusto aliquid porro rerum laudantium quaerat earum consequuntur explicabo dignissimos veniam, maiores alias perspiciatis vel, ad, eligendi ex vitae. Voluptate consequatur, in sunt quod eveniet laborum autem recusandae aspernatur laudantium! Ipsum provident voluptas pariatur hic aliquam, similique fuga tenetur nostrum possimus alias atque sequi deserunt. Optio eos saepe explicabo qui possimus voluptatem, perspiciatis odit dolore? Eligendi, aut. Eius inventore magni in nam cumque minus perspiciatis illo illum qui commodi eaque amet odit dolorum veritatis necessitatibus exercitationem, ipsam ut error corporis quia. Blanditiis delectus minima fugit. Voluptas ad, suscipit laudantium, aspernatur facilis illum ratione nulla quae molestiae, mollitia distinctio?",
      url: "https://timerse.com"
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <Title>#ExtraMileEveryday</Title>
          <HeadingDescription>
            At Daffodils Toastmasters Club, the 37th committee goes the extra mile every single day to give you an experience unlike anything you have seen before.
          </HeadingDescription>
        </HeadingInfoContainer>

        {/* <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Subtitle>{card.subtitle}</Subtitle>
              </Details>
            </Card>
          ))}
        </Content> */}
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
