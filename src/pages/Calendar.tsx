import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import "../styles/Calendar.css";
import firebase from "firebase";
import dayjs from "dayjs";

import ReactCalendar from "react-calendar";
import ReactLoading from "react-loading";

import oc from "../oc.json";

import PageContainer from "../components/PageContainer";

const Container = styled(PageContainer)`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  margin: 0 auto;
  overflow: auto;
  width: 100%;
`;

const Title = styled.h1`
  color: ${oc.indigo[4]};
  font-size: 1.9rem;

  margin: 2rem 0 2rem 0;
  text-align: center;
`;

interface CalendarProps {
  user: firebase.User;
}

export default function Calendar({ user }: CalendarProps) {
  const [dates, setDates] = useState<string[] | null>(null);

  useEffect(() => {
    async function fetch() {
      const result = (
        await firebase
          .database()
          .ref("users/" + user.uid)
          .once("value")
      ).val();
      setDates(result ? Object.values(result) : []);
    }

    fetch();
  }, [user]);

  return (
    <Container>
      {dates === null ? (
        <ReactLoading type="cubes" color={oc.indigo[7]} />
      ) : (
        <Content>
          <Title>나의 도전 현황</Title>
          <ReactCalendar
            tileClassName={({ date }) =>
              dates.includes(dayjs(date).format("YYYY-MM-DD"))
                ? "highlight"
                : null
            }
          />
        </Content>
      )}
    </Container>
  );
}
