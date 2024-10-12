import REact from "react"
import styled from "styled-components"



export default function ProductPresentation(){
    return (
        <PresentationWrapper>
        <ZX9>
            <ProductImage src={"./dist/assets/home/desktop/image-speaker-zx9.png"}/>
        <ProductPresentationDescription>
            <p className="product-name">ZX9 SPEAKER</p>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <ProductBtn className="prodBtn">SEE PRODUCT</ProductBtn>
        </ProductPresentationDescription>
        </ZX9>
        <ZX7>
            <p className="product-name">ZX7 SPEAKER</p>
            <ProductBtn className="prodBtn">
                SEE PRODUCT
            </ProductBtn>
        </ZX7>
        <YX1>
            <div className="prod-img">

            </div>
            <div className="prod-des">
                <p>YX1 EARPHONES</p>
                <ProductBtn className="prodBtn"> 
                    SEE PRODUCT
                </ProductBtn>
            </div>
        </YX1>
        </PresentationWrapper>
    )
}           

const PresentationWrapper = styled.div`
    width: 1110px;
    height: auto;
    margin: auto;
    margin-top: 120px;
    display: flex;
    flex-direction: column;

@media (max-width: 1440px){
    width:689px;
    margin-top: 96px;
}

@media (max-width: 768px){
    width:327px;
}
`

const ZX9 = styled.div`
    width: 100%;
    height: 560px;
    background-color: #D87D4A;
    background-image: url("./dist/assets/home/desktop/pattern-circles.svg");
    background-repeat: no-repeat;
    background-position-x: -130px;
    display: flex;
    overflow: hidden;
    gap: 150px;
    padding-left: 175px;
    border-radius: 8px;

    .prodBtn{
       background-color: #000;
       border: 2px solid #000;
    }

    .prodBtn:hover{
        background-color: #4c4c4c;
        border: 2px solid #4c4c4c;
    }

    @media (max-width: 1440px){
        height: 720px;
        background-position-y: -290px;  
        display: flex;
        flex-direction: column;
        gap: 0px;
        text-align: center;
        color: #FFFFFF;
        padding: 0px;
    }

    @media (max-width: 768px){
        background-position-x: center;
        background-position-y: -116px;
        background-size: 173% 85%;
    }
`

const ProductPresentationDescription = styled.div`
    width: 349px;
    height: 303px;
    margin-top: 140px;

    p{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;   
        line-height: 25px;
        text-align: left;
        margin: 20px auto;
    }

    .product-name{
        font-family: Manrope;
        font-size: 56px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 2px;
        text-align: left;
    }

    @media (max-width: 1440px){
        width: 349px;
        height: 303px;
        margin: auto;
        margin-top: 64px;
    }
    
    p{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: center;
        margin: 0px;
    }

    .product-name{
        font-family: Manrope;
        font-size: 56px;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 2px;
        text-align: center;
        margin: 0px 0px 24px;
    }

    @media (max-width: 768px){
        

        .product-name{
            width: 280px;
            padding: 0px 24px;
            margin: 32px auto 24px;
            font-family: Manrope;
            font-size: 36px;
            font-weight: 700;
            line-height: 40px;
            letter-spacing: 1.2857142686843872px;
            text-align: center;
        }
    }
`

const ProductImage = styled.img`
    width: 350px;
    height: 417px;
    display: block;
    margin: 160px 0px 0px 0px;

    @media (max-width: 1440px){
        width: 197.21px;
        height: 237px;
        margin: 52px auto 0px;
    }

    @media (max-width: 768px){
        width: 172.25px;
        height: 207px;
        margin: 55px auto 0px;

    }
`

const ProductBtn = styled.button`
    width: 160px;
    height: 48px;
    background-color: #000;
    font-size: 13px;
    font-weight: 700;
    line-height: 17.76px;
    letter-spacing: 1px;
    text-align: left;
    margin-top: 40px;
    border-radius: 0px;

    @media (max-width: 1440px){
        text-align: center;
        margin-top: 40px;
    }
`

const ZX7 = styled(ZX9)`
    width: 1110px;
    height: 320px;
    background-color: #FFF;
    background-image: url("./dist/assets/home/desktop/image-speaker-zx7.jpg");
    background-size: cover;
    background-position-x: 0px;
    margin-top: 40px;
    flex-direction: row;
    position: relative;
    
    
    .product-name{
        margin-top: 120px;
        font-family: Manrope;
        font-size: 40px;
        font-weight: 700;
        line-height: 38.25px;
        letter-spacing: 2px;
        text-align: left;
        color: #000;
        margin-left: -40px;
    }

    button{
        position: absolute;
        top:160px;
        left: 135px;
        text-align: center;
    }

    button:hover{
        background-color: #000;
    }

    .prodBtn{
       background-color: transparent;
       color: #000;
    }

    .prodBtn:hover{
        background-color: #000;
        color: #FFF;
    }

    @media (max-width: 1440px){
        width: 689px;
        height: 320px;
        background-image: url("./assets/home/tablet/image-speaker-zx7.jpg");
        background-position-y: 0px;
    
        .product-name{
            margin: 101px 0px 0px 62px;
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }

        button{
            margin: 0px;
            top:171px;
            left: 62.5px;
        }

        @media (max-width: 768px){
            width: 327px;
            height: 320px;
            background-image: url("./assets/home/mobile/image-speaker-zx7.jpg");
            
            
            .product-name{
            margin: 101px 0px 0px 24px;
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }

        button{
            margin: 0px;
            top:171px;
            left: 24px;
        }

        } 
    }
`

const YX1 = styled.div`
    width: 1110px;
    height: 320px;
    display: flex;
    gap: 40px;
    color: #000;
    margin-top: 40px;

    .prod-img{
        width: 540px;
        height: 320px;
        background-image: url("./dist/assets/home/desktop/image-earphones-yx1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 8px;
    }

    .prod-des{
        width: 540px;
        height: 320px;
        background-color: #F1F1F1;
        border-radius: 8px;
        padding: 100px 90px;
    }

    .prod-des > p{
        font-family: Manrope;
        font-size: 28px;
        font-weight: 700;
        line-height: 38.25px;
        letter-spacing: 2px;
        text-align: left;
    }

    button:hover{
        background-color: #000;
        color: #000;
    }

    .prodBtn{
       background-color: transparent;
       border: 2px solid #000;
    }

    .prodBtn:hover{
        background-color: #000;
        color: #FFF;
    }
    @media (max-width: 1440px){
        width: 689px;
        height: 320px;
        gap: 11px;

        .prod-img{
            width: 339px;
            height: 320px;
            background-image: url("./dist/assets/home/tablet/image-earphones-yx1.jpg");
            background-size: contain;
        }

        .prod-des{
            width: 339px;
            height: 320px;
            background-color: #F1F1F1;
            border-radius: 8px;
            padding: 101px 41px;
        }

        .prod-des > p{
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }  
    } 

    @media (max-width: 768px){
        width: 327px;
        height: 424px;
        flex-direction: column;
        gap: 24px;

        .prod-img{
            width: 327px;
            height: 200px;
            background-image: url("./dist/assets/home/mobile/image-earphones-yx1.jpg");
            background-size: cover;
        }

        .prod-des{
            width: 327px;
            height: 200px;
            background-color: #F1F1F1;
            border-radius: 8px;
            padding: 41px 24px;
        }

        .prod-des > p{
            font-family: Manrope;
            font-size: 28px;
            font-weight: 700;
            line-height: 38.25px;
            letter-spacing: 2px;
            text-align: left;
        }   
}
`