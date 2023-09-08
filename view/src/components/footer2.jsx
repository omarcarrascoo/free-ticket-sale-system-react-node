import React from 'react'
// import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    border-top: .5px solid #151515;
    height: 150px
`;
const Nav = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 33.3%;
  margin: 15px auto;
  
`;
const NavLink = styled.a`
  list-style: none;
  cursor: pointer;
  color: #151515
`;
const A = styled.a`
    text-decoration: none;
    color: #151515;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        color: #a63f3f
    }
`;
const TnC = styled.p`
    font-size: 20px;
    font-weight: 200;
    color: #151515;
    line-height: 40px;
    margin-bottom: 20px;
    text-align: center;

`;

export default function Footer() {
  return (
    <FooterContainer>
            <TnC>
                <A className='link2' to={"/terms"}>Terms & Conditions </A> | <A className='link2' to={"/privacy"}>Privacy Policy</A> | <A>By ERA DIGITAL SOLUTION</A>
            </TnC>
    </FooterContainer>  
  )
}
