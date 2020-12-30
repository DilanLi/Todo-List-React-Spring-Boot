import './App.css';
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import UrlError from "./components/UrlError";
import TodoList from "./components/TodoList";
import NavBar from "./components/NavBar";
import Logout from "./components/Logout";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <NavBar/>
          <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/login" exact component={Login}/>
          <AuthenticatedRoutes path="/welcome/:name" exact component={Welcome}/>
          <AuthenticatedRoutes path="/todos" exact component={TodoList}/>
          <AuthenticatedRoutes path="/logout" exact component={Logout}/>
          <Route component={UrlError}/>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
