import React, { Component } from 'react'

export default class B extends Component {
  render() {
    return (
      <div>
        BBBB
        <button onClick={() =>{
            this.props.history.goBack()
        }}>返回上一页</button>
      </div>
    )
  }
}
