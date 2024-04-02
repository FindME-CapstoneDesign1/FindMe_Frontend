import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './component/MainPage';
import TestPage from './component/TestPage';
import Find from './component/Find'
import Login from './component/Login';
import Search from './component/Search';
import ApiTest from './component/ApiTest';
import Lost from './component/Lost';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/test">
            <TestPage />
          </Route>
          <Route path="/find">
            <Find />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/lost">
            <Lost/>
          </Route>
          <Route path="/api/test">
            <ApiTest/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
