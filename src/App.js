import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  List,
  ListItem,
  Text,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import './App.css'

function EmployeeForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [employees, setEmployees] = useState([]);

  const onSubmit = (data) => {
    const newEmployee = { ...data };
    setEmployees([...employees, newEmployee]);
    reset(); // Reset form fields after submission
  };

  const handleDelete = (index) => {
    const newEmployees = [...employees];
    newEmployees.splice(index, 1);
    setEmployees(newEmployees);
  };

  const handleEdit = (index) => {
    const editedEmployee = {
      name: prompt('Edit NAME:', employees[index].name),
      email: prompt('Edit EMAIL:', employees[index].email),
      position: prompt('Edit POSITION:', employees[index].position),
      companyName: prompt('Edit COMPANY NAME:', employees[index].companyName),
      employeeId: prompt('Edit EMPLOYEE ID:', employees[index].employeeId),
      city: prompt('Edit CITY:', employees[index].city),
    };
    const updatedEmployees = [...employees];
    updatedEmployees[index] = editedEmployee;
    setEmployees(updatedEmployees);
  };

  return (
    <Box>
      <Heading className='header'>EMPLOYEE FORM</Heading>
      <Flex id="form" as="form" onSubmit={handleSubmit(onSubmit)} direction="column">
        <Flex direction="column" id="employee-inputs">
          <Input
            id="input-field1"
            type="text"
            {...register('name', { required: 'Name is required' })}
            placeholder="NAME"
          />
          {errors.name && <FormErrorMessage>{errors.name.message}</FormErrorMessage>}

          <Input
            id="input-field2"
            type="text"
            {...register('email', { required: 'Email is required' })}
            placeholder="EMAIL"
          />
          {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}

          <Input
            id="input-field3"
            type="text"
            {...register('position', { required: 'Position is required' })}
            placeholder="POSITION"
          />
          {errors.position && <FormErrorMessage>{errors.position.message}</FormErrorMessage>}

          <Input
            id="input-field4"
            type="text"
            {...register('companyName', { required: 'Company Name is required' })}
            placeholder="COMPANY NAME"
          />
          {errors.companyName && (
            <FormErrorMessage>{errors.companyName.message}</FormErrorMessage>
          )}

          <Input
            id="input-field5"
            type="text"
            {...register('employeeId', { required: 'Employee ID is required' })}
            placeholder="EMPLOYEE ID"
          />
          {errors.employeeId && (
            <FormErrorMessage>{errors.employeeId.message}</FormErrorMessage>
          )}

          <Input
            id="input-field6"
            type="text"
            {...register('city', { required: 'City is required' })}
            placeholder="CITY"
          />
          {errors.city && <FormErrorMessage>{errors.city.message}</FormErrorMessage>}

          <Button type="submit" mt={4} id="btn-submit">
            Submit
          </Button>
        </Flex>
      </Flex>

      <List id="list" mt={8}>
        {employees.map((employee, index) => (
          <ListItem key={index} mb={4}>
            <Text>
              Employee Details: {employee.name}, {employee.email}, {employee.position},{' '}
              {employee.companyName}, {employee.employeeId}, {employee.city}
            </Text>
            <Button onClick={() => handleDelete(index)} mr={2} className='delete-btn'>Delete</Button>
            <Button onClick={() => handleEdit(index)} className='edit-btn'>Edit</Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default EmployeeForm;
