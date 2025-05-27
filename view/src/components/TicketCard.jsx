import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components'
import QRCode from "react-qr-code"
import { TbPhotoSensor } from "react-icons/tb";
import axios from 'axios';
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
  font-weight: 500;
  font-size: 20px;
`;
const OrderCardlegend = styled.p`

`;
const OrderCardlegend2 = styled.p`
  margin-top: 10px;
`;
const OrderCardTexts = styled.div`
  text-align: center;
  margin: 10px auto;
  width: 90%;
`;
const OrderCardBtn= styled.button`
  background: #000;
  color: #fff;
  border: 1px solid #000;
  border-radius: 50px;
  padding: 10px 19px;
  margin-top: 10px;
  cursor: pointer;
`;
const CaptureText = styled.p`
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SetNameContainer = styled.div``;
const InputName = styled.input`
  background: none;
  border: 1px solid #000;
  color: #000;
  padding: 10px 12px;
  text-align: center;
  width: 100%;
  border-radius: 50px;
`;



function TicketCard({ticketData}) {

    const [eventData, setEvent] = useState([])
    const [tickets, setTickets] = useState([]);
    const [ticketAssistantName, setTicketAssistantName] = useState([])
    const fetchEvent = async () => {
      const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : null;
        if (TOKEN != null) {
          await fetch(`http://http://134.199.238.36:7722//api/events/${ticketData.orderEventId}`,{
          headers: {
            'Content-Type': 'application/json',
            token: `Bearer ${TOKEN}`,
          }
        })
          .then(response => response.json())
          .then(data => setEvent(data));
          await fetch(`http://http://134.199.238.36:7722//api/tickets/${ticketData._id}`,{
            headers: {
              'Content-Type': 'application/json',
              token: `Bearer ${TOKEN}`,
            }
          })
            .then(response =>{
            return response.json()
            })
            .then(data =>{
              setTickets(data)
            })
        }
      };
    useEffect(() => {
        fetchEvent();
      }, []);
      const handdleClick = async (e) => {
        try {
          const localStorageValue = localStorage.getItem("persist:root");
          const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
          const user = parsedValue.user || "";
          const currentUser = user ? JSON.parse(user).currentUser : {};
          const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : null;
          
          const updateData = {ticketAssistant: ticketAssistantName}
          console.log(updateData);
          if(TOKEN != null){
            const response = await axios.put(`http://http://134.199.238.36:7722//api/tickets/${ticketData._id}`,  updateData, {
              headers: {
                  'Content-Type': 'application/json',
                  token: `Bearer ${TOKEN}`
              },
          });
          }
          fetchEvent();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <OrderCardBox>
      <OrderCardTexts>
            <OrderCardlegend>Event</OrderCardlegend>
            <OrderCardTitle>{tickets.eventName}</OrderCardTitle>
        </OrderCardTexts>
        {tickets.ticketAssistant?<QRCode className='qrCode' value={`http://http://134.199.238.36:7722//api/ticket/${tickets._id}`}/>:<OrderCardImg src={`http://http://134.199.238.36:7722//public/images/fakeQR.png`}/>}
        <OrderCardTexts>
            {
            tickets.ticketAssistant?
            <CaptureText><TbPhotoSensor className='captureIcon'/> Take a screen shot and send it to your guest.</CaptureText>:
            <SetNameContainer>
                <InputName onChange={(e)=> setTicketAssistantName(e.target.value)} name='ticketAssistant' placeholder='Name of the guest...'/>
                <OrderCardBtn onClick={handdleClick}>Assign Ticket</OrderCardBtn> 
            </SetNameContainer>
            
            }
            {
            tickets.ticketAssistant?
            <OrderCardTickets>{tickets.ticketAssistant}</OrderCardTickets>:
            <OrderCardlegend2>Assign with your name or your guests name</OrderCardlegend2>}
        </OrderCardTexts>
    </OrderCardBox>
  )
}

export default TicketCard
