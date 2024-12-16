//search box component
export const SearchBar = ({searchChange}) => {
    return (
        <>
        <input
            style={styles.input}
            placeholder="Search name in your contacts..."
            onChange={searchChange}
            ></input>
        </>
    )
}
//styles
const styles = {
    input: {
        borderRadius: "18px",
        width: "95%",
        backgroundColor: "#fff",
        outline: "none",
        margin: "auto",
        marginTop: "20px",
        padding: "10px 15px",
        border: "1px solid #cccccc",
        fontSize: "20px",
        fontFamily: "cursive"
    }
}