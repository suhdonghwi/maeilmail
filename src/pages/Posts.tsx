import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import firebase from "firebase";
import styled from "styled-components/macro";
import oc from "../oc.json";
import Swal, { SweetAlertOptions, SweetAlertResult } from "sweetalert2";
import ReactLoading from "react-loading";

import PageContainer from "../components/PageContainer";
import Card from "../components/Card";

import Post from "../interfaces/Post";

const Container = styled(PageContainer)`
  overflow: auto;
`;

const Content = styled.div`
  margin: 0 auto;
  width: 75%;
  padding: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WriteButton = styled.button`
  background-color: ${oc.indigo[6]};
  width: 100%;
  border: none;
  color: white;

  font-size: 1.1rem;
  padding: 0.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 1rem;

  min-height: 2.3rem;

  cursor: pointer;

  &:active {
    color: white;
  }
`;

const PostList = styled.ul`
  padding: 0;
  list-style-type: none;
  width: 100%;
`;

const PostItem = styled.li``;

const PostCard = styled(Card)`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const PostImage = styled.img`
  width: 100%;
  border-radius: 0.3rem;
  margin-bottom: 0.5rem;
`;

const Date = styled.p`
  margin: 0 0 0.2rem 0;
  color: ${oc.gray[6]};
  font-size: 0.8rem;
`;

interface PostsProps {
  user: firebase.User;
}

export default function Posts({ user }: PostsProps) {
  const [posts, setPosts] = useState<Post[] | null>(null);

  async function fetch() {
    const result = (await firebase.database().ref("posts").once("value")).val();

    if (result === null) setPosts([]);
    else {
      const values: Post[] = Object.values(result);
      values.reverse();
      setPosts(values);
    }
  }

  useEffect(() => {
    fetch();
  }, []);

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

    const result: SweetAlertResult | undefined = await Swal.mixin({
      progressSteps: ["1", "2"],
    }).queue([firstModal, secondModal]);
    if (result && result.value) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const post: Post = {
          author: user.email?.split("@")[0]!,
          uid: user.uid,
          content: result.value[0],
          imageUrl: e.target?.result as string,
          date: dayjs().format("YYYY-MM-DD"),
        };
        firebase.database().ref("posts").push(post);

        setPosts(null);
        fetch();
      };

      reader.readAsDataURL(result.value[1]);
    }
  };

  return (
    <Container>
      <Content>
        <WriteButton onClick={onWriteClick}>글 쓰기</WriteButton>
        {posts === null ? (
          <ReactLoading type="cubes" color={oc.indigo[5]} />
        ) : (
          <PostList>
            {posts.map((post, i) => (
              <PostItem key={i}>
                <PostCard>
                  <div>
                    <PostImage src={post.imageUrl} />
                  </div>
                  <Date>{dayjs(post.date).format("YYYY년 MM월 DD일")}</Date>
                  <div>
                    <strong>{post.author}</strong> {post.content}
                  </div>
                </PostCard>
              </PostItem>
            ))}
          </PostList>
        )}
      </Content>
    </Container>
  );
}
