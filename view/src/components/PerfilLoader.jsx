import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components';

const PerfilLoaderContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-top: 100px;
`;
const PerfilLoaderTitle = styled.h1`
    font-size: 40px;
    color: #fff;
    margin-bottom: 30px;
    font-weight: 500;
`;
const PerfilLoaderTextBox = styled.div`
    width: 100%;
`;
const PerfilLoaderTextRow = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;

`;
const PerfilLoaderTag = styled.p`
    font-weight: 500;
    color: #fff;
    margin: 0 10px 20px 0;
`;
const PerfilLoaderText = styled.p`
    font-weight: 300;
    color: #fff;
`;
const PerfilLoaderLink = styled.p`
    font-weight: 300;
    color: #D7FF52;
    text-decoration: underline;
`;
const PerfilLoaderBtns = styled.div`
    display: flex;
    justify-content: center;
`;
const PerfilLoaderBtnUpdate = styled.p`
    color: #D7FF52;
    margin-right: 15px;
`;
const PerfilLoaderBtnDelete = styled.p`
    color: #ff5252;
    margin-left: 15px;
    font-weight: 200;
`;
function PerfilLoader() {
    const [userName, setUserName] = useState("")
    const [userLast, setUserLast] = useState("")
    const [userMail, setUserMail] = useState("")
    const [userPhone, setUserPhone] = useState("")
    const setUserInfo = async () => {
        const localStorageValue = localStorage.getItem("persist:root");
          const parsedValue = localStorageValue ? JSON.parse(localStorageValue) : {};
          const user = parsedValue.user || "";
          const currentUser = user ? JSON.parse(user).currentUser : {};
          const TOKEN = currentUser && currentUser.accessToken ? currentUser.accessToken : null;
          setUserName(currentUser.name)
          setUserLast(currentUser.lastName)
          setUserMail(currentUser.email)
          return (currentUser)
          
        };
      useEffect(() => {
          setUserInfo();
        }, []);
  return (
    <PerfilLoaderContainer>
        <PerfilLoaderTitle>TUS DATOS</PerfilLoaderTitle>
        <PerfilLoaderTextBox>
            <PerfilLoaderTextRow>
                <PerfilLoaderTag>Nombre</PerfilLoaderTag>
                <PerfilLoaderText>{userName}</PerfilLoaderText>
            </PerfilLoaderTextRow>
            <PerfilLoaderTextRow>
                <PerfilLoaderTag>Apellido</PerfilLoaderTag>
                <PerfilLoaderText>{userLast}</PerfilLoaderText>
            </PerfilLoaderTextRow>
            <PerfilLoaderTextRow>
                <PerfilLoaderTag>Correo</PerfilLoaderTag>
                <PerfilLoaderText>{userMail}</PerfilLoaderText>
            </PerfilLoaderTextRow>
            {/* <PerfilLoaderTextRow>
                <PerfilLoaderTag>Telefono</PerfilLoaderTag>
                <PerfilLoaderText>{userPhone}</PerfilLoaderText>
            </PerfilLoaderTextRow> */}
            <PerfilLoaderTextRow>
                <PerfilLoaderTag>Contraseña</PerfilLoaderTag>
                <PerfilLoaderLink>Cambiar contraseña</PerfilLoaderLink>
            </PerfilLoaderTextRow>
            <PerfilLoaderBtns>
                <PerfilLoaderBtnUpdate>Actualizar Datos</PerfilLoaderBtnUpdate>
                <PerfilLoaderBtnDelete>Eliminar Cuenta</PerfilLoaderBtnDelete>
            </PerfilLoaderBtns>
        </PerfilLoaderTextBox>
    </PerfilLoaderContainer>
  )
}

export default PerfilLoader
