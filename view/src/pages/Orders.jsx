import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer2';
import Header from '../components/Header';
import OrderList from '../components/OrderList';
import{generalTablet, mobile} from "../assets/style/responsive"


const OrdersSection = styled.section `
    width: 100%;
    background: #000;
    min-height: 90dvh;
`;
const OrdersTitle = styled.h1`
    font-size: 48px;
    font-weight: 400;
    color: #fff;
    padding-top: 50px;
    text-align: left;
    margin-left: 70px;
    margin-bottom: 30px;
    ${mobile({margin: 0, textAlign: "center"})}
`;
function Orders() {
  return (
    <>
    <Header/>
    <OrdersSection>
        <OrdersTitle>Ordenes</OrdersTitle>
        <OrderList/>
    </OrdersSection>
    <Footer/>
    </>
  )
}

export default Orders
