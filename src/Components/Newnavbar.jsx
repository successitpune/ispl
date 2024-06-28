import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Newnavbar = () => {
  return (
    <nav>
      <img src="/ISPL.png" alt="" />
      
      <p id='service'>Services</p>
      <ul>
     
        <li>
          <Link to="/List">
             <div>
            <select name="list" id="list">
              <option className='multi' value="Ac"></option>
              <option className='multi' value="Ac">AC</option>
              <option className='multi' value="Ac">T.V</option>
              <option className='multi' value="Ac">CCTV Repairing</option>
              <option className='multi' value="Ac">Mobile Repairing</option>
         
            </select>
          </div>
          </Link>
        </li>
        <li>
          <Link to="/Login">   
              <button className='login'>
            login </button></Link>
        </li>
        <li>
          <Link to="/Signup"><button className='login'>Signup</button></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Newnavbar;
