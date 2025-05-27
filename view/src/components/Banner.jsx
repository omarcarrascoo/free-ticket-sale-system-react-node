import React from 'react'
import styled from 'styled-components'


const BannerSection = styled.section`
    width: 100%;
`;
const BannerImg = styled.img`
    max-width: 100%;
    max-height: 60vh;
    width: 100%;
    height: auto;
    
`;

function Banner({img}) {
  return (
    <BannerSection>
        <BannerImg src={img}/>
    </BannerSection>
  )
}

export default Banner
