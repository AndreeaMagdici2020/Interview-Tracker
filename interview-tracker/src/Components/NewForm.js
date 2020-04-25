import React, { Component } from "react";
import NewFormItem from "./NewFormItem";
class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      prenume: "",
      nume: "",
      key: "",
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
      key: Date.now(),
    };
    console.log(newItem);
    if (newItem.prenume !== "") {
      const newItems = [...this.state.item, newItem];
      this.setState({ item: newItems, prenume: "", nume: "", key: "" });
      console.log("newItems este:", newItems);
    }
  };
  render() {
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
            <br></br>
            <button>Add</button>
          </form>
        </header>
        <div>
          <table>
            <thead>
              <tr>
                <th>Prenume</th>
                <th>Nume</th>
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
                      <NewFormItem prenume={item.nume} />
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
