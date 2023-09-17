import React, { useState } from 'react';

import Input from './Input';
import Button from 'react-bootstrap/button';
import BsForm from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const myForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
      <BsForm onSubmit={handleSubmit}>
        <h1>Sign Up Form</h1>
        <Row>
          <Col>
            <Input
              id="firstName"
              label="First Name"
              type="text"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Col>
          <Col>
            <Input
              id="lastName"
              label="Last Name"
              type="text"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter Password"
              value={formData.password}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </BsForm>
    );

}

export default myForm;

