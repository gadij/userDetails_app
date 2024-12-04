import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import MainPage from './Pages/MainPage/MainPage';
import './App.css';

const DetailsPage = lazy(() => import('./Pages/DetailsPage'));  

const App = () => {  
  return (  
    <Router>  
      <Routes>  
        <Route path="/" element={<MainPage />} />  
        <Route  
          path="/users/:id"  
          element={  
            <Suspense fallback={<div>Loading user details...</div>}>  
              <DetailsPage />  
            </Suspense>  
          }  
        /> 
      </Routes>  
    </Router>  
  );  
};  


export default App;
