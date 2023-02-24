import './App.css';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import { AuthContextProvider } from './Components/Context/AuthContext';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
      <div>
        <Router>
          <div className='nav'>
            <Navbar/>
          </div>
          <AuthContextProvider>
            <Routes>
              <Route path="/" element={ <SignUp /> }/>
              <Route path="/login" element={ <Login /> }/>
              <Route path="/account" exact element={<ProtectedRoute><Homepage /></ProtectedRoute>} />
            </Routes>
          </AuthContextProvider>
          <div className="footer">
            <Footer/>
          </div>
        </Router>

      </div>
  );
}

export default App;
