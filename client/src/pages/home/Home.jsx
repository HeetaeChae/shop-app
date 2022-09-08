import React, { useEffect, useState } from "react";
import Navbar from "../../components/nav/Navbar";
import {
  Container,
  InputContainer,
  InputTitle,
  InputMain,
  InputHistory,
  ProductsContainer,
  ProductsFilter,
  ProductsTitle,
} from "./HomeStyle";
import axios from "axios";
import antd from "antd";
import { Card } from "antd";
const { Meta } = Card;

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios.post("http://localhost:7000/api/product/products").then((res) => {
      if (res.data.success) {
        setProducts([...res.data.doc]);
      } else if (!res.data.success) {
        alert("데이터를 불러오는데 실패했습니다!");
      }
    });
  }, []);

  useEffect(() => {
    const searchProducts = products.filter((product) =>
      product.title.includes(search)
    );
    console.log(searchProducts);
  }, [search]);

  return (
    <div>
      <Navbar />
      <Container>
        <InputContainer>
          <InputTitle>
            모든 상품 <span style={{ color: "var(--yellow-color)" }}>검색</span>
          </InputTitle>
          <InputMain
            placeholder="검색어를 입력해주세요."
            value={search}
            onChange={handleSearch}
          />
          <InputHistory>
            검색어 :{" "}
            <span style={{ color: "var(--yellow-color)" }}>
              {search === "" ? "없음" : search}
            </span>
          </InputHistory>
        </InputContainer>
        <ProductsContainer>
          <ProductsTitle>상품 리스트</ProductsTitle>
          <ProductsFilter>필터부분</ProductsFilter>
        </ProductsContainer>
      </Container>
    </div>
  );
}

export default Home;
