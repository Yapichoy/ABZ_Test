import React from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import TestAssigmentScreen from "./components/TestAssigmentScreen/TestAssigmentScreen";
function App() {
  return (
    <div className="App">
      <Header/>
      <TestAssigmentScreen/>
    </div>
  );
}

export default App;
