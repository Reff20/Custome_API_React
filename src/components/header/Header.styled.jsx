import styled from "styled-components";
import { Link, BrowserRouter } from "react-router-dom";

export const BgHeader = styled.div`
  width: 100vw;
  height: 50px;
  background-color: #a6ff7d;
  border-bottom: 10px solid #85ff4d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const DivLink = styled(BrowserRouter)``;

export const LinkHeader = styled(Link)`
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  color: white;
  text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    margin: 10px;
`;

export const InputHeader = styled.input`
    box-shadow: 1px 0 0 #000, -1px 0 0 #000, 0 1px 0 #000, 0 -1px 0 #000,
    1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    margin: 10px;
    border-radius: 20px;
    outline: none;
    padding: 3px 15px;
    font-size: 18px;
`
