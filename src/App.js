import './App.css';
import Newnavbar from './Components/Newnavbar';
import { Routes, Route } from 'react-router-dom';
import List from './Components/List';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import DualSearchBar from './Searchbar/DualSearchBar';
import Card from './Cards/Card';
import Admin from './Admin/Admin';
import SuperAdmin from './Admin/SuperAdmin';
import SuperLogin from './SuperLogin';
import Protected from './Protected';

function App() {
  return (
    <Routes>
       <Route path="/Admin" element={< Protected component={Admin} />} />
       <Route path="/Superadmin" element={<Protected component={SuperAdmin} />} />
       <Route path="/SuperLogin" element={<SuperLogin />} />
      <Route path="*"
        element={
          <>
            <Newnavbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/List" element={<List />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
            <DualSearchBar />
            <Card />
          </>
        }
      />
    </Routes>
  );
}

export default App;
