import React from 'react';
import './style.css';
import FilterBtns from '../FilterBtns';

function FilterMenu (props) {
    return(
        <div className="menuBar">
            <div className="button-group">
                <FilterBtns 
                    resetBtn={props.resetBtn} sortBtn={props.sortBtn} children={props.children} handleDropdown={props.handleDropdown}
                    />
        </div>
    </div>
    )
};

export default FilterMenu;