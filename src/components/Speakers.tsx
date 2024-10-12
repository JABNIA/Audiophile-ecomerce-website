import React from "react" 
import styled from "styled-components"
import { Button } from "./header"
import usePageContext from "./Context"
import ProductPage from "./ProductPage"


export default function Speakers(){
    const context = usePageContext()
    
    
    return(
            context.selected
            ?
            <ProductPage id={context.productId}/>
            :
            <>      
            <ProductWrapper bgImage={"./public/assets/product-zx9-speaker/desktop/image-product.jpg"}>
            <div className="headphone-image">
            
            </div>
            <div className="info">
            <p className="anonce">NEW PRODUCT</p>
            <p className="product-name">ZX9 SPEAKER</p>
            <p className="prod-desc">Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
            
            <Button className="seeButton" onClick={() =>{
                context.setProductId(6)
                context.setProductSelected(true)
            }
        }>
        SEE PRODUCT
        </Button>
        </div>
        </ProductWrapper>
        <ProductWrapper bgImage={"./public/assets/product-zx7-speaker/desktop/image-product.jpg"}>
        
        <div className="info">
        <p className="product-name">ZX7 SPEAKER</p>
        <p className="prod-desc">Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
        
        <Button className="seeButton" onClick={() =>{
            context.setProductId(5)
            context.setProductSelected(true)
        }
    }>
    SEE PRODUCT
    </Button>
    </div>
    <div className="headphone-image">
    
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