import styled, { css } from "styled-components";

export const Main = styled.main`
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--main-width);
  align-items: center;
`;

export const Form = styled.form`
  margin: 3rem 0;
  width: 100%;
  height: 100%;
  color: var(--white-color);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.div`
  color: var(--white-color);
  font-size: var(--large-size);
  font-weight: 700;
  text-align: center;
  padding: 1.5rem 0;
  background-color: var(--indigo-color);
  width: 100%;
`;

export const ItemWrapper = styled.div`
  text-align: start;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ItemLabel = styled.label`
  color: var(--indigo-color);
  font-size: var(--large-size);
  font-weight: 700;
`;

export const ItemText = styled.input`
  width: 80%;
  padding: 0.5rem;
  border: none;
  color: var(--indigo-color);
`;

export const ItemNumber = styled.input`
  width: 80%;
  padding: 0.5rem;
  border: none;
  color: var(--indigo-color);
`;

export const ItemSelect = styled.select`
  width: 80%;
  padding: 0.5rem;
  border: none;
  color: var(--indigo-color);
`;

export const ItemTextarea = styled.textarea`
  width: 80%;
  padding: 0.5rem;
  border: none;
  color: var(--indigo-color);
`;

export const ButtonWrapper = styled.div`
  color: var(--white-color);
  text-align: end;
  padding: 1.5rem 0;
  background-color: var(--indigo-color);
  width: 100%;
  margin-top: 3rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Button = styled.button`
  padding: 0.5rem;
  font-size: var(--large-size);
  background-color: var(--yellow-color);
  border-radius: 10px;
  margin: 0 1rem;
  ${(props) =>
    props.white &&
    css`
      background-color: var(--white-color);
      color: var(--indigo-color);
    `}

  @media screen and (max-width: 768px) {
    margin: 0.5rem;
  }

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: translateY(0.5px);
  }
`;
