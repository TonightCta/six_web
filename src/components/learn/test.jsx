import React from 'react'

export default class Test extends React.Component{
  render(){
    console.log(this.props.nav)
    return (
      <ul>
        {
          this.props.nav.map((element,index) => {
            return (
              <li key={index}>
                <span>{element}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
