//create an object using the literal method 
const employee ={
    name: "sophie",
    streetAddress: 2443,                                                       
}
//defined and assigned a function that updates the employee with a key and value (non-destructively)
function  updateEmployeeWithKeyAndValue(employee, key, value){
    return  {...employee,[key]:value};
}

///defined and assigned a function that updates the employee with a key and value (destructively)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee [key] = value
    return employee
}

// define and assigned a function that deleted key (non-destructively)
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key]
    return newEmployee
}

// define and assigned a function that deleted key (destructively)
function  destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}