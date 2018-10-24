export const checkAction=(index)=>({
    type:'CHECK',
    index
})

export const submitAction=()=>({
    type:'SUBMIT'
    
})

export const selectAction=(value,age,index)=>({
    type:'SELECT',
    value,
    age,
    index
})
