const validateEmail = val => {
  let valid;
  if (/@\w+.com/.test(val) || val === "") valid = true;
  return valid || "Invalid Email!";
}

const validateGithub = val => {
  let valid;
  if (/@\w/.test(val) || val === "") valid = true;
  return valid || "Start GitHub Account with @!";
}

const wantEmployee = [
  {
    type: "confirm",
    name: "res",
    message: "Should we create a new employee?",
  },
];

const whatRole = [
  {
    type: "list",
    name: "role",
    message: "What is the team members role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const wantManager = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
    validate: validateEmail
  },
  {
    type: "input",
    name: "officeNumber",
    message: "Office Number:",
  },
];

const wantEngineer = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "github",
    message: "GitHub Username:",
    validate: validateGithub
  },
];

const wantIntern = [
  {
    type: "input",
    name: "name",
    message: "Name:",
  },
  {
    type: "input",
    name: "id",
    message: "ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Email:",
    validate: validateEmail,
  },
  {
    type: "input",
    name: "school",
    message: "School:",
  },
];

module.exports = {
    wantEmployee,
    whatRole,
    wantManager,
    wantEngineer,
    wantIntern
};
