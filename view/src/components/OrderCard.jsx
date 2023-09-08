import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import{generalTablet, mobile} from "../assets/style/responsive"
const OrderCardBox = styled.div`
    background: #fff;
    min-width: 300px;
    max-width: 300px;
    padding-bottom: 40px;
    margin-right: 80px;
    ${mobile({margin: "20px auto"})}
`;
const OrderCardImg = styled.img`
  width: 100%;
`;
const OrderCardTitle = styled.h3`
  font-weight: 400;
`;
const OrderCardTickets = styled.p`

`;
const OrderCardlegend = styled.p`

`;
const OrderCardTexts = styled.div`
  text-align: center;
`;
const OrderCardBtn= styled.button`
  background: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 50px;
  padding: 8px 15px;
  margin-top: 10px;
  cursor: pointer;
`;

function OrderCard({orderData}) {
    const [eventData, setEvent] = useState({})
    const fetchEvent = async () => {
      const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : null;
        if (TOKEN != null) {
          await fetch(`https://sinapsisproductions.online/api/events/${orderData.orderEventId}`,{
          headers: {
            'Content-Type': 'application/json',
            token: `Bearer ${TOKEN}`,
          }
        })
          .then(response => response.json())
          .then(data => setEvent(data));
        }
      };
    useEffect(() => {
        fetchEvent();
      }, []);
  return (
    <OrderCardBox>
        <OrderCardImg src={`https://sinapsisproductions.online/public/images/Flyer1.png`}/>
        <OrderCardTexts>
            <OrderCardTitle>{orderData.eventName}</OrderCardTitle>
            <OrderCardTickets>{orderData.ticketQuantityOrder}</OrderCardTickets>
            <OrderCardlegend>Numero de tickets</OrderCardlegend>
            <Link to={`/tickets/${orderData._id}`}><OrderCardBtn>Ver Tickets</OrderCardBtn></Link>
        </OrderCardTexts>
    </OrderCardBox>
  )
}

export default OrderCard
