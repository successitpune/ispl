import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ component: Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    let SuperLogin = localStorage.getItem('SuperLogin');
    if (!SuperLogin) {
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
