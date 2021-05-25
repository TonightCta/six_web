import React,{Component} from 'react';

export default class RefDemo extends Component{
  constructor(){
    super();
    this.inpRef = React.createRef();
    this.state = {
      name:''
    }
  }
  changeName = (e) => {
    this.setState({
      name:e.target.value
    })
  }

  lookRef = () => {
    console.log(this.inpRef.current.value)
  }

  render(){
    const { name } = this.state;
    return(
      <div>
        <p>
          state管理
          <input type="text" value = { name } onChange = { this.changeName }/>
          <input type="text" value = { name } readOnly = { true } />
        </p>
        <p>
          ref管理
          <input type="text" ref = { this.inpRef }/>
          <button onClick = { this.lookRef }>查看</button>
        </p>
      </div>
    )
  }
}
