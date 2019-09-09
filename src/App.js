import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Test from "./containers/Test";
function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/counter" component={src}/> */}
      <Route path="/" component={Test} />
    </BrowserRouter>
  );
}

export default App;
