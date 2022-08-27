
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
class Box extends Component {
    // state = {
    //     number: 6,
    //     className: "btn btn-danger p-2"
    // }
    constructor({ num }) {
        super()
        console.log("Props-------", num);

        this.state = {
            number: num,
            className: "btn btn-danger p-2"
        }
    }
   

    decrement = () => {

        const number = this.state.number;
        if (number == 0) {
            const newClassName = 'btn btn-secondary';

            const newState = {
                number: this.state.number,
                className: newClassName
            }
            this.setState(newState)
        }
        else {
            const anotherNumber = this.state.number - 1;
            const anotherState = {
                number: anotherNumber,
            }
            this.setState(anotherState)
        }
    }

    render() {
        return (
            <div>
                <button type="button" className={this.state.className} onClick={this.decrement}>Decrement</button>
                <span style={{ fontSize: "20px" }} className="p-3">{this.state.number}</span>
                <button type="button" className="btn btn-primary p-2" onClick={this.increment}>Increment</button>
                <button type="button" className="btn btn-danger p-2 m-2" onClick={this.props.deleteBox}>Delete</button>

            </div>
        );
    }
}

export default Box;