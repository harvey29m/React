const iniState={
    'mylist' :[],
    'recommendations' :[]
}
export default function rootReducer(state=iniState,action){
    switch(action.type){
        case 'RECEIVE':
            return action.movies

        case 'REMOVE':
            let mylist=[...state.mylist]
            let recommendations=[...state.recommendations,...mylist.splice(action.index,1)]
            return {recommendations,mylist}

        case 'ADD':
            recommendations=[...state.recommendations]
            mylist=[...state.mylist,...recommendations.splice(action.index,1)]
            return {recommendations,mylist}

        default: return state;
    }
}
