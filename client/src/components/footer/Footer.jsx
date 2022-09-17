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
        <FooterContent>front : React.js, styled-compoents</FooterContent>
        <FooterContent>backend : Node.js, express</FooterContent>
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
          <GithubOutlined style={{ marginRight: "1rem" }} />
          <DownSquareOutlined />
        </div>
      </FooterRight>
    </FooterContainer>
  );
}

export default Footer;
