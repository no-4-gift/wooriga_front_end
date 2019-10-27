import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CalenderContainer from "./containers/CalenderContainer";
import ChallengeRegist from "./components/ChallengeRegist";
import LoginConatainer from "./containers/LoginContainer";
import Invite from "./components/Invite";
import MakeGroup from "./components/MakeGroup";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/counter" component={src}/> */}

      <Route path="/" component={CalenderContainer} exact />
      <Route path="/login" component={LoginConatainer} />
      <Route path="/challenge_regist" component={ChallengeRegist} />
      <Route path="/makegroup" component={MakeGroup} />
      <Route path="/invite" component={Invite} />
      {/*<Route path="/" component={Calendar} /> */}
    </BrowserRouter>
  );
}

export default App;
