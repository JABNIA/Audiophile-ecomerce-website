import styled from "styled-components"
import Navigation from "./Navigation"
import usePageContext from "./Context"
import useScreenSize from "./customHooks/useScreenSize"


export default function Header(){
  const context = usePageContext()  
  const screenSize = useScreenSize()
  
  
  
  return (
        <HeaderWrapper isHome={context.isHome} selected={context.selected} checkout={context.checkOut} screen={screenSize.width} id="header">
        <Navigation />
        {
        context.isHome
        ?
        <NewProductDescription>
          <h4>
            NEW PRODUCT
          </h4>
          <p className='productName'>
            XX99 MARK ll HEADPHONES
          </p>
          <p>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
          <Button className="newProductButton">SEE PRODUCT</Button>
          
        </NewProductDescription>
        : 
        null
        }
        { context.isHeadphones ? context.checkOut ? null : context.selected ? null : <h1 className="header-title">HEADPHONES</h1> : null }
        { context.isSpeakers ? context.checkOut ? null :  context.selected ? null : <h1 className="header-title">SPEAKERS</h1> : null }
        { context.isEarphones ? context.checkOut ? null :  context.selected ? null : <h1 className="header-title">EARPHONES</h1> : null }

      </HeaderWrapper>
    )
}


const HeaderWrapper = styled.header<{isHome: boolean, selected: boolean, checkout: boolean, screen: number}>`
  width: 1440px;
  height: ${(props) => props.isHome ? "729px" : props.selected ? "97px" : props.checkout ? '97px' :"338px"};
  background-color: ${(props) => props.isHome ? "transparent" : "black"};
  background-image: ${(props) => props.isHome ? `url("./assets/home/${props.screen <= 1440 ?( props.screen <= 768 ? "mobile" : "tablet" ): "desktop"}/image-header.jpg")` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 5px;
  margin: auto;

  h1{
    text-align: center;
    margin-top: 120px;
    font-size: 40px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 1.4285714626312256px;
    text-align: center;
    color: #FFFFFF;
  }

  @media (max-width: 1440px){
    width: 729px;
    height: ${(props) => props.isHome ? "729px" : props.selected ? "97px" : props.checkout ? '97px' :"338px"};
    background-image: ${(props) => props.isHome ? `url("./assets/home/tablet/image-header.jpg")` : "none"};

  }


  @media (max-width: 768px){
    width: 375px;
    height: ${(props) => props.isHome ? "600px" : props.selected ? "97px" : props.checkout ? '97px' :"338px"};
    background-image: ${(props) => props.isHome ? `url("./assets/home/mobile/image-header.jpg")` : "none"};
    background-size: cover;
    background-position:center
  }
`

const NewProductDescription = styled.div`
  width: 398px;
  height: 346px;
  margin: 100px 170px;
  padding-top: 20px;
  
  h4{
    font-weight: 100;
    margin: 30px 0px;
    letter-spacing: 10px;
    color: rgba(255,255,255,0.5);
  }

  p{
    font-size: 17px;
    font-weight: 100;
    line-height: 25px;
    text-align: left;
    margin: 30px 0px;
    color: #ffffff;
  }

  .productName{
    font-size: 56px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 2px;
    text-align: left;
    color: #ffffff
  }
  
  .newProductButton {
    margin-left: 0px;
  }

  @media (max-width: 1440px){
    width: 398px;
    height: 346px;
    margin: 126px auto;
    padding-top: 0px;
    
    .productName {
      width: 100%;
      font-family: Manrope;
      font-size: 56px;
      font-weight: 700;
      line-height: 58px;
      letter-spacing: 2px;
      text-align: left;
    }
    
    h4{
      font-family: Manrope;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.12px;
      letter-spacing: 10px;
      text-align: center;
    }
    
    p {
      width: 349px;
      margin: auto;
      margin-top: 24px;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;
    }
  
    .newProductButton {
      margin-left: 109px;
    }

    @media (max-width: 768px){
      width: 375px;
      height: 290px;
      margin-top: 108px;
      .productName {
      width: 100%;
      font-family: Manrope;
      font-size: 36px;
      font-weight: 700;
      line-height: 40px;
      letter-spacing: 1.2857142686843872px;
      text-align: center;

    }
    
    h4{
      font-family: Manrope;
      font-size: 14px;
      font-weight: 400;
      line-height: 19.12px;
      letter-spacing: 10px;
      text-align: center;

    }
    
    p {
      width: 300px;
      margin: auto;
      margin-top: 24px;
      font-family: Manrope;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
      text-align: center;

    }
  
    .newProductButton {
      margin-left: 107px;
    }
    }
  }
    `

export const Button = styled.button`
  width: 160px;
  height: 48px;
  background-color: #D87D4A;
  color: #FFF;
  cursor: pointer;
  border-radius: 0px;
  font-size: 13px;
  margin-left: 109px;

  &:hover{
    background-color: #FBAF85;
  }

  @media (max-width: 1440px){
    margin-top: 40px;
  }


`

