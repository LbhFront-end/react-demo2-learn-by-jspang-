import React from 'react'
import {Prompt} from 'react-router-dom'
export default class lbh2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {show:false}
        this.changeTip = this.changeTip.bind(this);
    }
    changeTip(){
        alert('开启提示');
        this.setState({show:true});
    }
    render() {
        return (
            <div>
                <Prompt message = "残忍离开？" when ={this.state.show}/>
                默认页面C
                <button onClick = {this.changeTip}>开启提示</button>
            </div>
        )
    }
}