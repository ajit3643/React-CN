//GETTING STYLES
import styles from "./addAlbum.module.css"
//GETTING ROUTE COMPONENT
import { NavLink } from "react-router-dom"

export const AddAlbum = ({addAlbum}) => {
    //on adding album
    const add = () => {
        const userId = document.getElementById("userId").value;
        const title = document.getElementById("title").value;
        addAlbum(Number(userId), title)
    }
    return (
        <div className={styles.container}>
            <div className={styles.albumForm}>
                <h4>
                    Enter New Albums Details
                </h4>
                <div className={styles.inputCont}>
                    <label htmlFor="userId">Enter Your User Id</label>
                    <input type="number" id="userId" placeholder="Enter your user Id here..." />
                </div>
                <div className={styles.inputCont}>
                    <label htmlFor="title">Enter Your Album title</label>
                    <input type="text" id="title" placeholder="Enter your album title here..." />
                </div>
                <NavLink to="/" className={styles.btnCont}>
                    <button onClick={add}>Add to List</button>
                </NavLink>
            </div>
        </div>
    )
}