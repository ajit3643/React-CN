import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { addNewMessage } from "../../actions/contact";
import { ProfileHeader } from "../LeftSidebar/profileHeader";
import { RightChatBubble } from "./RightChatBubble";
import userImage from "../../images/user.jpg"
import { LeftChatBubble } from "./LeftChatBubble";
import { MessageInput } from "./MessageInput";

export const MessageBox = ({user}) => {
    const [chat, setChat] = useState([]);
    const [length, setLength] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        setChat(user.chatlog);
        setLength(user.chatlog.length);
    }, [user]);

    var time;
    var hours;
    var minutes;

    function currentTime() {
        var currentDate = new Date();
        hours = currentDate.getHours();
        hours = hours % 12 || 12;
        hours = appendZero(hours);

        minutes = appendZero(currentDate.getMinutes());
        var seconds = appendZero(currentDate.getSeconds());

        const am = "AM";
        const pm = "PM";

        const timeZone = hours <= 12 ? am : pm;

        time = `${hours}:${minutes}:${seconds} ${timeZone}`;
    }

    function appendZero(time) {
        if(time<10 && time.length !== 2) {
            return "0"+time;
        }
        return time;
    }

    setInterval(currentTime, 1000);

    let updatedMessages = (message) => {
        let object = {
            text: message,
            timestamp: time,
            sender: "me",
            message_id: length +1,
        }
        dispatch(addNewMessage(object, user.id));
        setLength(object.message_id);
        setChat([...chat, object]);
    }
    return (
        <>
        <div className="messageBox">
            <div className="messageBoxHeader">
                <ProfileHeader user={user}/>
            </div>
            {chat.length===0 && (
                <p className="NoMessageAlert">NO MESSAGE FOUND</p>
            )}
            {chat.length>0 && (
                <div className="messageSection">
                    {chat.map((me, index) =>
                        me.sender === "me" ?
                        (
                            <RightChatBubble
                                message={me}
                                key={index}
                                name={"Abhijeet Kumar"}
                                image={userImage}
                                />
                        )
                        :
                        (
                            <LeftChatBubble
                                message={me}
                                key={index}
                                name={user.name}
                                image={user.image}
                            />
                        )
                    )}
                </div>
            )}
            <MessageInput newMessageHandler={updatedMessages} user={user}/>
        </div>
        </>
    )
}