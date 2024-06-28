import React, { useState } from 'react';
import './Login.css';
import Add from './Supertable';

const SuperAdmin = () => {
  const initialFormData = {
    gender: '',
    firstname: '',
    middlename: '',
    lastname: '',
    address: '',
    phonenumber: '',
    aadharnumber: '',
    serviceslist: [],
    companyname: '',
    companydescription: '',
    pincode: '',
    emailid: '',
    experience: '0',
    profilephoto: '',
    servicename: '',
    adharphoto: '',
    panphoto: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [phoneNumberValid, setPhoneNumberValid] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === 'phonenumber') {
      const phoneNumber = value.replace(/\D/g, '');
      if (phoneNumber.length !== 10 && phoneNumber.length > 0) {
        setPhoneNumberValid(false);
      } else {
        setPhoneNumberValid(true);
      }
      setFormData({ ...formData, [name]: value });
    } else if (name === 'servicename') {
      setFormData({ ...formData, [name]: value });
    } else if (name === 'profilephoto' || name === 'adharphoto' || name === 'panphoto') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      if (checked) {
        setFormData({ ...formData, serviceslist: [...formData.serviceslist, value] });
      } else {
        setFormData({
          ...formData,
          serviceslist: formData.serviceslist.filter((service) => service !== value),
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if profile photo is selected
    if (!formData.profilephoto) {
      alert('Please upload a profile photo.');
      return;
    }

    // Check if Aadhar photo is selected
    if (!formData.adharphoto) {
      alert('Please upload an Aadhar photo.');
      return;
    }

    // Check if PAN photo is selected
    if (!formData.panphoto) {
      alert('Please upload a PAN photo.');
      return;
    }

    // Validate Aadhar number
    if (formData.aadharnumber.length !== 12) {
      alert('Please enter a valid Aadhar number with exactly 12 digits.');
      return;
    }

    // Validate phone number
    if (!phoneNumberValid) {
      alert('Please enter a valid phone number with 10 digits.');
      return;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail.com$/;
    if (!emailPattern.test(formData.emailid)) {
      alert('Please enter a valid Gmail address.');
      return;
    }

    try {
      const servicesString = formData.serviceslist.join(',');
      const dataToSend = { ...formData, serviceslist: servicesString };

      const formDataWithFile = new FormData();
      for (let key in dataToSend) {
        if (key === 'profilephoto' || key === 'adharphoto' || key === 'panphoto') {
          formDataWithFile.append(key, dataToSend[key]);
        } else {
          formDataWithFile.append(key, dataToSend[key]);
        }
      }

      console.log("Submitting form data:", formDataWithFile);

      const response = await fetch('http://192.168.1.55:8080/userprofile', {
        method: 'POST',
        body: formDataWithFile,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Server response:", data);
      alert('Form submitted successfully!');
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed. Please try again.');
    }
  };

  return (
    <div>
      <h1 id="admin">WELCOME TO ISPL _ ADMIN PANEL</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="gender">Gender:</label></td>
              <td>
                <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
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
              <td><input type="text" id="first_Name" name="firstname" value={formData.firstname} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="middle_Name">Middle Name:</label></td>
              <td><input type="text" id="middle_Name" name="middlename" value={formData.middlename} onChange={handleChange} /></td>
            </tr>
            <tr>
              <td><label htmlFor="lastname">Last Name:</label></td>
              <td><input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="address">Address:</label></td>
              <td><input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="phonenumber">Phone Number:</label></td>
              <td><input type="text" id="phonenumber" name="phonenumber" value={formData.phonenumber} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="aadharnumber">Aadhar Number:</label></td>
              <td><input type="text" id="aadharnumber" name="aadharnumber" value={formData.aadharnumber} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="serviceslist">Services List:</label></td>
              <td>
                <div className="dropdown-content">
                  <label><input type="checkbox" name="serviceslist" value="T.V" onChange={handleChange} checked={formData.serviceslist.includes("T.V")} /> T.V</label>
                  <label><input type="checkbox" name="serviceslist" value="A.C" onChange={handleChange} checked={formData.serviceslist.includes("A.C")} /> A.C</label>
                  <label><input type="checkbox" name="serviceslist" value="Car" onChange={handleChange} checked={formData.serviceslist.includes("Car")} /> Car-washing</label>
                  <label><input type="checkbox" name="serviceslist" value="Fridge" onChange={handleChange} checked={formData.serviceslist.includes("Fridge")} /> Fridge-repairing</label>
                  <label><input type="checkbox" name="serviceslist" value="cooler" onChange={handleChange} checked={formData.serviceslist.includes("cooler")} /> Cooler</label>
                  <label><input type="checkbox" name="serviceslist" value="saloon" onChange={handleChange} checked={formData.serviceslist.includes("saloon")} /> Saloon</label>
                </div>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="companyname">Company Name:</label></td>
              <td><input type="text" id="companyname" name="companyname" value={formData.companyname} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="pincode">Pincode:</label></td>
              <td><input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="companydescription">Company Description:</label></td>
              <td><input type="text" id="companydescription" name="companydescription" value={formData.companydescription} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="emailid">Email ID:</label></td>
              <td><input type="email" id="emailid" name="emailid" value={formData.emailid} onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="experience">Experience:</label></td>
              <td>
                <select id="experience" name="experience" value={formData.experience} onChange={handleChange} required>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </td>
            </tr>
            <tr>
              <td><label htmlFor="profilephoto">Profile Photo:</label></td>
              <td><input type="file" id="profilephoto" name="profilephoto" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="adharphoto">Aadhar Photo:</label></td>
              <td><input type="file" id="adharphoto" name="adharphoto" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td><label htmlFor="panphoto">PAN Photo:</label></td>
              <td><input type="file" id="panphoto" name="panphoto" onChange={handleChange} required /></td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Add />
    </div>
  );
};

export default SuperAdmin;
