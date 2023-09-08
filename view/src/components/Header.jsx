import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaUser, FaUserNinja } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import{generalTablet, mobile} from "../assets/style/responsive"
import { TfiClose } from "react-icons/tfi";
import { GiHamburgerMenu } from "react-icons/gi";
const HeaderSection = styled.header`
    width: 100%;
    padding: 20px 0;
    position: fixed;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    ${generalTablet({flexDirection: "column", padding:"0" })};
    background-color: ${props => props.bgcolornet};
    color: ${props => props.txtcolor};
`
const HeaderContainer = styled.div`
    display: flex;
    width: 90%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
`;
const HeaderLeft = styled.div`
    z-index: 100;
    display: flex;
    ${generalTablet({display: "none" })};
`;
const HeaderCenter = styled.div`
    position: fixed;
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${generalTablet({position: "unset", paddingTop:"20px" })};
`;
const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    ${generalTablet({display: "none" })};
`;

const SiteTitle = styled.h1`
    font-size: 48px;
    text-align: center;
    font-weight: 400;
    ${mobile({fontSize: "32px"})}
`;
const SiteLegend = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: 200;
    ${mobile({fontSize: "14px"})}
`;
const SiteLink = styled.p`
    font-size: 16px;
    z-index: 100;
    color: ${props => props.txtcolor};
    text-decoration: none;
    display: flex;
    align-items: center;
`;
const SiteLinkB= styled.p`
    font-size: 16px;
    z-index: 100;
    color: ${props => props.txtcolor};
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-left: 60px;
`;
const SpaceHeader = styled.div`
    height: 150px;
    ${generalTablet({height: "152px" })};
`;
const UserMenu = styled.div`
    display: flex;
    width: 30%;
`;

const MobileMenu = styled.div`
    ${generalTablet({display: ({isOpen}) => (isOpen ? "flex" : "none"),})}
    display: none;
    width: 100%;
    margin-top: 20px;
`;
const MobileMenuOptions = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
`;
const MobileMenuLink = styled.ul`
    text-align: center;
    color: ${props => props.txtcolor};
    border: .1px solid #f5f5f560;
    width: 100%;
    padding: 25px 0;
`;
const MenuIconContainer = styled.div`

`;
const MobileMenuIcon = styled.p`
        display: none;
        ${generalTablet({display: ({isOpen}) => (isOpen ? "none" : "flex"),})}
        padding: 20px 10px;
        color: ${props => props.txtcolor};
        align-items: center;
        font-size: 20px;
`;

function Header() {
    const [bgColorNet, setBgColor] = useState("#fff");
    const [textColor, setTextColor] = useState("#000");
    const [menuTextColor, setMenuTextColor] = useState("#000");
    const[user, setUser] = useState(false)
    const[userId, setUserId] = useState(null)
    const[isOpen, setIsOpen] = useState(false);
    const userCeck = () => {
        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
        console.log(TOKEN);
        if (TOKEN) {
            setUser(true)
            setBgColor("#000");
            setTextColor("#fff");
            setMenuTextColor("#D7FF52");
            setUserId(currentUser._id)
        }
      };
      
     useEffect(()=>{
        userCeck() 
      },[])

      const handleLogoutAndRefresh = () => {
        // Delete data from local storage
        localStorage.removeItem('persist:root'); // Replace 'authToken' with your key
    
        // Refresh the page
        window.location.reload();
      };
  return (
    <>
    <HeaderSection bgcolornet={bgColorNet} txtcolor={textColor}>
        <HeaderContainer>
            <HeaderLeft >
                <Link className='' to={"/"}><SiteLink txtcolor={textColor}>EVENTOS</SiteLink></Link>
                {user? <Link className='margin-left-5' to={`/orders/${userId}`}><SiteLink txtcolor={textColor}>MIS ORDENES</SiteLink></Link>: <></>}
            </HeaderLeft>
            <HeaderCenter>
                <SiteTitle>SINAPSIS</SiteTitle>
                <SiteLegend>POWERED BY ERA DIGITAL SOLUTION</SiteLegend>
            </HeaderCenter>
            <HeaderRight>
            {user == true? 
            <UserMenu>
                <Link  className='flex' to={`/perfil/${userId}`}><SiteLinkB txtcolor={textColor}>PERFIL</SiteLinkB></Link> 
                <Link  className='flex'><SiteLinkB onClick={handleLogoutAndRefresh} txtcolor={textColor}>LOGOUT</SiteLinkB></Link> 
            </UserMenu>:<Link  className='flex' to={"/login"}><SiteLink txtcolor={textColor}><FaUser className='userIcon'/>Login / Sign-in</SiteLink></Link>}
            </HeaderRight>
        </HeaderContainer>
        <MenuIconContainer >
                    <MobileMenuIcon txtcolor={menuTextColor} isOpen={isOpen} onClick={()=>setIsOpen(!isOpen)}><GiHamburgerMenu className='closeMobileMenuBtnIcon'/>MENU</MobileMenuIcon>
        </MenuIconContainer>
        <MobileMenu isOpen={isOpen}>
            {user?
                <MobileMenuOptions>
                <MobileMenuLink txtcolor={menuTextColor} onClick={()=>setIsOpen(!isOpen)} className='closeMobileMenuBtn'><TfiClose className='closeMobileMenuBtnIcon' />Cerrar Menu</MobileMenuLink>
                <Link to={"/"}><MobileMenuLink txtcolor={menuTextColor}>EVENTOS</MobileMenuLink></Link>
                <Link to={`/orders/${userId}`}><MobileMenuLink txtcolor={menuTextColor}>MIS ORDENES</MobileMenuLink></Link>
                <Link to={`/perfil/${userId}`}><MobileMenuLink txtcolor={menuTextColor}>PERFIL</MobileMenuLink></Link>
                <Link><MobileMenuLink onClick={handleLogoutAndRefresh} txtcolor={menuTextColor}>LOGOUT</MobileMenuLink></Link>
            </MobileMenuOptions>:
            <MobileMenuOptions>
                <MobileMenuLink txtcolor={menuTextColor} onClick={()=>setIsOpen(!isOpen)} className='closeMobileMenuBtn'><TfiClose className='closeMobileMenuBtnIcon' />Cerrar Menu</MobileMenuLink>
                <Link to={"/"}><MobileMenuLink txtcolor={menuTextColor}>EVENTOS</MobileMenuLink></Link>
                <Link to={"/login"}><MobileMenuLink txtcolor={menuTextColor}>Login / Sign-in</MobileMenuLink></Link>
            </MobileMenuOptions>
        }
            
        </MobileMenu>
    </HeaderSection>
    <SpaceHeader/>
    </>
  )
}

export default Header
