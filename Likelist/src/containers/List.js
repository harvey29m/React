import {connect} from 'react-redux'
import list from '../components/List'
import { PropTypes } from 'prop-types'
//container for lists

const List=(listName,actionName,dataName,action)=>{
    const List=list(listName,actionName);
    function mapStateToProps(state){
        return{
            data:state[dataName]
        }
    }
    function mapDispatchToProps(dispatch) {
        return{
            onClick:(index)=>dispatch(action(index)),
        }
    }

    return connect(mapStateToProps,mapDispatchToProps)(List)
}

List.propTypes={
    listName: PropTypes.string,
    actionName:PropTypes.string,
    datdataNamea:PropTypes.string,
    action:PropTypes.func
}
export default List

