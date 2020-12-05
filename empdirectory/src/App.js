import React, { Component } from "react";
import FriendCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employee.json";
// import SearchForm from "..Search/SearchForm";

class App extends Component {
  // Setting this.state.employees to the friends json array
  state = {
    employees
  };


  // Map over this.state.employees and render a EmployeeCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Employee List</Title>
        {this.state.employees.map(emp => (
          <FriendCard

            id={emp.id}
            key={emp.id}
            name={emp.name}
            image={emp.image}
            title={emp.title}
            location={emp.location}
            email={emp.email}
            phone={emp.phone}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
