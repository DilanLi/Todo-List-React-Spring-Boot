import './App.css';
import Login from "./components/Login";
import Welcome from "./components/Welcome"
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route path="/" exact component={Login}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/welcome" exact component={Welcome}/>
        </>
      </Router>
    </div>
  );
}

export default App;
