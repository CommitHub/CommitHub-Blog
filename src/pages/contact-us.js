import React, { Component } from 'react'

import Layout from '../components/Layout'

import './styles/contact-us.scss'

class ContactUs extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      body: ''
    }
  }

  handleChange = (type, event) => {
    this.setState({[type]: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <section id="contact-us-container">
          <h1>Contact Us</h1>
          <p class="sub-text">Have some Questions? We are here to help</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                required
                value={this.state.name}
                onChange={(event) => this.handleChange('name', event)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                required
                value={this.state.email}
                onChange={(event) => this.handleChange('email', event)}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                required
                value={this.state.subject}
                onChange={(event) => this.handleChange('subject', event)}
              />
            </label>
            <label>
              Body:
              <textarea
                required
                value={this.state.body}
                onChange={(event) => this.handleChange('body', event)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </Layout>
    )
  }
}

export default ContactUs