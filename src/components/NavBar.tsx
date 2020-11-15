import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { useHistory } from "react-router";

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
  padding: 0.7rem 1.5rem;
  box-sizing: border-box;
`;

const TabList = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5rem;
  font-weight: light;
`;

const TabItem = styled.li`
  margin: 0 auto;

  &:first-child {
    margin: 0 auto 0 0;
  }

  &:last-child {
    margin: 0 0 0 auto;
  }
`;

const TabLink = styled(Link)`
  color: ${oc.indigo[2]};

  &.current {
    color: ${oc.indigo[7]};
  }
`;

export default function NavBar() {
  const history = useHistory();

  const data = [
    { link: "/order", Icon: FiShoppingCart },
    { link: "/calendar", Icon: FiCalendar },
    { link: "/", Icon: FiHome },
    { link: "/post", Icon: FiEdit3 },
    { link: "/menu", Icon: FiMenu },
  ];

  return (
    <Nav>
      <TabList>
        {data.map(({ link, Icon }) => (
          <TabItem>
            <TabLink
              to={link}
              className={history.location.pathname === link ? "current" : ""}
            >
              <Icon />
            </TabLink>
          </TabItem>
        ))}
      </TabList>
    </Nav>
  );
}
