import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--indigo-color);
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FooterLeft = styled.div`
  text-align: center;
`;

export const FooterMiddle = styled.div`
  text-align: center;
  margin: 0 5rem;
  @media screen and (max-width: 768px) {
    margin: 3rem 0;
  }
`;

export const FooterRight = styled.div`
  text-align: center;
`;

export const FooterTitle = styled.div`
  color: var(--white-color);
  font-size: var(--large-size);
  margin-bottom: 1rem;
`;

export const FooterContent = styled.div`
  color: var(--white-color);
  font-size: var(--middle-size);
`;
