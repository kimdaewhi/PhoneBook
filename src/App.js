import './App.css';
import ContactList from './components/ContactList';
import ContactDetailInfo from './components/ContactDetailInfo';
import ContactContext from './components/ContactContext';
import { useState } from 'react'


function App() {
    // ⭐전화번호부 리스트를 Array로 관리. 나중에 db붙일땐 이 값을 db로 전송
    const contactArr = [
        {id: 1, name: "Declan Rice",        phoneNumber: "010-1234-5678", email: "declanrice@arsnal.co.uk",         birth: "1999.01.14", gender: "M"},
        {id: 2, name: "Gabriel Martinelli", phoneNumber: "010-9999-8888", email: "gabrielmartinelli@arsnal.co.uk",  birth: "2001.06.18", gender: "M"},
        {id: 3, name: "Martin Ødegaard",    phoneNumber: "010-2222-3333", email: "odegaard98@arsnal.co.uk",         birth: "1998.12.17", gender: "M"},
        {id: 4, name: "Ben White",          phoneNumber: "010-3232-1534", email: "benwhite@arsnal.co.uk",           birth: "1997.10.08", gender: "M"},
        {id: 5, name: "Thomas Partey",      phoneNumber: "010-0909-6677", email: "thomaspartey5@arsnal.co.uk",      birth: "1993.06.13", gender: "M"},
        {id: 6, name: "Bukayo Saka",        phoneNumber: "010-5232-4467", email: "bukayosaka87@arsnal.co.uk",       birth: "2001.09.08", gender: "M"},
    ]
    
    const [selectedContact, setSelectedContact] = useState(null);
    const [contacts, setContacts] = useState(contactArr);


    // 신규 생성 ID 가져오기 및 전달
    const handleNewClick = () => {
        // Array에서 신규 사용자용 ID를 생성
        const maxID = Math.max(...contacts.map((contact) => contact.id));

        // 빈 contact 인스턴스에 전달
        const newContact = {
            id: maxID + 1,
            name: "",
            phoneNumber: "",
            email: "",
            birth: "",
            gender: "",
        };

        setSelectedContact(newContact);
    }
    


    // 업데이트 콜백 함수
    const updateContact = (updatedContact) => {
        // 기존 사용자 ID 목록
        const existingContactIds = contacts.map((contact) => contact.id);

        if (existingContactIds.includes(updatedContact.id)) {
            // 이미 존재하는 사용자의 경우, 정보를 업데이트
            setContacts((prevContacts) =>
                prevContacts.map((contact) =>
                    contact.id === updatedContact.id ? updatedContact : contact
                )
            );
            alert("사용자 정보가 변경되었습니다.");
        } else {
            // 신규 사용자의 경우, 정보를 추가
            setContacts((prevContacts) => [...prevContacts, updatedContact]);
            alert("새로운 사용자가 추가되었습니다.");
        }
    };



    return (
        <div className="App">
            <ContactContext.Provider value={{ selectedContact, setSelectedContact }}>
                <ContactList contacts={contacts} selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>

                <br />
                <hr />

                <ContactDetailInfo 
                    selectedContact={selectedContact}
                    onUpdateContact={updateContact}
                    onNewContact={handleNewClick}
                />
            </ContactContext.Provider>
        </div>
    );
}

export default App;
