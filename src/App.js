import React from "react";
import Header from "./components/Header";
import SiteBar from "./components/SiteBar";
import Content from "./components/Content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Content>
        <SiteBar></SiteBar>
      </Content>
    </div>
  );
}

export default App;
