import React, { useEffect, useState } from 'react'
import { FaClock, FaLocationDot } from 'react-icons/fa6';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BuyNow from '../components/BuyNow';
import Footer from '../components/footer2';
import Header from '../components/Header';
import{generalTablet, mobile} from "../assets/style/responsive"
const EventSection = styled.section`
    width: 100%;
    display: flex;
    min-height: 80dvh;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    ${generalTablet({flexDirection: "column", margin: "40px 0"})};
`;
const EventImgContainer = styled.div`
    width: 46%;
    height: 100%;
    ${mobile({width: "80%"})}
`;
const EventImg = styled.img`
    width: 100%;
    height: 100%;
`;
const EventTextContainer = styled.div`
    width: 50%;
    ${generalTablet({textAlign: "center"})};
`;
const EventTitle = styled.h1`
    font-weight: 400;
    margin-bottom: 18px;
`;
const EventDirectionContainer = styled.div`
    display: flex;
    align-items: center;
    ${generalTablet({justifyContent: "center"})};
`;
const EventDirection = styled.p`
    font-weight: 300;
    margin-left: 5px;
    margin-bottom: 5px;
`;
const EventTimeContainer = styled.div`
    display: flex;
    align-items: center;
    ${generalTablet({justifyContent: "center", alignItems:"center"})};
`;
const EventTime = styled.p`
    font-weight: 300;
    margin-left: 5px;
    margin-bottom: 5px;
`;
const EventInfo = styled.p`
    font-weight: 300;
    margin-bottom: 5px;
`;
const EventPrice = styled.p`
 margin-bottom: 5px;
font-size: 30px;
`;

export default function Event() {
    const [eventData, setEvent] = useState([])
    const {eventId} = useParams()
    const fetchEvent = async () => {
        await fetch(`https://sinapsisproductions.online/api/events/${eventId}`)
          .then(response => response.json())
          .then(data => setEvent(data));
      };
    useEffect(() => {
        fetchEvent();
      }, [eventId]);
  return (
    <>
    <Header/>
    <EventSection>
        <EventImgContainer>
            <EventImg src={`https://sinapsisproductions.online/public/images/${eventData.eventBanner}`}/>
        </EventImgContainer>
        <EventTextContainer>
            <EventTitle>{eventData.eventName}</EventTitle>
            <EventDirectionContainer>
                <FaLocationDot/>
                <EventDirection>{eventData.eventDirection}</EventDirection>
            </EventDirectionContainer>
            <EventTimeContainer>
                <FaClock/>
                <EventTime>{eventData.eventTime}</EventTime>
            </EventTimeContainer>
            <EventInfo>
            {eventData.eventDescription}
            </EventInfo>
            <EventPrice>{`Ticket $${eventData.eventPrice}`}</EventPrice>
            <BuyNow eventId ={eventData._id}/>
        </EventTextContainer>
        
    </EventSection>
    <Footer/>
    </>
  )
}
