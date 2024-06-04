import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/layout/Layout';
import MainPage from './pages/mainPage/MainPage';
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
// import GoogleLoginButton from './pages/login/GoogleLoginButton';
import LoginSuccess from './pages/login/LoginSuccess';
import LoginFailure from './pages/login/LoginFailure';
import { AuthProvider } from './components/auth/AuthContext';
import LoginPage from './pages/login/LoginPage';
import PrivateRoute from './components/auth/PrivateRoute';
function App() {
  return (
    <AuthProvider>
    <Router>
      <ScrollToTop/>
      <Layout>
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          {/* <Route path="/login" component={GoogleLoginButton}></Route> */}
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/loginSuccess" component={LoginSuccess} />
          <Route path="/loginFailure" component={LoginFailure} />
          <Route path="/search" component={SearchPage}></Route>
          <Route path="/find" component={ResultsPage}></Route>
          <PrivateRoute path="/info/:atcid" component={InfoPage}></PrivateRoute>


          <Route path="/lost-posts" exact component={LostPostsPage}></Route>

          <Route path="/found-posts" component={FoundPostsPage}></Route>

          <Route path="/posts" exact component={PostList}></Route>
          <Route path="/posts/:id" component={PostDetail}></Route>
          <Route path="/create" component={PostForm}></Route>
          <Route path="/edit/:id" component={PostForm}></Route>
        </Switch>
      </Layout>
    </Router>
    </AuthProvider>
  );
}

export default App;
