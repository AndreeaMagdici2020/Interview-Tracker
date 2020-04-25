import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ATS from "./Components/ATS";
import AddNewApplicant from "./Components/AddNewApplicant";
import BasicButtonGroup from "./Components/GroupButtons";
const Candidates = [
  {
    firstName: "John",
    lastName: "Smith",
    email: "jsmith@mail.com",
    phone: "+004 000 001",
    currentRole: "Engineer",
    currentEmployer: "Eon",
    hireYear: 2017,
    color: "#e6f2ff",
  },
  {
    firstName: "Jim",
    lastName: "Karev",
    email: "jkarev@mail.com",
    phone: "+004 000 002",
    currentRole: "Engineer",
    currentEmployer: "SmithCo",
    hireYear: 2009,
  },
  {
    firstName: "Jim",
    lastName: "Karev",
    email: "jkarev@mail.com",
    phone: "+004 000 002",
    currentRole: "Engineer",
    currentEmployer: "SmithCo",
    hireYear: 2009,
    color: "#e6f2ff",
  },
  {
    firstName: "Corina",
    lastName: "Sandu",
    email: "csandu@mail.com",
    phone: "+004 000 002",
    currentRole: "Engineer",
    currentEmployer: "Antal",
    hireYear: 2009,
    color: "#e6f2ff",
  },
];
console.log(Candidates);
const User = { nume: "", prenume: "" };
class App extends Component {
  state = {
    SearchTerm: "",
  };

  onSearchChange = (event) => {
    this.setState({ SearchTerm: event.target.value });
  };

  render() {
    return (
      <div key={Date.now()} className="App">
        <div>
          <Header key={Date.now()} />
        </div>
        <div
          className="MainPage"
          style={{
            width: "auto",
            height: "800px",
            marginTop: "250px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
        >
          <div>
            <Search key={Date.now()} handleChange={this.onSearchChange} />
          </div>
          <div className="BasicButtonGroup">
            <BasicButtonGroup />
          </div>
          <div>
            <p className="tableTitle"> Applicants</p>
            <ATS
              key={Date.now()}
              SearchTerm={this.state.SearchTerm}
              Candidates={Candidates}
            />
          </div>
          <div className="AddNewApplicant">
            <AddNewApplicant
              key={Date.now()}
              style={{ display: "inline-block", float: "right" }}
              Candidates={Candidates}
              User={User}
            />
          </div>
          {console.log("Hello")}
        </div>
      </div>
    );
  }
}
//console.log("Here:", Candidates);

export default App;