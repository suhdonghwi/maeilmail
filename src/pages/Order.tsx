import React from "react";
import styled from "styled-components/macro";
import oc from "../oc.json";

import PageContainer from "../components/PageContainer";

const Container = styled(PageContainer)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: ${oc.gray[9]};
  font-size: 1.3rem;
  text-align: center;
`;

export default function Order() {
  return (
    <Container>
      <Text>아직 정기 배송 기능은 준비 중에 있습니다. Coming soon!</Text>
    </Container>
  );
}
