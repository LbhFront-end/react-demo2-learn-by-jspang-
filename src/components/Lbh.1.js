import React from 'react'
export default class lbh1 extends React.Component {
    componentWillMount(){
        console.log(this.props);
    }
    render() {
        return (
            <div>
                默认页面B 参数1：{this.props.match.params.id} 参数2：{this.props.match.params.name}
            </div>
        )
    }
}