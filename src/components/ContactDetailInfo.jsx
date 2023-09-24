import React, { useContext, useEffect, useState } from 'react'
import './ContactDetailInfo.css'

export default function ContactDetailInfo(props) {
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

    const initialContact = props.selectedContact || {
        id: props.selectedContact ? props.selectedContact.id : -1,
        name: "",
        phoneNumber: "",
        email: "",
        gender: "",
    };

    useEffect(() => {
        setContact(props.selectedContact || initialContact);
    }, [props.selectedContact]);
    
    // const [contact, setContact] = useState(initialContact);
    const [contact, setContact] = useState({
        id: initialContact.id,
        name: "",
        phoneNumber: "",
        email: "",
        gender: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if(name === "email" || name === "emailDomain") {
            // 이메일 또는 이메일 도메인일 때는 두 개의 문자열 합쳐서 설정
            const updatedEmail = name ==="email" ? value + "@" + contact.email.split('@')[1] : contact.email.split('@')[0] + "@" + value;
            setContact({...contact, email : updatedEmail})
        }
        else {
            // 다른 항목에 대해서는 직접 값을 설정
            setContact({ ...contact, [name]: value });
        }
    };

    const handleUpdateClick = () => {
        // 변경된 값을 새로운 Contact 객체에 저장
        console.log("contact : " + contact.id + ", " + contact.name + ", " + contact.phoneNumber + ", " + contact.email + ", " + contact.gender);
    };


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
                <b>{`성     별  `}</b>
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="M" 
                        checked={contact.gender === "M"} 
                        onChange={handleInputChange}/>남성
                </label>
                <label>{`     `}</label>
                <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="F" 
                        checked={contact.gender === "F"} 
                        onChange={handleInputChange}/>여성
                </label>
            </div>

            <div>
                <button className="update-button" onClick={handleUpdateClick}>변경사항 저장</button>
            </div>
            
        </div>
    )
}
