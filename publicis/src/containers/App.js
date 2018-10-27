import App from '../components/App'
import {connect} from 'react-redux'
import {setData,sortData} from '../actions'

function mapDispatchToProps(dispatch){
    return{
        setData:(data,keys,isNum,sum)=>dispatch(setData(data,keys,isNum,sum)),
        sortData:(header)=>dispatch(sortData(header))
    }
}

function mapStateToProps(state){
    return{
        data:state.data,
        keys:state.keys,
        isNum:state.isNum,
        sum:state.sum
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)