import React, { Component } from 'react';
import './contact.css';

export default class Contact extends Component (props) {
    constructor(){
        super();
        this.state = {
            name: ""
        }
    }
    handleChange = (e) => {
        e.persist();
        const{name,value}= e.target;
        this.setState({
            [name]: value
        })
    }

    clearInputs = () => {
        this.setState({
            name:""
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addClientRequest(this.state)
        .then(response => {
            this.clearInputs()
        })
    }
    render(){
        return(
            <div className='contactContainer'>
                <form>
                    <h1>Contact Me</h1>
                    <input
                        name='firstName'
                        value={this.state.name}
                        onChange={this.handleChange}
                        type='text'
                        placeholder='First Name'
                    />
                </form>
            </div>
        )
    }
}