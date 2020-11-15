import React from "react";
import styled from "styled-components/macro";
import oc from "../oc.json";

import PageContainer from "../components/PageContainer";
import Card, { CardTitle } from "../components/Card";
import RoundBox from "../components/RoundBox";

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
  const missionTitle = "공룡비누 만들기";
  const ingredients =
    "화이트 비누베이스 (500g), 비타민 E/히아루론산 1% 병풀추출물, 캐모마일 워터, 기포제거제, 컬러글리세린 5종, 비누 거품망, 공룡12구몰드, 기본몰드";
  const tip =
    "핫플레이트는 인덕션, 전자레인지, 가스레인지로, 비커는 안 쓰는 스테인리스 그릇으로 대체 가능합니다!";
  const kits = "향초 만들기 키트, 방향제 만들기 키트, 입욕제 만들기 키트";

  return (
    <Container>
      <RoundBox>
        <Content>
          <BoxTitle>이번 주 도전 과제</BoxTitle>
          <BoxMissionTitle>{missionTitle}</BoxMissionTitle>
          <BoxParticipateButton>저도 참여할래요!</BoxParticipateButton>
          <BoxParagraph>구성 : {ingredients}</BoxParagraph>

          <HomeCard>
            <CardTitle>TIP!</CardTitle>
            <BoxParagraph>{tip}</BoxParagraph>
          </HomeCard>
          <HomeCard>
            <CardTitle>관련 키트</CardTitle>
            <BoxParagraph>{kits}</BoxParagraph>
          </HomeCard>
        </Content>
      </RoundBox>
    </Container>
  );
}
