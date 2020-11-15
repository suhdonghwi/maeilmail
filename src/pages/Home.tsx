import React from "react";
import styled from "styled-components";
import oc from "../oc.json";

import PageContainer from "../components/PageContainer";

const Container = styled(PageContainer)`
  background-color: ${oc.indigo[7]};
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: auto;
  height: 80%;
  border-radius: 5rem 5rem 0 0;
  box-shadow: 0px -15px 15px -10px rgba(0, 0, 0, 0.23);

  background-color: white;

  padding: 2rem 0;
  box-sizing: border-box;
`;

const BoxTitle = styled.small`
  color: ${oc.indigo[3]};
  font-size: 1rem;
`;

const BoxMissionTitle = styled.h1`
  color: ${oc.indigo[8]};
  font-size: 2rem;
  margin: 0;
`;

const BoxParticipateButton = styled.button`
  margin-top: 1.5rem;

  border: none;
  color: white;
  background-color: ${oc.indigo[8]};

  font-size: 1.1rem;
  padding: 0.5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

  width: 70%;
  cursor: pointer;
`;

export default function Home() {
  const missionTitle = "공룡비누 만들기";

  return (
    <Container>
      <Box>
        <BoxTitle>이번 주 도전 과제</BoxTitle>
        <BoxMissionTitle>{missionTitle}</BoxMissionTitle>
        <BoxParticipateButton>저도 참여할래요!</BoxParticipateButton>
      </Box>
    </Container>
  );
}
