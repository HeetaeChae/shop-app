import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const UploadZone = styled.div`
  width: 32rem;
  height: 32rem;
  border: none;
  margin-bottom: 1rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1300px) {
    width: 22rem;
    height: 22rem;
  }
  @media screen and (max-width: 768px) {
    width: 16rem;
    height: 16rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const ImageZone = styled.div`
  width: 32rem;
  height: 32rem;
  border: none;
  background-color: white;
  @media screen and (max-width: 1300px) {
    width: 22rem;
    height: 22rem;
  }
  @media screen and (max-width: 768px) {
    width: 16rem;
    height: 16rem;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const Image = styled.img`
  width: 31.8rem;
  height: 31.8rem;
  @media screen and (max-width: 1300px) {
    width: 21.8rem;
    height: 21.8rem;
  }
  @media screen and (max-width: 768px) {
    width: 15.8rem;
    height: 15.8rem;
  }
`;
