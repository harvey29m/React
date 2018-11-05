import React from 'react'
import MyList from '../containers/MyList'
import List from '../containers/List'
import Title from './Title'
import {removeAction,addAction} from '../action'

//get containers for lists
const LikeList=List('My','Remove','mylist',removeAction)
const Recomm=List('Recommendations','Add','recommendations',addAction)

const App=()=>{
    return(
      <React.Fragment>
        <Title/>
        <LikeList/>
        <Recomm/>
        <MyList/>
      </React.Fragment>
    ) 
}
export default App