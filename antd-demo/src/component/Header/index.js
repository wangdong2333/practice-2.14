import React, { Component } from 'react'
import {Row} from 'antd'
import "./index.css"
export default class index extends Component {
    render() {
        return (
            <div>
                <Row  className="header-top">
                    <span>欢迎您</span>
                    <a href="#">退出</a>
                </Row>
                <Row>
                    
                </Row>
            </div>
        )
    }
}
