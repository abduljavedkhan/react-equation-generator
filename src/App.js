import { Route, Switch } from "react-router-dom";

import "./App.css";
import Home from "./Page/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
