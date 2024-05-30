
import React, { useState } from 'react';
import DataDisplay from './Admintable';
import './Login.css';


const Admin = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    services_List: [],
    company_Name: '',
    company_Description: '',
    pincode: '',
    email_Id: '',
  });

  // Function to handle changes in form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      if (checked) {
        // If checkbox is checked, add the value to the services_List array
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        // If checkbox is unchecked, remove the value from the services_List array
        setFormData({
          ...formData,
          [name]: formData[name].filter((service) => service !== value),
        });
      }
    } else {
      // For other input types, update the form data with the new value
      setFormData({ ...formData, [name]: value });
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Convert services_List array to comma-separated string
      const servicesString = formData.services_List.join(',');
      // Create data object to send in the POST request
      const dataToSend = {
        services_List: servicesString,
        company_Name: formData.company_Name,
        company_Description: formData.company_Description,
        pincode: formData.pincode,
        email_Id: formData.email_Id
      };
      // Make POST request to the server
      const response = await fetch('http://192.168.1.58:8081/admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });
      // Check if the response is ok
      if (response.ok) {
        // Display success message if the response is ok
        alert('Form submitted successfully!');
      } else {
        // Display error message if submission fails
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      // Display error message if submission fails
      console.error('Error:', error);
      alert('Form submission failed. Please try again.');
    }
  };

  return (
    <div>
      <h1 id='admin'>WELCOME TO ISPL - ADMIN PANEL</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label htmlFor="services_List">Services List:</label></td>
              <td>
                <div className="dropdown-content">
                  {/* Checkboxes for services */}
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
              <td><label htmlFor="company_Description">Company Description:</label></td>
              <td>
                {/* Textarea for company description */}
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
        {/* Submit button */}
        <button type="submit">Submit</button>
      </form>
      <DataDisplay/>
    </div>
   
  );
};

export default Admin;
