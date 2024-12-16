import React from "react";
import Ipod from "./ipod";
import songs from "./songs/songs"
import images from "./images/images";
import Zingtouch from "zingtouch";


export default class App extends React.Component {
  constructor() {
    super();
    const song1 = new Audio(songs.music1);
    const song2 = new Audio(songs.music2);
    const song3 = new Audio(songs.music3);
    const song4 = new Audio(songs.music4);
    const song5 = new Audio(songs.music5);
    this.state = {
      menu: {
        options: [
          {
            music: ["all-songs", "artists", "Playlists"]
          },
          {
            games: []
          },
          {
            coverFlow: []
          },
          {
            settings: ["change-wallpaper", "change-orientation", "change-theme"],
          },
        ],
        menuVisible: false,
        musicVisible: false,
        settingVisible: false,
        optionIndex: 0,
        musicIndex: 0,
        settingsIndex: 0,
        pageRender: false,
      },
      screen: {
        wallpaper: [
          images.wallpaper1,
          images.wallpaper2,
          images.wallpaper3,
          images.wallpaper4,
          images.wallpaper5,
          images.coverFlow,
          images.games,
          images.allSongs,
          images.artists,
          images.albums,
          images.settings,
        ],
        wallpaperIndex: 0,
        screenIndex: 0,
      },
      mouse: {
        menuCircle: "",
      },
      songsList: {
        songs: [song1, song2, song3, song4, song5],
        thumbnails: [
          images.song1,
          images.song2,
          images.song3,
          images.song4,
          images.song5
        ],
        songIndex: 0,
        name: [
          "Baby",
          "Calm Down",
          "Faded",
          "Hero",
          "One day"
        ],
        isPlaying: false,
      },
      theme: {
        themeList: ["classic", "dark"],
        themeIndex: 0,
      },
    };
    this.controllerRef = React.createRef();
    this.progressRef = React.createRef();
  }
  isMenuVisible = (menu, screen) => {
    const { songsList } = this.state;
    if (menu.pageRender === true) {
      menu.menuVisible = true;
      screen.screenIndex = screen.wallpaperIndex;
      menu.pageRender = false;

      songsList.songs.map((song) => {
        song.pause();
        song.currentTime = 0;
        return [];
      })
      songsList.isPlaying = false;
    }
    else {
      if (
        menu.menuVisible === true &&
        menu.musicVisible === false &&
        menu.settingVisible === false
      ) {
        menu.menuVisible = false;
      }
      else if (
        menu.menuVisible === true &&
        menu.musicVisible === true &&
        menu.settingVisible === false
      ) {
        menu.musicVisible = false;
      }
      else if (
        menu.menuVisible === true &&
        menu.musicVisible === false &&
        menu.settingVisible === true
      ) {
        menu.settingVisible = false;
      }
      else {
        menu.menuVisible = true;
      }
    }
    this.setState({ menu, screen, songsList });
    return;
  }
  handleAddclass = (className, event) => {
    if (className === "menu-circle" && event === "down") {
      const { mouse } = this.state;
      mouse.menuCircle = "down";
      this.setState({ mouse });
    }
  };
  handleRemoveclass = (className, event) => {
    if (className === "menu-circle" && event === "down") {
      const { mouse } = this.state;
      mouse.menuCircle = "";
      this.setState({ mouse });
    }
  };
  handleTap = (menu, screen) => {
    const { songsList, theme } = this.state;
    // go to sub menu
    if (
      menu.menuVisible === true &&
      menu.musicVisible === false &&
      menu.settingVisible === false
    ) {
      if (menu.optionIndex === 0) {
        menu.menuVisible = true;
      }
      else if (menu.optionIndex === 1) {
        menu.pageRender = true;
        menu.menuVisible = false;
        screen.screenIndex = 6
      }
      else if (menu.optionIndex === 2) {
        menu.pageRender = true;
        menu.menuVisible = false;
        screen.screenIndex = 5;
      }
      else {
        menu.settingVisible = true;
      }
    }
    // open the pages of songs menu
    else if (
      menu.menuVisible === true &&
      menu.musicVisible === true &&
      menu.settingVisible === false
    ) {
      if (menu.musicIndex === 0) {
        menu.pageRender = true;
        menu.menuVisible = false;
        screen.screenIndex = 7;
        songsList.isPlaying = true;
        songsList.songs[songsList.songIndex].play();
      }
      else if (menu.musicIndex === 1) {
        menu.pageRender = true;
        menu.menuVisible = false;
        screen.screenIndex = 8;
      }
      else {
        menu.pageRender = true;
        menu.menuVisible = false;
        screen.screenIndex = 9;
      }
    }
    // got to settings
    else if (
      menu.menuVisible === true &&
      menu.musicVisible === false &&
      menu.settingVisible === true
    ) {
      if (menu.settingsIndex === 0) {
        if (screen.wallpaperIndex < 4) {
          screen.wallpaperIndex += 1;
        }
        else {
          screen.wallpaperIndex = 0;
        }
        screen.screenIndex = screen.wallpaperIndex;
      }
      else if (menu.settingsIndex === 1) {
        alert("This features isn't available it will coming soon!!")
      }
      else {
        if (theme.themeIndex === 0) {
          theme.themeIndex = 1;
        }
        else {
          theme.themeIndex = 0;
        }
      }
    }
    else {
    }
    this.setState({ menu, screen, songsList, theme });
    return;
  }
  // rotation event in active region
  handleRotate = (menu) => {
    this.activeRegionOuter.bind(
      this.containerElementOuter,
      "rotate",
      (event) => {
        event.stopPropagation();
        if (
          menu.menuVisible === true &&
          menu.musicVisible === false &&
          menu.settingVisible === false
        ) {
          const angle = event.detail.angle;
          if (angle >= 0 && angle <= 90) {
            menu.optionIndex = 0;
          } else if (angle > 90 && angle <= 180) {
            menu.optionIndex = 1;
          } else if (angle > 180 && angle <= 270) {
            menu.optionIndex = 2;
          } else if (angle > 270 && angle <= 360) {
            menu.optionIndex = 3;
          } else if (angle >= -90 && angle < 0) {
            menu.optionIndex = 3;
          } else if (angle >= -180 && angle < -90) {
            menu.optionIndex = 2;
          } else if (angle >= -270 && angle < -180) {
            menu.optionIndex = 1;
          } else if (angle >= -360 && angle < -270) {
            menu.optionIndex = 0;
          } else {
          }
        }
        // rotation in music menu
        else if (
          menu.menuVisible === true &&
          menu.musicVisible === true &&
          menu.settingVisible === false
        ) {
          const angle = event.detail.angle;
          if (angle >= 0 && angle <= 120) {
            menu.musicIndex = 0;
          } else if (angle > 120 && angle <= 240) {
            menu.musicIndex = 1;
          } else if (angle > 240 && angle <= 360) {
            menu.musicIndex = 2;
          } else if (angle >= -120 && angle < 0) {
            menu.musicIndex = 2;
          } else if (angle >= -240 && angle < -120) {
            menu.musicIndex = 1;
          } else if (angle >= -360 && angle < -240) {
            menu.musicIndex = 0;
          } else {
          }
        }
        // rotation in setting menu
        else if (
          menu.menuVisible === true &&
          menu.musicVisible === false &&
          menu.settingVisible === true
        ) {
          const angle = event.detail.angle;
          if (angle >= 0 && angle <= 120) {
            menu.settingsIndex = 0;
          } else if (angle > 120 && angle <= 240) {
            menu.settingsIndex = 1;
          } else if (angle > 240 && angle <= 360) {
            menu.settingsIndex = 2;
          } else if (angle >= -120 && angle < 0) {
            menu.settingsIndex = 2;
          } else if (angle >= -240 && angle < -120) {
            menu.settingsIndex = 1;
          } else if (angle >= -360 && angle < -240) {
            menu.settingsIndex = 0;
          } else {
          }
        }
        else {
        }
        this.setState({ menu });
      }
    );
  };
  componentDidMount() {
    this.containerElementOuter = this.controllerRef.current;
    this.activeRegionOuter = new Zingtouch.Region(this.containerElementOuter);
  }
  // pause and play song in song list
  handlePlay = (songsList) => {
    if (
      this.state.menu.pageRender === true &&
      this.state.screen.screenIndex === 7
    ) {
      const { songIndex } = songsList;
      if (songsList.isPlaying) {
        songsList.isPlaying = false;
        songsList.songs[songIndex].pause();
      }
      else {
        songsList.isPlaying = true;
        songsList.songs[songIndex].play();
      }
      this.setState({ songsList });
    }
    else {
    }
  }
  handleNextSong = (songsList) => {
    if (
      this.state.pageRender === true &&
      this.state.screen === 7
    ) {
      songsList.songs.map((song) => {
        song.pause();
        song.currentTime = 0;
        return [];
      });
      songsList.isPlaying = false;
      songsList.songIndex += 1;
      if (songsList.songIndex > songsList.songs.length - 1) {
        songsList.songIndex = 0;
      }
      songsList.songs[songsList.songIndex].play();
      songsList.isPlaying = true;
      this.setState({ songsList });
    }
    else {
    }
  }
  handlePrevSong = (songsList) => {
    if (
      this.state.pageRender === true &&
      this.state.screen === 7
    ) {
      songsList.songs.map((song) => {
        song.pause();
        song.currentTime = 0;
        return [];
      });
      songsList.isPlaying = false;
      songsList.songIndex -= 1;
      if (songsList.songIndex < 0) {
        songsList.songIndex = songsList.songs.length - 1;
      }
      songsList.songs[songsList.songIndex].play();
      songsList.isPlaying = true;
      this.setState({ songsList });
    }
    else {
    }
  }
  handleUpdateProgress = (event) => {
    if (this.state.menu.pageRender === true &&
      this.state.screen.screenIndex === 7
    ) {
      const { currentTime, duration } = event.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      this.progressRef.current.style.width = progressPercent + "%";
    }
    else {
    }
  }
  render() {
    const { menu, screen, mouse, songsList, theme } = this.state;
    // const styling = () => {
    //   if (theme.themeIndex === 0) {
    //     return "background-color: ''; transition: all 2s linear;";
    //   }
    //   else {
    //     return "background-color: rgba(255, 255, 255, 0.5); transition: all 2s linear;";
    //   }
    // }
    return (
      <Ipod
        screen={screen}
        menu={menu}
        songsList={songsList}
        theme={theme}
        isMenuVisible={this.isMenuVisible}
        handleAddclass={this.handleAddclass}
        handleRemoveclass={this.handleRemoveclass}
        mouse={mouse}
        handleTap={this.handleTap}
        handleRotate={this.handleRotate}
        handlePlay={this.handlePlay}
        handleNextSong={this.handleNextSong}
        handlePrevSong={this.handlePrevSong}
        handleUpdateProgress={this.handleUpdateProgress}
        controllerRef={this.controllerRef}
        progressRef={this.progressRef}
      />
    );
  }
}


