// Write your solution in this file!
const employee = {
    name: 'Fred',
    streetAddress: '45 Star Lane'
}; 

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee};

    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newPerson = Object.assign({}, employee);

    delete newPerson[key];

    return newPerson;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 

    return employee
}
