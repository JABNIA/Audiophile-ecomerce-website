import React from "react" 
import styled from "styled-components"
import { Button } from "./header"
import usePageContext from "./Context"
import ProductPage from "./ProductPage"


export default function Earphones(){
    const context = usePageContext()
    return( 
        context.selected
        ?
        <ProductPage id={context.productId}/>
        :
        <>
        <ProductWrapper bgImage={"./public/assets/product-yx1-earphones/desktop/image-product.jpg"}>
            <div className="headphone-image">
                
            </div>
            <div className="info">
                <p className="anonce">NEW PRODUCT</p>
                <p className="product-name">YX1 WIRELESS
EARPHONES</p>
                <p className="prod-desc">Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                
            <Button className="seeButton" onClick={() =>{
                context.setProductId(1)
                context.setProductSelected(true)
            }
            }>
                SEE PRODUCT
            </Button>
            </div>
        </ProductWrapper>
        </>
    )
}


const ProductWrapper = styled.div<{bgImage:string}>`
    width: 1110px;
    height: 560px;
    display: flex;
    gap: 120px;
    color: #000;
    margin: auto;
    margin-top: 140px;

    .headphone-image{
        width: 540px;
        height: 560px;
        background-image: url(${(props) => props.bgImage});
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 7px;
    }
    
    .info{
        width: 445px;
        height: 343px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        padding-top: 200px;
    }

    .anonce{
        font-family: Manrope;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.12px;
        letter-spacing: 10px;
        text-align: left;
        color:#D87D4A;
    }

    .product-name{
        font-family: Manrope;
        font-size: 40px;
        font-weight: 700;
        line-height: 44px;
        letter-spacing: 1.4285714626312256px;
        text-align: left;
        margin: 20px 0px 40px 0px;
    }

    .prod-desc{
        font-family: Manrope;
        font-size: 15px;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        color: rgba(0,0,0, 0.5);
    }
    @media (max-width: 1440px){
        width: 689px;
        height: 706px;
        flex-direction: column;
        gap: 0px;
        
        &:nth-child(even){
            flex-direction: column-reverse;
        }

        .headphone-image{
            width: 689px;
            height: 352px;
            background-size: contain;
            background-position: 50%;
            background-color: #f1f1f1;
        }

        .info {
            padding: 0px;
            align-items: center;
            width: 572px;
            height: 302px;
            padding-top: 0px;
            margin: 52px auto 0px;
        }

        .anonce{
            font-family: Manrope;
            font-size: 14px;
            font-weight: 400;
            line-height: 19.12px;
            letter-spacing: 10px;
            text-align: center;
            color:#D87D4A;
            margin-bottom: 16px;
        }

        .product-name{
            font-family: Manrope;
            font-size: 40px;
            font-weight: 700;
            line-height: 44px;
            letter-spacing: 1.4285714626312256px;
            text-align: center;
            margin: 0px 0px 32px;
        }

        .prod-desc{
            font-family: Manrope;
            font-size: 15px;
            font-weight: 400;
            line-height: 25px;
            text-align: center;
            color: rgba(0,0,0, 0.5);
        }

        .seeButton{
            margin: 24px 0px 0px;
        }
    }
    
    @media (max-width: 768px){
        width: 327px;
        height: 724px;

        .headphone-image{
            width: 327px;
            height: 352px;
            background-size: contain;
            background-position: 50%;
            background-color: #f1f1f1;
        }

        .info {
            width: 327px;   
            height: 340px;
        }
    }
`