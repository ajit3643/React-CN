export const RightChatBubble = ({message, name, image}) => {
    console.log(message);
    console.log(name);
    return (
        <>
            <div className="messageBubble messRight">
                <img src={image} style={styles.avatar} alt="senderPic"/>
                {" "}
                <div className="rightBubble">
                    <div className="textMessage">
                        <p className="name">{name}</p>
                        <p className="message">{message.text}</p>
                        <span className="messageTime">{message.timestamp}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    avatar: {
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: "0 10px"
    }
}