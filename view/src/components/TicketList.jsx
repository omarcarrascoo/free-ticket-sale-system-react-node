import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TicketCard from './TicketCard';
import{generalTablet, mobile} from "../assets/style/responsive"


const TicketsListContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex ;
    overflow: auto;
    padding-bottom: 100px;
    ${mobile({flexDirection: "column", alignItems: "center", justifyContent:"center"})}
`;
const AlertText = styled.p`
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: 100px;
`;
function TicketList() {
    const [tickets, setTickets] = useState([]);
    const {orderId} = useParams();
    const fetchTickets = async () =>{
        try {
            const localStorageValue = localStorage.getItem("persist:root");
              const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
              const user = parsedValue.user || "";
              const currentUser = user ? JSON.parse(user).currentUser : {};
              const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : null;
           if(TOKEN != null){
            await fetch(`http://http://134.199.238.36:7722/api/tickets/byOrderId/${orderId}`,{
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
          } catch (error) {
            console.log(error);
          }
    }
    useEffect(()=>{
        fetchTickets()
      },[])
  return (
    <TicketsListContainer>
      {tickets != 0? tickets.map(ticket =>(
            <TicketCard key={ticket._id} ticketData = {ticket}/>
        )):<AlertText>No has comprado boletos ultimamente</AlertText>}
    </TicketsListContainer>
  )
}

export default TicketList
