import './App.css';
import ContactList from './components/ContactList';
import ContactDetailInfo from './components/ContactDetailInfo';
import ContactContext from './components/ContactContext';
import { useState } from 'react'


function App() {
    // ⭐전화번호부 리스트를 Array로 관리. 나중에 db붙일땐 이 값을 db로 전송
    const contactArr = [
        {id: 1, name: "Declan Rice", phoneNumber: "010-1234-5678", email: "declanrice@arsnal.co.uk", gender: "M"},
        {id: 2, name: "Gabriel Martinelli", phoneNumber: "010-9999-8888", email: "gabrielmartinelli@arsnal.co.uk", gender: "M"},
        {id: 3, name: "Martin Ødegaard", phoneNumber: "010-2222-3333", email: "odegaard98@arsnal.co.uk", gender: "M"},
    ]
    
    const [selectedContact, setSelectedContact] = useState(null);
    const [contacts, setContacts] = useState(contactArr)

    return (
        <div className="App">
            <ContactContext.Provider value={{ selectedContact, setSelectedContact }}>
                <ContactList contacts={contacts} selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>

                <br />
                <hr />
                
                <ContactDetailInfo 
                    selectedContact={selectedContact} />
            </ContactContext.Provider>
        </div>
    );
}

export default App;
