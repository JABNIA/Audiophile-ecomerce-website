import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import styled from 'styled-components'
import usePageContext from './Context'
import { CartItem } from '../App'
import { Button } from './header'

type FormInput= {
  name: string,
  email: string,
  number: string
  address: string
  ZipCode: string
  city: string
  country: string
  payment: string
  moneyNumber:string
  moneyPIN: string
}



export default function Checkout() {
  const { register, handleSubmit, formState: {errors}, setValue } = useForm<FormInput>({
    defaultValues: {payment: "e-money"}, mode: "onChange"})
  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data)
  const [selectedPayment, setSelectedPayment] = useState('e-Money')
  const context = usePageContext()
  const [checkOutModal, setCheckOutModal ] = useState<boolean>(false)

  checkOutModal ? document.body.style.overflow = "hidden" :  document.body.style.overflow = "auto"

    useEffect(() =>{
      setValue("payment", selectedPayment)
    }, [setValue, selectedPayment])

    const handleCange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.target === null ? null : setSelectedPayment(e.target.value)
    }

  return (
    <>
       {
        checkOutModal 
        ?
        <Modal />
        :
        null
      }
    <CheckoutWrapper>
    <FormsWrapper>
          <p onClick={() => {context.setCheckOut(false)}} className="backButton">Go back</p>

      <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h3>BILLING DETAILS</h3>
        <div className='formContainer'>
          <div>
            <label htmlFor="name">Name</label>
            <input {...register("name", {required:true})} type="text" placeholder='Name'/>
          </div>
          <div>
            <label htmlFor="email"><span>Email</span> <span style={{color: "red", display: errors.email ? "inline": "none"}}>Invalid Pattern</span></label>
            <input {...register("email",
                              { required:true,
                                pattern:{ 
                                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                  message: "invalid Format of Email"
                                }
                              })}
                              type="text"
                              placeholder='Email'/>
          </div>
          <div>
          <label htmlFor='number'>Mobile number</label>
          <input {...register("number", {required:true})} type="text" placeholder='Number'/>
          </div>
        </div>

          <h3>SHIPPING INFO</h3>
        <div className='formContainer'>
          <div style={{gridColumn: "1/3", width: '97%'}}>
            <label htmlFor="address">ADDRESS</label>
            <input {...register("address", {required:true})} type="text" placeholder='address' style={{width: "100%", display: "block"}}/>         
          </div>
          <div>
            <label htmlFor="ZipCode">ZIP CODE</label>
            <input {...register("ZipCode", {required:true})} type="text" placeholder='10001'/>
          </div>
          <div>
            <label htmlFor="city">CITY</label>
            <input {...register("city", {required:true})} type="text" placeholder='New York'/>
          </div>
          <div>
            <label htmlFor="country">COUNTRY</label>
            <input {...register("country", {required:true})} type="text" placeholder='United states'/> 
          </div>
        </div>
        <h3>PAYMENT DETAILS</h3>
        <div className='payments'> 
          <div>
            <p>Payment method</p>
          </div>
          <div>
          <input {...register("payment", {required:true})} type="radio"
          id="emoney" value="e-Money" checked={selectedPayment === "e-Money"}
          onChange={(e) => handleCange(e)}/>
          <label htmlFor="emoney" className="payment">
            e-Money 
          </label>
          <br />
          <input {...register("payment", {required:true})} type="radio"
          id='cash' value="Cash on delivery" checked={selectedPayment === "Cash on delivery"}
          onChange={(e) => handleCange(e)}/>
          <label htmlFor="cash" className="payment">
            Cash on delivery
          </label>
          </div>
        </div>  
        {
          selectedPayment === "e-Money" 
          ?
          <div className='emoneyNumbers'>
            <div>
              <p>e-Money Number</p>
              <input {...register("moneyNumber", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Enter only numbers"
                }
              })} type="text" maxLength={9} style={{borderColor: errors.moneyNumber ? 'red' : "#CFCFCF"}}/>
            </div>
            <div>
              <p>e-Money PIN</p>
              <input {...register("moneyPIN", {
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Enter only numbers"
                }
              })} type="text" maxLength={4}  style={{borderColor: errors.moneyPIN ? 'red' : "#CFCFCF"}}/>
            </div>
          </div>                    
          : 
          null
        }
      </form>
    </FormsWrapper>
      <CheckoutProducts setModal = {setCheckOutModal}/>
    </CheckoutWrapper>
</>
  )
}


function CheckoutProducts({setModal}: {setModal: React.Dispatch<React.SetStateAction<boolean>>} ) {
  const context = usePageContext()
  const total = context.cartContent?.map(item => item.device.price * item.quantity).reduce((total, curr) => total + curr)
  const shipping = 50
     
  const handleClick = () => {
    setModal(true)
  }


  return (
    <ProductsWrapper>
      <h3>SUMMARY</h3>
      <div>
        {context.cartContent?.map(item => <SummaryItem item={item} />)}
      </div >
      <div style={{width: '100%', marginTop: "80px"}}>
        <FinancesParagraph><span>TOTAL</span><span className='paiments'>$ {total}</span></FinancesParagraph>
        <FinancesParagraph><span>SHIPPING</span><span className='paiments'>$ {shipping}</span></FinancesParagraph>
        <FinancesParagraph><span>VAT(INCLUDED)</span><span className='paiments'>$ {total !== undefined ? Math.round((total * 15)/100) : null}</span></FinancesParagraph>
        <FinancesParagraph style={{marginTop: "40px"}}><span>GRAND TOTAL</span><span className='paiments grand-total'>$ {total !== undefined ? total + shipping : null} </span></FinancesParagraph>
      </div>
      <Button className='checkOutButton' onClick={() => handleClick()}><a href='#header'>CONTINUE & PAY</a></Button>
    </ProductsWrapper>
  )
}

function SummaryItem({item}: {item: CartItem}){
  return (
    <div className="summary">
      <div>
      <img src={item.device.image.desktop} alt="" style={{width: '64px', height: "64px"}}/>
      </div>
      <div>
        <p style={{fontWeight: 600}}>
          {nameGenerator(item.device.name)}
        </p>
        <p style={{color: "rgba(0,0,0, 0.5)"}}>
          $ {item.device.price}
        </p>
      </div>
      <div className='quantity'>
          <p style={{color: "rgba(0,0,0, 0.5)"}}>x{item.quantity}</p>
      </div>
    </div>
  )
}


function nameGenerator(name:string){
  if (name.includes("Headphones")){
      return name.replace(" Headphones", "")
  }else if(name.includes("Speakers")){
      return name.replace(" Speaker", "")
  }else{ 
      return name.replace(" Wireless Earphones", "")
      }
}
function Modal(){
  const context = usePageContext()



  return (
    <ModalWrapper>
      <div className='order'>
      <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#D87D4A" cx="32" cy="32" r="32"/><path stroke="#FFF" stroke-width="4" d="m20.754 33.333 6.751 6.751 15.804-15.803"/></g></svg>
      <p className='thanx'>THANK YOU FOR YOUR ORDER</p>
      <p className='message'>You will receive an email confirmation shortly.</p>
      <div className='totalWrapper'>
        <div className='products'>
          <div>
            <img className='checkoutImg' src={context.cartContent !== null ? context.cartContent[0].device.image.desktop : undefined} alt="" />
            <div>
              <p className='name'>{context.cartContent !== null ? nameGenerator(context.cartContent[0].device.name) : ""}</p>
              <p>$ {context.cartContent !== null ? context.cartContent[0].device.price : ""}</p>
            </div>
            <div className="itemQuantity">
              <span>x{context.cartContent !== null ? context.cartContent[0].quantity : ""}</span>
            </div>
          </div>
              <p className='other'>and {context.cartContent?.length !==undefined ? context.cartContent?.length - 1 : ""} more item(s)</p>
        </div>
        <div className='total'>
          <p className='grandtotal'>GRAND TOTAL</p>
          <p className='amount'>$ {context.cartContent?.map(e => e.device.price * e.quantity).reduce((total, current) => total + current) !== undefined ? 
          context.cartContent?.map(e => e.device.price * e.quantity).reduce((total, current) => total + current) + 50 : 0}</p>
        </div>
      </div>
      <Button className='homeButton'
      onClick={() => {
        context.setHome(true)
        context.setHeadphones(false)
        context.setSpeakers(false)
        context.setEarphones(false)
        context.setProductSelected(false)
        context.setCart(false)
        context.setCheckOut(false)
      }}>
        BACK TO HOME
      </Button>
      </div>
    </ModalWrapper>
  )
}



const CheckoutWrapper = styled.div`
  width: 1440px;
  height: auto;
  margin: auto;
  padding: 50px 165px;
  display: flex;
  color: #000;
  align-items: start;
  gap: 60px;
  position: relative;
  padding-top: 142px;

  @media (max-width: 1440px){
    width: 768px;
    display: flex;
    flex-direction: column;
    padding: 50px 20px;
  }

  @media (max-width: 768px){
    width: 327px;
    height: auto;
    padding: 50px 0px;
  }
  `

const FormsWrapper = styled.div`
  width: 730px;
  color: #000;
  background-color: #fff;
  padding: 60px;
  border-radius: 15px;

  .backButton{
    position: absolute;
    top: 79px;
    left: 165px;  
    color: #00000080;
  }

  h3{
    margin: 40px 0px 20px;
  }


  .formContainer{
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 20px 40px; 
  }

  .formContainer > div{
    height: 90px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
  }
  .formContainer > div > label{
    font-weight: 600;
  }
  
  .formContainer > div input {
    width: 285px;
  }

  h3{
    color: #D87D4A;
  }


  input[type="text"]{
    width: 309px;
    height: 56px;
    border: 1px solid #CFCFCF;
    border-radius: 5px;
    background-color: #fff;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    line-height: 19.12px;
    letter-spacing: -0.25px;
    text-align: left;
    padding-left: 25px;
    color: #000;
  }

  input[type="text"]::placeholder{
    color: rgba(0,0,0, 0.5);
  }
  
  input:focus{
    outline: 2px solid #D87D4A;
  }
  
  input[type="text"]:focus::placeholder{
    color: transparent
  }

  input[type='radio']{
    display: none;
  }
.payments {
  width: 637px;
  display: flex;
  justify-content: space-between;
}

.payments p{
  font-size: 16px;
  font-weight: 700;
}

.payments label{
  border: 1px solid #cfcfcf;
  border-radius: 10px;
  display: inline-flex;
  width: 309px;
  height: 56px;
  padding: 15px;
  margin-bottom: 15px;  
}

.payments label::before{
  content: "";
  width: 20px;
  height: 20px;
  border:  2px solid #cfcfcf;
  border-radius: 50%;
  margin-right: 15px;
}

.payments input[type="radio"]:checked + label:before{
  height: 13px;
  width: 13px;
  background-color: #D87D4A;
  border: 4px solid #fFf;
  border-radius: 50%;
  box-shadow: 2px 0px #CFCFCF, -2px 0px #CFCFCF, 0px -2px #CFCFCF, 0px 2px #CFCFCF;
}

label:hover{
  border: 2px solid #D87D4A;
}

input[type="radio"]:checked + label{
  border: 2px solid #D87D4A;
}

.emoneyNumbers {
  display: flex;
  gap: 20px;
}

.emoneyNumbers p {
  font-size: Manrope;
  font-size: 16px;
  font-weight: 700;
  line-height: 16.39px;
  letter-spacing: -0.2142857164144516px;
}

.emoneyNumbers input[type="text"]{
  width: 309px;
  height: 56px;
  border-radius: 10px;
  margin-top: 10px;
}

@media (max-width: 768px){
  width: 327px;
  height: 1378px;
  padding: 0 23px;
  
  input[type="text"]{
    width: 280px;
    height: 56px;
  }

  .formContainer{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: space-between;
  }

  .formContainer > div > label {
    font-family: Manrope;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.39px;
    letter-spacing: -0.2142857164144516px;
    text-align: left;
  }

  .payments{
    width: 285px;
    flex-direction: column;
  }

  .payments label{
    width: 280px;
  }

  .emoneyNumbers {
    flex-direction: column;
  }

  .emoneyNumbers input[type="text"] {  
    width: 280px;
  }
}
`

const ProductsWrapper = styled.div`
  width: 350px;
  height: auto;
  background-color: #fff;
  color: #000;
  padding: 40px 30px 32px;
  border-radius: 5px;

.checkOutButton{
  width: 100%; 
  margin: 32px 0px 0px ;
  padding: 0px;
}

.summary{
    width: 90%;
    display: flex; 
    gap: 20px;
    margin-top:20px
  }

@media (max-width: 1440px){
    width: 730px;

    .summary{
      position: relative;
      width:100%;
      display: flex; 
      gap: 20px;
      margin-top:20px
    }
    
    .summary > .quantity {
      position: absolute;
      right: 33px;
    }
  }

@media (max-width: 768px){
    width: 327px;
    height: 612px;
    
    .summary > .quantity{
      right: 0;
    }

    .summary > p{
      font-family: Manrope;
      font-size: 15px;
      font-weight: 700;
      line-height: 25px;
      text-align: left;
    }
  }
`

const FinancesParagraph = styled.p`
  display: flex;
  justify-content: space-between;

  span{
  font-family: Manrope;
  font-size: 15px;
  font-weight: 400;
  line-height: 25px;
  text-align: left;
  color: rgba(0,0,0, 0.5);
  margin-top: 10px;
  }

  .paiments{
  font-family: Manrope;
  font-size: 18px;
  font-weight: 700;
  line-height: 24.59px;
  text-align: right;
  color: #000;

  }
  .grand{
  margin-top: 40px;
  }

  .grand-total {
  color: #D87D4A;
  }
`


const ModalWrapper = styled.div`
  position: absolute;
  top:97px;
  width: 1440px;
  left: calc((100% - 1440px) /2);
  height: 100vh;
  background-color: #00000050;
  z-index: 10;
  
  .order{
    width: 540px;
    min-height: 581px;  
    background-color: #FFFFFF;
    border-radius: 7px;
    position: absolute;
    left: calc((100% - 540px) /2);
    top: 125px;
    padding: 48px;
  }

  .thanx{
    font-family: Manrope;
    font-size: 32px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 1.1428571939468384px;
    text-align: left;
    color: #000000;
    margin-top: 33px;
  }

  .message{
    font-family: Manrope;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    margin-top: 24px;
  }

  .totalWrapper{
    width: 444px;
    min-height: 140px;
    display: flex;
    background-color: #F1F1F1;
    border-radius: 7px;
    margin-top: 33px;
    margin-bottom: 46px;
  }

  .products{
    width: 246px;
    height: 100%;
    padding: 24px;
  }

  .products > div {
    display: flex;
    gap: 10px;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
  }

  .total{
    border-radius:0px 7px 7px 0px;
    width: 198px;
    min-height: 140px;
    background-color: #000000;
    color: #FFFFFF;
  }

  .checkoutImg{
    width: 46px;
    height: 50px;
    display: block;
  }

  .other {
    width: 100%;
    padding-top: 12px;
    margin-top: 12px;
    border-top: 1px solid #00000025;
    text-align: center;
    font-family: Manrope;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.39px;
    letter-spacing: -0.2142857164144516px;
  }

  .grandtotal {
    width: 100px;
    margin: auto;
    font-family: Manrope;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
    margin-top: 41px;
    color: #FFFFFF75;
  }
  
  .amount {
    width: 100px;
    margin: auto;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 700;
    line-height: 24.59px;
    text-align: left;
    margin-top: 8px;
  }

  .homeButton{
    margin: 0px;
    width:444px;
  }

  @media (max-width: 1440px){
    width: 730px;
    left: calc((100% - 730px)/2 )
  }

  @media (max-width: 768px){
  width: 375px;
  left: 764px;
  
  .order{
    width: 327px;
    height: 600px;
    left: 24px;
    padding: 32px;

  }

  .thanx{
    margin-top: 23px;
    font-family: Manrope;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.8571428656578064px;
    text-align: left;
  }

  .message{
    margin-top: 16px;
  }

  .totalWrapper {
    width: 263px;
    height: 232px;
    flex-direction: column;
    margin-top: 24px;
    margin-bottom: 0;
    overflow: hidden;
    gap: px;
  }

  .products{
    width: 100%;
    height: 140px;
  }

  .products > p {
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    text-align: center;
  }

  .products > .other{
    font-family: Manrope;
    font-size: 12px;
    font-weight: 700;
    line-height: 16.39px;
    letter-spacing: -0.2142857164144516px;
    text-align: center;

  }

  .total {
    width: 263px;
    min-height: 92px;
    border-radius: 0px 0px 8px 8px;
    opacity: 0px;
  }

  .grandtotal{
    margin: 15px 0 0 24px
  }

  .amount{
    margin: 8px 0 0 24px;
    font-family: Manrope;
    font-size: 14px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
  }

  .homeButton{
    margin: 30px 0; 
    width: 263px;
  }

  .itemQuantity{
    margin-left: auto;
  }

  .name{
    font-family: Manrope;
    font-size: 15px;
    font-weight: 700;
    line-height: 25px;
    text-align: left;
    color: #000000;
  }
  }
`