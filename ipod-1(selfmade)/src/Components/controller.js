import React from 'react';
import styled from 'styled-components';
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";
import { HiPlayPause } from "react-icons/hi2";


// box-shadow: inset 6px 0px 100px #a6a6a6;
const Container = styled.div`
width: 160px;
height: 160px;
border-radius: 50%;
background-color: white;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
overflow: hidden;
position: relative;
margin-top: 20px;
`
const Top = styled.button`
width: 100%;
height: 33.3%;
border: none;
outline: none;
background-color: transparent;
color: #a8a8a8;
text-transform: Uppercase;
font-size: 18px;
`
const BackBtn = styled.button`
height: 33.3%;
border: none;
outline: none;
align-items: center;
justify-content: center;
background-color: transparent;
color: #a8a8a8;
margin-right: 40px;
`
const ForBtn = styled.button`
height: 33.3%;
border: none;
outline: none;
align-items: center;
justify-content: center;
background-color: transparent;
color: #a8a8a8;
margin-left: 40px;
`
const Bottom = styled.button`
width: 100%;
height: 33.3%;
border: none;
color: #a8a8a8;
outline: none;
background-color: transparent;
`
const ScrollBtn = styled.button`
position: absolute;
width: 45%;
height: 45%;
background-color: #c8c8c8;
border-radius: 50%;
border: none;
outline: none;
z-index: 1;
box-shadow: inset 2px 10px 20px 5px rgba(0, 0, 0, 0.25);
`
const Controller = (props) =>{
    const {
        menu,
        handleRotate,
        handleTap,
        isMenuVisible,
        handleAddclass,
        handleRemoveclass,
        mouse,
        screen,
        controllerRef,
        songsList,
        theme,
        handlePlay,
        handleNextSong,
        handlePrevSong
    } = props
    return(
            <Container onClick={(e) => {
				e.stopPropagation();
				return;
			}}
			onMouseUp={(e) => {
				e.stopPropagation();
				handleRemoveclass("menu-circle", "down");
				return;
			}}
			onMouseDown={(e) => {
				e.stopPropagation();
				return;
			}}>
                <Top>Menu</Top>
                <BackBtn><AiFillFastBackward/></BackBtn>
                <ScrollBtn></ScrollBtn>
                <ForBtn><AiFillFastForward/></ForBtn>
                <Bottom><HiPlayPause/></Bottom>
            </Container>
    )
}
export default Controller;
