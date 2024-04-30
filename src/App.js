import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import MainPage from './component/MainPage';
import TestPage from './component/TestPage';
import Find from './component/lostFound/Find'
import Login from './component/Login';
import SearchWithDateApi from './component/getLostGoods/SearchWithDateApi';
import SearchWithPlaceApi from './component/getLostGoods/SearchWithPlaceApi';
import SearchWithDate from './component/getLostGoods/SearchWithDate';
import SearchWithPlace from './component/getLostGoods/SearchWithPlace';
import SearchSelect from './component/getLostGoods/SearchSelect';
import SearchInfoApi from './component/getLostGoods/SearchInfoApi';
import FindWithDate from './component/lostFound/FindWithDate';
import FindWithDateApi from './component/lostFound/FindWithDateApi';
import FindSelect from './component/lostFound/FindSelect';
import FindWithPlace from './component/lostFound/FindWithPlace';
import FindWithPlaceApi from './component/lostFound/FindWithPlaceApi';

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
          <Route path="/find-with-date">
            <FindWithDate/>
          </Route>
          <Route path="/api-find-with-date">
            <FindWithDateApi/>
          </Route>
          <Route path="/find-select">
            <FindSelect/>
          </Route>
          <Route path="/api-find-with-place">
            <FindWithPlaceApi/>
          </Route>
          <Route path="/find-with-place">
            <FindWithPlace/>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
