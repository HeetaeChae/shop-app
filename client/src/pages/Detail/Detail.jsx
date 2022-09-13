import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";

import {
  Container,
  Main,
  MainImage,
  MainDetail,
  Divide,
  Title,
  Content,
  Description,
  MainTitle,
} from "./DetailStyle";

function Detail() {
  const { id } = useParams();
  console.log(id);

  const mainDetail = (title, content) => {
    return (
      <Divide>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Divide>
    );
  };
  return (
    <div>
      <Navbar />
      <Container>
        <Titlebar text="상품 정보" />
        <Main>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div>
              <MainTitle>title</MainTitle>
              <MainImage>이미지</MainImage>
            </div>

            <MainDetail>
              {mainDetail("카테고리", "category")}
              {mainDetail("업로드 날짜", "updated At")}
              {mainDetail("가격 정보", "price")}
            </MainDetail>
          </div>
        </Main>
        <Description>
          <div style={{ fontSize: "var(--large-size)", color: "gray" }}>
            상품 설명
          </div>
          <div style={{ fontSize: "var(--midium-size)", marginTop: "1.5rem" }}>
            descriptionShort
          </div>
          <div style={{ marginTop: "1rem" }}>descriptionLong</div>
        </Description>
      </Container>
    </div>
  );
}

export default Detail;
