import { useState } from "react";
import styled, { keyframes } from "styled-components";
import menubar from "../../asset/menubar.png"
import Login from "../../login/Login";
import MenuBar from "./MenuBar";

const Logo = () => {

const [modalMenuBar, setModalMenuBar] = useState(false) 
const handleModalMenuBar = () => {
    setModalMenuBar(prev => !prev);
}

const [LoginModal, setLoginModal] = useState(false)
const handleLoginModal = () => {
    setLoginModal(true)
}

    return (
        <>
            <MobileBar menubar={menubar}
                onClick={handleModalMenuBar}
            />
            <MainLogo
                onClick={handleLoginModal}
            >
                ReactMeals
            </MainLogo>

            {modalMenuBar && <MenuBar setModalMenuBar={setModalMenuBar}/>}
            {LoginModal && <Login setLoginModal={setLoginModal}/>}
        </>
    )
}

const blinkEffect = keyframes`
0% {
    color: white;
} 
50% {
    color: #ffb800;
}
100% {
    color: white;
}
`

const MainLogo = styled.div`
font-size: 36px;
cursor: pointer;
:hover {
    color: #ffb800;
    animation: ${blinkEffect} 0.5s infinite;
}
@media (max-width: 768px) {
    font-size: 23px;
}
`

const MobileBar = styled.div`
background-image: url(${props=>props.menubar});
background-position: center;
background-size: cover;
width: 30px;
height: 30px;
@media (min-width: 780px) {
    display: none;
}
`

export default Logo;