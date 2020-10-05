import React from 'react';
import Sidebar from '../components/Sidebar';
import Routes from './routes';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Routes />
    </div>
  );
};

export default App;
