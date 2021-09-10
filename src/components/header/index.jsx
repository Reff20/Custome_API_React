import Button from "@restart/ui/esm/Button";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
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
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </BgHeader>
    </>
  );
};

export default Header;
