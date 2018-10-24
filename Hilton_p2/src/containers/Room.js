import Room from '../components/Room'
import {connect} from 'react-redux'
import {checkAction,selectAction} from '../actions'

function mapStateToProps(state){
    return{
        rooms:state.rooms,
        adults:state.adults,
        children:state.children,
        details:state.details
    }
}

function mapDispatchToProps(dispatch){
    return{
        onCheck:(index)=>dispatch(checkAction(index)),
        onChange:(value,age,index)=>dispatch(selectAction(value,age,index)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Room)