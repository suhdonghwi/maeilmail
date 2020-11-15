import React from "react";
import styled from "styled-components";
import oc from "../oc.json";

import PageContainer from "../components/PageContainer";

const Box = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: auto;
  height: 80%;
  border-radius: 5rem 5rem 0 0;
  box-shadow: 0px -15px 15px -10px rgba(0, 0, 0, 0.23);

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

export default function Home() {
  return (
    <PageContainer>
      <Box>
        <BoxTitle>
          이번 주 도전 과제
        </BoxTitle>
        <BoxMissionTitle>
          공룡비누 만들기
        </BoxMissionTitle>
      </Box>
    </PageContainer>
  );
}
