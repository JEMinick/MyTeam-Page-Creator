const Employee = require('./employee');

class Engineer extends Employee
{
  constructor( name="", id=0, email="", github="" ) {
    super( name, id, email, 'Engineer' );
    this.setEmployeeGithub(github);
  }

  setEmployeeGithub(github) {
    this.github = github;
  }
  getEmployeeGithub() {
    return this.github;
  }

}

module.exports = Engineer;
