import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    emailid: '',
    phoneno: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://192.168.1.55:8080/client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Add any other headers as needed
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Response from backend:', data);

      // Optional: Handle success scenario (e.g., redirect, show success message)
    } catch (error) {
      console.error('Error sending data to backend:', error.message);
      // Optional: Handle error scenario (e.g., show error message)
    }

    // Reset form fields after submission
    setFormData({
      firstname: '',
      lastname: '',
      emailid: '',
      phoneno: '',
      username: '',
      password: ''
    });
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: 'auto', 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '5px', 
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <table style={{ width: '100%', borderSpacing: '0' }}>
          <tbody>
            <tr>
              <td style={{ textAlign: 'right', paddingRight: '10px', width: '40%' }}><label htmlFor="firstname">First Name:</label></td>
              <td><input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} required /></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'right', paddingRight: '10px' }}><label htmlFor="lastname">Last Name:</label></td>
              <td><input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} required /></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'right', paddingRight: '10px' }}><label htmlFor="emailid">Email ID:</label></td>
              <td><input type="email" id="emailid" name="emailid" value={formData.emailid} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} required /></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'right', paddingRight: '10px' }}><label htmlFor="phoneno">Phone Number:</label></td>
              <td><input type="text" id="phoneno" name="phoneno" value={formData.phoneno} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} required /></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'right', paddingRight: '10px' }}><label htmlFor="username">Username:</label></td>
              <td><input type="text" id="username" name="username" value={formData.username} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} required /></td>
            </tr>
            <tr>
              <td style={{ textAlign: 'right', paddingRight: '10px' }}><label htmlFor="password">Password:</label></td>
              <td><input type="password" id="password" name="password" value={formData.password} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }} required /></td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: 'center', paddingTop: '20px' }}>
                <button type="submit" style={{ 
                  padding: '10px 20px', 
                  backgroundColor: '#4CAF50', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '3px', 
                  cursor: 'pointer',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s ease',
                  outline: 'none'
                }}>
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Login;
