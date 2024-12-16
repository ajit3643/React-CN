import './style/App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom";
import { data } from '../data/data';
import { updateContacts } from '../actions/contact';
import { Col, Container, Row } from "react-bootstrap"

import "../components/LeftSidebar/style/style.css"
import "../components/RightSidebar/style/style.css"

import { ProfileHeader } from '../components/LeftSidebar/profileHeader';
import { NewConservation } from '../components/LeftSidebar/NewConservation';
import { SearchBar } from '../components/LeftSidebar/SearchBar';
import { ContactList } from '../components/LeftSidebar/ContactList';
import { ConservationList } from '../components/RightSidebar/ConservationList';
import { NoConversation } from '../components/RightSidebar/NoConversation';
import { NewConservationTab } from '../components/LeftSidebar/NewConservationTab';

function App() {
  const [contacts, setContacts] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [newConversationTab, setNewConversationTab] = useState(false);
  const user = useSelector((state) => state.user);
  const stateContacts = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch((updateContacts(data.profile.contacts)));
    setContacts(stateContacts.contacts);
  }, [dispatch, stateContacts.contacts]);

  const onSearchChange = (e) => {
    setSearchField(e.target.value);
  }

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col className='left-sidebar'>
            <Row className='left-sidebar-header'>
              <Row className='d-flex align-items-center' style={{ backgroundColor: "green" }}>
                <Col>
                  {" "}
                  <ProfileHeader user={user} />
                </Col>
                <Col>
                  <NewConservation showNewConservationTab={setNewConversationTab} />
                </Col>
              </Row>
              <Row style={{ margin: "auto", paddingTop: "2px" }}>
                <SearchBar searchChange={onSearchChange} />
              </Row>
            </Row>
            <Row>
              <ContactList contacts={filteredContacts} />
            </Row>
          </Col>
          <Col className='right-sidebar'>
            <Routes>
              <Route
                path='/conservations/:id'
                element={<ConservationList contacts={contacts} />}
              />
              <Route path='*' element={<NoConversation />} />
            </Routes>
            {newConversationTab && (
              <NewConservationTab contacts={contacts} showNewConservationTab={setNewConversationTab} />
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
