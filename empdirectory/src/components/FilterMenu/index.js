import React from 'react';
import './style.css';
import FilterBtns from '../Filters/';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function FilterMenu (props) {
    return(
        <Row>
            <Col md={8} className="button-group">
                <FilterBtns 
                    resetBtn={props.resetBtn} sortBtn={props.sortBtn} children={props.children} handleDropdown={props.handleDropdown}
                    />
            </Col>
        </Row>
    )
};

export default FilterMenu;