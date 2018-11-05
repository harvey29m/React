//render list with different name
import React, {Component} from 'react'
import Button from './Button'
import { PropTypes } from 'prop-types'

const List=(listName,actionName)=>{
    return class extends Component{
          render() {
            let {data}=this.props
            let list=data.map((item,index)=>{
                return (
                <li key={item.title}>
                    <img src={item.img} alt=''></img>
                    <Button actionName={actionName} onClick={this.props.onClick} index={index} title={item.title}/>
                </li>
                )
                
            })
            return (
              <div className='clearFloat content'>
                <h3>{listName} List</h3>
                <ul className='list'>
                    {list}
                </ul>
              </div>
            )
          }
    }
}

List.propTypes={
    listName: PropTypes.string,
    actionName:PropTypes.string,
    data:PropTypes.array
}


export default List