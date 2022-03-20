const inquirer = require('inquirer');

const promptProject = portfolioData => {

 // If there's no 'projects' array property, create one
if (!portfolioData.projects) {
  portfolioData.projects = [];
}

 return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
    message: 'Enter your GitHub Username'    
  },
  {
    type: 'input',
    name: 'about',
    message:  'Provide some info about yourself:'
  }
  ]);
}

promptUser()
  .then(answers => console.log(answers))
  .then(promptProject)
  .then(projectAnswers => console.log(projectAnswers));

promptUser().then(answers => console.log(answers));


// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });
