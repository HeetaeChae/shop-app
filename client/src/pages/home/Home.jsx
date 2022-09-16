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
import { Card, Row, Col, Checkbox, Collapse } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const { Panel } = Collapse;

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [categoryArr, setCategoryArr] = useState([]);

  const getProducts = (body) => {
    axios.post("http://localhost:7000/api/product/products").then((res) => {
      setProducts([...res.data.doc]);
      if (body.search) {
        const { doc } = res.data;
        const searchProducts = doc.filter((product) => {
          return product.title.includes(body.search);
        });
        setProducts([...searchProducts]);
      }
    });
  };

  const categorys = ["의류", "전자기기", "가구", "잡화", "책"];

  const handleCategory = (category) => {
    const handleCategoryArr = [...categoryArr];
    if (handleCategoryArr.indexOf(category) === -1) {
      handleCategoryArr.push(category);
      setCategoryArr([...handleCategoryArr]);
    } else {
      const index = handleCategoryArr.indexOf(category);
      handleCategoryArr.splice(index, 1);
      setCategoryArr([...handleCategoryArr]);
    }
  };

  const handleMore = () => {};

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    const body = {
      search,
    };
    getProducts(body);
  }, [search]);

  useEffect(() => {
    if (sort === "cheap") {
      const sortedProducts = products.sort((a, b) => {
        return a.price - b.price;
      });
      setProducts([...sortedProducts]);
    } else if (sort === "expensive") {
      const sortedProducts = products.sort((a, b) => {
        return b.price - a.price;
      });
      setProducts([...sortedProducts]);
    }
  }, [sort]);

  useEffect(() => {
    categoryArr.forEach((category) => {
      const filteredProducts = products.filter(
        (product) => product.category === category
      );
      setProducts(filteredProducts);
    });
  }, [categoryArr]);

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
        <Titlebar filter={true} text="상품 리스트" setSort={setSort} />
        <Filter>
          <Collapse>
            <Panel header="카테고리로 정렬" style={{ width: "365.7px" }}>
              {categorys.map((category) => (
                <Checkbox
                  key={category}
                  onChange={() => handleCategory(category)}
                >
                  {category}
                </Checkbox>
              ))}
            </Panel>
          </Collapse>
        </Filter>
        <ProductList>
          <Row gutter={[16, 16]}>
            {products.map((product) => (
              <Link to={`/detail/${product._id}`} key={product._id}>
                <Col lg={6} md={8} sm={12} xs={24}>
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
                        src={`http://localhost:7000/${product.productImg[0]}`}
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
              </Link>
            ))}
          </Row>
        </ProductList>
        <MoreButton onClick={handleMore}>더 보기</MoreButton>
      </Container>
    </div>
  );
}

export default Home;
