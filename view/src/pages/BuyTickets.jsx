import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import BuyTicketCard from '../components/BuyTicketCard';
import Footer from '../components/footer2';
import Header from '../components/Header'
import Login from './Login';


const BuyTicketsSection = styled.section`
    height: 82vh;
    background: #000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
var currentUser = null
function BuyTickets() {
  const [bgColor, setBgColor] = useState("#fff");
  const [textColor, setTextColor] = useState("#000");
  const[user, setUser] = useState(false)
  const[EMAIL, setEmail] = useState(false)
  const userCeck = () => {
    const localStorageValue = localStorage.getItem("persist:root");
    const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
    const user = parsedValue.user || "";
    const currentUser = user ? JSON.parse(user).currentUser : {};
    const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
    const USEREMAIL = currentUser && currentUser.email ? currentUser.email : '';
    console.log(TOKEN);
    if (TOKEN) {
        setUser(true)
        setEmail(USEREMAIL)
        setBgColor("#000");
        setTextColor("#fff")
    }
  };
  
 useEffect(()=>{
    userCeck() 
  },[])
  return (
    <>
        
        {user ? 
        <div className="container">
          <Header/>
        <BuyTicketsSection>
          <BuyTicketCard userMail = {EMAIL}/>
        </BuyTicketsSection> 
        <Footer/>
        </div>
        :
        <Login/>
      }
        
    </>
  )
}

export default BuyTickets
