import React from 'react'
import styled from 'styled-components';
import Footer from '../components/footer2';
import Header from '../components/Header';
import TicketList from '../components/TicketList';
import{generalTablet, mobile} from "../assets/style/responsive"


const TicketsSection = styled.section `
    width: 100%;
    background: #000;
    min-height: 90dvh;
`;
const TicketsTitle = styled.h1`
    font-size: 48px;
    font-weight: 400;
    color: #fff;
    padding-top: 50px;
    text-align: left;
    margin-left: 70px;
    margin-bottom: 30px;
    ${mobile({fontSize: "32px"})}
`;
const TicketsLegend = styled.p`
  color: #fff;
  text-align: center;
  width: 85%;
  margin: 0 auto;
  font-weight: 200;
`;


function Tickets() {
  return (
    <>
        <Header/>
        <TicketsSection>
            <TicketsTitle>Tickets de la orden</TicketsTitle>
            <TicketsLegend>Siempre puedes acceder a tus ordenes desde el menu una vez que inicias sesion</TicketsLegend>
            <TicketList/>
        </TicketsSection>
        <Footer/>
    </>
  )
}

export default Tickets
