import React from "react";
import styled from "styled-components";

import oc from "../oc.json";

const Card = styled.article`
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  border-raidus: 1rem;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export const CardTitle = styled.h1`
  color: ${oc.indigo[7]};
  font-size: 1.2rem;
  margin: 0;
`;

export default Card;
