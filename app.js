const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const { wantEmployee, whatRole, wantManager, wantEngineer, wantIntern } = require('./prompts.js');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const OUTPUT_PATH = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");

const $newEmployee = function () {
    return inquirer.prompt(wantEmployee);
};
const $employeeType = function () {
    return inquirer.prompt(whatRole);
};

function log(employee) {
  console.log(`Created ${employee.getName()} a(n) ${employee.getRole()} with ID: ${employee.getId()}`);
};

async function createEmployee() {
    let employee = await $employeeType();
    employee = employee.role;
    let data = await (eval('inquirer.prompt(want' + employee + ')'));
    let dataString = Object.keys(data).map((key) => '"' + data[key] + '"').join(', ');
    return eval('new ' + employee + '(' + dataString + ')');
};

async function createEmployees(employees = []) {
    const wantAnother = await $newEmployee();
    if (!wantAnother.res) return employees;
    let newEmployee = await createEmployee();
    employees.push(newEmployee);
    log(newEmployee);
    return createEmployees(employees);
};

async function createTeamPage() {
    const employees = await createEmployees();
    const teamHTML = render(employees);
    fs.writeFile(OUTPUT_PATH, teamHTML, (err) => {
      if (err) throw err;
      console.log("Teams Page Generated!");
    });
};

createTeamPage();
