import React, { Component } from "react";
const Obj = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  currentRole: "",
  currentEmployer: "",
  hireYear: "",
  color: "#e6f2ff",
};

class AddNewApplicant extends Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    console.log(
      "a    fost    introdus    numele:",
      this.state.firstName + "    " + this.state.lastName
    );
    Obj.firstName = this.state.firstName;
    Obj.lastName = this.state.lastName; //this.props.User.nume  =  this.state.firstName; //this.props.User.prenume  =  this.state.lastName; //console.log(Obj); //console.log(this.props.User);

    this.props.Candidates.push(Obj); //this.props.Candidates.push(this.props.User);
    console.log("Noul  Candidates  este:", this.props.Candidates);
    event.preventDefault();
  }

  render() {
    return (
      <form className="FormAddNewApplicant" onSubmit={this.handleSubmit}>
                                     
        {console.log(
          "Candidates  la  inceput  de  Form:",
          this.props.Candidates
        )}{" "}
             
        <label>
          First Name:                                                       
          <input
            name="firstName"
            type="text"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
                                         
        </label>
        <label>
          Last  Name:                                                     
          <input
            name="lastName"
            type="text"
            value={this.state.lastName}
            onChange={this.handleChange}
          />{" "}
                                       
        </label>
          <input type="submit" value="Submit" />             
        {console.log("Candidates  la  FINAL  de  Form:", this.props.Candidates)}
           
      </form>
    );
  }
}

export default AddNewApplicant;
