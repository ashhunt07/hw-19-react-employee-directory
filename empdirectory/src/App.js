import React, { useState } from "react";
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

     // Handles sorting states
        const [nameSort, setNameSort] = useState("AZ");
        const [locationSort, setLocationSort] = useState("AZ");
        const [titleSort, setTitleSort] = useState("AZ");




const sortNames = () => {
    switch (nameSort) {
        case "AZ":
        setEmp(emp.sort((a, b) => (a.name > b.name) ? 1 : -1));
        setNameSort("ZA")
        break;
        case "ZA":
        setEmp(emp.sort((a, b) => (a.name < b.name) ? 1 : -1))
        setNameSort("AZ")
        break;
    default:
        return;
    }
    }

    const sortLocal = () => {
        switch (locationSort) {
            case "AZ":
            setEmp(emp.sort((a, b) => (a.location > b.location) ? 1 : -1));
            setLocationSort("ZA")
            break;
            case "ZA":
            setEmp(emp.sort((a, b) => (a.location < b.location) ? 1 : -1))
            setLocationSort("AZ")
            break;
        default:
            return;
        }
        }

        const sortTitle = () => {
            switch (titleSort) {
                case "AZ":
                setEmp(emp.sort((a, b) => (a.title > b.title) ? 1 : -1));
                setTitleSort("ZA")
                break;
                case "ZA":
                setEmp(emp.sort((a, b) => (a.title < b.title) ? 1 : -1))
                setTitleSort("AZ")
                break;
            default:
                return;
            }
            }

//   // Filters based on dropdown selected 
//     const handleDropdown = (eventKey) => {

//     switch (eventKey) {
//         case "Project Manager":
//         setEmp(emp.filter(e =>
//             e.title.includes("Project Manager")
//         ));
//         break;
//         case "Designer":
//         setEmp(emp.filter(e =>
//             e.title.includes("Designer")
//         ));
//         break;
//         case "Developer":
//         setEmp(emp.filter(e =>
//             e.title.includes("Developer")
//         ));
//         break;
//         case "Engineer":
//             setEmp(emp.filter(e =>
//                 e.title.includes("Engineer")
//             ));
//         break;
//         case "San Antonio":
//         setEmp(emp.filter(e =>
//             e.location.includes("San Antonio")
//         ));
//         break;
//         case "Dallas":
//         setEmp(emp.filter(e =>
//             e.location.includes("Dalla")
//         ));
//         break;
//         case "Austin":
//         setEmp(emp.filter(e =>
//             e.location.includes("Austin")
//         ));
//         break;
//         case "Las Angeles":
//         setEmp(emp.filter(e =>
//             e.location.includes("Las Angeles")
//         ));
//         break;
//         case "New York":
//         setEmp(emp.filter(e =>
//             e.location.includes("New York")
//         ));
//         break;
//         default:
//             resetEmp();
//         return;

//     }
//     }

//     // Resets to all the team cards
//     const resetEmp = () => {
//         setEmp(employees);
//         }


  // Map over employees and render a EmployeeCard component for each friend object

    return (
        <Wrapper>
            <Title />

            <FilterMenu
            // resetBtn={resetEmp}
            sortByName={sortNames}
            sortByLocation={sortLocal}
            sortByTitle={sortTitle}
            // children={nameSort === "AZ" ? "Sort A–Z" : "Sort Z–A"}
            // children={locationSort === "AZ" ? "Sort A–Z" : "Sort Z–A"}
            // handleDropdown={handleDropdown} 
            /> 

            <CardWrapper>
            {employees.map(e => (
                <EmployeeCard
                    key={e.id}
                    name={e.name}
                    image={e.image}
                    title={e.title}
                    location={e.location}
                    email={e.email}
                    phone={e.phone}
                />
            ))}
            </CardWrapper>
            
        </Wrapper>
    );
    }


export default App;
