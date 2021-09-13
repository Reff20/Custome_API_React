import React from "react";
import { Div } from "../../style/General.styled";
import { BgHeader, LinkHeader, DivLink } from "./Header.styled";

const Header = () => {
  return (
    <>
      <BgHeader>
        <Div display="flex" alignItens="center">
          <DivLink>
            <LinkHeader to="/">SEARCH YOUR TEAM!</LinkHeader>
          </DivLink>
        </Div>
      </BgHeader>
    </>
  );
};

export default Header;
