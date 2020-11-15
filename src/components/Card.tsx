import styled from "styled-components";

import oc from "../oc.json";

const Card = styled.article`
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  border-raidus: 0.5rem;

  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`;

export const CardTitle = styled.h1`
  color: ${oc.indigo[7]};
  font-size: 1.2rem;
  margin: 0 0 0.3rem 0;
`;

export default Card;
