import React from "react";
import '../styles/App.css';
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  render(){
    return (
        <>
          <Header />
          <Main />
        </>
    );
  }
}

export default App;
