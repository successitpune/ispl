import React, { useState } from 'react';
import './bar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

const DualSearchBar = () => {
  const [location, setLocation] = useState('');
  const [infoSearch, setInfoSearch] = useState('');

  // Handle changes in the location input
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Handle changes in the info search input
  const handleInfoSearchChange = (event) => {
    setInfoSearch(event.target.value);
  };

  return (
    <center>
      <div id="search-container" className="search-container">
        {/* Location search bar */}
        <form onSubmit={(e) => e.preventDefault()} id="location-form" className="search-form">
          <div className="input-container">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="input-icon" />
            <input
              type="text"
              id="location-input"
              value={location}
              onChange={handleLocationChange}
              placeholder="Enter location"
              className="search-input"
            />
          </div>
        </form>

        {/* Info search bar */}
        <form onSubmit={(e) => e.preventDefault()} id="info-form" className="search-form">
          <div className="input-container">
            <FontAwesomeIcon icon={faSearch} className="input-icon" />
            <input
              type="text"
              id="info-input"
              value={infoSearch}
              onChange={handleInfoSearchChange}
              placeholder="Search for information"
              className="search-input"
            />
          </div>
        </form>
      </div>
    </center>
  );
};

export default DualSearchBar;
