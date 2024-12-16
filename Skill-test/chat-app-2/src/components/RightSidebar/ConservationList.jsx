import { useParams } from "react-router-dom"
import { MessageBox } from "./MessageBox";

export const ConservationList = ({contacts}) => {
    const { id } = useParams();
    const userId = parseInt(id);
    const user = contacts.find((contact) => contact.id === userId);

    return(
        <>
        {user && <MessageBox user={user}/>}
        </>
    )
}