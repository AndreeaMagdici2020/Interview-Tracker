import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ATS from "./Components/ATS";
import NewForm from "./Components/NewForm";
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value.toLowerCase() });
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
            {/* <Search key={Date.now()} handleChange={this.onSearchChange} /> */}
          </div>
          {/* <div className="BasicButtonGroup">
            <BasicButtonGroup />
          </div> */}
          <div>
            <NewForm
              searchTerm={this.state.searchTerm}
              onSearchChange={this.onSearchChange}
            />
          </div>
          <div>
            {/* <p className="tableTitle"> Applicants</p> */}
            {/* <ATS
              key={Date.now()}
              SearchTerm={this.state.SearchTerm}
              Candidates={Candidates}
            /> */}
          </div>
          {/* <div className="AddNewApplicant">
            <AddNewApplicant
              key={Date.now()}
              style={{ display: "inline-block", float: "right" }}
              Candidates={Candidates}
              User={User}
            />
          </div> */}
          {console.log("Hello2")}
        </div>
        <br></br>
      </div>
    );
  }
}
//console.log("Here:", Candidates);

export default App;
