

const iniState={
    adults:{min:1,max:2},
    children:{min:0,max:2},
    rooms:[true,false,false,false],
    details:[[1,0],null,null,null],
    orders:[],
}

export default function rootReducer(state=iniState,action){
    switch (action.type) {
        case 'CHECK':
        console.log(state)
            var newState=JSON.parse(JSON.stringify(state))
            if(!newState.rooms[action.index])
                //check all rooms before action.index
                newState.rooms=newState.rooms.map((item,index)=>{
                    if(index<=action.index){
                        //set default order details
                        if(state.details[index]==null)
                            newState.details[index]=[1,0]
                        return true;
                    } 
                    return false
                })
            else
                //uncheck all rooms after action.index
                newState.rooms=newState.rooms.map((item,index)=>{
                    if(index>=action.index){
                        //set unchecked rooms
                        newState.details[index]=null
                        return false;
                    }   
                    return true
                })
            newState.rooms[0]=true;
            return newState
        
        case 'SUBMIT':
            newState=JSON.parse(JSON.stringify(iniState))
            var newOrders=JSON.parse(JSON.stringify(state.orders))
        
            var newDetails=state.details.map((item,index)=>{
                if(state.rooms[index])
                   return item
                else
                    return null
            })
            newOrders.push(newDetails)
            return {...newState,orders:newOrders}

        case 'SELECT':
            newState=JSON.parse(JSON.stringify(state))
            if(action.age==='Adults'){
                newState.details[action.index][0]=action.value-0
            }else{
                newState.details[action.index][1]=action.value-0
            }

            return newState
        default:
            return state;

    }
}