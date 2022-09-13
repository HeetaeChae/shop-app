import React from "react";
import { Select } from "antd";
import {
  TitlebarContainer,
  TitlebarFilter,
  TitlebarText,
} from "./TitlebarStyle";

const { Option } = Select;

function Titlebar({ filter, text, setSort }) {
  const handleSort = (e) => {
    setSort(e);
  };

  return (
    <TitlebarContainer>
      <TitlebarText>{text}</TitlebarText>
      {filter ? (
        <TitlebarFilter>
          <Select
            defaultValue="가격정렬"
            style={{
              width: 120,
            }}
            onChange={handleSort}
          >
            <Option value="cheap">저렴한 순</Option>
            <Option value="expensive">비싼 순</Option>
          </Select>
        </TitlebarFilter>
      ) : null}
    </TitlebarContainer>
  );
}

export default Titlebar;
