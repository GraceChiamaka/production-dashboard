import React, { Component } from 'react';
import Aux from '../hoc/hoc';

import './style.scss';

class NumberInput extends Component {
    state = {
        value: 1
    }
    componentDidMount() {
        this.setState({ value: this.props.value ? this.props.value : 1 })
    }
    numberIncrement = () => {
        console.log('tryig to in crese vbale')
        this.setState({ value: this.state.value + 1 })
    }
    numberDecrement = () => {
        if (this.state.value >= 1) {
            this.setState({ value: 1 });
            return;
        }

        this.setState({ value: this.state.value - 1 })

    }
    render() {
        return (
            <div className="input-group mb-3 h__input-group h__number-input">
                <input type="number"
                    className="form-control h__input h__input-sm h__number"
                    placeholder={this.props.placeholder}
                    aria-label={this.props.label}
                    aria-describedby="basic-addon1"
                    name={this.props.name}
                    id={this.props.id}
                    min={this.props.min}
                    max={this.props.max}
                    value={this.state.value}
                    onChange={(e) => this.setState({ value: e.target.value })}
                    aria-describedby="basic-addon1" />
                <div className="input-group-append">
                    <span className="input-group-text h__input-number flex-column" id="basic-addon1">
                        <p className="mb-0" onClick={this.numberIncrement}>
                            <i className="fa fa-plus"></i>
                        </p>
                        <p className="mb-0" onClick={this.numberDecrement}>
                            <i className="fa fa-minus"></i>
                        </p>
                    </span>
                </div>
            </div>
        )
    }
}
export default NumberInput