import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  background-color: aliceblue;
`;

const Section = styled.div`
  height: 300vh;
  display: grid;
  place-items: center;
  font-size: 4rem;
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
`;

const ItemsInside = styled.div`
  border: 1px solid black;
`;

const WarpItem = styled.div`
  width: 100%;
  height: 90px;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border: 1px solid black;
  background-color: ${({ color }) => color && color};
`;

const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  const refCenter = useRef();
  const refTop = useRef();
  const refWrap = useRef();

  const animationRight = (el) => {
    gsap.fromTo(
      el,
      { top: 0 },
      {
        // x:1000,
        top: 500,
        // duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 60%",
          end: "top 60%",
          scrub: true,
          toggleActions: "play pause none none",
          markers: {
            startColor: "purple",
            endColor: "fuchssia",
            fontSize: "3rem",
          },
        },
      }
    );
  };

  const animationWrap = (el) => {
    gsap.fromTo(
      el,
      { background: "red" },
      {
        background: "green",
        scrollTrigger: {
          trigger: el,
          start: "top 0%",
          end: "top 0%",
          scrub: true,
          toggleActions: "play pause none none",
          markers: {
            startColor: "purple",
            endColor: "fuchssia",
            fontSize: "3rem",
          },
        },
      }
    );
  };

  const animationTop = (el) => {
    gsap.fromTo(
      el,
      { top: 0 },
      {
        top: 450,
        // duration: 2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 80%",
          scrub: true,
          toggleActions: "play pause none none",
          markers: {
            startColor: "purple",
            endColor: "fuchssia",
            fontSize: "3rem",
          },
        },
      }
    );
  };

  useEffect(() => {
    const el = refCenter.current;
    const el2 = refTop.current;
    const el3 = refWrap.current;
    animationTop(el2)
    // animationWrap(el3)
    animationRight(el);
  });
  return (
    <Container>
      <Section color={"green"}>
        <ItemsInside>hello</ItemsInside>
        <ItemsInside>hello</ItemsInside>
        <ItemsInside>hello</ItemsInside>
      </Section>
      <Section color={"blue"} ref={refWrap}>
        <WarpItem top ref={refTop} color={"black"}>
          <ItemsInside>hello</ItemsInside>
        </WarpItem>
        <WarpItem ref={refCenter} color={"yellow"}>
          <ItemsInside>h1e1l1l1o</ItemsInside>
        </WarpItem>
        <ItemsInside>hello</ItemsInside>
      </Section>
      <Section color={"green"}>
        <ItemsInside>hello</ItemsInside>
        <ItemsInside>hello</ItemsInside>
        <ItemsInside>hello</ItemsInside>
      </Section>
      {/* <Section color={'green'}>hello</Section>
      <Section color={'green'}>hello</Section> */}
    </Container>
  );
};

export default ScrollAnimation;
