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
  overflow: visible;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 75%;
  margin: 0 auto;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  width: 7rem;
  margin-top: -5rem;
  z-index: 1;
`;

const ProfileName = styled.h1`
  color: ${oc.indigo[5]};
  font-size: 2.5rem;
  margin: 1rem 0 0 0;
`;

const ProfileId = styled.small`
  color: ${oc.gray[5]};
  font-size: 1.1rem;
`;

interface ProfileProps {
  user: firebase.User;
}

export default function Profile({ user }: ProfileProps) {
  return (
    <Container>
      <Box>
        <Content>
          <ProfileImage src={user.photoURL || ""} />
          <ProfileName>{user.displayName}</ProfileName>
          <ProfileId>@{user.email?.split("@")[0]}</ProfileId>
        </Content>
      </Box>
    </Container>
  );
}
