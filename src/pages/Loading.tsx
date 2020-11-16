import React from "react";
import styled from "styled-components/macro";
import oc from "../oc.json";

import ReactLoading from "react-loading";

const Container = styled.main`
  height: 100%;
  background-color: ${oc.indigo[7]};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Loading() {
  return (
    <Container>
      <ReactLoading type="cubes" />
    </Container>
  );
}
