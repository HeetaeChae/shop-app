import React, { useEffect, useState } from "react";
import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import {
  Container,
  InputContainer,
  InputTitle,
  InputMain,
  InputHistory,
  ProductList,
  MoreButton,
  Filter,
} from "./HomeStyle";
import axios from "axios";
import { Card, Row, Col, Checkbox } from "antd";
const { Meta } = Card;

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(8);
  const [productNumber, setProductNumber] = useState(null);

  const getProducts = (body) => {
    axios
      .post("http://localhost:7000/api/product/products", body)
      .then((res) => {
        if (res.data.render) {
          setProducts([...products, ...res.data.doc]);
          setProductNumber(res.data.number);
          setSkip(skip + 8);
          setLimit(limit + 8);
        } else if (res.data.search) {
          setProducts([...res.data.doc]);
          console.log(res.data);
        }
      });
  };

  useEffect(() => {
    const body = {
      skip,
      limit,
    };
    getProducts(body);
  }, []);

  useEffect(() => {
    const body = {
      search,
    };
    getProducts(body);
  }, [search]);

  const handleMore = () => {
    const body = {
      skip,
      limit,
    };
    getProducts(body);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    const filteredCategorys = e;
    if (filteredCategorys.length === 0) {
      getProducts();
    }
    filteredCategorys.forEach((category) => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    });
  };

  console.log(products);

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
        <Titlebar filter={true} text="상품 리스트" />
        <Filter>
          <Checkbox.Group
            style={{
              width: "100%",
            }}
            onChange={handleFilter}
          >
            <Row>
              <Col span={8}>
                <Checkbox value="의류">의류</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="전자기기">전자기기</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="가구">가구</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="잡화">잡화</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="책">책</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Filter>
        <ProductList>
          <Row>
            {products.map((product) => (
              <Col lg={6} md={8} sm={12} xs={24} key={product._id}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                    marginBottom: "3.7rem",
                    marginLeft: "2.5rem",
                  }}
                  cover={
                    <img
                      alt="example"
                      src={`https://localhost.7000/${product.productImg}`}
                      style={{ height: "10rem" }}
                    />
                  }
                  actions={[product.category, `${product.price} 원`]}
                >
                  <Meta
                    title={product.title}
                    description={product.descriptionShort}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </ProductList>
        {productNumber === 8 ? (
          <MoreButton onClick={handleMore}>더 보기</MoreButton>
        ) : null}
      </Container>
    </div>
  );
}

export default Home;
