import React, { Component } from 'react'
import axios from 'axios'

import Layout from '../components/Layout'
import Loader from '../components/Loader'

import './styles/contact-us.scss'

class ContactUs extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      body: '',
      loading: false,
      alert: {
        type: '',
        message: '',
        on: false,
      },
    }
  }

  handleChange = (type, event) => {
    this.setState({ [type]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({ loading: true })
    axios
      .post(
        'https://us-central1-commithub-39e14.cloudfunctions.net/contactUsEmail',
        {
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          body: this.state.body,
        }
      )
      .then(res => {
        this.setState({ loading: false })
        this.alert('success', 'Your message was sent succesfully')
        this.clearState()
      })
      .catch(err => {
        this.setState({ loading: false })
        this.alert(
          'danger',
          "Oh oh! Your message couldn't be sent. Please try again later"
        )
      })
  }

  alert = (type, message) => {
    this.setState({
      alert: {
        type,
        message,
        on: true,
      },
    })

    setTimeout(this.clearAlert, 5000)
  }

  clearState = () => {
    this.setState({
      name: '',
      email: '',
      subject: '',
      body: '',
    })
  }

  clearAlert = () => {
    this.setState({
      alert: {
        type: '',
        message: '',
        on: false,
      },
    })
  }

  render() {
    const alertOn = this.state.alert.on
    let alert

    if (alertOn) {
      alert = (
        <div className={this.state.alert.type}>{this.state.alert.message}</div>
      )
    }

    return (
      <Layout>
        <section id="contact-us-container">
          <h1>Contact Us</h1>
          <p className="sub-text">Have some Questions? We are here to help</p>
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                required
                value={this.state.name}
                onChange={event => this.handleChange('name', event)}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                required
                value={this.state.email}
                onChange={event => this.handleChange('email', event)}
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                required
                value={this.state.subject}
                onChange={event => this.handleChange('subject', event)}
              />
            </label>
            <label>
              Body:
              <textarea
                required
                value={this.state.body}
                onChange={event => this.handleChange('body', event)}
              />
            </label>
            <input type="submit" value="Submit" />
            {alert}
            { this.state.loading ? (
              <section className="loader-container">
                <Loader/>
              </section>
            ) : null }
          </form>
        </section>
      </Layout>
    )
  }
}

export default ContactUs
