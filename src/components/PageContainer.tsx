import React, { ReactChild, ReactChildren } from "react";
import styled from "styled-components";

const Main = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

interface PageContainerProps {
  children: ReactChild | ReactChildren;
}

export default function PageContainer({ children }: PageContainerProps) {
  return <Main>{children}</Main>;
}
