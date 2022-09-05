import React, { Component } from "react"
import ReactDOM from "react-dom"
import "./index.css"

class App extends Component{

  constructor(props){
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }
  alterarcopo = () => {
    this.setState({
      copo:'refrigerante gelado'
    })
   
  }
  render() {
    const {clock, copo} = this.state
    return(
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarcopo()}>{copo}</button>
      </div>
    )
  }
}


const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

