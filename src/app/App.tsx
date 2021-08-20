import { Switch, Route } from 'react-router';

//styles
import Global from './styles/global.style';
//components
import Header from '../common/layouts/Header/Header';

function App() {
  return (
    <div className="App">
      <Global />
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
