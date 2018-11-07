import React, {Component} from 'react'
import Title from '../components/Title'
import {removeAction,addAction} from '../action'
import {connect} from 'react-redux'
import {getAllMovies} from '../action'
import List from '../components/List'


class App extends Component{
    componentDidMount(){
        const {getData}=this.props
        getData()
    }
    render(){
        const {mylist,recommendations,onRemove,onAdd}=this.props
        return(
        <React.Fragment>
            <Title/>
            <List listName='My' actionName='Remove' data={mylist} onClick={onRemove}/>
            <List listName='Recommendations' actionName='Add' data={recommendations} onClick={onAdd}/>
            {
                <div className='content clearFloat'>
                    <h4>My List</h4>
                    <ul id='mylist'>
                        {mylist.map((item)=>{
                            return <li key={item.title}>{item.title}</li>
                        })}
                    </ul>
                </div>
            }
        </React.Fragment>
        )
    }
}

function mapStateToProps({mylist,recommendations}){
    return{
        mylist,
        recommendations,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        onRemove:(index)=>dispatch(removeAction(index)),
        onAdd:(index)=>dispatch(addAction(index)),
        getData:()=>dispatch(getAllMovies())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)