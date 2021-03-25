import React, { Component } from "react";
import Hero from "./Hero";
import Content from "./Content";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';

export default class ContactUs extends Component {
    constructor(props) {
        super(props);
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


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
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
  render() {
    let resumeData = this.props.resumeData;
    return (
        <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
                  <div>
                      <Hero title={this.props.title} />

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
                                  <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                              </Form.Group>


                              <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                  Send
                              </Button>


                              {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                              {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                          </Form>
                      </Content>
                  </div>
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linkedin :<a href={resumeData.linkedinId}> Adam Hall</a></h4>
                <h4><a href="https://docs.google.com/document/d/1WX1RMHd5eZwcAUhBxp4TFEyS9RDg7PUhepvvV2RxEZ4/edit?usp=sharing">Resume</a></h4>
              </div>
            </aside>
          </div>
        </section>
    );
  }
}