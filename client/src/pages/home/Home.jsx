import React, { useEffect, useState } from "react";
import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import Footer from "../../components/footer/Footer";
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
  const [skip, setSkip] = useState(0);
  const [moreNumber, setMoreNumber] = useState(0);

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const skipProducts = (body) => {
    axios
      .post("http://localhost:7000/api/product/skipProducts", body)
      .then((res) => {
        const { doc } = res.data;
        setProducts([...products, ...doc]);
        setSkip(skip + 8);
        setMoreNumber(res.data.docNumber);
      });
  };

  const allProducts = (body) => {
    axios.post("http://localhost:7000/api/product/allProducts").then((res) => {
      const { doc } = res.data;
      if (body.search) {
        const searchProducts = doc.filter((product) => {
          return product.title.includes(body.search);
        });
        setProducts([...searchProducts]);
        console.log(body.search);
      } else if (body.categoryArr) {
        body.categoryArr.forEach((category) => {
          const categoryProducts = doc.filter((product) => {
            return product.category === category;
          });
          setProducts([...categoryProducts]);
        });
      }
    });
  };
  console.log(products);

  //처음 렌더링
  useEffect(() => {
    const body = { skip };
    skipProducts(body);
  }, []);

  //더보기로 다음 상품 렌더링
  const handleMore = () => {
    const body = { skip };
    skipProducts(body);
  };

  //상품들 검색(serach)
  useEffect(() => {
    const body = { search };
    allProducts(body);
  }, [search]);

  //상품들 카테고리로 필터(category)
  useEffect(() => {
    const body = { categoryArr };
    allProducts(body);
  }, [categoryArr]);

  //상품들 가격순으로 정렬
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
                    actions={[
                      product.category,
                      `${product.price.toLocaleString("ko-KR")} 원`,
                    ]}
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
        {moreNumber === 8 ? (
          <MoreButton onClick={handleMore}>더 보기</MoreButton>
        ) : null}
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
