import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/mainPage/MainPage';
import LoginPage from './pages/LoginPage';
import InfoPage from './pages/info/InfoPage';
import './styles/style.css';  // 스타일 파일 임포트
import SearchPage from './pages/search/SearchPage';
import ResultsPage from './pages/result/ResultsPage';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import PostDetail from './pages/post/PostDetail';
import PostForm from './pages/post/PostForm';
import PostList from './pages/post/PostList';
import LostPostsPage from './pages/post/lost/LostPostsPage';
import FoundPostsPage from './pages/post/found/FoundPostsPage';

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/search" component={SearchPage}></Route>
          <Route path="/find" component={ResultsPage}></Route>
          <Route path="/info/:atcid" component={InfoPage}></Route>


          <Route path="/lost-posts" exact component={LostPostsPage}></Route>

          <Route path="/found-posts" component={FoundPostsPage}></Route>

          <Route path="/posts" exact component={PostList}></Route>
          <Route path="/posts/:id" component={PostDetail}></Route>
          <Route path="/create" component={PostForm}></Route>
          <Route path="/edit/:id" component={PostForm}></Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
