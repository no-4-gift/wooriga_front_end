import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginConatainer from "./containers/LoginContainer";

import myChallengeDetailContainer from "./containers/myChallengeDetailContainer";

import ChosensLayout from "./containers/ChosensContainer";
import "antd/dist/antd.css";

import Invite from "./components/Invite";
import MakeGroup from "./components/MakeGroup";
import ChallengeAddContainer from "./containers/ChallengeAddContainer";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ChosensLayout} exact />
      <Route path="/login" component={LoginConatainer} />
      <Route path="/challenge_regist" component={ChallengeAddContainer} />
      <Route
        path="/mychallenge_detail"
        component={myChallengeDetailContainer}
      />

      <Route path="/makegroup" component={MakeGroup} />
      <Route path="/invite" component={Invite} />

      {/*<Route path="/" component={Calendar} /> */}
    </BrowserRouter>
  );
}

export default App;
