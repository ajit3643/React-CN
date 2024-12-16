//GETTING REACT COMPONENT
import { Component } from 'react';
//GETTING ROUTE COMPONENTS
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//GETTING PAGE COMPONENTS
import { Navbar } from './components/Navbar/navbar';
import { AlbumList } from './components/AlbumList/albumList';
import { AddAlbum } from './components/AddAlbum/addAlbum';
import { UpdateAlbum } from './components/UpdateAlbum/updateAlbum';
//GETTING TOAST COMPONENT
import { toast } from "react-toastify";
//GETTING HELMET FOR APP NAMING AND DESCRIPTION
import { Helmet } from 'react-helmet';

export default class App extends Component {
  //making needed state on constructor
  constructor() {
    super();
    this.state = {
      albums: [],
      UpdateAlbum: {}
    }
  }

  //mount on fetch url and get data from JSON to String
  componentDidMount = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      this.setState({
        albums: data,
      });
    } catch (error) {
      console.error("Error in Fetching Data", error);
    }
  }

  //on delete an album using album id
  deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE', })
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    toast.error("Album deleted")
    this.setState({
      albums: newAlbums,
    })
  }

  // add an album to the albums array
  addAlbumToList = (userId, title) => {
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }
    this.setState({
      albums: [album, ...this.state.albums]
    })
    toast.success("New Album Added");
  }

  // set album which is needed to update album to one album
  setUpdatedAlbums = async (album) => {
    this.setState({
      UpdateAlbum: album
    })
  }

  // update an album which is set on updateAlbum
  updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];
    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle
      }
    }
    albums[index] = updatedAlbum;
    this.setState({
      albums: albums
    })
    toast.success("Album Updated")
  }

  render() {
    return (
      <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Album</title>
        <meta name="description" content="React Album is an album store website where handle all add, delete and update albums" />
      </Helmet>
      <Router>
        <Routes>
          {/* route main home page */}
          <Route path='/' element={
            <>
              <Navbar
                page="+ Add Album"
                path="/add-album"
                title="Album List"
              />
              <AlbumList
              albums={this.state.albums}
              setUpdateAlbums={this.setUpdatedAlbums}
              deletAlbum={this.deleteAlbumFromList}
              />
            </>
          }></Route>
          {/* route add album page */}
          <Route path='/add-album' element={
            <>
              <Navbar
                page="Home"
                path="/"
                title="Add Album"
              />
              <AddAlbum addAlbum={this.addAlbumToList} />
            </>
          }></Route>
          {/* route update album page */}
          <Route path='/update' element={
            <>
              <Navbar
                page="Home"
                path="/"
                title="Update Album"
              />
              <UpdateAlbum
              updateAlbum={this.state.UpdateAlbum}
              updateAlbumInList={this.updateAlbumInList}
              />
            </>
          }></Route>
        </Routes>
      </Router>
      </>
    )
  }
}
