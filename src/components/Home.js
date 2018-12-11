import React, { Component } from 'react';
import SOI from './SOI.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      formSubmitted: false
    }

    this.userEnteredFirstName = this.userEnteredFirstName.bind(this);
    this.userEnteredLastName = this.userEnteredLastName.bind(this);
    this.submitNameForm = this.submitNameForm.bind(this);
  }

  userEnteredFirstName(e) {
    this.setState({firstName: e.target.value})
  }

  userEnteredLastName(e) {
    this.setState({lastName: e.target.value})
  }

  submitNameForm(e) {
    e.preventDefault();
    if(this.state.firstName && this.state.lastName) {
      this.setState({formSubmitted: true});
    } else {
      alert("Please enter a first AND last name. Thank you!")
    }
  }

  render() {
    return (
      <div>
      {this.state.formSubmitted ? (
        <SOI passedFirstName={this.state.firstName} passedLastName={this.state.lastName}/>
        ):(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Welcome to the Schedule of Investments Frontend Challenge</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2>Please enter your name to access the SOI</h2>
          </div>
          <div className="col-6">
            <form onSubmit={this.submitNameForm}>
              <div className="form-group">
                <label htmlFor="first-name">First Name</label>
                <input type="first-name" className="form-control" id="first-name" placeholder="Enter First Name" onChange={this.userEnteredFirstName} value={this.state.firstName}/>
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name</label>
                <input type="last-name" className="form-control" id="last-name" placeholder="Enter Last Name" onChange={this.userEnteredLastName} value={this.state.lastName}/>
              </div>
              <button type="submit" className="btn btn-primary">NEXT ––></button>
            </form>
          </div>
        </div>
        
      </div>)}
      </div>
    );
  }
}

export default Home;
