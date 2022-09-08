import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const UploadZone = styled.div`
  width: 13.2rem;
  height: 13.2rem;
  border: 5px solid var(--indigo-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
`;

export const ImageZone = styled.div`
  width: 13.2rem;
  height: 13.2rem;
  border: 5px solid var(--indigo-color);
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
