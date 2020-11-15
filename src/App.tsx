import React, { useEffect } from "react";
import styled from "styled-components";

import firebase from "firebase/app";
import "firebase/auth";

import Root from "./routes";

const RootContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCKIUCOk3yw8Q_ku3rWu0idgirszNDiy4M",
      authDomain: "maeilmail-f0eee.firebaseapp.com",
      databaseURL: "https://maeilmail-f0eee.firebaseio.com",
      projectId: "maeilmail-f0eee",
      storageBucket: "maeilmail-f0eee.appspot.com",
      messagingSenderId: "238455436713",
      appId: "1:238455436713:web:a8b853744697a5ddc540b8",
      measurementId: "G-XYJBDBP058",
    };
    firebase.initializeApp(firebaseConfig);
  }, []);

  return (
    <RootContainer>
      <Root />
    </RootContainer>
  );
}

export default App;
