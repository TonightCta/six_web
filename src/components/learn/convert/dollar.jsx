import React,{Component} from 'react';

export default class Dollar extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return(
      <div>
        美元:{(this.props.price / 6.5).toFixed(2)}
      </div>
    )
  }
}
