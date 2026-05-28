import './App.css' 
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import GoogleLogin from './GoogleLogin'
import Dashboard from './Dashboard' 
import { useState } from 'react'
import PageNotFound from './PageNotFound' 
import { GoogleOAuthProvider } from '@react-oauth/google'
import RefreshHandler from './RefreshHandler'

function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(false);
  
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="313899923803-cc5phbg2kmkngi59sbj9t1m2bo14jlf5.apps.googleusercontent.com">
        <GoogleLogin />
      </GoogleOAuthProvider>
    );
  } 

  const PrivateRoute = ({element}) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  }

  return (
    <BrowserRouter>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper/>} /> 
        <Route path='/' element={<Navigate to="/login" />} /> 
        <Route path='/dashboard' element={<PrivateRoute element={<Dashboard/>} />} /> 
        <Route path='*' element={<PageNotFound/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
