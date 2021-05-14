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

  isMissingKeyInformation() {
    return( this.getEmployeeName().length === 0 
            || this.getEmployeeId() <= 0
            || this.getEmployeeGithub().length === 0 );
  }

}

module.exports = Engineer;
