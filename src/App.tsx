import React from 'react';
import './index.scss';
import Header from "./components/Header/Header";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import Users from "./components/UsersSetion/Users";

function App() {
  return (
    <div className="App">
      <Header/>
      <FirstSection/>
      <SecondSection/>
      <Users/>
    </div>
  );
}

export default App;
