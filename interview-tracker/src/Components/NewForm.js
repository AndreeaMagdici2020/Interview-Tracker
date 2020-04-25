import React, { Component } from "react";
class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      currentItem: {
        prenume: "",
        nume: "",
        key: "",
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  handleInput = (event) => {
    this.setState({
      currentItem: {
        [event.target.name]: event.target.value,

        key: Date.now(),
      },
    });
  };
  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
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
              value={this.state.currentItem.prenume}
              onChange={this.handleInput}
            ></input>

            <input
              name="nume"
              className="addLastName"
              type="text"
              placeholder="Enter last name"
              value={this.state.currentItem.nume}
              onChange={this.handleInput}
            ></input>
            <br></br>
            <button>Add</button>
          </form>
        </header>
      </div>
    );
  }
}
export default NewForm;
