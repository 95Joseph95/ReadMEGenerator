const fs = require('fs');

const inquirer = require('inquirer')

const readMeData = (input) => `
# Project Title
${input.Title}
## Tests
${input.Tests}
## Contributing
${input.contributing}
## Installation
${input.installation}    
## Usage
${input.usage}
## Questions
${input.Questions}
If you have any questions email me @ ${input.Questions}`


inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
      message: "Enter the title of your project",
    },


    {
      type: 'input',
      name: 'installation',
      message: 'What packages were installed?',
      
    },


    {
        type: 'input',
        name: 'usage',
        message: 'How can this be used?',
        
      },


      {
        type: 'input',
        name: 'contributing',
        message: 'What did you contribute to this?',
        
      },


      {
        type: 'input',
        name: 'Tests',
        message: 'Hwo do you run test?',
        
      },


      {
        type: 'input',
        name: 'Questions',
        message: 'How can someone reach you for questions?',
      },
  ])



  .then((input) => {
    var   readme = readMeData(input)
    var NameofFile = `README.md`;

    fs.writeFile(NameofFile, readme, (err) =>
    err ? console.log(err) : 
    console.log('Success!')
    );
  });
