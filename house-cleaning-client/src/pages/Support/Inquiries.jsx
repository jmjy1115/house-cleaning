import React, { useState } from 'react';
import axios from 'axios';
import './Inquiries.css';

function Inquiries() {
  const [ formData, setFormData ] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    requestDetails: ''
  });

  const handleChange = (e) => {
    // 입력폼의 현재 항목의 name 속성값과 value 속성값을 최신화
    // 다른 항목은 기존값 그대로 저장하여 보존
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('#');
      console.log(response.data);
    } catch {
      console.error(error);
    }
  };

  return (
    <div className="inquiries-container">
      <h1>견적 문의하기</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="이름" value={formData.name} onChange={handleChange} /><br />
        <input type="text" name="phone" placeholder="휴대폰번호" value={formData.phone} onChange={handleChange} /><br />
        <input type="email" name="email" placeholder="이메일" value={formData.email} onChange={handleChange} /><br />
        <input type="text" name="address" placeholder="주소" value={formData.address} onChange={handleChange} /><br />
        <textarea name="requestDetails" placeholder="견적요청내용" value={formData.requestDetails} onChange={handleChange} /><br />
        <button type="submit">문의하기</button>
      </form>
    </div>
  );
}

export default Inquiries;
