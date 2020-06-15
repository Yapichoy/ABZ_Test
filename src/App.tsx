import React from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import TestAssigmentScreen from "./components/TestAssigmentScreen/TestAssigmentScreen";
import SecondSection from "./components/SecondSection/SecondSection";
function App() {
  return (
    <div className="App">
      <Header/>
      <TestAssigmentScreen/>
      <SecondSection/>
    </div>
  );
}

export default App;
