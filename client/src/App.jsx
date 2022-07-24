import React from 'react';
import {Routes, Route} from 'react-router-dom';	
import IndexPage from './pages/IndexPage';
import SecondPage from './pages/SecondPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/second" element={<SecondPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    
  );
}

export default App;