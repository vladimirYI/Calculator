import React, { Component } from 'react';
import './calculator.css'
export default class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: parseFloat(0),
            secondNumber: 0,
            result: "Result"
        };
        this.handleFirstInput = this.handleFirstInput.bind(this);
        this.handleSecondInput = this.handleSecondInput.bind(this);
        this.sumNumbers = this.sumNumbers.bind(this);
        this.multNumbers = this.multNumbers.bind(this);
        this.subtrNumbers = this.subtrNumbers.bind(this);
        this.divisNumbers = this.divisNumbers.bind(this);
        this.clearValues = this.clearValues.bind(this);
    }

    handleFirstInput(event) {
        this.setState({firstNumber: parseFloat(event.target.value)});
    }
    handleSecondInput(event) {
        this.setState({secondNumber: parseFloat(event.target.value)}); 
    }
    sumNumbers() {
        let value = this.state.firstNumber + this.state.secondNumber;
        this.setState({result: value});
    }
    multNumbers() {
        let value = this.state.firstNumber * this.state.secondNumber;
        this.setState({result: value});
    }
    subtrNumbers() {
        let value = this.state.firstNumber - this.state.secondNumber;
        this.setState({result: value});
    }
    divisNumbers() {
        let value = this.state.firstNumber / this.state.secondNumber;
        this.setState({result: value.toFixed(1)});
    }
    clearValues() {
        this.setState({
            firstNumber: "",
            secondNumber: "",
            result: ""
    })};

    render() {
        let {firstNumber, secondNumber, result} = this.state;
        return(
            <div className="calculator">
                <h1>Calculator</h1>
                <form className="calculator-form">
                    <input value={firstNumber} onChange={this.handleFirstInput} />
                    <input value={secondNumber} onChange={this.handleSecondInput} />
                    <input type='text' value={result} readOnly/>
                </form>
                <div className="calculator__buttons">
                    <button onClick={this.sumNumbers}>+</button>
                    <button onClick={this.multNumbers}>*</button>
                    <button onClick={this.subtrNumbers}>-</button>
                    <button onClick={this.divisNumbers}>/</button>
                    <button onClick={this.clearValues}>C</button>
                </div>
            </div>
        );
    }
}
