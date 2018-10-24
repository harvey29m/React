import App from '../components/App'
import {connect} from 'react-redux'
import {submitAction} from '../actions'

function mapDispatchToProps(dispatch){
    return{
        onSubmit:()=>dispatch(submitAction()),
        
    }
}
export default connect(null,mapDispatchToProps)(App)