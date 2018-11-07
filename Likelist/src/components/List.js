//render list with different name
import React, {Component} from 'react'
import { PropTypes } from 'prop-types'

const List=({listName,actionName,data,onClick})=>{
            let list=data.map((item,index)=>{
                return (
                <li key={item.title}>
                    <img src={item.img} alt=''></img>
                    <div className='hidden'>
                        {item.title} 
                            <button onClick={()=>onClick(index)}>
                                {actionName}
                            </button>
                    </div>
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

List.propTypes={
    listName: PropTypes.string,
    actionName:PropTypes.string,
    data:PropTypes.array
}


export default List