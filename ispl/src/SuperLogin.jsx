// import React, { useState } from 'react';

// const SuperLogin = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!username || !password) {
//       setError('Username and password are required.');
//       return;
//     }

//     // Mock authentication
//     if (username === 'admin' && password === 'admin') {
//       // Successful login
//       alert('Logged in successfully!');
//       setUsername('');
//       setPassword('');
//       setError('');
//     } else {
//       // Failed login
//       setError('Invalid username or password.');
//     }
//   };

//   return (

//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
//       <form onSubmit={handleLogin} style={{ width: '300px', padding: '20px', backgroundColor: '#f0f0f0', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
//         {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
//         <div style={{ marginBottom: '10px' }}>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ width: '100%', padding: '8px', fontSize: '16px', borderRadius: '4px', border: '1px solid #ccc' }}
//           />
//         </div>
//         <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4caf50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SuperLogin;
