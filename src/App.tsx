import React from "react";
import styled from "styled-components";

import Root from "./routes";

const RootContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <RootContainer>
      <Root />
    </RootContainer>
  );
}

export default App;
