import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <div>
          home
          <button onClick={() =>{
              this.props.history.push('/b')
          }}>跳转到B</button>
      </div>
    )
  }
}
