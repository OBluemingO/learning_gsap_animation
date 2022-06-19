import React from "react";
import styled from "styled-components";

const WarpCard = styled.div`
  display: inline-block;
  width: 360px;
  height: 490px;
  border: 1px solid gray;
  margin-left: 30px;
`;

const Image = styled.div`
  height: 75%;
`;

const TextHeader = styled.h1`
  font-size: 2rem;
`;

const Textbody = styled.p``;

const Warpdetail = styled.div`
  padding: 0 20px;
`;

const CardSlide = () => {
  return (
    <WarpCard>
      <Image>
        <img
          width="100%"
          height="100%"
          src="https://images01.nicepage.com/e2/55/e25543f2fbc612a857ceb6693898bae4.jpeg"
          alt="asdasd"
        />
      </Image>
      <Warpdetail>
        <TextHeader>Origami Residence</TextHeader>
        <Textbody>Orci varius natoque penatibus et magnis</Textbody>
      </Warpdetail>
    </WarpCard>
  );
};

export default CardSlide;
