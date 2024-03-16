import React, { useState } from 'react';
import './Form.css'; 

const UserProfileForm = () => {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      fetchUserData();
    }, []);
  
    const fetchUserData = async () => {
      try {
        const response = await fetch('your-backend-endpoint');
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div className="user-profile-form-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:{userData.name}</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="email">Email: {userData.email}</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="phone">Phone: {userData.phone}</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />

        

        <button type="submit">Go to the AI Resume Checker </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
