import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './AlbumForm.module.css'

const AlbumForm = ({ onAlbumCreate }) => {
    //state for storing album name
    const [albumName, setAlbumName] = useState("");

    // event handler for input change
    const handleInputChange = (e) => {
        setAlbumName(e.target.value);
    }

    // event handler for creating an album
    const handleCreateAlbum = () => {
        // if album name is empty then show error
        if (albumName.trim() === '') {
            toast.error("Please Enter an Album name!!");
        }
        else {
            // else call the function and pass the parent components
            onAlbumCreate(albumName);
            //show successfully created on toast
            toast.success("Album Created Successfully")
            //after creating clear the input field
            handleClear();
        }
    }

    // event handler for clear the input field
    const handleClear = () => {
        setAlbumName('');
    }

    return (
        <>
            <div className={styles.form}>
                <h1>Create album</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Enter an Album name..."
                        value={albumName}
                        onChange={handleInputChange}
                        autoFocus
                    />
                    <button className="clear" onClick={handleClear}>Clear</button>
                    <button className="create" onClick={handleCreateAlbum}>Create</button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default AlbumForm;