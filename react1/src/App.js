import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom'
import A from "./components/A"
import B from "./components/B"
import Home from "./components/Home"
import Children from "./components/Chiidren"



function App() {
  return (
    <div className="App">
        <div>HAHA</div>
        <Router>
        <Link to="/">首页</Link>
        ..........
        <Link to="/a/5">A页面</Link>
        ..........
        <Link to="/b">B页面</Link>
        .........
        <Link to="/d">D页面</Link>
        .....

        <Link to="/children">children页面</Link>

        
        {/* <Route exact path="/" component={Home}></Route>
        <Route path="/a" component={A}></Route>
        <Route path="/b" component={B}></Route> */}

        {/* <Switch>
          <Route path="/a/:id" component={A}></Route>
          <Route path="/b" component={B}></Route>
          <Route path="/d" render={() =>{
            return <h1>render出来的页面</h1>
          }}></Route>

          <Route path="/" component={Home}></Route>
          
        </Switch> */}
          <Route exact path="/" component={Home}></Route>

          <Route exact path="/a/:id" component={A}></Route>
          <Route exact path="/b" component={B}></Route>
          <Route exact path="/d" render={() =>{
            return <h1>render出来的页面</h1>
          }}></Route>
          <Route path="/children" children={(props) =>{
            console.log(props.match)
            return <h1>children</h1>            
          }}></Route>



        </Router>
    </div>
  );
}

export default App;
