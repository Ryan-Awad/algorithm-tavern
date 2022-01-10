import React, { Component } from 'react';
import Blog from './components/blog';
//import AdminLogin from './components/admin-login';
import Navbar from './components/navbar';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <Navbar />
        <Blog />
      </React.Fragment>
    );
  }
}
 
export default App;