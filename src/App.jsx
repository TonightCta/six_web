import React,{Component} from 'react';
// import State from './components/state'
// import IfDemo from './components/ifDemo'
// import RefDemo from './components/refDemo'
// import Parent from './components/convert/parent'

export default class App extends Component{
  change = () => {
    console.log(123)
  }
  render(){
    return (
      <div className="App">
        Hello
        {/*
          <State changeSometing = { this.change }/>
          <IfDemo/>
          <RefDemo/>
          <Parent>
            <p>我是slot插槽</p>
          </Parent>
        */}
      </div>
    )
  }
}
