import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import EventCard from './EventCard';
import{generalTablet} from "../assets/style/responsive"



const EventCards = styled.div`
  display: flex;
  overflow: auto;
  margin-top: 20px;
  ${generalTablet({flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" })};
`;

function EventList() {
  const [events, setEvents] = useState([])
  const fetchEvents =()=>{
    fetch(`http://localhost:7722/api/events/`)
    .then(response =>{
      return response.json()
    })
    .then(data =>{
      setEvents(data)
    })
  }
  useEffect(()=>{
    fetchEvents()
  },[])
  console.log(events);
  return (
    <EventCards>
      {
        events.map(event =>(
          <EventCard key={event._id} eventData = {event}/>
        ))
      }
    </EventCards>
  )
}

export default EventList
