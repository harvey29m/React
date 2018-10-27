export const setData=(data,keys,isNum,sum)=>({
    type:'SETDATA',
    data,
    keys,
    isNum,
    sum
    
})

export const sortData=(header)=>({
    type:'SORT',
    header
})