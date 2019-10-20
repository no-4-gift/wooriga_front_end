import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import CalenderContainer from "./containers/CalenderContainer";
import ChallengeRegist from "./components/ChallengeRegist";
import LoginConatainer from "./containers/LoginContainer";
import "antd/dist/antd.css";

function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/counter" component={src}/> */}

      <Route path="/" component={CalenderContainer} exact />
      <Route path="/login" component={LoginConatainer} />
      <Route path="/challenge_regist" component={ChallengeRegist} />
      {/*<Route path="/" component={Calendar} /> */}
    </BrowserRouter>
  );
}

export default App;
