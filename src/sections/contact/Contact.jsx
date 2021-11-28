import React, { Component } from "react";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';

const { API_ENDPOINT } = process.env;

function ContactUs(props) {

    Axios.get(API_ENDPOINT)
        .then(r => {
            if (r.data.success) {
                console.log("API awake");
            } else {
                console.log("API not awake");
            }
        })
    this.state = {
        name: '',
        email: '',
        message: '',
        disabled: false,
        emailSent: null,
    }



    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    const checkConditions = () => {
        let boo = true;
        if (this.state.name === "") {
            boo = false;
        } else if (this.state.message === "") {
            boo = false;
        } else if (this.state.email === "") {
            boo = false;
        } else if (!this.state.email.includes("@")) {
            boo = false;
        }
        return boo;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (this.checkConditions()) {
            this.setState({
                disabled: true
            });
            Axios.post(API_ENDPOINT + '/email', this.state)
                .then(res => {
                    if(res.data.success) {
                        this.setState({
                            disabled: true,
                            emailSent: true
                        });
                    } else {
                        this.setState({
                            disabled: false,
                            emailSent: false
                        });
                    }
                })
                .catch(err => {
                    console.log(err);
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                })

        }
    }
    
    return (
        <section id="contact">
              <div className="contact-wrap">
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Control id="full-name" placeholder="Name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control placeholder="Email" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control id="message" placeholder="Message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <div className="quick-fix">
                            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                            </Button>
                            <h4>Please contact for employment or collaboration opportunities.</h4>
                        </div>
                        {this.state.emailSent === true && <p className="message-success"><strong>Email Sent: Thanks for reaching out!</strong></p>}
                        {this.state.emailSent === false && <p className="message-warning"><strong>Email Not Sent</strong></p>}
                    </Form> 
                </Content>
              </div>
        </section>
    );
}
export default ContactUs;