import { useState, useEffect } from "react";
import styles from "./AlbumLists.module.css";
import AlbumForm from "../AlbumForm/AlbumForm";
import { db } from "../../firebaseinit";
import ImageList from "../ImageList/ImageList";
import albumimg from "./album.png";
import { CiCircleRemove } from "react-icons/ci";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AlbumLists = () => {
  const [showForm, setShowForm] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  const fetchAlbums = async () => {
    const querySnapshot = await getDocs(collection(db, "albums"));
    const albumData = [];
    querySnapshot.forEach((doc) => {
      albumData.push({ id: doc.id, name: doc.data().name });
    });
    setAlbums(albumData);
  };
  useEffect(() => {
    fetchAlbums();
  }, []);

  const handleAddedAlbum = () => {
    setShowForm((previousForm) => !previousForm);
  };

  const handleAlbumCreate = async (name) => {
    try {
      await addDoc(collection(db, "albums"), {
        name: name,
      });
      fetchAlbums();
      setShowForm(false);
    } catch (error) {
      console.log("Error in creating ALbums: ", error);
    }
  };

  const handleAlbumClick = (albumId) => {
    setSelectedAlbumId(albumId);
    setShowForm(false);
  };

  const handleBackClick = () => {
    setSelectedAlbumId(null);
  };

  const handleAlbumRemove = async (id) => {
    const docRef = doc(db, "albums", id);
    await deleteDoc(docRef);
    fetchAlbums();
  };

  return (
    <>
      {!selectedAlbumId && (
          <div className={styles.main}>
          <h2>Your albums</h2>
          <button className={`${showForm ? "cancel" : ""}`} onClick={handleAddedAlbum}>
            {showForm ? "Cancel" : "Add Album"}
          </button>
        </div>
      )}
      {showForm && <AlbumForm onAlbumCreate={handleAlbumCreate} />}
      {!selectedAlbumId && albums.length > 0 && (
        <div className={styles.lists}>
          {albums.map((album) => (
            <div key={album.id}>
              <CiCircleRemove
                size={20}
                className={styles.delete}
                onClick={() => handleAlbumRemove(album.id)}
              />
              <img
                src={albumimg}
                alt="album"
                className={styles.icon}
                onClick={() => handleAlbumClick(album.id)}
              />
              <span>{album.name}</span>
            </div>
          ))}
        </div>
      )}
      {selectedAlbumId && (
        <ImageList albumId={selectedAlbumId} onBackClick={handleBackClick} />
      )}
    </>
  );
};

export default AlbumLists;
