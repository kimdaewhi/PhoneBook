import React from 'react';
import './ContactList.css';

export default function ContactList({ contacts, selectedContact, setSelectedContact }) {
    const handleAutoTextChange = () => {
        console.log("handleAutoTextChange");
    };

    const handleCellClick = (name, phoneNumber, email) => {
        console.log(name + ", " + phoneNumber + ", " + email);
        // setSelectedContact(selectedContact);
        setSelectedContact({name, phoneNumber, email});
    };


    return (
        <div>
            <h1>전화번호부</h1>
            검색{` : `}
            <input className="input-search" type="text" onChange={handleAutoTextChange}/>

            <table className="contactList">
                <tbody>
                    <tr>
                        <th>이  름</th>
                        <th>번  호</th>
                    </tr>
                    {contacts.map((contact) => (
                        <tr 
                            key={contact.id}
                            onClick={() => handleCellClick(contact.name, contact.phoneNumber, contact.email)}
                        >
                            <td>{contact.name}</td>
                            <td>{contact.phoneNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
