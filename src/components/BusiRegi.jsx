import React, { useState } from 'react';
import './Form.css'; 

const BusiReg = () => {
 
  return (
    <div className="job-seeker-form-container">
      <h2>Bussiness Registration</h2>
      <form onSubmit>
      <label htmlFor="resume">Bussiness Profile</label>
      <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange=" " required />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value=" " onChange=" " required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value=" " onChange="  " required />

        <label htmlFor="phone">Password:</label>
        <input type="tel" id="phone" name="phone" value=" " onChange=" " required />
        <label htmlFor="phone">Mobile:</label>
        <input type="tel" id="phone" name="phone" value=" " onChange=" " required />
        <label htmlFor="phone">Category:</label>
        <input type="" id="phone" name="phone" value=" " onChange=" " required />

        <label htmlFor="resume">Address:</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange=" " required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusiReg;
