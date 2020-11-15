import React from "react";
import styled from "styled-components";
import firebase from "firebase";

import oc from "../oc.json";

import PageContainer from "../components/PageContainer";

const Container = styled(PageContainer)`
  background-color: ${oc.indigo[7]};
`;

const Box = styled.section`
  margin-top: auto;
  height: 80%;
  border-radius: 5rem 5rem 0 0;
  box-shadow: 0px -15px 15px -10px rgba(0, 0, 0, 0.23);

  background-color: white;
  padding: 2rem 0 0 0;
  box-sizing: border-box;

  overflow: auto;
`;

const ProfileImage = styled.img`
`;

interface ProfileProps {
  user: firebase.User;
}

export default function Profile({user}: ProfileProps) {
  return (
    <Container>
      <Box>
        {user.email}
      </Box>
    </Container>
  );
}
