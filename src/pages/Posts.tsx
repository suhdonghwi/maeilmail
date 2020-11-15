import React from "react";
import styled from "styled-components/macro";
import oc from "../oc.json";
import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";

import PageContainer from "../components/PageContainer";

const Content = styled.div`
  margin: 0 auto;
  width: 75%;
  padding: 2rem 0;
`;

const WriteButton = styled.button`
  background-color: ${oc.indigo[6]};
  width: 100%;
  border: none;
  color: white;

  font-size: 1.1rem;
  padding: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  cursor: pointer;

  &:active {
    color: white;
  }
`;

export default function Posts() {
  const onWriteClick = async () => {
    const firstModal: SweetAlertOptions<any, any> = {
      title: "후기 내용",
      text: "여러분의 도전 과제 후기를 써주세요!",
      input: "textarea",
      inputAttributes: {
        style: "resize: vertical; font-size: 1rem",
      },
    };

    const secondModal: SweetAlertOptions<any, any> = {
      title: "이미지 업로드",
      text: "도전 과제 수행 이미지를 올려주세요!",
      input: "file",
      inputAttributes: {
        accept: "image/*",
      },
    };

    const result: SweetAlertResult | undefined = await Swal.mixin({ progressSteps: ["1", "2"] }).queue([firstModal, secondModal]);
    if (result) {
      console.log(result.value);
    }
  };

  return (
    <PageContainer>
      <Content>
        <WriteButton onClick={onWriteClick}>글 쓰기</WriteButton>
      </Content>
    </PageContainer>
  );
}
