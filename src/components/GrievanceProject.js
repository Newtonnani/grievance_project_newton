import React, { Component } from 'react'
import GrievanceProjectChild from './GrievanceProjectChild';
import './GrievanceProject.css'

export default class GrievanceProject extends Component {
  constructor(props) {
    super(props);
    this.state = { Email: '', Title: '', Description: '', isData: false };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDesChange = this.handleDesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    let Email = event.target.value;
    // console.log(Email)
    this.setState({ Email: Email });
  }
  handleTitleChange(event) {
    let Title = event.target.value;
    // console.log(Title)
    this.setState({ Title: Title });
  }
  handleDesChange(event) {
    let Desc = event.target.value;
    // console.log(Desc)
    this.setState({ Description: Desc });
  }

  // handleSubmit(event) {
  //   // alert(`${this.state.Email} and ${this.state.Title} and ${this.state.Description}`);
  //   // event.preventDefault();

  // }
  handleSubmit = () => {
    // console.log(`${this.state.Email} and ${this.state.Title} and ${this.state.Description}`)
    this.setState({
      isData: true
    })
    // this.setState({
    //   Email: this.state.Email, 
    //   Title: this.state.Title, 
    //   Description: this.state.Description
    // })
  }

  render() {
    const { Email, Title, Description, isData } = this.state
    if (isData) {
      return (
        <div>
          <GrievanceProjectChild Email={Email} Title={Title} Desc={Description} />
        </div>
      );
    }
    else {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.Email} onChange={this.handleEmailChange} />
          </label>
          <br /><br />
          <label>
            Title:
            <input type="text" value={this.state.Title} onChange={this.handleTitleChange} />
          </label>
          <br /><br />
          <label>
            Description:
            <input type="text" value={this.state.Description} onChange={this.handleDesChange} />
          </label>
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
      )
    }
  }
}
