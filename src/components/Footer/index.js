import React from 'react'
import * as B from '../styles/footer'
import GlobalStyle from "../styles/global";
import { Link } from 'gatsby';

export function Footer({
    imageInstagram, 
      imageTwitter,
      imageFacebook,
      imagePinterest,
      recipes,
      subscribe,
      about,
      marketed,
}) {
    return (
        <B.Container>
            <GlobalStyle />
            <B.BoxFooter>
                <B.Network>
                    <B.Image src={imageInstagram} alt="" />
                    <B.Image src={imageTwitter} alt="" />
                    <B.Image src={imageFacebook} alt="" />
                    <B.Image src={imagePinterest} alt="" />
                </B.Network>
                <B.BoxMenu>
                    <Link style={{fontSize:'1.5rem', color:'#373737',textTransform: 'uppercase', marginLeft:'3rem'}}>{about}</Link>
                    <Link style={{fontSize:'1.5rem', color:'#373737',textTransform: 'uppercase',marginLeft:'3rem'}}>{recipes}</Link>
                    <Link style={{fontSize:'1.5rem', color:'#373737',textTransform: 'uppercase',marginLeft:'3rem'}}>{subscribe}</Link>
                </B.BoxMenu>
            </B.BoxFooter>
            <B.BoxMarketed>
                <B.Marketed>{marketed}</B.Marketed>
            </B.BoxMarketed>
           
        </B.Container>
    )
}