import React from "react";
import styled from "styled-components";

import {
  FiHome,
  FiShoppingCart,
  FiCalendar,
  FiEdit3,
  FiMenu,
} from "react-icons/fi";
import oc from "../oc.json";

const Nav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
  font-weight: light;
  color: ${oc.indigo[2]};
`;

export default function NavBar() {
  return (
    <Nav>
      <FiShoppingCart />
      <FiCalendar />
      <FiHome />
      <FiEdit3 />
      <FiMenu />
    </Nav>
  );
}
