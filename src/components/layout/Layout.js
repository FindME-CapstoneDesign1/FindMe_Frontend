import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = (props) => {
  return (
    <div id="wrap">
      <Header/>
      <main>
        {props.children}
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
