import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './component/MainPage';
import TestPage from './component/TestPage';
import Find from './component/Find'
import Login from './component/Login';
import Search from './component/Search';
import SearchWithDateApi from './component/SearchWithDateApi';
import SearchWithPlaceApi from './component/SearchWithPlaceApi';
import SearchWithDate from './component/SearchWithDate';
import SearchWithPlace from './component/SearchWithPlace';
import SearchSelect from './component/SearchSelect';
import SearchInfoApi from './component/SearchInfoApi';

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
          <Route path="/search-with-date">
            <SearchWithDate/>
          </Route>
          <Route path="/search-with-place">
            <SearchWithPlace/>
          </Route>
          <Route path="/api-with-date">
            <SearchWithDateApi/>
          </Route>
          <Route path="/api-with-place">
            <SearchWithPlaceApi/>
          </Route>
          <Route path="/search-select">
            <SearchSelect/>
          </Route>
          <Route path="/api-info">
            <SearchInfoApi/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
