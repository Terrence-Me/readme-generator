const inquirer = require("inquirer");
const fs = require("fs");

const generateReadMe = (data) => {
  return `
  # ${data.Title}

[github Repo](https://github.com/${data.userName}/${data.Title})

[Video Link](https://drive.google.com/file/d/1jmP5ioPz-UbpXyUHxFA4Js1VRs32uCT2/view?usp=sharing)

## Description
${data.Description}

![license](https://img.shields.io/badge/License-${data.license}-blue.svg)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Below is a list of depndencies

## Usage
In order to use this app, ${data.usage}

## List of Collaborators: 
* ${data.credits}:

## License
This projects is licensed under ${data.license} license.
![license](https://img.shields.io/badge/License-${data.license}-blue.svg)

For more information, click the link below. 

[License Information](https://opensource.org/licenses/${data.license})

## How to Contribute: ${data.contribute}

## tests
Instructions to test this app: ${data.test}

## Question
If you have any questions about the repo, you can get to my GitHyb page at the following link
[GitHub Profile] (https://github.com/${data.userName}

### Contact Information:
For additional questions, please email at ${data.email}
`;
};

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the title of your project? (No Spaces).",
    },

    {
      type: "input",
      name: "userName",
      message: "What is your Github username?",
    },

    {
      type: "input",
      name: "Description",
      message: "Brief description of your project.",
    },

    {
      type: "input",
      name: "installation",
      message:
        "Are thre any installaiton instructions for this application?, type none for no instructions.",
    },
    {
      type: "input",
      name: "usage",
      message: "How to use your application?",
    },
    {
      type: "input",
      name: "credits",
      message: "List any collaborators (follow each name with a comma).",
    },
    {
      type: "list",
      name: "license", //use select option
      message: "Choose from list of license you would like to use",
      choices: ["Apache2.0", "BSL1.0", "MIT", "Unlicense"],
    },
    {
      type: "input",
      name: "test",
      message:
        "Provide instuctions to test your application. If none, type none.",
    },
    {
      type: "input",
      name: "contribute",
      message: "How can others contribute.",
    },
    {
      type: "input",
      name: "email",
      message: "provide email contact.",
    },
  ]);
};

const init = () => {
  promptUser()
    .then((data) => fs.writeFileSync("README.md", generateReadMe(data)))
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
};
init();
