import React from 'react';
// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';

import "./App.css";
import Footer from './component/Footer';
import Home from './component/Home'
import Blog from './component/Blog'
import Postlist from './component/Postlist' 
import Feedback from './component/Feedback' 
import {Route,BrowserRouter,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
<BrowserRouter>
  <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog"  component={Blog} />
        <Route path="/feedback"  component={Feedback} />
        <Route path="/:slug"  component={Postlist} />

  </Switch>
</BrowserRouter>
<Footer/>
    </div>
  );
}

export default App;
