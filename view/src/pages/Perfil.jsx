import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer2'
import styled from 'styled-components';
import PerfilLoader from '../components/PerfilLoader';
function Perfil() {
    const PerfilSection = styled.section`
        min-height: 90vh;
        background: #000;

    `;
  return (
    <>
        <Header/>
        <PerfilSection>
            <PerfilLoader/>
        </PerfilSection>
        <Footer/>
    </>
  )
}

export default Perfil
