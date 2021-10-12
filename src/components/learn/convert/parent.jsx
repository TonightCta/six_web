import React,{Component} from 'react';
import Rmb from './rmb'
import Dollar from './dollar'

class Parent extends Component{
  constructor(){
    super();
    this.state = {
      price:0,
    }
  }
  inpVal = (e) => {
    this.setState({
      price:e.target.value
    })
  }

  render(){
    const { price } = this.state;
    return(
      <div>
        <input type="number" value = { price } onChange = { this.inpVal } />
        <Rmb price = { price } />
        <Dollar price = { price }/>
        <p>{ this.props.children }</p>
      </div>
    )
  }
}

export default Parent;
