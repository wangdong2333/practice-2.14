import React from 'react';
import logo from './logo.svg';
import './App.css';
// import React, { Component } from 'react';
import { 
  Row,
  Col,
  Menu,


} from 'antd';

import NavLeft from './component/NavLeft';
import Header from './component/Header';
import Home from './page/Home/index'


function App(props) {
  return (
    <div className="App">
      <Row>
          <Col span={4} className="navleft" >
            <NavLeft></NavLeft>
          </Col>
          <Col span={20}  >
            <Header></Header>
            {props.children}

          </Col>
      </Row>
     
    </div>
  );
}

export default App;
