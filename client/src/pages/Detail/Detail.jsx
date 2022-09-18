import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import Footer from "../../components/footer/Footer";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addReducer } from "../../redux/modules/cartSlice";

import {
  Container,
  DetailMain,
  DetailTitle,
  DetailImage,
  DetailContent,
  DetailButtons,
  DetailDescription,
  DetailButton,
  DetailComment,
  DetailInput,
  DetailInputButton,
} from "./DetailStyle";

function Detail() {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [detail, setDetail] = useState(null);
  const [input, setInput] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const body = { id };
    axios.post("http://localhost:7000/api/product/detail", body).then((res) => {
      if (res.data.success) {
        setDetail({ ...res.data.doc[0] });
      } else {
        alert("상품 정보를 가져오는데에 실패했습니다.");
      }
    });
    axios.post("http://localhost:7000/api/comment/getComments").then((res) => {
      if (res.data.success) {
        setComments([...res.data.doc]);
      } else {
        alert("댓글 데이터를 가져오는데에 실패했습니다.");
      }
    });
  }, []);

  const addCart = () => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i]._id === detail._id) {
        return alert(`장바구니에 ${detail.title}이(가) 이미 존재합니다.`);
      }
    }
    dispatch(addReducer(detail));
  };

  const regComment = () => {
    const body = {
      productId: detail._id,
      comment: input,
    };
    axios
      .post("http://localhost:7000/api/comment/regComment", body)
      .then((res) => {
        if (res.data.success) {
          setComments([res.data.doc, ...comments]);
        } else {
          alert("댓글을 등록하는데 실패했습니다.");
        }
      });
  };

  console.log(comments);

  return (
    <div>
      <Navbar />
      <Container>
        <Titlebar text="상품 정보" />
        {detail ? (
          <DetailMain>
            <DetailTitle>
              <div
                style={{ fontSize: "var(--large-size)", paddingLeft: "1rem" }}
              >
                {detail.title}
              </div>
              <div
                style={{
                  fontSize: "var(--midium-size)",
                  paddingRight: "1rem",
                  color: "gray",
                }}
              >
                {detail.createdAt.slice(0, 10)}
              </div>
            </DetailTitle>
            <DetailImage>
              <img
                src={`http://localhost:7000/${detail.productImg[0]}`}
                alt="detailImage"
                style={{ width: "100%" }}
              />
            </DetailImage>
            <DetailContent>
              <DetailButtons>
                <div>
                  <DetailButton>{detail.category}</DetailButton>
                  <DetailButton>7일 전</DetailButton>
                </div>
                <div>
                  <DetailButton click>좋아요</DetailButton>
                  <DetailButton click onClick={addCart}>
                    장바구니
                  </DetailButton>
                </div>
              </DetailButtons>
              <DetailDescription>
                <div
                  style={{
                    paddingLeft: "1rem",
                    marginBottom: "1rem",
                    fontSize: "var(--midium-size)",
                  }}
                >
                  {detail.descriptionShort}
                </div>
                <div
                  style={{
                    paddingLeft: "1rem",
                    fontSize: "var(--small-size)",
                    color: "gray",
                  }}
                >
                  {detail.descriptionLong}
                </div>
              </DetailDescription>
            </DetailContent>
            <DetailComment>
              <DetailInput>
                <div
                  style={{ fontSize: "var(--large-size)", marginTop: "1rem" }}
                >
                  댓글 쓰기
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <textarea
                    onChange={(e) => setInput(e.target.value)}
                    rows="4"
                    cols="85"
                    style={{
                      width: "80%",
                      marginRight: "1rem",
                      padding: "0.5rem",
                    }}
                  />
                  <DetailInputButton onClick={regComment}>
                    등록
                  </DetailInputButton>
                </div>
              </DetailInput>
            </DetailComment>
          </DetailMain>
        ) : null}
      </Container>
      <Footer />
    </div>
  );
}

export default Detail;
