import {connect} from 'react-redux'
import MyList from '../components/MyList'

function mapStateToProps(state){
    return{
        data:state.mylist,
    }
}

export default connect(mapStateToProps,null)(MyList)