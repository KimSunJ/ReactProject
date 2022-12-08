import styled from "styled-components";

import FirstContainer from "./First/Container";
import SecondContainer from "./Second/Container";
import ThirdContainer from "./Third/Container";
import IteminfoContainer from "./Iteminfo/Container";
import styled from "styled-components";
const Body = () => {
  return (
    <>
    <BodyBox>
      <FirstContainer />
      <SecondContainer />
      <ThirdContainer />
      <IteminfoContainer />
    </BodyBox>
    
      <MainBox>
        <IteminfoContainer />
      </MainBox>
    </>
  );
};

export default Body;

const BodyBox = styled.div`
  width: 100%;`
const MainBox = styled.div`
  font-family: "tesla";
`;
