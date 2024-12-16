import { Link } from "react-router-dom";
import { ContactAvatar } from "./ContactAvatar";
import { ContactName } from "./ContactName";
import { ContactLastMessage } from "./ContactLastMessage";

export const ContactTab = ({contact}) => {
    const { image, name, chatlog, id } = contact;

    let length = chatlog.length;

    const NO_MESSAGE = {
        text: "0 message, Conservation not started yet!"
    };

    return (
        <Link to={`/conservations/${id}`} className="link-tag">
            <div className="contact-tab">
                <div>
                    {" "}
                    <ContactAvatar image={image}/>
                </div>
                <div style={{marginLeft: "16px"}}>
                    <ContactName name={name}/>
                    <ContactLastMessage chatlog={length > 0 ? chatlog[length-1] : NO_MESSAGE}/>
                </div>
            </div>
        </Link>
    )
}