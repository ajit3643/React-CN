export const ContactLastMessage = ({chatlog}) => {
    return (
        <div className="contactText">
            <p>{chatlog.text}</p>
        </div>
    )
}