import React from "react";
import styled from "styled-components";
import usePageContext from "./Context";
import useScreenSize from "./customHooks/useScreenSize";

function HomeProductCategoriesSelection(){
  const context = usePageContext()
  const screenSize = useScreenSize()
  const screen = screenSize.width > 1440 ? "desktop" : screenSize.width > 768 ? "tablet" : "mobile"

    return(
      <ShopSelection>
        <ul>
          <SelectionItem>
            <SelectionImage src={'./dist/assets/shared/desktop/image-category-thumbnail-headphones.png'}/>
            <TextWrapper>
            <h4>HEADPHONES</h4>
            <p  onClick={()=> {
                    context.setHome(false)
                    context.setHeadphones(true)
                    context.setSpeakers(false)
                    context.setEarphones(false)
                    context.setProductSelected(false)

                }}>
              SHOP <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </p>
            </TextWrapper>
          </SelectionItem>
          <SelectionItem>
          <SelectionImage src={"./dist/assets/shared/desktop/image-category-thumbnail-speakers.png"}/>
          <TextWrapper>
            <h4>SPEAKERS</h4>
            <p  onClick={()=> {
                    context.setHome(false)
                    context.setHeadphones(false)
                    context.setSpeakers(true)
                    context.setEarphones(false)
                    context.setProductSelected(false)
                }}>
              SHOP <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </p>
          </TextWrapper>
          </SelectionItem>
          <SelectionItem>
          <SelectionImage src={"./dist/assets/shared/desktop/image-category-thumbnail-earphones.png"}/>
          <TextWrapper>
          <h4>EARPHONES</h4>
            <p  onClick={()=> {
                    context.setHome(false)
                    context.setHeadphones(false)
                    context.setSpeakers(false)
                    context.setEarphones(true)
                    context.setProductSelected(false)
            }}>
              SHOP <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" stroke-width="2" fill="none" fill-rule="evenodd"/></svg>
            </p>
          </TextWrapper>
          </SelectionItem>
        </ul>
      </ShopSelection>
    )
}

export default HomeProductCategoriesSelection

const ShopSelection = styled.div`
  width: 1110px;
  height: 284px;
  margin: 160px auto 0px;
  display: flex;
  background-color: #FFF;
  
  ul{
    display:flex;
    justify-content: space-between;
    list-style: none;
    margin: 0px auto;
    margin-top: 80px;
  }

  @media (max-width: 1440px){
    width: 689px;
    height: 217px;
    margin: 120px auto;
  }

  @media (max-width: 768px){
    width: 375px;
    height: 683px;
    ul {
      flex-direction: column;
      gap: 50px
    }
  }
`

const SelectionItem = styled.li`
  width: 250px;
  height: 284px;
  color: #000;
  margin: 20px 20px;
  text-align: center;
  position: relative;

  @media (max-width: 1440px){
    width: 223px;
    height: 165px;
    margin: 0px;
    margin-right: 10px;
  }

  @media (max-width: 768px){
    width: 327px;
    height: 200px;
  }
`

const SelectionImage = styled.img`
  width: 160px;
  height:auto;
  display: inline-block;
  margin: auto;
  position: absolute;
  top:-70px;
  left:45px;
  
  @media (max-width: 1440px){
    width: 103px;
    height: 104px;
    top:-30px;
    left:60px;
  }
  @media (max-width: 768px){
    left: 121px;
  }
`

const TextWrapper = styled.div`
  background-color: #F1F1F1;
  border-radius: 7px;
  padding: 50px;

  h4{
    margin-top: 20px;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.59px;
    letter-spacing: 1.2857142686843872px;
    text-align: center;

  }
  p{
    margin-top: 10px;
    font-family: Manrope;
    font-size: 13px;
    font-weight: 600;
    line-height: 17.76px;
    letter-spacing: 1px;
    color: rgba(0,0,0, 0.5);
    cursor: pointer;
  }

  p:hover{
    color: #D87D4A;
  }
`