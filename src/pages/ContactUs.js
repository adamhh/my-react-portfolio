import React, { Component } from "react";
import Content from "../components/Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        Axios.get('https://react-portfolio-adamhh-backend.herokuapp.com/api/')
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
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    checkConditions() {
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
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.checkConditions()) {
            this.setState({
                disabled: true
            });
            Axios.post('https://react-portfolio-adamhh-backend.herokuapp.com/api/email', this.state)
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
  render() {
    return (
        <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                  <div>
                      <Content>
                          <Form onSubmit={this.handleSubmit}>
                              <Form.Group>
                                  <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                  <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                              </Form.Group>


                              <Form.Group>
                                  <Form.Label htmlFor="email">Email</Form.Label>
                                  <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                              </Form.Group>


                              <Form.Group>
                                  <Form.Label htmlFor="message">Message</Form.Label>
                                  <Form.Control id="message" name="message" as="textarea" value={this.state.message} onChange={this.handleChange} />
                              </Form.Group>


                              <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                  Send
                              </Button>


                              {this.state.emailSent === true && <p className="message-success"><strong>Email Sent: Thanks for reaching out!</strong></p>}
                              {this.state.emailSent === false && <p className="message-warning"><strong>Email Not Sent</strong></p>}
                          </Form> <h4>Please contact for employment or collaboration opportunities.</h4>
                      </Content>
                  </div>
              </p>
            </div>
          </div>
        </section>
    );
  }
}
export default ContactUs;