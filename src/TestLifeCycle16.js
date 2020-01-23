import React, { Component } from 'react'

export default class TestLifeCycle16 extends Component {
    constructor(props){
        super(props)
        console.log('constructor')
        this.state = {
            time: new Date()
        }
    }

    tick(){
        this.setState({
            time: new Date()
        })
    }

    ///////////////// initial loading life cycle
    UNSAFE_componentWillMount(){
        console.log('UNSAFE component will mount')
        this.timeId = setInterval(()=>{this.tick()}, 1000)
        // ajax 调用的位置
    }

    componentDidMount(){
        console.log('component did mount')
    }


    //////////////// update life cycle
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('UNSAFE component will receive props - nextProps 用来更新state，达到同步的效果')
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('component should update - nextProps nextState 组件将要接受的下一个参数；')
        if(nextState.time.getSeconds() % 2 != 0){
            return false
        }
        return true
    }
    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.log('UNSAFE component will update')
    }
    
    componentDidUpdate(prevProps, prevState, info){
        console.log('component did update')
    }

    //////////////////// unload  
    componentWillUnmount(){
        console.log('component will unmount unload, no render')
        clearInterval(this.timeId)
    }


    render(){
        console.log("render")
        return(
        <div style={{border: "solid black 1px"}}>
            <p>Test Life Cycle 16
                组件有两种更新方式 setState 和 forceUpdate<br></br>
                组件会随着父组件的更新而更新，父组件setState，子组件会跟着更新
            </p>
            <p>{ this.state.time.getSeconds()  }</p>
            <button type="button" onClick={()=>this.setState({})}>child set State</button>

            <button type="button" onClick={()=>this.forceUpdate()}>child force State</button>
        </div>
        )
    }
}