import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import OrderCard from './OrderCard';
import{generalTablet, mobile} from "../assets/style/responsive"

const OrderListContainer = styled.div`
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
function OrderList() {
    const [orders, setOrders] = useState([])
    const {userId} = useParams();
    const fetchEvents = async ()=>{
      try {
        const localStorageValue = localStorage.getItem("persist:root");
          const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
          const user = parsedValue.user || "";
          const currentUser = user ? JSON.parse(user).currentUser : {};
          const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : null;
      if(TOKEN != null){
        await fetch(`http://http://134.199.238.36:7722/api/orders/userOrders/${userId}`,{
          headers: {
            'Content-Type': 'application/json',
            token: `Bearer ${TOKEN}`,
          }
        })
          .then(response =>{
          return response.json()
          })
          .then(data =>{
              setOrders(data)
          })
      }
      } catch (error) {
        console.log(error);
      }
    }
  useEffect(()=>{
    fetchEvents()
  },[])
  console.log(orders);
  return (
    <OrderListContainer>
        {orders != 0? orders.map(order =>(
            <OrderCard key={order._id} orderData = {order}/>
        )):<AlertText>No has comprado boletos ultimamente</AlertText>}
    </OrderListContainer>
  )
}

export default OrderList
