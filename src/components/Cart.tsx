import React, { useState } from "react";
import styled from "styled-components";
import usePageContext from "./Context";
import { CartItem } from "../App";
import { Button } from "./header";
import Headphones from "./Headphones";
import Speakers from "./Speakers";



export default function Cart({ home } : { home:boolean }) {
    const context = usePageContext()
    const total = context.cartContent === null ? null :  context.cartContent.map(e => e.device.price * e.quantity).reduce((total, el) => total + el) 
    const [inCart, setInCart] = useState<boolean>(false)

    const handleClick = () => {
        context.setHeadphones(false)
        context.setHome(false)
        context.setSpeakers(false)
        context.setEarphones(false)
        context.setProductSelected(false)
        context.setCart(false)
        context.setCheckOut(true)
    }

    return (
        <>
        <Background 
        onClick={() => inCart ? null : context.setCart(false)}
        home={home} 
        headphones={context.isHeadphones} 
        speakers={context.isSpeakers}
        earphones={context.isEarphones}
        productSelected={context.selected}
        >
        
            <CartComponent onMouseEnter={() => setInCart(true)} onMouseLeave={() => setInCart(false)}>
                <p className="cart"><span>CART ({context.cartContent === null ? 0 : context.cartContent?.length})</span> <span className="removeBtn" onClick={() => context.setCartContent(() => null)}>Remove All</span></p>
                <CartItemWrapper>
                {   context.cartContent !== null ?
                    context.cartContent.map(el => (
                        <CartItemComponent className="wrapper">
                            <img src={el.device.image.desktop} alt="" className="product-icon"/>
                            <div className="container">
                            <p className="name-container">{el.device.name} </p>
                            <p>$ {el.device.price} </p>
                            </div>
                            <QuantityModifer value={el} />
                        </CartItemComponent>
                    )
                    )
                    :
                    null
                }
                </CartItemWrapper>
            <p className="total"><span>TOTAL</span> <span className="amount">$ {total}</span></p>
            <Button className="toCheckout" onClick={() => handleClick()}>CHECKOUT</Button>
            </CartComponent>
            </Background>
                </>
    )
}



function QuantityModifer({value}:{value: CartItem}){
    const context = usePageContext()

    return(
        <div style={{position: "relative"}}>
            <IncrementDecrement style={{position:"absolute", left: "-10px", top: "-7px"}}
                onClick={()=> value.quantity > 0 &&
                context.setCartContent(
                    (prev) => prev === null ? null : prev.map(item => item.device.id === value.device.id ? {...item, quantity: item.quantity - 1} : item ) 
                )}
            >-</IncrementDecrement>
            <QuantityInput type="text" value={value.quantity}/>
            <IncrementDecrement style={{position:"absolute", right: "0px", top: "-7px"}} onClick={()=> 
                value.quantity < 100
                &&
                context.setCartContent(
                    (prev) => prev === null ? null : prev.map(item => item.device.id === value.device.id ? {...item, quantity: item.quantity + 1} : item )  
                )}>+</IncrementDecrement>
        </div>
    )
}


export const Background = styled.div<{home:boolean, headphones:boolean, speakers:boolean, earphones:boolean, productSelected:boolean}>`
    background-color: rgba(0,0,0, 0.5);
    height: 100%;
    width: 1440px;
    position: absolute;
    top: ${(props) => props.home ? "-641px" : props.headphones || props.speakers || props.earphones ? props.productSelected ? "-33px" : "-389px" : "110"};
    left: calc((100vw - 1440px)/2);
    z-index: 20;

    @media (max-width: 1440px){
        width: 729px;
        left: calc((100vw - 729px)/2);
    }

    @media (max-width: 768px){
        width: 375px;
        height: 1414px;
        left: calc((100vw - 375px)/2);
}
`

const CartComponent = styled.div`
    width: 377px;
    height: 488px;
    background-color: #FFF;
    border-radius: 5px;
    position: absolute;
    top: 32px;
    right: 165px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.59px;
    letter-spacing: 1.2857142686843872px;
    text-align: left;
    padding: 20px;
    z-index: 30;


    span{
        display: block;
    }

    .cart {
        display: flex;
        justify-content: space-between;
    }

    .total{
        width:80%; 
        position: absolute;
        bottom: 103px;
        left: 30px;    
        font-weight: 400;
        display: flex;
        justify-content: space-between;
    }

    .total > span {
        display: block;
    }
    .amount{
        font-weight: 800;
        color: #000;
    }

    .toCheckout{
        width: 85%;
        position: absolute;
        bottom: 11px;
        left: 7.5%;
        margin: 0px;
    }

    .removeBtn:hover{
        color: #D87D4A;
        cursor: pointer;
    }

    @media (max-width: 1440px){
        top: 24px;
        right: 40px;
    }

    @media (max-width: 768px){
        width: 327px;
        height: 488px;
        left: 24px;
        font-family: Manrope;
        font-size: 15px;
        font-weight: 700;
        line-height: 25px;
        text-align: left;

    }
`

const CartItemComponent=styled.div`
    width: 313px;
    height: 64px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
    padding: 0px 30px 0px 0px;

    .name-container{
        width: 150px;
    }

    .product-icon{
        width: 64px;
        height: 64px;
    }

    @media (max-width: 768px){
        width: 271px;
        
        .name-container{
            width: 107px;
        }
    }
`

export const IncrementDecrement = styled.button`
    width: 16px;
    height: 18px;
    text-align: center;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color:#000;
`

export const QuantityInput = styled.input`
    width: 96px;
    height: 32px;
    text-align: center;
    border: none;
    background-color: #f1f1f1;
    color: #000;
`


const CartItemWrapper = styled.div`
    width: 350px;
    height: 70%;
    overflow-y: scroll;
    scrollbar-width: thin;
    

    &::-webkit-scrollbar{
        width: 5px;
        background-color: #f1f1f1;
    }
    &::-webkit-scrollbar-track{
        width: 5px;
        background-color: #f1f1f1;
        border-radius: 3px;
        
    }
    
    &::-webkit-scrollbar-thumb{
        /* background-color: #8b8a8a; */
        border-radius: 3px;
    }
    
    &::-webkit-scrollbar-button{
        display: none;
    }

    @media (max-width: 768px){
        width: 271px;
        overflow: visible;
    }
`