import React from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BuyNow from './BuyNow';
import{generalTablet} from "../assets/style/responsive"

const Card = styled.div`
  background: #000;
  padding: 20px 0;
  padding-top: 0;
  width: 300px;
  margin-right: 30px;
  ${generalTablet({marginBottom: "40px", marginRight: "0" })};
`;
const CardImg = styled.img`
  height: 300px;
  max-width: 300px;
  width: 100%;
`;
const CardTitle = styled.p`
  color: #fff;
  text-align: center;
`;
const CardPrice = styled.p`
  color: #fff;
  text-align: center;
`;
const CardShowMore = styled.p`
  color: #D7FF52;
  font-size: 14px;
  text-align: center;
`;
const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
function EventCard({eventData}) {
  return (
    <Card>
      <CardImg src={`https://sinapsisproductions.online/public/images/${eventData.eventBanner}`}/>
      <CardTitle>{eventData.eventName}</CardTitle>
      <CardPrice>${eventData.eventPrice}.00</CardPrice>
      <Link to={`/event/${eventData._id}`}><CardShowMore>Ver Mas</CardShowMore></Link>
      <BtnContainer>
        <BuyNow eventId ={eventData._id}/>
      </BtnContainer>
    </Card>
  )
}

export default EventCard
