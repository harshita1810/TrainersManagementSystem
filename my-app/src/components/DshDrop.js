import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import BasicExample from './BasicExample';
import './DropDown.css';


function DropDown({ onSelect, selected }) {
  return (
    <>
    {/* <BasicExample /> */}
      <DropdownButton
        id={`dropdown-variants-1`}
        // variant="info"
        
        title="Year"
        onSelect={onSelect}
        className='dropdown-item primary1'
      >
        <Dropdown.Item eventKey="1" selected = '1'>
          2022
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="2" selected = '2'>
          2023
        </Dropdown.Item>
      </DropdownButton>
    </>
  );
}

export default DropDown;
