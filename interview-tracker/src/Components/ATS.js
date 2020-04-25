import React, { Component } from "react";
import Candidate from "./Candidate";
//import AddNewApplicant from "./AddNewApplicant";

class ATS extends Component {
  render() {
    const { SearchTerm } = this.props;

    return (
      <div>
        <table key={Date.now()}>
          <thead key={Date.now()}>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Current Role</th>
              <th>Current Employer</th>
              <th>Hire Year</th>
            </tr>
          </thead>

          {this.props.Candidates.filter(
            (item) =>
              item.firstName.toLowerCase().includes(SearchTerm) ||
              item.lastName.toLowerCase().includes(SearchTerm)
          ).map((item) => {
            return (
              <tbody key={Math.random()}>
                <tr style={{ backgroundColor: item.color }}>
                  <td>
                    <Candidate key={Date.now()} fN={item.firstName} />
                  </td>
                  <td>
                    <Candidate key={Date.now()} lN={item.lastName} />
                  </td>
                  <td>
                    <Candidate key={Date.now()} mail={item.email} />
                  </td>
                  <td>
                    <Candidate key={Date.now()} tel={item.phone} />
                  </td>
                  <td>
                    <Candidate
                      key={Date.now()}
                      currentTitle={item.currentRole}
                    />
                  </td>
                  <td>
                    <Candidate
                      key={Date.now()}
                      currentAng={item.currentEmployer}
                    />
                  </td>
                  <td>
                    <Candidate key={Date.now()} hireDate={item.hireYear} />
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    );
  }
}

export default ATS;
