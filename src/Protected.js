import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ component: Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    let isAuthenticated = localStorage.getItem('SuperLogin');
    if (!isAuthenticated) {
      navigate('/SuperLogin'); // Redirect to SuperLogin if not authenticated
    }
  }, [navigate]);

  return (
    <div>
      <Component />
    </div>
  );
};

export default Protected;
