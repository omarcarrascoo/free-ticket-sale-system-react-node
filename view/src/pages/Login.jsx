import React from 'react'
import styled from 'styled-components'
import Footer from '../components/footer2';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import { useHistory } from 'react-router-dom'
import { login } from '../redux/apiCalls.js'
import{generalTablet, mobile} from "../assets/style/responsive"
const LoginSection = styled.section`
    width: 100%;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-between;
`;
const LoginLeft = styled.div`
    width: 45%;
    ${generalTablet({display: "none"})};
`;
const LoginRight = styled.div`
    width: 50%;
    height: 100%;
    margin-top: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    ${generalTablet({width: "90%", margin: "100px auto 0 auto"})};
`;
const LogoBox = styled.div``;
const SiteTitle = styled.h2`
    font-size: 48px;
    text-align: center;
    font-weight: 400;
   
`;
const SiteLegend = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: 200;
`;
const LoginImg = styled.img`
    width: 100%;
`;
const LoginFormContainer = styled.div`
    width: 90%;
`;
const LoginFormTitle = styled.h1`
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 30px;
`;
const LoginRegisterBox = styled.div`
    display: flex;
`;
const LoginFormText = styled.p`
    font-size: 20px;
    font-weight: 300;
    margin: 0 8px 20px 0;
`;
const LoginRegisterLink = styled.p`
    font-size: 20px;
    font-weight:500;
    color: #96ac4d;
    text-decoration: underline;
    cursor: pointer;
`;
const LoginForm = styled.form`
    width: 100%;
`;
const LoginLabel = styled.label`

`;
const LoginInputForm = styled.input`
    border: none;
    border-bottom: 1px solid #000;
    background: none;
    width: 100%;
    margin-bottom: 20px;
    height: 20px;
    padding: 12px 5px;
`;
const LoginSubmitButton = styled.button`
    background: #D7FF52;
    border: 1px solid #D7FF52;
    border-radius: 3px;
    color: #000;
    padding: 10px 12px;
    cursor: pointer;
`;
const AlertText = styled.p`
    text-align: center;
    color: #FF5252;
    font-weight: 500;
    margin-top: 10px;

`;
function Login() {
    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [response, setResponse] = useState([]);
    const [responseData, setResponseData] = useState({});
    const dispathch = useDispatch()
    const handdleClick = async (e) => {
        try {
            e.preventDefault();
            await login(dispathch, { email, password });
            const localStorageValue = localStorage.getItem("persist:root");
            const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
            const user = parsedValue.user || "";
            const currentUser = user ? JSON.parse(user).currentUser : {};
            const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
            if (TOKEN) {
            history('/');
                
            window.location.reload();
            }
        } catch (error) {
            setResponse(error)
            setResponseData(response.response)
            console.log('Error updating data:', error);
        }
        
      };
  return (
    <LoginSection>
        <LoginLeft>
            <LoginImg src='http://localhost:7722/public/images/9.jpg'/>
        </LoginLeft>
        <LoginRight>
            <Link className='normal' to={"/"}>
                <LogoBox>
                    <SiteTitle>MOTOR MANIA</SiteTitle>
                    <SiteLegend>POWER BY ERA DIGITAL SOLUTIONS</SiteLegend>
                </LogoBox>
            </Link>
            <LoginFormContainer>
                <LoginFormTitle>LOGIN TO SEE YOUR EVENTS</LoginFormTitle>
               <LoginRegisterBox>
                    <LoginFormText>Don't have an account?</LoginFormText>
                    <Link to={"/register"}><LoginRegisterLink>Sign Up</LoginRegisterLink></Link>
               </LoginRegisterBox>
                <LoginForm>
                    <LoginLabel>Email</LoginLabel>
                    <LoginInputForm type="text" name='email' placeholder='example@gmail.com' onChange={(e)=> setEmail(e.target.value.toLowerCase())}/>
                    <LoginLabel>Password</LoginLabel>
                    <LoginInputForm type="password" name="password" id="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}/>
                    <LoginSubmitButton onClick={handdleClick}>Login</LoginSubmitButton>
                    {responseData && responseData.data? <AlertText>{responseData.data}</AlertText>:<AlertText></AlertText>}
                </LoginForm>

            </LoginFormContainer>
            <Footer/>
        </LoginRight>
    </LoginSection>
  )
}

export default Login
