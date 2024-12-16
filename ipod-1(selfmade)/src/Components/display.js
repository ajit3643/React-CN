import React from "react";
import styled from 'styled-components';
import Songs from "./songs";
import Controller from "./controller";


const DisplayContainer = styled.div`
width: 170px;
height: 140px;
background-color: #222;
overflow: hidden;
border-radius: 5px;
border: 1px solid black;
margin-bottom: 20px;
margin-top: 15px;
`
const Display = (props) => {
    const {menu, screen, songsList, handleUpdateProgress, progressRef, theme} = props;

    const {wallpaper, screenIndex} = screen;

    const themeDisplay = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
    return(
        <DisplayContainer style={themeDisplay()}>
        {screenIndex===7 && (
            <Songs
            songsList={songsList}
            handleUpdateProgress={handleUpdateProgress}
            progressRef={progressRef}
            />
        )}
        {screenIndex !==7 && (
            <img src={wallpaper[screenIndex]} alt="song.jpg"
            style={{
                height: "100%",
                width: "100%",
                borderTopLeftRadius: "10%",
                borderTopRightRadius: "10%",
                zIndex: 2,
            }}
            />
        )}

        <Controller menu={menu}/>
        </DisplayContainer>
    )
}
export default Display;