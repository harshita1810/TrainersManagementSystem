import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
// import BasicExample from './BasicExample';
import './DropDown.css';

function DropDown({ onSelect, selectedOption }) {
  return (
    <>
    {/* <BasicExample /> */}
      <DropdownButton
        id={`dropdown-variants-1`}
        // variant="info"
        title="Rating"
        onSelect={onSelect}
        className='dropdown-item primary1'
        // style={none}
      >
        <Dropdown.Item eventKey="1" selectedOption = '1' clas>
          Weekly
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2" selectedOption = '2'>
          Monthly
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default DropDown;
