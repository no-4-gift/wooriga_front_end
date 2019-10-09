import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CalenderContainer from "./containers/CalenderContainer";
import "antd/dist/antd.css";
import Calendar from "./components/Calendar";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/counter" component={src}/> */}

      <Route path="/" component={CalenderContainer} />
      {/*<Route path="/" component={Calendar} /> */}
    </BrowserRouter>
  );
}

export default App;
