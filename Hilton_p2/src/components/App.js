import React, { Component } from 'react';
import Room from '../containers/Room'

const roomNum=4;
class App extends Component {

  render() {
    let roomList=[]
    const {onSubmit}=this.props
    for(var i=0;i<roomNum;i++){
      roomList.push(
        <Room index={i} key={i} name={'Room '+(i+1)}/>
      )
    }

    return (
      <React.Fragment>
        <div className='room clearFloat'>
          {roomList}
        </div>
        <button onClick={()=>{onSubmit()}}>Submit</button>
      </React.Fragment>

    );
  }
}

export default App;
