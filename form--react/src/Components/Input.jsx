import React from 'react';
import BsInput from 'react-bootstrap/FormControl';


const Input = ({ label, type, placeholder, value, onChange }) => {

const handleChange = (event) => {

const value = event.target.value;
console.log(value);

onChange(value);
};

return (
    <BsInput value={value} onChange={handleChange} type={type} placeholder={placeholder} />
);
};
    

export default Input;
