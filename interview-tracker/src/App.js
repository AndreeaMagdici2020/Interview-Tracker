import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Search from "./Components/Search";
import ATS from "./Components/ATS";
//import AddNewApplicant from "./Components/AddNewApplicant";
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
      SearchTerm: "",
      item: [],
      prenume: "",
      nume: "",
      key: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  onSearchChange = (event) => {
    this.setState({ SearchTerm: event.target.value });
  };
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      key: Date.now(),
    });
  };

  addItem = (event) => {
    event.preventDefault();
    const newItem = {
      prenume: this.state.prenume,
      nume: this.state.nume,
      key: this.state.key,
    };
    console.log("Added new item");
    console.log(newItem);
    if (newItem.prenume != "" || newItem.nume != "") {
      const newItems = [...this.state.items, newItems];
      this.setState({ items: newItems, prenume: "", nume: "", key: "" });
    }
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
        <div className="AddUsers">
          <header className="HeaderAddUsers">
            <form id="FormAddUsers" onSubmit={this.addItem}>
              <input
                id="id1"
                name="prenume"
                className="addFirstName"
                type="text"
                placeholder="Enter first name"
                value={this.state.prenume}
                onChange={this.handleInput}
              ></input>

              <input
                id="id2"
                name="nume"
                className="addLastName"
                type="text"
                placeholder="Enter last name"
                value={this.state.nume}
                onChange={this.handleInput}
              ></input>
              <br></br>
              <button>Add</button>
            </form>
          </header>
        </div>
      </div>
    );
  }
}
//console.log("Here:", Candidates);

export default App;
