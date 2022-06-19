import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import CardItem from "./CardItem";
import CardSlide from "./CardSlide";
import styled, { css } from "styled-components";

const Container = styled.div`
  background-color: black;
`;

const Section = styled.div`
  display: flex;
  position: ${({ position }) => (position ? position : null)};
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  justify-content: ${({ space }) => (space ? space : "center")};
  align-items: flex-start;
  gap: ${({ gap }) => (gap ? "100px" : 0)};
  width: ${({ width }) => (width ? width : "100%")};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  background-color: ${({ color }) => color && color};
  height: ${({ height }) => height && height};
  overflow: ${({ overflow }) => (overflow ? "hidden" : "none")};
`;

const Image = styled.div`
  height: 450px;
  width: 430px;
  /* position: absolute; */
  z-index: ${({ zindex }) => (zindex ? `${zindex}` : "50")};
  margin-right: ${({ mr }) => (mr ? "-100px" : "0")};
  margin-top: ${({ mt }) => (mt ? "100px" : "0")};
  background-color: white;
  border: 1px solid black;
`;

const Button = styled.div`
  color: white;
  padding: 10px 25px;
  background-color: blue;
  font-weight: 600;
  letter-spacing: 2px;
`;

const SectionText = styled.div`
  /* width: 100%; */
  background-color: yellow;
`;

const Text = styled.h1`
  margin-bottom: 0;
  font-size: 4rem;
  font-weight: 400;
  color: white;
  line-height: 1.2;

  ${({ notM }) =>
    notM &&
    css`
      margin: 0;
    `}
`;

const Navbar = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: white;
  justify-content: space-around;
`;

const Logo = styled.img`
  height: 100%;
  width: 100px;
  background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/768px-Dell_Logo.svg.png");
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
`;

const MenuItme = styled.li`
  color: black;
`;

const Textbody = styled.h4`
  font-size: 1.25rem;
  color: white;
  line-height: 1.6;
  font-weight: 300;
  ${({ notM }) =>
    notM &&
    css`
      margin: 0;
    `}
`;

const TextBanner = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-left: 250px;
  display: flex;
  align-items: baseline;
  border-bottom: 0.5px solid gray;
`;

const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageLeftRef = useRef();
  const imageRightRef = useRef();

  useEffect(() => {

    gsap.to(
      imageLeftRef.current,
      {
        x: 300,
        scrollTrigger: {
          trigger: imageLeftRef.current,
          start: "-50% 50%",
          end: "20% 50%",
          scrub: 1,
          markers: {
            startColor: "purple",
            endColor: "fuchssia",
            fontSize: "3rem",
          },
        },
      }
    );

    gsap.to(
      imageRightRef.current,
      {
        x: -300,
        scrollTrigger: {
          trigger: imageLeftRef.current,
          start: "-50% 50%",
          end: "20% 50%",
          scrub: 1.5,
          markers: {
            startColor: "purple",
            endColor: "fuchssia",
            fontSize: "3rem",
          },
        },
      }
    );
  });

  const Carddatail = [
    {
      header: "1",
      detail: "Architecture",
      body: `We address requirements and constraints with the right mix of analytical
      thinking, creativity and artistry — designing buildings that make a
      statement, conserve natural resources and enrich our experience.`,
    },
    {
      header: "2",
      detail: "Architecture",
      body: `We address requirements and constraints with the right mix of analytical
      thinking, creativity and artistry — designing buildings that make a
      statement, conserve natural resources and enrich our experience.`,
    },
    {
      header: "3",
      detail: "Architecture",
      body: `We address requirements and constraints with the right mix of analytical
      thinking, creativity and artistry — designing buildings that make a
      statement, conserve natural resources and enrich our experience.`,
    },
  ];

  return (
    <Container>
      <Navbar>
        <Logo />
        <MenuList>
          <MenuItme>test</MenuItme>
          <MenuItme>test</MenuItme>
          <MenuItme>test</MenuItme>
        </MenuList>
      </Navbar>
      <Section height="80vh" ml="25%" width="25%">
        <Text>Architecture and Design</Text>
        <Textbody>
          We combine expertise across disciplines, locations, and sectors. The
          practice is an active thought leader in social practice, developing
          award-winning architectural projects and urban strategies at a variety
          of scales.
        </Textbody>
        <Button>READ MORE</Button>
      </Section>
      <Section
        height={"950px"}
        color={"yellow"}
        gap
        space={"flex-start"}
        position="relative"
        className="section-2"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            marginTop: "100px",
          }}
        >
          {Carddatail.map((el) => (
            <CardItem {...el} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "-100px",
            left: "50%",
            transform: "translate(-50%,0)",
          }}
          className="wrap-image"
        >
          <Image ref={imageLeftRef} mr zindex={300} mt>
            asdasd
          </Image>
          <Image ref={imageRightRef} zindex={100}>
            3333
          </Image>
        </div>
      </Section>
      <Section height={"100vh"} color={"blue"} row={false} overflow>
        <TextBanner>
          <Text>2450</Text>
          <Textbody>creative projects</Textbody>
        </TextBanner>
        <div
          id="wrap-slice"
          style={{
            display: "flex",
            gap: "40px",
            width: "100%",
            justifyContent: "center",
            height: "100%",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            id="slide-1"
            style={{
              width: "76%",
              whiteSpace: "nowrap",
              overflowY: "scroll",
              margin: "auto",
              scrollBehavior: "smooth",
            }}
          >
            {Array.apply(null, { length: 10 }).map((el) => (
              <CardSlide />
            ))}
          </div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
              color: "white",
            }}
          >
            <div
              onClick={(el) => {
                const slice = document.getElementById("slide-1");
                slice.scrollLeft = slice.scrollLeft - 1500;
              }}
            >
              back
            </div>
            <div
              onClick={(el) => {
                const slice = document.getElementById("slide-1");
                slice.scrollLeft = slice.scrollLeft + 1500;
              }}
            >
              next
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};

export default ScrollAnimation;
