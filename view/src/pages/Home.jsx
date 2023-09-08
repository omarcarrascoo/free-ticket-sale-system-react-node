import React from 'react'
import Banner from '../components/Banner'
import EventPasarel from '../components/EventPasarel'
import Header from '../components/Header'
import Footer from '../components/footer2'
export default function Home() {
  return (
    <div>
      <Header/>
      <Banner img="https://sinapsisproductions.online/public/images/HomeImage.png"/>
      <EventPasarel/>
      <Footer/>
    </div>
  )
}
