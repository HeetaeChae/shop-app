import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import moment from "moment";

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
  DetailComments,
  DetailInput,
  DetailInputButton,
  DetailComment,
  DetailCommentsTitle,
} from "./DetailStyle";

function Detail() {
  var date = moment().format("YYYY-MM-DD HH:mm:ss");

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
    axios
      .post("http://localhost:7000/api/comment/getComments", body)
      .then((res) => {
        if (res.data.success) {
          setComments([...res.data.doc]);
          console.log(res.data.doc);
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
    if (input.length < 5) {
      return alert("세 글자 이상 써주세요.");
    }
    const body = {
      productId: detail._id,
      comment: input,
      createdAt: date,
    };
    axios
      .post("http://localhost:7000/api/comment/regComment", body)
      .then((res) => {
        if (res.data.success) {
          setComments([res.data.doc[0], ...comments]);
        } else {
          alert("댓글을 등록하는데 실패했습니다.");
        }
      });
    setInput("");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
                {detail.createdAt}
              </div>
            </DetailTitle>
            <DetailImage>
              <Slider {...settings}>
                {detail.productImg.map((img) => (
                  <img
                    src={`http://localhost:7000/${img}`}
                    alt="detailImage"
                    style={{ width: "100%" }}
                    key={img}
                  />
                ))}
              </Slider>
            </DetailImage>
            <DetailContent>
              <DetailButtons>
                <div>
                  <DetailButton>{detail.category}</DetailButton>
                  <DetailButton>
                    {detail.price.toLocaleString("ko-KR")} 원
                  </DetailButton>
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
            <DetailComments>
              <div style={{ marginBottom: "1rem" }}>
                <DetailCommentsTitle>
                  댓글 {comments.length}개
                </DetailCommentsTitle>
                {comments.map((comment) => (
                  <DetailComment key={comment._id}>
                    <div>{comment.comment}</div>
                    <div>{comment.createdAt}</div>
                  </DetailComment>
                ))}
              </div>
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
                    value={input}
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
            </DetailComments>
          </DetailMain>
        ) : null}
      </Container>
      <Footer />
    </div>
  );
}

export default Detail;
