import styled, { css } from "styled-components";

export const Container = styled.div`
  background: var(--white-color);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: var(--main-width);
  align-items: center;
`;

export const DetailMain = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 3rem;
  background-color: var(--white-color);
  margin-bottom: 5rem;
`;

export const DetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid var(--indigo-color);
  border-bottom: 1px solid lightgray;
  padding: 1rem 0;
`;

export const DetailImage = styled.div`
  margin: 3rem 0;
  width: 100%;
  background-color: black;
`;

export const DetailContent = styled.div`
  width: 100%;
`;

export const DetailButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const DetailDescription = styled.div`
  width: 100%;
  border-top: 1.5px solid lightgray;
  border-bottom: 1.5px solid lightgray;
  padding: 1rem;
`;

export const DetailButton = styled.button`
  margin-right: 1rem;
  width: 7rem;
  height: 4rem;
  background-color: var(--indigo-color);
  color: var(--white-color);
  border-radius: 3rem;
  font-size: var(--midium-size);
  border: none;
  ${(props) =>
    props.click &&
    css`
      background-color: var(--yellow-color);
      margin-right: 0;
      margin-left: 1rem;
      &:hover {
        cursor: pointer;
        background-color: rgb(242, 203, 118);
      }
    `}
`;

export const DetailInput = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: rgb(220, 224, 232);
  border: 1px solid lightgray;
  border-radius: 10px;
  text-align: center;
`;

export const DetailComments = styled.div`
  margin-top: 3rem;
  border-top: 1px solid lightgray;
  padding: 1rem 0;
  width: 100%;
`;

export const DetailInputButton = styled.button`
  width: 11%;
  height: 6.6rem;
  border-radius: 10px;
  border: 1px solid gray;
  font-size: var(--large-size);
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const DetailCommentsTitle = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: rgb(220, 224, 232);
  border: 1px solid lightgray;
  border-radius: 10px;
  font-size: var(--large-size);
`;

export const DetailComment = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
