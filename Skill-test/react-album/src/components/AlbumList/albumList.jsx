//GETTING STYLES
import styles from "./albumList.module.css"
//GETTING ROUTE COMPONENT
import { NavLink } from "react-router-dom";

export const AlbumList = ({albums, deletAlbum, setUpdateAlbums}) => {
    return (
        <>
        (<div className={styles.main}>
            <div className={styles.List}>
                {albums.map((album) => (
                <div className={styles.albumCont} key={album.id}>
                    <h3>{album.title}</h3>
                    <div className={styles.btnCont}>
                        <NavLink to={{pathname: "/update", state: {title: album.title}}} >
                            <button className={styles.update} onClick={() => setUpdateAlbums(album)}>Update</button>
                        </NavLink>
                        <button className={styles.delete} onClick={() => deletAlbum(album.id)}>Delete</button>
                    </div>
                </div>
                ))}
            </div>
            
        </div>)
        </>
    )
}