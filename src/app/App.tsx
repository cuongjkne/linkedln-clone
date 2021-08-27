import { Switch, Route } from 'react-router';

//components
import Header from '../components/layout/Header/Header';
import Home from '../components/layout/Home/Home';

//styles
import Global from './styles/global.style';

function App() {
  return (
    <div className="App">
      <Global />
      <Switch>
        <Route exact path="/feed">
          <Header />
          <Home />
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
