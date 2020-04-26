import React, { Component } from "react";
import NewFormItem from "./NewFormItem";
import Search from "./Search";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import orderBy from "lodash/orderBy";
const Array1 = [];

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      prenume: "",
      nume: "",
      mail: "",
      phone: "",
      lastEmployer: "",
      currentTitle: "",
      key: "",
      query: "",
      columnToQuery: "prenume",
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
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
      mail: this.state.mail,
      phone: this.state.phone,
      lastEmployer: this.state.lastEmployer,
      currentTitle: this.state.currentTitle,
      key: Date.now(),
    };
    console.log(newItem);
    if (newItem.prenume !== "") {
      const newItems = [...this.state.item, newItem];
      Array1.push(newItem);
      console.log("GLOBAL", Array1);
      this.setState({
        item: newItems,
        prenume: "",
        nume: "",
        mail: "",
        phone: "",
        lastEmployer: "",
        currentTitle: "",
        key: "",
      });
      console.log("newItems este:", newItems);
    }
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <div className="AddUsers">
        <header className="HeaderAddUsers">
          <form id="FormAddUsers" onSubmit={this.addItem}>
            <input
              name="prenume"
              className="addFirstName"
              type="text"
              placeholder="Enter first name"
              value={this.state.prenume}
              onChange={this.handleInput}
            ></input>

            <input
              name="nume"
              className="addLastName"
              type="text"
              placeholder="Enter last name"
              value={this.state.nume}
              onChange={this.handleInput}
            ></input>
            <input
              name="mail"
              className="addMail"
              type="text"
              placeholder="Enter email"
              value={this.state.mail}
              onChange={this.handleInput}
            ></input>
            <input
              name="phone"
              className="addPhone"
              type="text"
              placeholder="Enter phone"
              value={this.state.phone}
              onChange={this.handleInput}
            ></input>
            <input
              name="lastEmployer"
              className="addLastEmployer"
              type="text"
              placeholder="Enter last employer"
              value={this.state.lastEmployer}
              onChange={this.handleInput}
            ></input>
            <input
              name="currentTitle"
              className="addCurrentTitle"
              type="text"
              placeholder="Enter current Title"
              value={this.state.currentTitle}
              onChange={this.handleInput}
            ></input>
            <button>Add</button>
          </form>
        </header>
        <div>
          <Search key={Date.now()} handleChange={this.onSearchChange} />
        </div>
        <div>
          <input
            placeholder="Nume aici"
            type="text"
            value={this.props.searchTerm}
            onChange={this.props.onSearchChange}
          ></input>
        </div>
        <div>
          <TextField
            id="standard-basic"
            label="Select a value"
            value={this.state.query}
            onChange={(event) => this.setState({ query: event.target.value })}
          />
        </div>
        <div id="selectFromForm">
          <Select
            labelId="selectColumn"
            id="demo-simple-select"
            value={this.state.columnToQuery}
            onChange={(event, index, value) =>
              this.setState({ columnToQuery: value })
            }
          >
            <MenuItem value="prenume">Prenume</MenuItem>
            <MenuItem value="nume">Nume</MenuItem>
            <MenuItem value="lastEmployer">Last employer</MenuItem>
            <MenuItem value="currentTitle">Current title</MenuItem>{" "}
          </Select>
        </div>
        <div id="TableNewForm">
          <table>
            <thead>
              <tr>
                <th>Prenume</th>
                <th>Nume</th>
                <th>Mail</th>
                <th>Phone</th>
                <th>Current Employer</th>
                <th>Current Title</th>
              </tr>
            </thead>
            {this.state.item.map((item) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <NewFormItem prenume={item.prenume} />
                    </td>
                    <td>
                      {" "}
                      <NewFormItem nume={item.nume} />
                    </td>
                    <td>
                      {" "}
                      <NewFormItem mail={item.mail} />
                    </td>
                    <td>
                      {" "}
                      <NewFormItem phone={item.phone} />
                    </td>
                    <td>
                      {" "}
                      <NewFormItem lastEmployer={item.lastEmployer} />
                    </td>
                    <td>
                      {" "}
                      <NewFormItem currentTitle={item.currentTitle} />
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
export default NewForm;
