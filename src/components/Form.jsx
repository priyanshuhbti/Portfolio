import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling

const Form = () => {
 
  return (
    <div className="job-seeker-form-container">
      <h2>User Detailed Description</h2>
      <form onSubmit>
      <label htmlFor="resume">User Image</label>
      <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange=" " required />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value=" " onChange=" " required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value=" " onChange="  " required />

        <label htmlFor="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" value=" " onChange=" " required />

        <label htmlFor="resume">Resume:</label>
        <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange=" " required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
