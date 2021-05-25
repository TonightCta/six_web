import React,{Component} from 'react';
export default class State extends Component{
  constructor(props){
    super(props);
    this.state = {
      count:10
    }
  }

  up = () => {
    let num = this.state.count
    if(num === 15){
      alert('最多15哦')
    }else{
      this.setState({
        count:num += 1
      })
    }
  }

  down = () => {
    let num = this.state.count
    if(num === 5){
      alert('最少5哦')
    }else{
      this.setState({
        count:num -= 1
      })
    }
  }

  // 组件渲染之前
  componentWillMount(){
    console.log('1--------------->组件渲染之前')
  }
  //组件渲染之后
  componentDidMount(){
    console.log('2--------------->组件渲染之后')
  }

  shouldComponentUpdate(){
    return true;
    console.log('3--------------->返回true或者false，true代表允许改变，false代表不允许改变')
  }

  componentWillUpdate(){
    console.log('4--------------->数据发生改变之前执行(state,props)')
  }

  componentDidUpdate(){
    console.log('5--------------->数据发生改变之后执行(state,props)')
  }

  componentWillReveiceProps(){
    console.log('6--------------->props发生改变时执行')
  }

  componentWillUnmount(){
    console.log('6--------------->组件卸载之前执行')
  }

  changePre = () => {
    this.props.changeSometing()
  }

  render(){
    const {count} = this.state
    return (
      <div>
        <p>{count}</p>
        <button onClick={this.up.bind(this)}>增加</button>
        <button onClick={this.down.bind(this)}>减少</button>
        <button onClick= { this.changePre }></button>
      </div>
    )
  }
}
