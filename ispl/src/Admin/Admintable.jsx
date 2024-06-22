import React, { useState, useEffect } from 'react';

const DataDisplay = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/admin');
      const data = await response.json();
      setFormDataList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8080/admin/${id}`, {
        method: 'DELETE',
      });
      setFormDataList(formDataList.filter(data => data.id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (data) => {
    setEditingId(data.id);
    setEditedData(data);
  };

  const handleUpdate = async () => {
    try {
      await fetch(`http://localhost:8080/admin/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      });
      setEditingId(null);
      setEditedData({});
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedData({});
  };

  const handleChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value });
  };

  if (!formDataList || formDataList.length === 0) {
    return <div>No data available.</div>;
  }

  const columnKeys = Object.keys(formDataList[0]);

  const shouldHideColumn = (key) => {
    return formDataList.every(data => data[key] == null || data[key] === 0);
  };

  const shouldHideRow = (data) => {
    return Object.values(data).every(value => value == null || value === 0);
  };

  return (
    <div>
      <h2>Data Display</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr style={{ backgroundColor: '#f2f2f2' }}>
            {columnKeys.map((key) => (
              !shouldHideColumn(key) &&
              <th key={key} style={{ border: '1px solid #ddd', padding: '8px' }}>{key}</th>
            ))}
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {formDataList.map((formData) => (
            !shouldHideRow(formData) &&
            <tr key={formData.id} style={{ backgroundColor: editingId === formData.id ? '#f2f2f2' : 'transparent' }}>
              {columnKeys.map((key) => (
                !shouldHideColumn(key) &&
                <td key={key} style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {editingId === formData.id ? (
                    <input type="text" name={key} value={editedData[key]} onChange={handleChange} />
                  ) : (
                    formData[key]
                  )}
                </td>
              ))}
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {editingId === formData.id ? (
                  <>
                    <button className="btn-save" onClick={handleUpdate}>Save</button>
                    <button className="btn-cancel" onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button className="btn-edit" onClick={() => handleEdit(formData)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDelete(formData.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataDisplay;
