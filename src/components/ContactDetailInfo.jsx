import React, { useEffect, useState } from 'react'
import './ContactDetailInfo.css'

export default function ContactDetailInfo({ selectedContact, onUpdateContact, onNewContact }) {
    // 이메일 도메인 리스트
    const emailDomains = ['gmail.com', 
    'yahoo.com', 
    'naver.com',
    'hotmail.com',
    'outlook.com',
    'kakao.com', 
    'nate.com',
    'daum.net',
    'arsnal.co.uk' ];

    const initialContact = selectedContact || {
        id: -1,
        name: "",
        phoneNumber: "",
        email: "",
        birth: "",
        gender: "",
    };

    // 변경된 상세정보 
    const [contact, setContact] = useState({
        id: initialContact.id,
        name: "",
        phoneNumber: "",
        email: "",
        birth: "",
        gender: "",
    });

    // Hook 이용하여 변경될 때마다 정보 업데이트
    useEffect(() => {
        setContact(selectedContact || initialContact);
    }, [selectedContact]);




    // 새로 변경된 정보 contact에 저장
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if(name === "email" || name === "emailDomain") {
            // 속성 명이 이메일 또는 이메일 도메인일 때는 두 개의 문자열 합쳐서 설정
            const currentEmail = contact.email || ''; // 기존 email이 없으면 빈 문자열로 초기화
            const updatedEmail = name === "email" ? value + "@" + currentEmail.split('@')[1] : currentEmail.split('@')[0] + "@" + value;
            setContact({ ...contact, email: updatedEmail });
        }
        else {
            // 다른 필드에 대해서는 직접 값을 설정
            setContact({ ...contact, [name]: value });
        }


    };


    // 변경된 정보 업데이트 및 콜백함수 호출하여 전달
    const handleUpdateClick = () => {
        // 변경된 값을 새로운 Contact 객체에 저장
        const updatedContact = {
            ...contact,
        };

        console.log("updatedContact : " + updatedContact.id + ", " + updatedContact.name + ", " + updatedContact.phoneNumber + ", "
            + updatedContact.email + ", " + updatedContact.birth + ", " + updatedContact.gender);

        // onUpdateContact 콜백 함수를 호출하여 변경된 연락처를 전달
        onUpdateContact(updatedContact);
    };


    // 신규 사용자 생성
    const handleNewClick = () => {
        // Callback 함수를 호출하여 새로운 ID의 신규 사용자 전달받음
        onNewContact();
    };


    const handleSaveClick = () => {
        // 새로운 Contact객체를 저장 및 Callback 함수 호출하여 신규 사용자 추가
        const updatedContact = {
            ...contact,
        };
        
        console.log("handleSaveClick : " + updatedContact.id + ", " + updatedContact.name + ", " + updatedContact.phoneNumber + ", "
            + updatedContact.email + ", " + updatedContact.birth + ", " + updatedContact.gender);

        onUpdateContact(updatedContact);
    }

    
    return (
        <div>
            <h1>상 세 정 보</h1>
            <div>
                <b>{`이     름  `}</b>
                <input name="name" value={contact.name} onChange={handleInputChange}/>
                
            </div>

            <div>
                <b>{`번     호  `}</b>
                <input name="phoneNumber" value={contact.phoneNumber} onChange={handleInputChange}/>
            </div>

            <div>
                <b>{`E-mail   `}</b>
                <input name="email" value={contact.email.split('@')[0]} onChange={handleInputChange} />{` `}<b> @ </b>{` `}
                <select 
                    name="emailDomain" 
                    style={{width: "150px"}} 
                    value={contact.email.split('@')[1]} 
                    onChange={handleInputChange}>
                    {emailDomains.map((domain) => (
                        <option key={domain} value={domain}>
                            {domain}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <b>{`생 년 월 일  `}</b>
                <input name="birth" value={contact.birth} onChange={handleInputChange}/>
            </div>

            <div>
                <b>{`성     별  `}</b>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="M" 
                        checked={contact.gender === "M"} 
                        onChange={handleInputChange}/>남
                </label>
                <label>{`     `}</label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="F" 
                        checked={contact.gender === "F"} 
                        onChange={handleInputChange}/>여
                </label>
            </div>

            <div>
                <button className="update-button" onClick={handleUpdateClick}>변경사항 저장</button>
                <button className="new-button" onClick={handleNewClick}>신규</button>
                <button className="save-button" onClick={handleSaveClick}>저장</button>
            </div>
            
        </div>
    )
}
