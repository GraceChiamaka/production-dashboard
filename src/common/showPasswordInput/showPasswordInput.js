import React, { Component } from 'react';

class showPasswordInput extends Component{
    state = {
        isPasswordHidden: true
    }
    
    /**
     * toggleShowPassword Method
     * description (
     * sets state of isPasswordHidden 
     * )
     * @memberof showPasswordInput
     */
    toggleShowPassword = () => {
        this.setState({ isPasswordHidden: !this.state.isPasswordHidden });
    }
    render(){
        return (
            <div className="input-group h__input-group mb-3">
                <input 
                    type={this.state.isPasswordHidden ? "password" : "text"} 
                    className="form-control h__input" 
                    placeholder={this.props.placeholder}
                    id={this.props.id}
                    name={this.props.name}
                    required />
                <div className="input-group-append">
                    <span className="input-group-text bg-white border-left-0" onClick={this.toggleShowPassword}>
                        {
                            this.state.isPasswordHidden ?
                            <i className="fa fa-eye-slash"></i>
                            :
                            <i className="fa fa-eye"></i>
                        }
                    </span>
                </div>
            </div>
        )
    }
}
export default showPasswordInput;