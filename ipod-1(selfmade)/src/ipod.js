import React from "react";
import Display from "./Components/display";
import Controller from "./Components/controller";
import './index.css';
const Ipod = (props) => {
    const {
        screen,
        menu, 
        songsList,
        theme,
        isMenuVisible,
        handleAddclass,
        handleRemoveclass,
        mouse,
        handleTap,
        handleRotate,
        handlePlay,
        handleNextSong,
        handlePrevSong,
        handleUpdateProgress,
        controllerRef,
        progressRef
    } = props;
    const themeIpod = () => {
        if (theme.themeIndex === 0) {
            return {
                boxShadow: "1px 4px 15px 10px rgba(151, 151, 151, 0.72)",
                background: "linear-gradient(90deg, #e3e4e5,#cacaca)",
            };
        } else {
            return {
                boxShadow: "0px 1px 15px 13px rgba(151, 151, 151, 0.72)",
                backgroundColor: "black",
            };
        }
    };
    const themeDisplayContainer = () => {
            if (theme.themeIndex === 0) {
                return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
            } else {
                return { backgroundColor: "#222" };
            }
    };
    const themeTopContainer = () => {
		if (theme.themeIndex === 0) {
			return { background: "linear-gradient(90deg, #e3e4e5,#cacaca)" };
		} else {
			return { backgroundColor: "black" };
		}
	};
    const themeBottomContainer = () => {
		if (theme.themeIndex === 0) {
			return {
				background: "linear-gradient(90deg, #e3e4e5,#cacaca)",
				transition: "all 2s linear",
			};
		} else {
			return { backgroundColor: "black", transition: "all 2s linear" };
		}
	};
    return (
        < div className="ipod" style={themeIpod()}>
            <div className="top-container" style={themeTopContainer}
                 onMouseUp={(e) => {
                     e.stopPropagation();
                     handleRemoveclass("menu-circle", "down");
                     return;
                 }}>
                    <div className="display-container" style={themeDisplayContainer}>
                       <Display
                            screen={screen}
                            menu={menu}
                            songsList={songsList}
                            theme={theme}
                            handleUpdateProgress={handleUpdateProgress}
                            progressRef={progressRef}
                        /> 
                    </div>
                    
            </div>
            <div className="bottom-container" style={themeBottomContainer}>
                <Controller
                    menu={menu}
                    handleRotate={handleRotate}
                    handleTap={handleTap}
                    isMenuVisible={isMenuVisible}
                    handleAddclass={handleAddclass}
                    handleRemoveclass={handleRemoveclass}
                    mouse={mouse}
                    screen={screen}
                    controllerRef={controllerRef}
                    songsList={songsList}
                    theme={theme}
                    handlePlay={handlePlay}
                    handleNextSong={handleNextSong}
                    handlePrevSong={handlePrevSong}
                />
            </div>
      </div>
    )
}
export default Ipod;