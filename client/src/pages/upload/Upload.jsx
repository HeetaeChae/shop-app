import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import Navbar from "../../components/nav/Navbar";
import {
  Main,
  Form,
  FormTitle,
  ItemWrapper,
  ItemLabel,
  ItemText,
  ItemNumber,
  ItemSelect,
  ItemTextarea,
  ButtonWrapper,
  Button,
} from "./UploadStyle";
import Dropimage from "../../components/nav/dropzone/Dropzone";
import Titlebar from "../../components/titlebar/Titlebar";
import Footer from "../../components/footer/Footer";

function Upload() {
  var date = moment().format("YYYY-MM-DD HH:mm:ss");

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [descriptionShort, setDescriptionShort] = useState("");
  const [descriptionLong, setDescriptionLong] = useState("");
  const [productImg, setProductImg] = useState([]);

  const onClickDelete = () => {
    setTitle("");
    setPrice(0);
    setCategory("");
    setDescriptionShort("");
    setDescriptionLong("");
    setProductImg([]);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    const body = {
      title,
      price,
      category,
      descriptionShort,
      descriptionLong,
      productImg,
      createdAt: date,
    };
    axios.post("http://localhost:7000/api/product/upload", body).then((res) => {
      if (res.data.success) {
        console.log(res.data);
      } else {
        console.log(res.data);
      }
    });
    setTitle("");
    setPrice(0);
    setCategory("");
    setDescriptionShort("");
    setDescriptionLong("");
    setProductImg([]);
  };
  return (
    <>
      <Navbar />
      <Main>
        <Titlebar text="상품 업로드" />
        <Form>
          <FormTitle>상품을 업로드하세요.</FormTitle>
          {/* input text 상품명 */}
          <ItemWrapper>
            <ItemLabel for="title">상품명</ItemLabel>
            <ItemText
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            ></ItemText>
          </ItemWrapper>
          {/* input number 가격 */}
          <ItemWrapper>
            <ItemLabel for="price">가격</ItemLabel>
            <ItemNumber
              type="number"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            ></ItemNumber>
          </ItemWrapper>
          {/* select option 카테고리 */}
          <ItemWrapper>
            <ItemLabel for="category">카테고리</ItemLabel>
            <ItemSelect
              name="category"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option value="의류">의류</option>
              <option value="전자기기">전자기기</option>
              <option value="가구">가구</option>
              <option value="잡화">잡화</option>
              <option value="책">책</option>
            </ItemSelect>
          </ItemWrapper>
          {/* input textArea 짧은 상세설명 */}
          <ItemWrapper>
            <ItemLabel for="descriptionShort">짧은 상세설명</ItemLabel>
            <ItemTextarea
              name="descriptionShort"
              rows="1"
              onChange={(e) => setDescriptionShort(e.target.value)}
              value={descriptionShort}
            ></ItemTextarea>
          </ItemWrapper>
          {/* input textArea 긴 상세설명 */}
          <ItemWrapper>
            <ItemLabel for="descriptionLong">긴 상세설명</ItemLabel>
            <ItemTextarea
              name="descriptionShort"
              rows="10"
              onChange={(e) => setDescriptionLong(e.target.value)}
              value={descriptionLong}
            ></ItemTextarea>
          </ItemWrapper>
          <ItemWrapper>
            <ItemLabel for="image">이미지 업로드</ItemLabel>
            <Dropimage setProductImg={setProductImg} />
          </ItemWrapper>
          <ButtonWrapper>
            <Button white onClick={onClickDelete}>
              전체 삭제
            </Button>
            <Button onClick={onSubmitForm}>상품 등록</Button>
          </ButtonWrapper>
        </Form>
      </Main>
      <Footer />
    </>
  );
}

export default Upload;
