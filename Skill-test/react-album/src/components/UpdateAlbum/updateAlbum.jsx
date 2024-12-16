//GETTING STYLES
import styles from "./updateAlbum.module.css"
//GETTING ROUTE COMPONENT
import { NavLink } from "react-router-dom"

export const UpdateAlbum = ({ updateAlbum, updateAlbumInList }) => {

    //getting data update
    const getUpdateData = () => {
        const id = updateAlbum.id;
        let updateTitle = document.getElementById('title').value;
        let updateUserid = document.getElementById('userId').value;

        if (updateTitle === '') {
            updateTitle = updateAlbum.title;
        }
        if (updateUserid === '') {
            updateUserid = updateAlbum.userId;
        }
        updateAlbumInList(id, updateTitle, Number(updateUserid), updateAlbum);
    }
    return (
        <div className={styles.container}>
            <div className={styles.albumForm}>
                <h4>
                    {updateAlbum.title}
                </h4>
                <div className={styles.inputCont}>
                    <label htmlFor="title">Enter New title</label>
                    <input type="text" id="title" placeholder="Enter your album title here..." />
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="userId">Enter User Id</label>
                    <input type="number" id="userId" placeholder="Enter your user Id here..." />
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="muserId">Enter New User Id</label>
                    <input type="number" id="nuserId" placeholder="Enter your user Id here..." />
                </div>
                <NavLink to="/" className={styles.btnCont}>
                    <button onClick={() => getUpdateData()}>Save</button>
                </NavLink>
            </div>
        </div>
    )
}