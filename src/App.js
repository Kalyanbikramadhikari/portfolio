
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import ResumeDocument from './resumePdf/Document';
import Home from './Home';

function App() {
 
  return (

    <Router>
      < Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<ResumeDocument />} />
        




      </Routes>

    </Router>

  );
}

export default App;



