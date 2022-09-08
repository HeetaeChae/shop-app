import antd from "antd";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: var(--main-width);
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

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0 1.5rem 0;
  width: 100%;
`;

export const ProductsTitle = styled.div`
  font-size: var(--extra-large-size);
  font-weight: 700;
`;

export const ProductsFilter = styled.div``;
