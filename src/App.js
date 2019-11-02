import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CalenderContainer from "./containers/CalenderContainer";
import ChallengeAddContainer from "./containers/CallengeAddContainer";
import LoginConatainer from "./containers/LoginContainer";

import myChallengeContainer from "./containers/myChallengeContainer";
import myChallengeDetailContainer from "./containers/myChallengeDetailContainer";

import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/counter" component={src}/> */}

      <Route path="/" component={CalenderContainer} exact />
      <Route path="/login" component={LoginConatainer} />
      <Route path="/challenge_regist" component={ChallengeAddContainer} />

      <Route path="/mychallenge" component={myChallengeContainer} />
      <Route
        path="/mychallenge_detail"
        component={myChallengeDetailContainer}
      />

      {/*<Route path="/" component={Calendar} /> */}
    </BrowserRouter>
  );
}

export default App;
