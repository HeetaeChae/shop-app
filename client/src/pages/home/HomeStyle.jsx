import antd from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--main-width);
  align-items: center;
`;

export const InputContainer = styled.div`
  margin: 4rem 0 2rem 0;
  text-align: center;
`;

export const InputTitle = styled.div`
  font-size: var(--extra-large-size);
  margin: 0 0 32px;
`;

export const InputMain = styled.input`
  width: 28rem;
  height: 3rem;
  padding: 1rem;
  border-radius: 10px;
  border: none;
`;

export const InputHistory = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

export const ProductList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreButton = styled.button`
  width: 7rem;
  height: 3rem;
  text-align: center;
  background-color: var(--indigo-color);
  color: var(--white-color);
  border-radius: 0.5rem;
  font-size: var(--large-size);
  margin-top: 1.5rem;
  &:hover {
    cursor: pointer;
  }
  &:active {
    color: var(--yellow-color);
  }
`;

export const Filter = styled.div`
  margin-bottom: 3rem;
`;
