import React from "react";
import { GithubOutlined, DownSquareOutlined } from "@ant-design/icons";

import {
  FooterContainer,
  FooterLeft,
  FooterMiddle,
  FooterRight,
  FooterTitle,
  FooterContent,
} from "./FooterStyle";

function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterTitle>Happy Coding!</FooterTitle>
        <FooterContent>shop-app</FooterContent>
      </FooterLeft>
      <FooterMiddle>
        <FooterTitle>사용 기술</FooterTitle>
        <FooterContent>React.js, ReduxToolkit, styled-compoents</FooterContent>
        <FooterContent>Node.js, express, MongoDB</FooterContent>
      </FooterMiddle>
      <FooterRight>
        <FooterTitle>링크</FooterTitle>
        <div
          style={{
            display: "flex",
            color: "var(--white-color)",
            fontSize: "3rem",
          }}
        >
          <a href="https://velog.io/@chaeheetae">
            <GithubOutlined style={{ marginRight: "1rem" }} />
          </a>
          <a href="https://github.com/HeetaeChae">
            <DownSquareOutlined />
          </a>
        </div>
      </FooterRight>
    </FooterContainer>
  );
}

export default Footer;
