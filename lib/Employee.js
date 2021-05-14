class Employee
{
  constructor( name="", id=0, email="", role="Employee" ) {
    this.setEmployeeInfo( name, id, email, role );
  }

  setEmployeeInfo( name, id, email, role ) {
    this.setEmployeeName( name );
    this.setEmployeeId( id );
    this.setEmployeeEmail( email );
    this.setEmployeeRole( role );
  }
  setEmployeeName( name ) {
    this.employeeName = name;
  }
  setEmployeeId( id ) {
    this.employeeId = id;
  }
  setEmployeeEmail( email ) {
    this.employeeEmail = email;
  }
  setEmployeeRole( role ) {
    this.employeeRole = role;
  }

  getEmployeeName() {
    return this.employeeName;
  }
  getEmployeeId() {
    return this.employeeId;
  }
  getEmployeeEmail() {
    return this.employeeEmail;
  }
  getEmployeeRole() {
    return this.employeeRole;
  }

  isMissingKeyInformation() {
    return( this.getEmployeeName().length === 0 
            || this.getEmployeeId() <= 0 );
  }

}

module.exports = Employee;
