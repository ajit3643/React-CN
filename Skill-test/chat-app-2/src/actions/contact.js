import { FETCH_CONTACTS, ADD_MESSAGE } from "./action";

export function updateContacts(contacts){
    return{
        type: FETCH_CONTACTS,
        contacts: contacts,
    }
}

export function addNewMessage(message, userId){
    return{
        type: ADD_MESSAGE,
        message,
        userId
    };
}