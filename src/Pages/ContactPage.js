import React from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends React.Component {
    state = {
        value: '',
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
        })
    }

    render(){
        return (
            <div className="contact">
                <form onSubmit={this.handleSubmit}>
                    <h3>Write to us</h3>
                    <textarea value={this.state.value} placeholder='Your message' onChange={this.handleChange}></textarea>
                    <button>Send</button>
                </form>
                <Prompt
                when={this.state.value}
                message='Are you sure, you want to leave this page?'
                />
            </div>
        );  
    }

}
 
export default ContactPage;