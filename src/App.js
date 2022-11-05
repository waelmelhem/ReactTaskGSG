import "bootstrap";
import "bootstrap/scss/bootstrap.scss"
import React from 'react';
import Form  from "./Component/Form"
import './App.css';
class App extends  React.Component{

  render(){
    return(<div className="App">
      <Form/>
      {/* <Post/> */}
    </div>);

  }
}

export default App;
