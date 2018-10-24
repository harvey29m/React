import React, { Component } from 'react'
import Select from './Select'
const bg1={
  backgroundColor:'lightgrey'
}
const bg2={
  backgroundColor:'white'
}
export default class Room extends Component {
  render() {
    let checkbox,style=bg2;
    let checked=''
    const {index,onCheck,rooms}=this.props
    if(!index==0){
      if(rooms[index]){
        checked='checked'
        style=bg2
      }else{
        style=bg1
      }
      checkbox=<input onChange={()=>onCheck(index)} type='checkbox' checked={checked} ></input>
    }

    return (
      <div>
        <div className='clearFloat'>
            <div className='inner'>
                {checkbox}
                {this.props.name}   
            </div>
            <Select type={'Adults'} {...this.props} Age={"(18+)"} style={style}/>
            <Select type={'Children'} {...this.props} Age={"(0-17)"} style={style}/>
        </div>
      </div>
    )
  }
}
