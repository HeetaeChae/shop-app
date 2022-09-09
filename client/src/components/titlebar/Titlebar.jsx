import React from "react";
import { Select } from "antd";
import antd from "antd";
import {
  TitlebarContainer,
  TitlebarFilter,
  TitlebarText,
} from "./TitlebarStyle";

const { Option } = Select;

function Titlebar({ filter, text }) {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <TitlebarContainer>
      <TitlebarText>{text}</TitlebarText>
      {filter ? (
        <TitlebarFilter>
          <Select
            defaultValue="최신 순"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            <Option value="latest">최신 순</Option>
            <Option value="oldest">오래된 순</Option>
            <Option value="cheap">저렴한 순</Option>
            <Option value="expensive">비싼 순</Option>
          </Select>
        </TitlebarFilter>
      ) : null}
    </TitlebarContainer>
  );
}

export default Titlebar;
