import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const BuyBtn = styled.button`
    background:#D7FF52;
    border: 1px solid #D7FF52;
    color: #000;
    border-radius: 20px;
    padding: 10px 15px;
    margin: 0 auto;
    cursor: pointer;

`;
function BuyNow({eventId}) {
  return (
    <Link to={`/buy-tickets/${eventId}`} className='centerMargin'><BuyBtn>Comprar Tickets</BuyBtn></Link>
  )
}

export default BuyNow
