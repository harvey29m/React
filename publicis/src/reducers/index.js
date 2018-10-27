const iniState={}

export default function rootReducer(state=iniState,action){
    switch (action.type) {
        case 'SETDATA':
        return {
            data:action.data,
            keys:action.keys,
            isNum:action.isNum,
            sum:action.sum
        }
        
        case 'SORT':
        const newData=sort(state.keys.indexOf(action.header),state)
        return {...state,data:newData}

        default: 
            return state
            
    }

}


function sort(header,state){
    const newData=JSON.parse(JSON.stringify(state.data))
    if((state.isNum[header])){
        newData.sort((obj1,obj2)=>{
			return obj1[header] - obj2[header]
        })
    }else{
        //sort string
        newData.sort((obj1,obj2)=>{
            if (obj1[header]===null) return -1;
			return obj1[header].localeCompare(obj2[header]);
        })

    }
    return newData

}