import { ContactTab } from "./ContactTab";

export const NewConservationTab = ({contacts, showNewConservationTab}) => {
    let handleClose = () => {
        showNewConservationTab(false);
    }
    return (
        <>
        <div className="newConservationTab">
            <div className="newConsTabHeader">
                <p>Select Contact</p>
                <span onClick={handleClose}>
                    <i className="fas fa-2x fa-times-circle"></i>
                </span>
            </div>
            <div className="newConsList" onClick={handleClose}>
                {contacts.map((contact, index) => (
                    <ContactTab contact={contact} key={index}/>
                ))}
            </div>
        </div>
        </>
    )
}