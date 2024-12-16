import { FETCH_CONTACTS, ADD_MESSAGE } from "../actions/action";

const initialState = { contacts: [] };

export default function contacts(state = initialState, action){
    switch (action.type){
        case FETCH_CONTACTS:
            return{
                ...state,
                contacts: action.contacts,
            };
        case ADD_MESSAGE:
            const updateContacts = [...state.contacts];
            const user = updateContacts.find(
                (contact) => contact.id === action.userId
            );
            user.chatlog.push(action.message);
            return{
                ...state,
                contacts: [...updateContacts],
            };
        default:
            return state;
    }
}