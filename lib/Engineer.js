const Employee = require('./employee');

class Engineer extends Employee
{
  constructor( name="", engLvl="", id=0, email="", github="" ) {
    super( name, id, email, 'Engineer' );
    this.setEngineerLevel(engLvl);
    this.setEmployeeGithub(github);
  }

  setEngineerLevel(engLevel) {
    this.bIsSeniorEngineer = ( engLevel.substr(0,6).toLowerCase() === "senior" ?  true : false );
  }
  isSeniorEngineer() {
    return this.bIsSeniorEngineer;
  }
  getEngineerLevelText() {
    return( this.isSeniorEngineer() ? "Senior" : "Junior" );
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
