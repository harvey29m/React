import React from 'react'
import { PropTypes } from 'prop-types'

const MyList=props=> {
    let {data}=props 
    return (
    <div className='content clearFloat'>
        <h4>My List</h4>
        <ul id='mylist'>
            {data.map((item)=>{
                return <li key={item.title}>{item.title}</li>
            })}
        </ul>
    </div>
      
    )
}

MyList.propTypes={
    props: PropTypes.object,
}

export default MyList