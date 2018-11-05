import React from 'react'
import Logo from './Logo'

const Title=()=>{
    return (
      <div>
        <nav  className='fixed'>
          <Logo/>
          <ul className='clearFloat'>
            <li key='browse'>Browse</li>
            <li key='list'>My List</li>
            <li key='picks'>Top Picks</li>
            <li key='recent'>Recent</li>
            <input id='search-bar'placeholder='Search for a title...' ></input>
          </ul>
        </nav>
        <div className='firstRow'></div>
      </div>
    ) 
}
export default Title
