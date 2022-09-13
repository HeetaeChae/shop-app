import React, { useCallback, useState } from "react";
import Navbar from "../../components/nav/Navbar";
import { Main } from "./UploadStyle";
import Dropimage from "../../components/nav/dropzone/Dropzone";
import axios from "axios";

import { Form, Input, Button, Select, InputNumber } from "antd";
import "antd/dist/antd.css";
import Titlebar from "../../components/titlebar/Titlebar";
const { TextArea } = Input;

function Upload(props) {
  const [productImg, setProductImg] = useState(null);

  const onFinish = (e) => {
    const variables = { ...e, productImg };
    console.log(variables);
    axios
      .post("http://localhost:7000/api/product/upload", variables)
      .then((res) => {
        if (res.data.success) {
          alert("업로드 성공");
        } else {
          alert("업로드에 실패했습니다.");
        }
      });
  };

  console.log(productImg);

  return (
    <>
      <Navbar />
      <Main>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
          style={{ width: "100%" }}
        >
          <Titlebar text="상품 업로드" />
          <Form.Item
            label="상품명"
            name="title"
            rules={[
              {
                required: true,
                message: "상품명을 입력해 주세요!",
              },
            ]}
          >
            <Input
              style={{ width: "50%" }}
              placeholder="상품명을 입력해 주세요."
            />
          </Form.Item>
          <Form.Item
            label="가격(₩)"
            name="price"
            rules={[
              {
                required: true,
                message: "가격을 입력해 주세요!",
              },
            ]}
          >
            <InputNumber placeholder="원(₩)" />
          </Form.Item>
          <Form.Item
            label="카테고리"
            name="category"
            rules={[
              {
                required: true,
                message: "카테고리를 선택해주세요!",
              },
            ]}
          >
            <Select
              style={{ width: "50%" }}
              placeholder="카테고리를 선택해 주세요."
            >
              <Select.Option value="의류">의류</Select.Option>
              <Select.Option value="전자기기">전자기기</Select.Option>
              <Select.Option value="가구">가구</Select.Option>
              <Select.Option value="잡화">잡화</Select.Option>
              <Select.Option value="책">책</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="상세설명"
            name="descriptionShort"
            rules={[
              {
                required: true,
                message: "상품소개를 입력해주세요!",
              },
            ]}
          >
            <TextArea
              style={{ width: "50%" }}
              rows={1}
              placeholder="상품소개를 요약하여 입력해주세요."
            />
          </Form.Item>

          <Form.Item
            label="상세설명"
            name="descriptionLong"
            rules={[
              {
                required: true,
                message: "상품소개를 입력해주세요!",
              },
            ]}
          >
            <TextArea
              style={{ width: "50%" }}
              rows={7}
              placeholder="상품소개를 상세하게 입력해주세요."
            />
          </Form.Item>

          <Form.Item label="이미지 업로드" name="image">
            <Dropimage setProductImg={setProductImg} />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              업로드
            </Button>
          </Form.Item>
        </Form>
      </Main>
    </>
  );
}

export default Upload;
