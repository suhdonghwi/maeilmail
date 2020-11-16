import React from "react";
import styled from "styled-components/macro";
import ReactCalendar from "react-calendar";
import "../styles/Calendar.css";

import oc from "../oc.json";

import PageContainer from "../components/PageContainer";

const Content = styled.div`
  margin: 0 auto;
  width: 75%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${oc.indigo[4]};
  font-size: 1.9rem;

  margin: 2rem 0 2rem 0;
`;

export default function Calendar() {
  return (
    <PageContainer>
      <Content>
        <Title>나의 도전 현황</Title>
        <ReactCalendar />
      </Content>
    </PageContainer>
  );
}
