import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CalenderContainer from "./containers/CalenderContainer";
import myChallengeContainer from './containers/myChallengeContainer';
import myChallengeDetailContainer from './containers/myChallengeDetailContainer'
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/counter" component={src}/> */}
      <Route exact path="/" component={CalenderContainer} />
      <Route path="/mychallenge" component={myChallengeContainer}/>
      <Route path="/mychallenge_detail" component={myChallengeDetailContainer}/>
    
    </BrowserRouter>
  );
}

export default App;
