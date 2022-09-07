import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: var(--indigo-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: var(--main-width);

  img {
    width: 120px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--white-color);

  @media screen and (max-width: 768px) {
    display: block;
    font-size: var(--extra-large-size);
    margin-right: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: var(--white-color);
  text-decoration: none;
  font-size: 1.4rem;
  padding: 0 20px;

  &:hover {
    color: var(--yellow-color);
  }
`;

export const NavToggle = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--indigo-color);
  }
`;

export const NavToggleLink = styled(Link)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.4rem;
    text-decoration: none;
    margin: 5px 0;
    color: var(--white-color);
    width: 100%;
    text-align: center;
    
    &:hover {
      background-color: var(--yellow-color);
      width: 95%;
      border-radius: 10px;
    }
`;
