import React from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Board from './components/Board';

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <TopBar />
        <Board />
      </div>
    </div>
  );
}
