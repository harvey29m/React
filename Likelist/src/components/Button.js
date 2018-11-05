//render buttons with different name
import React from 'react'
import { PropTypes } from 'prop-types'

const Button=({actionName,index,onClick,title})=>{
            return(
                <div className='hidden'>
                    {title} 
                        <button onClick={()=>onClick(index)}>
                            {actionName}
                        </button>
                </div>
            )
}

Button.propTypes={
    actionName: PropTypes.string,
    index:PropTypes.number,
    onClick:PropTypes.func,
    title:PropTypes.string
}
export default Button