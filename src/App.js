import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CalenderContainer from "./containers/CalenderContainer";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/counter" component={src}/> */}
      <Route path="/" component={CalenderContainer} />
    </BrowserRouter>
  );
}

export default App;
