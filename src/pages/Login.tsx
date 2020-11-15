import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components/macro";

import oc from "../oc.json";

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const Container = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${oc.indigo[5]};
`;

const LogoImage = styled.img`
  width: 11rem;
  margin-bottom: 2rem;
`;

const LogoText = styled.p`
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
`;

export default function Login() {
  const history = useHistory();

  useEffect(() => {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/");
      }
    });
  }, [history]);

  const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <Container>
      <LogoText>반복되는 일상을 도전의 반복으로,</LogoText>
      <LogoImage src="/logo.png" />
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Container>
  );
}
