import React, { useState } from 'react';
import './Login.css';
import Add from './Supertable';
const SuperAdmin = () => {
  const [formData, setFormData] = useState({
    gender: '',
    first_Name: '',
    middle_Name: '',
    last_Name: '',
    address: '',
    phone_Number: '',
    aadhar_Number: '',
    services_List: [],
    company_Name: '',
    company_Description: '',
    pincode: '',
    email_Id: '',
    experience: '0',
  });

  const [phoneNumberValid, setPhoneNumberValid] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === 'phone_Number') {
      const phoneNumber = value.replace(/\D/g, '');
      if (phoneNumber.length !== 10 && phoneNumber.length > 0) {
        setPhoneNumberValid(false);
      } else {
        setPhoneNumberValid(true);
      }
    }

    if (type === 'checkbox') {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        setFormData({
          ...formData,
          [name]: formData[name].filter((service) => service !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if Aadhar number is valid
    if (formData.aadhar_Number.length !== 12) {
      alert('Please enter a valid Aadhar number with exactly 12 digits.');
      return;
    }

    // Check if phone number is valid
    if (!phoneNumberValid) {
      alert('Please enter a valid phone number with 10 digits.');
      return;
    }

    // Check if email is a valid Gmail address
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!emailPattern.test(formData.email_Id)) {
      alert('Please enter a valid Gmail address.');
      return;
    }

    try {
      const servicesString = formData.services_List.join(',');
      const dataToSend = { ...formData, services_List: servicesString };
      const response = await fetch('http://192.168.1.58:8080/superadmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      const data = await response.json();
      console.log(data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed. Please try again.');
    }
  };

  return (
    <div>
      <h1 id='admin'> WELCOME TO ISPL _ ADMIN PANAL </h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="gender">Gender:</label></td>
              <td>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="MR">MR</option>
                  <option value="MRS">MRS</option>
                  <option value="MISS">MISS</option>
                  <option value="Others">Others</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="first_Name">First Name:</label></td>
              <td><input type="text" id="first_Name" name="first_Name" value={formData.first_Name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="middle_Name">Middle Name:</label></td>
              <td><input type="text" id="middle_Name" name="middle_Name" value={formData.middle_Name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="last_Name">Last Name:</label></td>
              <td><input type="text" id="last_Name" name="last_Name" value={formData.last_Name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="address">Address:</label></td>
              <td><input type="text" id="address" name="address" value={formData.address} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="phone_Number">Phone Number:</label></td>
              <td><input type="text" id="phone_Number" name="phone_Number" value={formData.phone_Number} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="aadhar_Number">Aadhar Number:</label></td>
              <td><input type="text" id="aadhar_Number" name="aadhar_Number" value={formData.aadhar_Number} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="services_List">Services List:</label></td>
              <td>
                <div className="dropdown-content">
                  <label><input type="checkbox" name="services_List" value="T.V" onChange={handleChange} checked={formData.services_List.includes("T.V")} /> T.V</label>
                  <label><input type="checkbox" name="services_List" value="A.C" onChange={handleChange} checked={formData.services_List.includes("A.C")} /> A.C</label>
                  <label><input type="checkbox" name="services_List" value="Car" onChange={handleChange} checked={formData.services_List.includes("Car")} /> Car-washing</label>
                  <label><input type="checkbox" name="services_List" value="Fridge" onChange={handleChange} checked={formData.services_List.includes("Fridge")} /> Fridge-repairing</label>
                  <label><input type="checkbox" name="services_List" value="cooler" onChange={handleChange} checked={formData.services_List.includes("cooler")} /> Cooler</label>
                  <label><input type="checkbox" name="services_List" value="saloon" onChange={handleChange} checked={formData.services_List.includes("saloon")} /> Saloon</label>
                </div>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="company_Name">Company Name:</label></td>
              <td><input type="text" id="company_Name" name="company_Name" value={formData.company_Name} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="pincode">Pincode:</label></td>
              <td><input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="email_Id">Email ID:</label></td>
              <td><input type="text" id="email_Id" name="email_Id" value={formData.email_Id} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="experience">Experience:</label></td>
              <td>
                <select id="experience" name="experience" value={formData.experience} onChange={handleChange}>
                  <option value="0">Select Any</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="company_Description">Company Description:</label></td>
              <td>
                <textarea
                  id="company_Description"
                  name="company_Description"
                  value={formData.company_Description}
                  onChange={handleChange}
                  rows={6}
                  cols={50}
                  placeholder="Enter company description (more than 300 words)"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
<Add/>
    </div>
  );
};

export default SuperAdmin;
