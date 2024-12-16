export const ContactName = ({name}) => {
    return (
        <div>
            <p style={styles.contactText}>{name}</p>
        </div>
    )
}
const styles = {
    contactText: {
        fontSize: "20px",
        fontWeight: 600,
        color: "#000",
        marginBottom: "3px"
    }
}