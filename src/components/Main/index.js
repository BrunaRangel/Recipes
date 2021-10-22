import React from 'react'
import * as B from '../styles/main'
import GlobalStyle from "../styles/global";

export function Main({
    titleLatest,
    imageCake,
    imagePizza, 
    imageSmoothie,
    textCake,
    textPizza,
    textSmoothie,
    imageSpoon,
    titleAbout,
    descriptionAbout,
    subscribe,
    newsletter,
    submit,
}) {
    return (
        <B.Container>
            <GlobalStyle />
            <B.WrapRecipes>
                <B.Title>{titleLatest}</B.Title>
                <B.BoxRecipes>
                    <B.Recipes>
                        <B.Image src={imageCake} alt="" />
                        <B.BoxText>
                            <B.Text>{textCake}</B.Text>
                        </B.BoxText>
                    </B.Recipes>
                    <B.Recipes>
                        <B.Image src={imagePizza} alt="" />
                        <B.BoxText>
                            <B.Text>{textPizza}</B.Text>
                        </B.BoxText>
                    </B.Recipes>
                    <B.Recipes>
                        <B.Image src={imageSmoothie} alt="" />
                            <B.BoxText>
                        <B.Text>{textSmoothie}</B.Text>
                        </B.BoxText>
                    </B.Recipes>
                </B.BoxRecipes>
            </B.WrapRecipes>
            <B.WrapSpoon>
                <B.BoxSpoon>
                    <B.ImageSpoon src={imageSpoon} alt="" />  
                </B.BoxSpoon>
                <B.BoxAbout>
                    <B.TitleAbout>{titleAbout}</B.TitleAbout>
                    <B.DescriptionAbout>{descriptionAbout}</B.DescriptionAbout>
                </B.BoxAbout>
            </B.WrapSpoon>
            <B.BoxNewsletter>
                <B.TitleSubscribe>{subscribe}</B.TitleSubscribe>
                <B.TextNewsletter>{newsletter}</B.TextNewsletter>
                <B.Input placeholder="Your Email"></B.Input>
                <B.ButtonSubmit>{submit}</B.ButtonSubmit>
            </B.BoxNewsletter>
        </B.Container>
    )
}