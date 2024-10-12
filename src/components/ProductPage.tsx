import React, { useState } from "react";
import styled from "styled-components";
import usePageContext from "./Context";
import { Button } from "./header";
import { IncrementDecrement, QuantityInput } from "./Cart";
import { device } from "../App";
import useScreenSize from "./customHooks/useScreenSize";




type productProps = 
{
    id: number
}



export default function ProductPage({id}:productProps){
    const context = usePageContext()
    const product = context.devices.find(device => device.id === id)
    const [quantity, setQuantity] = useState<number>(1)
    const screen = useScreenSize()

    function addToCart(product:device, quantity: number) {
        if(context.cartContent?.some(item => item.device === product)){
            context.setCartContent(prev => prev !==null ? prev.map(item => item.device === product ? {...item, quantity: item.quantity + quantity} : item) : null)
        }else{
            context.setCartContent(prev => prev === null ? null : [...prev, {device: product, quantity: quantity}])
        }
    }



    if(product !==undefined){

        
        return (
            <>
            <BackButton>
                <span onClick={() => context.setProductSelected(false)} >Go back</span>
            </BackButton>
            <Product bgImage={product.image.desktop}>
                <div className="productimage">
                
                </div>
                <div className="desc-container"> 
                    <p className="name">{product.name}</p>
                    <p className="desc">{product.description}</p>
                    <p className="price">$ {product.price}</p>
                    <div className="addProduct">
                        <IncrementDecrement onClick={() => setQuantity((curr) => Number(curr) > 1 ? (Number(curr) - 1) : Number(curr))}>-</IncrementDecrement>
                        <QuantityInput type="text" value={quantity}/>
                        <IncrementDecrement  onClick={() => setQuantity((curr) => Number(curr) < 100 ? (Number(curr) + 1) : Number(curr))}>+</IncrementDecrement>
                        <Button className="addBtn"
                            onClick={() => addToCart(product, quantity)}
                        >
                            ADD TO CART
                        </Button>
                    </div>
                    
                </div>
            </Product>
            <Features>
                <div>
                    <p className="features">
                        FEATURES
                    </p>
                    <p className="feature-desc">
                        {product.features}
                    </p>
                </div>
                <div></div>
                <div className="inTheBox">
                    <p className="inbox">IN THE BOX</p>
                <div>
                    {
                        product.includes.map(el => <p className="included"><span style={{color:"#D87D4A", fontWeight: "600"}}>{`${el.quantity}`}x</span> <span>{el.item}</span></p>)
                    }
                </div>
                </div>
            </Features>
            <Gallery>
                <div className="small-container">
                <img src={product.gallery.first.desktop} alt="" className="small" />
                <img src={product.gallery.second.desktop} alt="" className="small" />
                </div>
                <div className="big-container">
                <img src={product.gallery.third.desktop} alt="" className="big"/>
                </div>
            </Gallery>
            <Other>
                {
                    product.others.map(
                        el => (
                            <Item>
                                <img src={screen.width > 1440 ? el.image.desktop : screen.width > 768 ? el.image.tablet : el.image.mobile} alt={el.name} />
                                <h3>{el.name.toUpperCase()}</h3>
                                <Button className="otherBtn">SEE PRODUCT</Button>
                            </Item>
                        )
                    )
                }
            </Other>
            </>
            )
        }else{
            null
        }

}



const BackButton = styled.div`
    width: 768px;
    color: rgba(0,0,0,0.5);
    margin: auto;
    margin-top:79px;
    cursor: pointer;
    padding-left: 40px;

    @media (max-width: 1440px){
        margin-top:33px;
    }
`

const Product = styled.div<{bgImage:string}>`
    width: 1110px;
    height: 560px;
    display: flex;
    color: #000;
    margin: auto;
    margin-top: 40px;
    gap: 120px;

    .productimage{
        width: 540px;
        height:560px;
        background-image: url(${(props) => props.bgImage});
        background-size: cover;
    }

    .desc-container{
        width: 445.5px;
        height: 372px;
        margin-top: 120px;
        
        .name{
            font-family: Manrope;
            font-size: 40px;
            font-weight: 700;
            line-height: 44px;
            letter-spacing: 1.4285714626312256px;
            text-align: left;
            margin-bottom: 50px;
        }

        .desc{
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;
            margin-bottom: 30px;
            color: #00000075;
        }
        .price{
            font-family: Manrope;
            font-size: 18px;
            font-weight: 700;
            line-height: 24.59px;
            letter-spacing: 1.2857142686843872px;
            text-align: left;

        }

        .addProduct{
            position: absolute;
        }
        .addBtn{
            margin: 47px 49px 0px 0px;
    }
    }


    @media (max-width: 1440px){
        width: 689.5px;
        height: 480px;
        gap: 69px;

        .productimage{
            width: 281px;
            height: 480px;
            background-position-x: 50%;
        }

        .desc-container{
            width: 339.5px;
            height: 390px;
            margin-top: 78px;

            .name{
                font-family: Manrope;
                font-size: 28px;
                font-weight: 700;
                line-height: 32px;
                letter-spacing: 1px;
                text-align: left;
                margin-bottom: 32px;
            }

            .desc{
                font-family: Manrope;
                font-size: 15px;
                font-weight: 500;
                line-height: 25px;
                text-align: left;
                margin-bottom: 32px;
            }
            .price{
                font-family: Manrope;
                font-size: 18px;
                font-weight: 700;
                line-height: 24.59px;
                letter-spacing: 1.2857142686843872px;
                text-align: left;
            }
            .addBtn{
            margin: 31px 43px 0px 0px;
            }
        }
    }
    @media (max-width: 768px){
        width: 375px;
        height: auto;
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }

    .productimage{
        width: 327px;
        height: 327px;
        }

        .desc-container{
            width: 339.5px;
            height: 390px;
            margin-top: 78px;

            .name{
                font-family: Manrope;
                font-size: 28px;
                font-weight: 700;
                line-height: 38.25px;
                letter-spacing: 1px;
                text-align: left;
            }

            .desc{
                font-family: Manrope;
                font-size: 15px;
                font-weight: 400;
                line-height: 25px;
                text-align: left;

            }
            .price{
                font-family: Manrope;
                font-size: 18px;
                font-weight: 700;
                line-height: 24.59px;
                letter-spacing: 1.2857142686843872px;
                text-align: left;
            }
            .addBtn{
                margin: 31px 43px 0px 0px;
            }
        }
`

const Other = styled.div`
    width: 1110px;
    height: auto;
    display: flex;
    gap: 30px;
    margin: 40px auto;

    .otherBtn{
        margin:12px 95px;
    }
    @media (max-width: 1440px){
        width: 691px;
        gap: 11px;

        .otherBtn{
            margin:12px 31p; 
        }
    }
    @media (max-width: 768px){
        width: 327px;
        flex-direction: column;
        gap: 56px;

        .otherBtn{
            width: 160px;
            height: 48px;
            margin: 0 31px; 
        }
    }

`

const Item = styled.div`
    width: 350px;
    height: 471px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color:#000;
    
    & > *{
        display: block;
    }

    img{
        width: 350px;
        height: 318px;
    }

    @media (max-width: 1440px){
        width: 223px;
        height: 471px;
        gap: 40px;
        
        img{
            width: 223px;
            height: 318px;
        }
    }
    @media (max-width: 768px){
        width: 327px;
        height: 265px;
        
    
        img{
            width: 327px;
            height: 120px;
        }
    }
`

const Gallery = styled.div`
    width: 1110px;
    height: 592px;
    display: flex;
    margin: auto;
    margin-top: 150px;
    margin-bottom: 150px;
    gap: 30px; 

    .small-container{
        width: 445px;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .small-container > * {
        display: block;
        border-radius: 7px;
    }


    .big-container{
        width: 635px;
        height: 100%;
    }

    .big-container > *{ 
        border-radius: 7px;
    }

    @media (max-width:1440px) {
        width: 690px;
        height: 368px;

        .small-container{
            width: 277px;
            gap: 20px;
        }
        .big-container{
            width: 395px;
            height: 100%;
        }
        
        .big{
            width: 100%;
            height: 100%;
        }
    }
    @media (max-width:768px) {
        width: 327px;
        height: auto;
        flex-direction: column;

        .small-container{
            width: 327px;
            height: auto;
        }
        .big-container{
            width: 327px;
            height: 368px;
        }
    }
`

const Features = styled.div`
    width: 1110px;
    height: 318px;
    display: grid;
    margin: 40px auto;
    grid-template-columns: 60% 10% 20%;
    color: #000;

    .features{
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.1428571939468384px;
        text-align: left;

    }

    .feature-desc{
        color: rgba(0,0,0,0.5);
        white-space: pre-line;
        margin-top: 30px;
    }

    .inbox{
        font-size: 32px;
        font-weight: 700;
        line-height: 36px;
        letter-spacing: 1.1428571939468384px;
        text-align: left;
        margin-bottom: 30px;
    }

    .included{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(0,0,0,0.5);
        margin-top: 12px;
        width: 100%;
        display: flex;
        gap:20px;
    }

    @media (max-width: 1440px){
        width: 689px;
        height: auto;
        grid-template-columns: 100%;
        grid-template-rows: 318px 120px 157px ;

        .inbox{
            width: 339px;
        }
        
        .inTheBox{
            display: flex;
            align-items: flex-start;
        }

        .included{
            margin-top: 0px;
            margin-bottom: 8px;
        }
    }

    @media (max-width: 768px){
        width: 327px;
        height: auto;
        display: block;
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;

        .inTheBox{
            flex-direction: column;
        }
        
        .inbox{
            width: 327px;
            margin-top: 88px;

        }

        .included{
            margin-top: 0px;
            margin-bottom: 8px;
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: left;

        }

    }
`