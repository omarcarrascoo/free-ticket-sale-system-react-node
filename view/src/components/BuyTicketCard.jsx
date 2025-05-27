import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import PayNow from './PayNow';


const BuyCard = styled.div`
    margin: 0 auto;
    width: 300px;
`;
const BuyCardImg = styled.img`
    width: 100%;
    height: 300px;
`;
const BuyCardParr = styled.p`
    color: #fff;
    text-align: center;
`;
const BuyCardBtn = styled.button`
    /* background: #D7FF52;
    border: 1px solid #D7FF52; */
    background: none;
    border: none;
    color: #d7ff52;
    font-size: 48px;
    padding: 0px 20px;
    border-radius: 30px;
`;
const BuyCardCounter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    font-size: 48px;
`;
const BuyCardTitle = styled.p`
    color: #fff;
    text-align: center;
    font-size: 32px;
`;
const BuyCardBtnBuy = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

function BuyTicketCard({userMail}) {
    const [ticketQuantityOrder, setCount] = useState(0);
    const [totalOrder, setTotal] = useState(0);
    const [eventData, setEvent] = useState([])
    const {eventId} = useParams()
    const [orderMail, setorderMail] = useState(userMail);
    const [orderEventId, setorderEventId] = useState(null);
    const [eventPriceOrder, seteventPriceOrder] = useState(null);
    const fetchEvent = async () => {
        await fetch(`http://http://134.199.238.36:7722//api/events/${eventId}`)
          .then(response => response.json())
          .then(data => {
            setEvent(data)
            setorderEventId(data._id);
            seteventPriceOrder(data.eventPrice);
        });
      };
    const addCount = () =>{
        if (ticketQuantityOrder >= 12) {
            console.log("Lleno");
        }else{
            setCount(ticketQuantityOrder + 1);
        }
    }
    const lessCount = () =>{
        if (ticketQuantityOrder <= 1) {
            console.log("Lleno");
        }else{
            setCount(ticketQuantityOrder-1);
        }
    }
    
      useEffect(() => {
        fetchEvent();
      }, [eventId]);

    

    const totalBill= () =>{
        if (eventData && eventData.eventPrice && !isNaN(eventData.eventPrice)) {
            setTotal(eventData.eventPrice * ticketQuantityOrder);
        }
    }
    

    const orderInfo = {orderMail, orderEventId, eventPriceOrder, ticketQuantityOrder, totalOrder}
    
    useEffect(() => {
        totalBill()
      }, [ticketQuantityOrder]);
  return (
    <BuyCard>
        <BuyCardImg src={`http://http://134.199.238.36:7722//public/images/${eventData.eventBanner}`}/>
        <BuyCardTitle>{eventData.eventName}</BuyCardTitle>
        <BuyCardParr>{`Total: $${totalOrder}.00`}</BuyCardParr>
        <BuyCardParr>Quantity </BuyCardParr>
        <BuyCardCounter>
            <BuyCardBtn onClick={lessCount}>--</BuyCardBtn>{ticketQuantityOrder}<BuyCardBtn onClick={addCount}>+</BuyCardBtn>
        </BuyCardCounter>
        <BuyCardBtnBuy>
        <PayNow order = {orderInfo}/>
        {/* <PayNow order = {orderMail, orderEventId, eventPriceOrder, ticketQuantityOrder, totalOrder}/> */}
        </BuyCardBtnBuy>
    </BuyCard>
  )
}

export default BuyTicketCard
