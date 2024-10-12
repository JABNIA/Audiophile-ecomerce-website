import React from "react"
import styled from "styled-components"
import usePageContext from "./Context"

export default function Footer() {
    const context = usePageContext()


    return (
        <FooterWrapper>
                <div className="logo">
                    <img src="./public/assets/shared/desktop/logo.svg" alt="" />
                </div>
                <div className="nav">
                    <ul>
                        <li onClick={()=> {
                            context.setHome(true)
                    context.setHeadphones(false)
                    context.setSpeakers(false)
                    context.setEarphones(false)
                    context.setCheckOut(false)
                }}>HOME</li>
                        <li onClick={()=> {
                            context.setHome(false)
                    context.setHeadphones(true)
                    context.setSpeakers(false)
                    context.setEarphones(false)
                    context.setCheckOut(false)

                }}>HEAPHONES</li>
                        <li onClick={()=> {
                            context.setHome(false)
                    context.setHeadphones(false)
                    context.setSpeakers(true)
                    context.setEarphones(false)
                    context.setCheckOut(false)
                    
                }}>SPEAKERS</li>
                        <li onClick={()=> {
                        context.setHome(false)
                        context.setHeadphones(false)
                        context.setSpeakers(false)
                        context.setEarphones(true)
                        context.setCheckOut(false)

                }}>EARPHONES</li>
                    </ul>
                </div>
                <div>
                    <p className="description">Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
                    <p className="copy">Copyright 2024. All Rights Reserved</p>
                </div>
                <div className="socials">
                   <img src="./public/assets/shared/desktop/icon-facebook.svg" alt="" /> 
                   <img src="./public/assets/shared/desktop/icon-twitter.svg" alt="" /> 
                   <img src="./public/assets/shared/desktop/icon-instagram.svg" alt="" /> 
                </div>
        </FooterWrapper>
    )
}


const FooterWrapper = styled.footer`
    width: 1440px;
    height: 365px;
    margin: 0px auto;
    background-color: #000;
    padding: 60px 120px;
    gap: 80px;
    color: rgba(255,255,255, .5);
    position: relative;

    .logo{
        position: absolute;
        top: 75px;
        left: 165px;
    }

    .description {
        width: 540px;
        height: auto;
        position: absolute;
        top: 136px;
        left: 165px;
    }
    .copy{
        position: absolute;
        top: 292px;
        left: 165px;
    }

    .nav > ul {
        width: 429px;
        position: absolute;
        top: 75px;
        right: 165px;
        display: flex;
        justify-content: space-around;
        list-style: none;
        color: #FFF;
    }

    .nav > ul > li {
        cursor: pointer;
    }

    .socials{
        width: 13.5%;
        display: flex;
        gap: 16px;
        position: absolute;
        top: 205px;
        right: 165px;

    }


    @media (max-width: 1440px){
        width: 768px;
        height: 400px;
        
        .logo{
            position: absolute;
            top: 60px;
            left: 39px;
        }

        .nav > ul{
            justify-content: space-between;
            right: 0px;
            top: 117px;
            left: 39px;
        }

        .description {
            top: 174px;
            left: 39px;
        }
        .copy{
            top: 329px;
            left: 39px;
        }
        .socials{
            top: 329px;
            right: 40px;
    }

}
@media (max-width: 768px){
    width: 375px;
    height: 654px;

    .logo { 
        top: 52px;
        left: 105px;
    }

    .nav > ul{
            width: 108px;
            height: 148px;
            top: 125px;
            left: 134px;
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }

    .description {
        width: 327px;
        height: 150px;
        top: 321px;
        left: 24px;
        text-align: center;
    }

    .copy{
        top: 519px;
        left: 58px;
    }   
    
    .socials{
        top: 592px;
        right: 0px;
        left: 136px;
    }

}
`