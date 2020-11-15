import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import firebase from "firebase";
import oc from "../oc.json";

import PageContainer from "../components/PageContainer";
import Card, { CardTitle } from "../components/Card";
import RoundBox from "../components/RoundBox";
import Mission from "../interfaces/Mission";

import ReactLoading from "react-loading";

const Container = styled(PageContainer)`
  background-color: ${oc.indigo[7]};
`;

const Content = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  overflow: visible;

  width: 75%;
  padding-bottom: 2rem;
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
  margin: 1.7rem 0;

  border: none;
  color: white;
  background-color: ${oc.indigo[8]};
  min-height: 2.3rem;

  font-size: 1.1rem;
  padding: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  width: 15rem;
  cursor: pointer;
`;

const BoxParagraph = styled.p`
  margin: 0;
  color: ${oc.gray[6]};
`;

const HomeCard = styled(Card)`
  margin-top: 1.5rem;
`;

export default function Home() {
  const [mission, setMission] = useState<Mission | null>(null);

  useEffect(() => {
    async function fetch() {
      const result = await firebase.database().ref("mission").once("value");
      setMission(result.val());
    }

    fetch();
  }, []);

  return (
    <Container>
      <RoundBox>
        <Content>
          {mission === null ? (
            <ReactLoading type="cubes" color={oc.indigo[7]} />
          ) : (
            <>
              <BoxTitle>이번 주 도전 과제</BoxTitle>
              <BoxMissionTitle>{mission.title}</BoxMissionTitle>
              <BoxParticipateButton>저도 참여할래요!</BoxParticipateButton>
              <BoxParagraph>구성 : {mission.ingredients}</BoxParagraph>

              <HomeCard>
                <CardTitle>TIP!</CardTitle>
                <BoxParagraph>{mission.tip}</BoxParagraph>
              </HomeCard>
              <HomeCard>
                <CardTitle>관련 키트</CardTitle>
                <BoxParagraph>{mission.kit}</BoxParagraph>
              </HomeCard>
            </>
          )}
        </Content>
      </RoundBox>
    </Container>
  );
}
