import React from "react";
import './style.css';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
// import DropdownButton from 'react-bootstrap/DropdownButton'
// import Dropdown from 'react-bootstrap/Dropdown'


// This button group allows the user to filter names from A-Z, Z-A, filter by Job Title, filter by Location Title, and reset all values.
function FilterBtns ({ sortByName, sortByTitle, sortByLocation}) {
  return (
    <ButtonGroup className ="margin full-width">
      <Button className=".btn" onClick={ sortByName }>Sort By Name</Button>
      <Button className=".btn" onClick={ sortByTitle }>Sort By Title</Button>
      <Button className=".btn" onClick={ sortByLocation }>Sort By Location</Button>

    {/* <DropdownButton as={ButtonGroup} title="Title" id="bg-nested-dropdown" className="dropdown" onSelect={handleDropdown}>
      <Dropdown.Item eventKey="Developer">Developer</Dropdown.Item>
      <Dropdown.Item eventKey="Engineer">Engineer</Dropdown.Item>
      <Dropdown.Item eventKey="Project Manager">Project Manager</Dropdown.Item>
      <Dropdown.Item eventKey="Designer">Designer</Dropdown.Item>
    </DropdownButton>

    <DropdownButton as={ButtonGroup} title="Location" id="bg-nested-dropdown" onSelect={handleDropdown}>
      <Dropdown.Item eventKey="San Antonio">San Antonio</Dropdown.Item>
      <Dropdown.Item eventKey="Dallas">Dallas</Dropdown.Item>
      <Dropdown.Item eventKey="Austin">Austin</Dropdown.Item>
      <Dropdown.Item eventKey="Las Angeles">Las Angeles</Dropdown.Item>
      <Dropdown.Item eventKey="New York">New York</Dropdown.Item>
    </DropdownButton> */}

    {/* <Button onClick={resetBtn}>Reset</Button> */}

    </ButtonGroup>
  );
}

export default FilterBtns;
