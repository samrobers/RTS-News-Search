import Main from "./pages/Main";
import Search from "./pages/Search";
import History from "./pages/History";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./store/Store";

function App() {
  return (
    <StoreProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/history" component={History} />
        </Switch>
      </Router>
    </StoreProvider>
  );
}

export default App;
