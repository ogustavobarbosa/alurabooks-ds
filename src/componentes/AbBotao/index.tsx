import React from "react"
import styled from "styled-components"

const BotaoEstilizado = styled.button`
    padding: 16px 32px;
    background-color: #465d7e;
    color: #fff;
    border: 2px solid #465d7e;
    cursor: pointer;
    &:hover{
        background-color: #115f7f;
    }
`

export const AbBotao = () => {
    return <BotaoEstilizado>
        Clique aqui
    </BotaoEstilizado>
}


