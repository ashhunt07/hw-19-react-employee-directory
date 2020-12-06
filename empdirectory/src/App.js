import React, { useState, useEffect } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FilterMenu from "./components/FilterMenu";
import EmployeeCard from "./components/EmployeeCard";
import CardWrapper from "./components/CardWrapper";

// employee info
import employees from "./employee.json";



function App() {
    // Handles which cards get wrapped to
    const [emp, setEmp] = useState(employees);

 // Handles the search state
    const [search, setSearch] = useState('');

  // Handles the name sorting state
    const [nameSort, setNameSort] = useState("AZ");




  // Runs the first time the app starts or a new search term is provided
    useEffect(() => {

    // Powers the search to only show the people that match the search value state
    const results = emp.filter(employee =>
        employee.name.includes(search)
    );
    setSearch(results);


    }, [ ])



const sortNames = () => {
    switch (nameSort) {
        case 'AZ':
        setEmp([...emp].sort((a, b) => (a.name > b.name) ? 1 : -1));
        setNameSort("ZA")
        break;
        case 'ZA':
        setEmp([...emp].sort((a, b) => (a.name < b.name) ? 1 : -1))
        setNameSort("AZ")
        break;
    default:
            return;
    }
    }

  // Filters based on dropdown selected 
    const handleDropdown = (eventKey) => {

    switch (eventKey) {
        case "Project Manager":
        setEmp([...emp].filter(emp =>
            emp.title.includes("Project Manager")
        ));
        break;
        case "Designer":
        setEmp([...employees].filter(employee =>
            employee.title.includes("Designer")
        ));
        break;
        case "Developer":
        setEmp([...employees].filter(employee =>
            employee.title.includes("Developer")
        ));
        break;
        case "Engineer":
            setEmp([...employees].filter(employee =>
                employee.title.includes("Engineer")
            ));
        break;
        case "San Antonio":
        setEmp([...employees].filter(employee =>
            employee.location.includes("San Antonio")
        ));
        break;
        case "Dallas":
        setEmp([...employees].filter(employee =>
            employee.location.includes("Dalla")
        ));
        break;
        case "Austin":
        setEmp([...employees].filter(employee =>
            employee.location.includes("Austin")
        ));
        break;
        case "Las Angeles":
        setEmp([...employees].filter(employee =>
            employee.location.includes("Las Angeles")
        ));
        break;
        case "New York":
        setEmp([...employees].filter(employee =>
            employee.location.includes("New York")
        ));
        break;
        default:
            resetEmp();
        return;

    }
    }

    // Resets to all the team cards
    const resetEmp = () => {
        setEmp(employees);
        }


  // Map over this.state.employees and render a EmployeeCard component for each friend object

    return (
        <Wrapper>
            <Title />

            <FilterMenu
            resetBtn={resetEmp}
            sortBtn={sortNames}
            children={nameSort === "AZ" ? "Sort A–Z" : "Sort Z–A"}
            handleDropdown={handleDropdown} /> 

            <CardWrapper>
            {employees.map(emp => (
                <EmployeeCard
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
            </CardWrapper>
            
        </Wrapper>
    );
    }


export default App;

const sort = arr => arr.sort((a, b) => a - b);
//By default,the sort() function sorts values as strings.Fix this by providing a compare function.
// Example
sort([1, 5, 2, 4, 3]); 