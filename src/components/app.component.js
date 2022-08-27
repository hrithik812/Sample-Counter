import React, { Component } from 'react';
import Box from './box.component.js'
class App extends Component {
  state = {
    boxes: []
    // className:"btn-btn-primary"
  }

  // style = {
  //   color: "red"
  // }

  createBox = () => {
    const { boxes } = this.state;

    this.setState({
      boxes: [...boxes, 0]
    })
  }

  increment=()=>{
    const 
  }
  deleteBox = (e, index) => {
    const { boxes } = this.state;
    // console.log('delete clicked', index);
    // console.log("Boxes-------", boxes);

    const newBoxes = boxes.filter((element, i) => index != i)
    // console.log("NEW BOX ARRAY---", newBoxes);
    this.setState({
      boxes: newBoxes
    })
  }

  render() {
    console.log("BOX in array---",this.state.boxes);

    return (
      <div style={{ margin: "20px" }}>
        <button type="button" onClick={this.createBox} className="btn btn-primary p-2">Add</button>
        <br />
        <br />
        {
          this.state.boxes.map((number, index) => (
            <div key={index}>
              <Box num={number} deleteBox={(e) => this.deleteBox(e, index)} index={index}/>
              <br />

            </div>

          ))

        }
      </div>
    )
  }
}

export default App;
