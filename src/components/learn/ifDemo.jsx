import React,{Component} from 'react'

export default class IfDemo extends Component{
  constructor(){
    super()
    this.state = {
      names:['iwen','ime']
    }
  }
  render(){
    const { names } = this.state;
    return(
      <div>
        {
          names.length > 0 ?
            <ul>
              {
                  names.map((element,index) => {
                    return(
                      <li key={ index }>{element}</li>
                    )
                  })
              }
            </ul>
            :
            <p>数据加载中...</p>
        }
      </div>
    )
  }
}
