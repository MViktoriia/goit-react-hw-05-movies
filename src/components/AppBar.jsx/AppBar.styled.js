import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled.header`
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
    margin-left: 20px;
  }
`;

export const Link = styled(NavLink)`
  padding: 16px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: orangered;    
  }
`;