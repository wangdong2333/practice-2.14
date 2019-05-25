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



function App() {
  return (
    <div className="App">
      <Row>
          <Col span={4} className="navleft" >
            <NavLeft></NavLeft>
          </Col>
          <Col span={20}  >
            <Header></Header>
          </Col>
      </Row>
     
    </div>
  );
}

export default App;
