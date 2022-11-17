import React from 'react';
import './App.css';

import Navbar from './Navbar/Navbar';
import Bio from './Bio/Bio';
import Info from './Info/Info';
import Project from './Project/Project';

function App() {
  return (
    <div className='app d-flex'>
      <div className='konten'>
        <Info />
        <Project />
        <Bio />
      </div>
      <div className='navigasi'>
        <Navbar />
      </div>
    </div>
  );
}

export default App;