let bDebugging = false;
let bError = false;

// npm packages
const inquirer = require('inquirer');
const fs = require('fs');

// Classes
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// const mainHTML = require('./templates/mainHTML');
const createIndexHTML = require('./lib/createIndexHTML' );

// Cards
const createManagerCard = require('./lib/createManagerHtml');
const createEngineerCard = require('./lib/createEngineerHtml');
const createInternCard = require('./lib/createInternHtml');

const aTeamInfo = [];

// Initial Prompt
const runApp = () => {
  console.log("Let's build our team");
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'managerName',
        message: 'What is the Managers name?',
        validate(value) {
          const valid = isNaN(value);
          return valid || 'Please enter a name...';
        },
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'What is the Managers employee id?',
        validate(value) {
          const valid = !isNaN(parseInt(value));
          return valid || 'Please enter a number...';
        },
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: 'What is the managers email?',
        validate(value) {
          const valid = isNaN(value);
          return valid || 'Please enter an email address...';
        },
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number for the manager?',
        validate(value) {
          const valid = !isNaN(parseInt(value));
          return valid || 'Please enter a number...';
        },
      },
    ])
    .then(response => {
      const managerInfo = new Manager (
        response.managerName,
        response.managerId,
        response.managerEmail,
        response.officeNumber
      );
      console.log( managerInfo );
      const managerCard = createManagerCard( managerInfo );
      aTeamInfo.push( managerCard );
      addTeamMembers();
    });

  // Add additional team members
  function addTeamMembers() {
    console.log( "\nPlease enter the team information and then create the page:" );
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'addMembers',
          message: 'What would you like to do?',
          choices: [
            'Add an Engineer',
            'Add an Intern',
            new inquirer.Separator(),
            "Create the team page!",
          ],
        },
      ])
      .then( answers => {
        switch( answers.addMembers ) {
          case 'Add an Engineer': {
            promptEngineer();
            break;
          }
          case 'Add an Intern': {
            promptIntern();
            break;
          }
          case "Create the team page!": {
            createHTML();
            break;
          }
          default:
            console.error( "Don't know what's wrong!" );
          }
      });
  }

  // Create an engineer
  const promptEngineer = () => {
    console.log( "\nPlease enter the 'engineer' employee information:" );
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'Enter engineers name:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a name...';
          },
        },
        {
          type: 'list',
          name: 'engineerLevel',
          message: 'Specify the Engineers level:',
          choices: [
            'Senior Engineer',
            'Junior Engineer'
          ],
        },
        {
          type: 'input',
          name: 'engineerId',
          message: 'Enter engineers id:',
          validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a number...';
          },
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: 'Enter engineers email:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter an email address...';
          },
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: 'Enter GitHub username:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a username on GitHub...';
          },
        },
      ])
      .then( response => {
        const engineerInfo = new Engineer (
          response.engineerName,
          response.engineerLevel,
          response.engineerId,
          response.engineerEmail,
          response.engineerGithub
        );
        const engineerCard = createEngineerCard( engineerInfo );
        aTeamInfo.push( engineerCard );
        addTeamMembers();
      });
  };

  // Create an intern
  const promptIntern = () => {
    console.log( "\nPlease enter the 'intern' employee information:" );
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'Enter interns name:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter a name...';
          },
        },
        {
          type: 'input',
          name: 'internId',
          message: 'Enter interns Id:',
          validate(value) {
            const valid = !isNaN(parseInt(value));
            return valid || 'Please enter a number...';
          },
        },
        {
          type: 'input',
          name: 'internEmail',
          message: 'Enter interns email:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter an email address...';
          },
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'Enter interns school:',
          validate(value) {
            const valid = isNaN(value);
            return valid || 'Please enter the name of the interns school...';
          },
        },
      ])
      .then(response => {
        const internInfo = new Intern (
          response.internName,
          response.internId,
          response.internEmail,
          response.internSchool
        );
        const internCard = createInternCard( internInfo );
        aTeamInfo.push( internCard );
        addTeamMembers();
      });
  };

  // Create the final html:
  function createHTML()
  {
    // write team members to a html file
    const finalTeam = aTeamInfo.join('');

    bError = false;
    fs.mkdir( './output', (error) => {
      if ( error ) {
        if ( error.errno === -4075 ) {
          // directory already exists...
          // console.error(error);
        } else {
          bError = true;
          console.error(error);
        }
      } else {
        if ( bDebugging )
          console.log( "Created ./output folder..." );
      }
    });
    
    if ( !bError ) {
      createIndexHTML( finalTeam, bDebugging );
    }
  }

};

runApp();
