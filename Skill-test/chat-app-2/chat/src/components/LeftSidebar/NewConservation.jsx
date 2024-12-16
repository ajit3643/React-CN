export const NewConservation = ({showNewConservationTab}) => {
    let handleClick = () => {
        showNewConservationTab(true);
    }
    return (
        <div className="newConservation">
            <p>New Conservation</p>
            <span onClick={handleClick}>
                <i className="fas fa-plus"></i>
            </span>
        </div>
    )
}