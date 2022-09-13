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

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 3rem 0;
  justify-content: center;
  align-items: space-between;
`;

export const MainTitle = styled.div`
  margin-bottom: 3rem;
  font-size: var(--extra-large-size);
  color: var(--indigo-color);
`;

export const MainImage = styled.div`
  background-color: black;
  width: 40rem;
  height: 40rem;
`;

export const MainDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Divide = styled.div`
  position: relative;
  width: 100px;
  height: 10rem;

  &:after {
    position: absolute;
    content: "";
    border-top: 1px solid black;
    bottom: 2rem;
    left: 0;
    right: 0;
    height: 0.5em;
  }
`;

export const Title = styled.div`
  margin-bottom: 1.5rem;
  font-size: var(--large-size);
  color: gray;
`;

export const Content = styled.div`
  font-size: var(--midium-size);
`;

export const Description = styled.div`
  width: 75%;
`;
