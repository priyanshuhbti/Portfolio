import React, { useState } from 'react';
import './Form.css'; // Import your CSS file for styling

const Login= () => {
 
  return (
    <div className="job-seeker-form-container">
      <h2>Login</h2>
      <form onSubmit>
      

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value=" " onChange="  " required />

        <label htmlFor="phone">Password:</label>
        <input type="tel" id="phone" name="phone" value=" " onChange=" " required />

        <button type="submit">Login</button>
      
      </form>
    </div>
  );
};

export default Login;
