const Employee = require('./employee');

class Intern extends Employee {
  constructor( name="", id=0, email="", school="" ) {
    super( name, id, email, 'Intern' );
    this.setEmployeeSchool( school) ;
  }

  setEmployeeSchool( school ){
    this.school = school;
  }
  getEmployeeSchool() {
    return this.school;
  }

  isMissingKeyInformation() {
    return( this.getEmployeeName().length === 0 
            || this.getEmployeeSchool().length === 0 );
  }

}

module.exports = Intern;
