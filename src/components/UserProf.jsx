import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling

const UserProfileForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, such as sending data to a server
  };

  return (
    <div className="user-profile-form-container">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value={phone} onChange={handlePhoneChange} required />

        <label htmlFor="resume">Profile Image:</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleResumeChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfileForm;
