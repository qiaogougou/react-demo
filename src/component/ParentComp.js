import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Vishwas'
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Vishwas 111'
            })
        }, 5000)
    }

    render() {
        console.log("************ Parent Component *************")
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp