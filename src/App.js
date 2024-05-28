import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/mainPage/MainPage';
import LoginPage from './pages/LoginPage';
import InfoPage from './pages/info/InfoPage';
import './styles/style.css';  // 스타일 파일 임포트
import SearchPage from './pages/search/SearchPage';
import ResultsPage from './pages/result/ResultsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/find" component={ResultsPage} />
          <Route path="/info/:atcid" component={InfoPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
