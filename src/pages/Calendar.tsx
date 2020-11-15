import React from "react";
import ReactCalendar from "react-calendar";
import "../styles/Calendar.css";

import PageContainer from "../components/PageContainer";

export default function Calendar() {
  return (
    <PageContainer>
      <ReactCalendar prev2Label="" next2Label="" />
    </PageContainer>
  );
}
