import styled from "styled-components";

export const Div = styled.div`
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    width: ${props => props.width};
    height: ${props => props.height};
    background-color: ${props => props.bgColor};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItens}
`
export const Btn = styled.button`

`
export const Txt = styled.p`

`