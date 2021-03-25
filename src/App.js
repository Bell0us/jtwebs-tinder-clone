import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return ( 
    <div className="App" >
      {/* Header */}
      <Header title="JTinder" />

      <Router>
        <Switch>        
          <Route exact path="/">    
            {/* Cards */}
            <TinderCards />
            {/* Controls */}
          </Route>
          <Route path="/history">
            {/* Like / Dislike history "page" */}
            <h1>History page</h1>
          </Route>        
        </Switch>
      </Router>
    </div>
  );
}

export default App;