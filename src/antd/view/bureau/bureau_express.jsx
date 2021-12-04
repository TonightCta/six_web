// 情报速递
import React,{ Component } from 'react';
export default class BureauExpress extends Component{
    // constructor(){
    //     super()
    // };
    componentDidMount(){
        console.log(this.state);
    }
    render(){
        return(
            <div className="public-bureau">
                <p>情报速递</p>
            </div>
        )
    }
};