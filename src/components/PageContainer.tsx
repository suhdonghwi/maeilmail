import React, { ReactChild, ReactChildren } from "react";
import styled from "styled-components/macro";

const Main = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
`;

interface PageContainerProps {
  children: ReactChild | ReactChildren;
  className?: string;
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return <Main className={className}>{children}</Main>;
}
