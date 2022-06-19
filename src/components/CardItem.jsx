import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  height: 20%;
  text-align: center;
`;

const TextHeader = styled.h1``;
const Textdetail = styled.h2`
  font-size:2rem;
  font-weight: 400;
`;

const Textbody = styled.p`
  margin-bottom: 25px;
`;

const Line = styled.div`
  height: 3px;
  background-color: blue;
  width: 15%;
`

const CardItem = ({header,detail,body}) => {
  return (
    <Card>
      <TextHeader>{header}</TextHeader>
      <Textdetail>{detail}</Textdetail>
      <Textbody>
        {body}
      </Textbody>
      <center><Line /></center>
    </Card>
  );
};

export default CardItem;
