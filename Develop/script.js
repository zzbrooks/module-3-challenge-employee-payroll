// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  //first we create an empty array that will "collect" the employees data as it is typed into the prompts
  let employeesArray = [];
  // this while condition will continuously collect employee data untill we press cancel
  while (true) {
    // ask for the first name
    let firstName = prompt("Enter first name: ");
    if (firstName === null) {
      break;
    }
    // ask for the last name
    let lastName = prompt("Enter last name: ");
    if (lastName === null) {
      break;
    }
    // ask for salary 
    let salary = prompt("Enter salary: ");
    if (salary === null) {
      break;
    }
    salary = parseInt(salary)
    // this line of code will push all the employees inputed into the employees array
    employeesArray.push({ firstName, lastName, salary })
    // this prompt asks if you want to continue adding more employees
    let addEmployee = confirm("Do you want to add another another employee?")
    if (addEmployee === false) {
      break;
    }
  }
  // this returns all the informantion that was inputed for us to use in other parts of the code 
  return employeesArray;
}


// Display the average salary
const displayAverageSalary = function (employeesArray) {
  //  TODO: Calculate and display the average salary
  let averageSalary = 0;

  for (const average of employeesArray) {
    averageSalary = average.salary;
  }

  const totalAverageSalary = averageSalary / employeesArray.length;


  console.log("The average employee salary between our ${employeesArray.firstname.length} employees(s) is ${totalAverageSalary}")

  return totalAverageSalary;

}


// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee

  //first we create a variable that will contain the random employee by using the number of employees times a random number which will be inserted into the employeesArray index as a random number
  // we multiply the random number generated by the number of objects within the array to get the appropriate scaling  
  let random = employeesArray[Math.floor(employeesArray.length * Math.random())];
  // here we console log the winner by pulling out only the first and last name
  console.log(`Congratulation to ${random.firstName} ${random.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
