import './App.css';
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import UrlError from "./components/UrlError";
import TodoList from "./components/TodoList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/welcome/:name" exact component={Welcome}/>
          <Route path="/todos" exact component={TodoList}/>
          <Route component={UrlError}/>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
