import React from 'react'
import Banner from '../components/Banner'
import EventPasarel from '../components/EventPasarel'
import Header from '../components/Header'
import Footer from '../components/footer2'
export default function Home() {
  return (
    <div>
      <Header/>
      {/* <Banner img="http://134.199.238.36:7722/public/images/bgInicialBW.png"/> */}
      <Banner img="http://134.199.238.36:7722/public/images/bgInicial.JPG"/>

      <EventPasarel/>
      <Footer/>
    </div>
  )
}
