import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addReducer } from "../../redux/modules/cartSlice";

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
  CartButton,
  MainDivide,
} from "./DetailStyle";

function Detail() {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [detail, setDetail] = useState({});

  useEffect(() => {
    const body = { id };
    axios.post("http://localhost:7000/api/product/detail", body).then((res) => {
      if (res.data.success) {
        setDetail({ ...res.data.doc[0] });
      } else {
        alert("상품 정보를 가져오는데에 실패했습니다.");
      }
    });
  }, []);

  const addCart = () => {
    dispatch(addReducer(detail));
    alert("장바구니에 추가되었습니다.");
  };

  const mainDetail = (title, content) => {
    return (
      <Divide>
        <Title>{title}</Title>
        <Content>{content}</Content>
      </Divide>
    );
  };

  console.log(cart);
  return (
    <div>
      <Navbar />
      <Container>
        <Titlebar text="상품 정보" />
        <Main>
          <MainDivide>
            <div>
              <MainTitle>{detail.title}</MainTitle>
              <MainImage>이미지</MainImage>
            </div>
            <MainDetail>
              {mainDetail("카테고리", detail.category)}
              {mainDetail("업로드 날짜", detail.updatedAt)}
              {mainDetail("가격 정보", detail.price)}
              <CartButton onClick={addCart}>장바구니에 추가</CartButton>
            </MainDetail>
          </MainDivide>
        </Main>
        <Description>
          <div style={{ fontSize: "var(--large-size)", color: "gray" }}>
            상품 설명
          </div>
          <div style={{ fontSize: "var(--midium-size)", marginTop: "1.5rem" }}>
            {detail.descriptionShort}
          </div>
          <div style={{ marginTop: "1rem" }}>{detail.descriptionLong}</div>
        </Description>
      </Container>
    </div>
  );
}

export default Detail;
