import { Switch, Route } from 'react-router';
import './App.css';

//components
import Header from '../common/layout/Header';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/feed">
          <Header />
          {/* <Home /> */}
        </Route>
        <Route exact path="/mynetwork">
          <Header />
          {/* <MyNetwork /> */}
        </Route>
        <Route exact path="/jobs">
          <Header />
          {/* <Jobs /> */}
        </Route>
        <Route exact path="/messaging">
          <Header />
          {/* <Messaging /> */}
        </Route>
        <Route exact path="/notifications">
          <Header />
          {/* <Notifications /> */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
