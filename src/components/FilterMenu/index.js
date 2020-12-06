import React from 'react';
import './style.css';
import FilterBtns from '../FilterBtns';

function FilterMenu (props) {
    return(
        <div className="menuBar">
            <div className="button-group">
                <FilterBtns 
                    resetBtn={props.resetBtn} sortByName={props.sortByName} sortByTitle={props.sortByTitle} sortByLocation={props.sortByLocation} children={props.children} handleDropdown={props.handleDropdown}
                    />
        </div>
    </div>
    )
};

export default FilterMenu;