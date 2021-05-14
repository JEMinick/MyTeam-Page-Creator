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
}

module.exports = Intern;
