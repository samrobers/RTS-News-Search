import Main from "./pages/Main";
import Search from "./pages/Search";
import History from "./components/History";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/history" component={History} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
