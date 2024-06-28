import React from 'react';
import './App.css';

import InventoryManagement from './InventoryManagement';

import UploadImage from './UploadImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Spring Boot Integration with React</h1>
      </header>
      <UploadImage />
      <InventoryManagement />
    </div>
  );
}

export default App;
