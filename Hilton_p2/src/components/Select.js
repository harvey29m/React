import React, { Component } from 'react'
export default class Select extends Component {
  render() {
    const {details,onChange,index,rooms,Age,type,children,adults,style}=this.props
    const age=(type==='Children') ? children : adults
    const options=[]
    let disabled='',value
    for (var i=age.min;i<=age.max;i++){
        options.push(<option key={i} value={i}>{i}</option>)
    }
    if(details[index]==null)
        value=age.min
    else
        value=(type==='Children') ? details[index][1] : details[index][0]

    if(!rooms[index])
        disabled='disabled'
    return (
        <div className='select inner' style={style}>
            <div>{type}</div>
            <div>{Age}</div>
            <select disabled={disabled}
            value={value}
            onChange={(e)=>onChange(e.target.value,type,index)}>
                {options}
            </select>
        </div>
    )
  }
}



            


