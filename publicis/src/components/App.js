import React, { Component } from 'react';
import axios from 'axios'
const swapAPI='',maxNum=50
const myAPI='https://api.openbrewerydb.org/breweries'

class App extends Component {
  componentDidMount(){
    let API,data,sum,keys,isNum
    if(swapAPI==='')
      API=myAPI
    else
      API=swapAPI

    axios.get(API)
      .then((res)=>{
        if(res.data.length>maxNum)
          res.data.splice(maxNum,res.data.length-maxNum)
          keys=Object.keys(res.data[0] || {})
          isNum=Object.values(res.data[0]).map((item)=>{
          return this.checkNum(item)
        })

        data=res.data.map((item)=>{
          return Object.values(item).map((value,index)=>{
            if(isNum[index])//is num
              if(Number.parseFloat(value))
                return Number.parseFloat(value)
              else 
                return null
            else //not num
              return value
          })
        })
        // calculate sum
        sum=isNum.map((item,index)=>{
          if(item)
            return (
              <td key={index}>{
                data.map((item)=>{
                  return item[index]
                }).reduce((acc,curr)=>{
                  return acc+curr;
                })
              }</td>
            )
          else
            return(<td key={index}>N/A</td>)
            
        })
        this.props.setData(data,keys,isNum,sum)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
//check the string
  checkNum(value) {
    const regPos = /^\d+(\.\d+)?$/; 
    const regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(value) || regNeg.test(value)) {
        return true;
        } else {
        return false;
        }
    }

  render() {
    const {data,sortData,keys,sum}=this.props
    let header,body

    if(data){
      if(keys && keys.length>0){
          header=keys.map((item,index)=>{
          return <th key={index} value={item} onClick={(e)=>sortData(e.target.innerHTML)}>{item}</th>
        })
      }
      
      body=data.map((item,index)=>{
        return (<tr key={index}>
          {
            Object.values(item).map((value)=>{
              return <td key={value}>{value}</td>
            })
          }
        </tr>)
 
      })
    }



    return (
      <div className="App">
        <table className='table'>
          <thead className='theads'>
            <tr>
              {header}
            </tr>
          </thead>
          <tbody>
            {body}
            <tr>{sum}</tr>
          </tbody>
        </table>
      </div>
    );
  }
}






export default App;
