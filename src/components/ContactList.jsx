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

            {/* table에 scroll을 주기 위해 div로 감싼다. */}
            <div>
                <div className="contactListContainer">
                    <table className="contactList">
                        <thead>
                            <tr>
                                <th className="name">이름</th>
                                <th className="phone">번호</th>
                                <th className="birth">생년월일</th>
                                <th className="gender">성별</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {/* contacts.map((contact) => ( */
                                filteredContacts.map((contact) => (
                                <tr 
                                    key={contact.id}
                                    onClick={() => handleCellClick(contact.id, contact.name, contact.phoneNumber, contact.email, contact.birth, contact.gender)}
                                >
                                    <td className="name">{contact.name}</td>
                                    <td className="phone">{contact.phoneNumber}</td>
                                    <td className="birth">{contact.birth}</td>
                                    <td className="gender">{contact.gender === "M" ? "남자" : "여자"}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
