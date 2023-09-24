import React from 'react';
import './ContactList.css';

export default function ContactList({ contacts, setSelectedContact }) {
    const handleAutoTextChange = () => {
        console.log("handleAutoTextChange");
    };

    const handleCellClick = (id, name, phoneNumber, email, gender) => {
        console.log(id + ", " + name + ", " + phoneNumber + ", " + email + ", " + gender);
        setSelectedContact({id, name, phoneNumber, email, gender});
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
                            onClick={() => handleCellClick(contact.id, contact.name, contact.phoneNumber, contact.email, contact.gender)}
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
