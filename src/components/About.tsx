import React from "react";
import styled from "styled-components";


export default function About(){
    return (
        <AboutWrapper>
            <div className="about">
                <p className="about-title">BRINGING YOU THE <span style={{color: "#D87D4A"}}>BEST</span> AUDIO GEAR</p>
                <p>
                    Located at the heart of New York City,
                    Audiophile is the premier store for high end headphones,
                    earphones, speakers, and audio accessories.
                    We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products.
                    Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                    </p>
            </div>
            <div className="about-img">
            </div>
        </AboutWrapper>
    )
}



const AboutWrapper = styled.div`
    width: 1110px;
    height: 588px;
    display: flex;
    gap: 10%;
    margin:  200px auto;
    .about{
        width: 40%;
        color: rgba(0,0,0,0.5);
        padding: 150px 10px;
    }
    .about-title{
        font-family: Manrope;
        font-size: 40px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1.4285714626312256px;
        text-align: left;
        margin-bottom: 40px;
        color: #000;
    }

    .about-img{
        width: 50%;
        height: 100%;
        border-radius: 5px;
        background-image: url("./dist/assets/shared/desktop/image-best-gear.jpg");     
    }


    @media (max-width: 1440px){
        width: 689px;
        height: 633px;
        flex-direction: column-reverse;
        text-align: center;
        margin: 96px auto;
        
        .about{
            width: 573px;
            height: 270px;
            margin: auto;
            padding: 0px;
        }
        .about-img{
            width: 689px;
            height: 300px;
            background-image: url("./dist/assets/shared/tablet/image-best-gear.jpg");     
            /* background-repeat: no-repeat; */
            /* border: 1px solid black; */
            background-size: cover;
   
        }
        .about-title{
            text-align: center;
        }
    }

    @media (max-width: 768px){
        width: 327px;
        height: 698px;
        gap: 0px;

        .about-img{
            width: 327px;
            height: 300px;
            background-image: url("./dist/assets/shared/mobile/image-best-gear.jpg");
            background-size: cover;
            
        }

        .about{
            width: 327px;
            height: 270px;
            margin: 32px 0px 120px;
            padding: 0px;
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: center;
        }

        .about-title{
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 1px;
            text-align: center;

    }
}
`