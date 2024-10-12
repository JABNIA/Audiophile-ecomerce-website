import React, { useState, useContext } from 'react';
import HomeProductCategoriesSelection from './components/HomeProductCategorieSelection';
import Header from './components/header';
import ProductPresentation from './components/ProductPresentation';
import About from './components/About';
import Footer from './components/Footer';
import Headphones from './components/Headphones';
import {AudiophileContext} from './components/Context';import Speakers from './components/Speakers';
import Earphones from './components/Earphones';
import data from "./data.json"
import Cart from './components/Cart';
import Checkout from './components/Checkout';



export type audiophileData ={
  isHome: boolean
  isHeadphones: boolean
  isSpeakers: boolean
  isEarphones: boolean
  devices: device[]
  selected: boolean
  productId: number
  cart: boolean 
  cartContent: CartItem[] | null
  checkOut: boolean

  setHome: React.Dispatch<React.SetStateAction<boolean>>
  setHeadphones: React.Dispatch<React.SetStateAction<boolean>>
  setSpeakers: React.Dispatch<React.SetStateAction<boolean>>
  setEarphones: React.Dispatch<React.SetStateAction<boolean>>
  setProductSelected: React.Dispatch<React.SetStateAction<boolean>>
  setProductId: React.Dispatch<React.SetStateAction<number>>
  setCart: React.Dispatch<React.SetStateAction<boolean>>
  setCartContent: React.Dispatch<React.SetStateAction<CartItem[] | null>>
  setCheckOut: React.Dispatch<React.SetStateAction<boolean>>
}

export type device = {
  id: number,
    slug: string,
    name: string,
    image: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    category: string,
    categoryImage: {
      mobile: string,
      tablet: string,
      desktop: string
    },
    new: boolean,
    price: number,
    description: string,
    features: string,
    includes:
      {
        quantity: number,
        item: string
      }[],
    gallery: {
      first: {
        mobile: string,
        tablet: string,
        desktop: string
      },
      second: {
        mobile: string,
        tablet: string,
        desktop: string
      },
      third: {
        mobile: string,
        tablet: string,
        desktop: string
      }
    },
    others: 
      {
        slug: string,
        name: string,
        image: {
          mobile: string,
          tablet: string,
          desktop: string
        }
      }[]
  }


export type CartItem = {
    device: device
    quantity: number
  }

const devices:device[] = data

function App() {
  const [home, setHome] = useState<boolean>(true);
  const [headPhones, setHeadPhones] = useState<boolean>(false)
  const [speakers, setSpeakers] = useState<boolean>(false)
  const [earphones, setEarphones] = useState<boolean>(false)
  const [productSelected, setProductSelected] = useState<boolean>(false);
  const [productId, setProductId] = useState<number>(0)
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false)
  const [cartContent, setCartContent] = useState<CartItem[] | null>([
    {
      device: devices[0],
      quantity: 3
    },
    {
      device: devices[1],
      quantity: 1
    }
  ])
  const [checkOut, setCheckOut] = useState<boolean>(false)  


  const data:audiophileData = {
    isHome: home,
    isHeadphones: headPhones,
    isSpeakers: speakers,
    isEarphones: earphones,
    devices: devices,
    selected: productSelected,
    productId: productId,
    cart: cartIsOpen,
    cartContent:cartContent,
    checkOut: checkOut,

    setHome: setHome,
    setHeadphones: setHeadPhones,
    setSpeakers: setSpeakers,
    setEarphones: setEarphones,
    setProductSelected: setProductSelected,
    setProductId: setProductId,
    setCart: setCartIsOpen,
    setCartContent: setCartContent,
    setCheckOut: setCheckOut
  }
  
  cartIsOpen ? 
  (document.body.style.overflow = "hidden", 
    document.body.style.width = "auto"
    ) : document.body.style.overflow = "auto"
  
  checkOut ? document.body.style.backgroundColor = "#F1F1F1"  : document.body.style.backgroundColor = "#FFFFFF"
  return (
    <>
    <AudiophileContext.Provider value={data}>
      <Header /> 
     {
        checkOut ? <Checkout /> 
        :
        <div style={{position: "relative"}}>

        { headPhones ? <Headphones /> : null }
        { speakers ? <Speakers /> : null }
        { earphones ? <Earphones /> : null }
        <HomeProductCategoriesSelection />
        { home ? <ProductPresentation /> : null }

        <About />
        { cartIsOpen ? <Cart home={home}/> : null}
        </div>
      }
      <Footer />
    </AudiophileContext.Provider>
    </>
    )
  }
export default App



