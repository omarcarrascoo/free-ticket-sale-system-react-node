import React, { useState } from 'react'
import styled from 'styled-components'
import Footer from '../components/footer2';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import{generalTablet, mobile} from "../assets/style/responsive"
import { useDispatch } from 'react-redux';
import { login } from '../redux/apiCalls.js'
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
`;
const AlertText = styled.p`
    text-align: center;
    color: #FF5252;
    font-weight: 500;
    margin-top: 10px;

`;

function Register() {
    const history = useNavigate()
    const [data, setData] = useState(null);
    const [response, setResponse] = useState([]);
    const [responseData, setResponseData] = useState({});
    const [email2, setEmail] = useState([])
    const [password2, setPassword] = useState([])
    const [formData, setFormData] = useState(data);
    
    const dispathch = useDispatch()
    const onLogin = async (data) => {
        await login(dispathch, data);
        const localStorageValue = localStorage.getItem("persist:root");
        const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
        const user = parsedValue.user || "";
        const currentUser = user ? JSON.parse(user).currentUser : {};
        const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : '';
        history('/');
          window.location.reload();
      };
    const onUpdate = async (updatedData) => {
            console.log(updatedData)
            setEmail(updatedData.email)
            setPassword(updatedData.password)
        try {
            
            const response = await axios.post(`http://134.199.238.36:7722/api/auth/register`, updatedData, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          console.log(email2)
          console.log(password2)
          const data = {email: updatedData.email, password:updatedData.password }
          onLogin(data)

        } catch (error) {
            setResponse(error)
            setResponseData(response.response)
            console.log('Error updating data:', error);
        }
      };
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setFormData({ ...formData, [name]: value.toLowerCase() });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
      };
  return (
    <LoginSection>
        <LoginLeft>
            <LoginImg src='http://134.199.238.36:7722/public/images/13.png'/>
        </LoginLeft>
        <LoginRight>
            <Link className='normal' to={"/"}>
                <LogoBox>
                    <SiteTitle>MOTOR MANIA</SiteTitle>
                    <SiteLegend>POWER BY ERA DIGITAL SOLUTIONS</SiteLegend>
                </LogoBox>
            </Link>
            <LoginFormContainer>
                <LoginFormTitle>Sign Up</LoginFormTitle>
               <LoginRegisterBox>
                    <LoginFormText>Do you have an account?</LoginFormText>
                    <Link to={"/login"}><LoginRegisterLink>Login</LoginRegisterLink></Link>
               </LoginRegisterBox>
                <LoginForm onSubmit={handleSubmit}>
                    <LoginLabel>First Name</LoginLabel>
                    <LoginInputForm type="text" onChange={handleChange} name="name"/>
                    <LoginLabel>Last Name</LoginLabel>
                    <LoginInputForm type="text" onChange={handleChange} name="lastName"/>
                    <LoginLabel>Email</LoginLabel>
                    <LoginInputForm type="text" onChange={handleChange} name="email"/>
                    <LoginLabel>Password</LoginLabel >
                    <LoginInputForm type="password" onChange={handleChange} name="password"/>
                    <LoginSubmitButton type='submit'>Register</LoginSubmitButton>
                    {responseData && responseData.data? <AlertText>{responseData.data}</AlertText>:<AlertText></AlertText>}
                </LoginForm>
            </LoginFormContainer>
            <Footer/>
        </LoginRight>
    </LoginSection>
  )
}

export default Register
