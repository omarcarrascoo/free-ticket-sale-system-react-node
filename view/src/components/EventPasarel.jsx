import React from 'react'
import styled from 'styled-components'
import EventList from './EventList';
import{generalTablet, mobile} from "../assets/style/responsive"


const EventPasarelSection = styled.section`
  width: 100%;
  padding: 30px 0;
  margin: 0 auto;
  padding-left: 50px;
  ${generalTablet({padding: "30px 0 10px 0"})};
`;
const EventPasarelTitle = styled.h2`
  text-align: center;
  font-weight: 300;
  font-size: 42px;
  ${mobile({fontSize: "32px"})}
`;
const EventListContainer = styled.div`
  ${generalTablet({margin: "10px auto", width: "85%"})};
`;
function EventPasarel() {
  return (
    <EventPasarelSection>
      <EventPasarelTitle>{`EVENTOS PROXIMOS`}</EventPasarelTitle>
      <EventListContainer>
      <EventList />
      </EventListContainer>
      
    </EventPasarelSection>
  )
}

export default EventPasarel
