/**
 * Created by satuk on 20.07.17.
 */
import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout = (props) => {
  return (
    <div>
      <Header/>
      { props.children }
      <Footer/>
    </div>
  );
};

export default Layout;
