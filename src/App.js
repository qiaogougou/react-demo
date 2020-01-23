import React, { Component } from "react";
import "./App.css";
import TestLifeCycle16 from './TestLifeCycle16'
import TestLifeCycle17 from './TestLifeCycle17'
import PropTypes from 'prop-types'

class Title extends Component {
  static propTypes = {
    title: PropTypes.string
  }
  static defaultProps = {
    title: "这是 defaultProps 加载的标题" // 会覆盖App中的title值
  }
  render(){
    return (
      <div>{this.props.title}</div>
    )
  }
}
// Title.defaultProps = {
//   title: "ES5 的 defaultProps 写法"
// }

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRenderTest: true
    }
  }

  render() {
    return (
      <div className="App">
        {/* <Title title="这是标题"></Title> */}
        <Title title={5}></Title>
        {/* {this.state.isRenderTest ? <TestLifeCycle16></TestLifeCycle16> : "不渲染Test LifeCycle 16"} */}
        {this.state.isRenderTest ? <TestLifeCycle17></TestLifeCycle17> : "不渲染Test LifeCycle 17"}
        <br/><br/>
        <p>App test</p>
        <button type="button" onClick={()=>this.setState({})}>Parent set state update</button>
        <button type="button" onClick={()=>{
          this.setState({
            isRenderTest: !this.state.isRenderTest
          })
        }}>Render button</button>
        
      </div>
    );
  }
}

export default App;
