import React, { Component } from 'react'

export default class TestLifeCycle17 extends Component {
    constructor(props){
        super(props)
        console.log("constructor")
        this.state = {
            isRender: true,
            time: new Date()
        }
        this.timeId = setInterval(()=>this.tick(), 1000)
    }
    
    tick(){
        this.setState({
            time: new Date()
        })
    }
    static getDerivedStateFromProps(nextProps, prevState){
        console.log("get derived state from props 函数返回结果将会被添加到state上, return null state 不需要任何改变")
        return {
            like: true
        }
    }
    componentDidMount(){
        console.log("component did mount")
    }
    shouldComponentUpdate(){
        console.log("should component update")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("get snap shot befor update")
        // 该方法在实际改动（比如 DOM 更新）发生前的“瞬间”被调用，返回值将作为 `componentDidUpdate` 的第三个参数
        // 配合 `componentDidUpdate` 使用，这一方法可以取代 `componentWillUpdate`
        return "from snapshot before update 返回值会传到 componentDidUpdate 中的 info 中"
    }
    componentDidUpdate(prevProps, prevState, info){
        console.log("component did update")
        console.log(info)
    }
    componentWillUnmount(){
        console.log("component will unmount")
        clearInterval(this.timeId)
    }

    render(){
        console.log('render', this.state)
        return (
            <div>
                <p>render中，虚拟dom 会 update 真正dom HTML</p>
                Test Life Cycle 17
                <button type="button" onClick={()=>this.setState({})}>setState</button>
                {this.state.time.getSeconds()}
            </div>
        )
    }
}