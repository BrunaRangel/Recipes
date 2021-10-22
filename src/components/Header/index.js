import React from 'react'
import * as B from '../styles/header'
import GlobalStyle from "../styles/global";

export function Header({
    logo,
    about,
    recipes,
    subscribe,
    title,
    background
}) {
    return (
        <B.Container back={background}>
            <GlobalStyle />
            <B.BoxMenu>
                <B.BoxLogo>
                    <B.Logo src={logo} alt="" />
                </B.BoxLogo>
                <B.BoxButtons>
                    <B.Btn>{about}</B.Btn>
                    <B.Btn>{recipes}</B.Btn>
                    <B.Btn>{subscribe}</B.Btn>
                </B.BoxButtons>
            </B.BoxMenu>
            <B.BoxTitle>
                <B.Title>{title}</B.Title>
            </B.BoxTitle>
        </B.Container>
    )
}