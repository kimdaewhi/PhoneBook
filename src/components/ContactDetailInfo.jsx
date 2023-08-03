import React, { useContext, useState } from 'react'
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

    // const selectedContact = useContext(ContactContext);
    
    return (
        <div>
            <h1>상 세 정 보</h1>
            <div>
                <b>{`이     름  `}</b>
                <input defaultValue={props.selectedContact ? props.selectedContact.name : ""}/>
                
            </div>

            <div>
                <b>{`번     호  `}</b>
                <input defaultValue={props.selectedContact ? props.selectedContact.phoneNumber : ""} readOnly/>
            </div>

            <div>
                <b>{`E-mail   `}</b>
                <input/>{` `}<b> @ </b>{` `}
                <select style={{width: "150px"}}>
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
                    <input type="radio" name="gender" value="male"/>남성
                </label>
                <label>{`     `}</label>
                <label>
                    <input type="radio" name="gender" value="femail"/>여성
                </label>
            </div>
            
        </div>
    )
}
