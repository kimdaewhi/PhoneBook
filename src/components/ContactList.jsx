import React, { useState } from 'react'
import './ContactList.css';

export default function ContactList({ contacts, setSelectedContact }) {
    const [searchTerm, setSearchTerm] = useState("");


    // 검색어 입력 핸들러
    const handleAutoTextChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);

        console.log("handleAutoTextChange : " + value);
    };

    // 검색어를 포함하는 연락처 필터링
    const filteredContacts = contacts.filter((contact) => 
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );


    // 테이블 row 클릭 이벤트
    const handleCellClick = (id, name, phoneNumber, email, birth, gender) => {
        console.log(id + ", " + name + ", " + phoneNumber + ", " + email + ", " + birth + ", " + gender);
        setSelectedContact({id, name, phoneNumber, email, birth, gender});
    };


    return (
        <div>
            <h1>전화번호부</h1>
            검색{` : `}
            <input className="input-search" type="text" value={searchTerm} onChange={handleAutoTextChange}/>

            <table className="contactList">
                <tbody>
                    <tr>
                        <th>이  름</th>
                        <th>번  호</th>
                        <th>생년월일</th>
                        <th>성  별</th>
                    </tr>
                    {/* contacts.map((contact) => ( */
                        filteredContacts.map((contact) => (
                        <tr 
                            key={contact.id}
                            onClick={() => handleCellClick(contact.id, contact.name, contact.phoneNumber, contact.email, contact.birth, contact.gender)}
                        >
                            <td>{contact.name}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.birth}</td>
                            <td>{contact.gender === "M" ? "남자" : "여자"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
