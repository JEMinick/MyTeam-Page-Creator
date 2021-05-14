const Intern = require('../lib/Intern');

describe( "Intern Object", () =>
{
  describe( "Object Initialization", () => {
  
    // Allocate:
    it("Can instantiate an Intern object", () => {
      const sRole = 'Intern';
      const e = new Intern();
      expect(typeof e).toBe('object');
      expect(e instanceof Intern).toEqual(true);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
    });

    // Positive test
    it( "should create an object with no information other than a role of 'Intern'", () => {
      // Arrange
      const sRole = 'Intern';
      const e = new Intern();

      // Act:
      
      // Assert
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
      expect(e.getEmployeeSchool().length).toEqual(0);
    });
  });

  describe( "Intern Initialization with data", () => {
  
    it( "Can set name during construction", () => {
      // Arrange:
      const sRole = 'Intern';
      const sName = 'John';
      const e = new Intern(sName);
      // Assert:
      expect(e.getEmployeeName()).toBe(sName);
      expect(e.getEmployeeId()).toBe(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
      expect(e.getEmployeeRole()).toBe(sRole);
      expect(e.getEmployeeSchool().length).toEqual(0);
    });

    // Positive Tests
    it( "should create an instance of Intern with all data and retrieve it", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 4321;
      const sEmpEmail = "john.intern@idk.com"
      const sRole = 'Intern';
      const sSchoolName = 'SchoolOfHardKnocks';
      const e = new Intern( sName, iEmpID, sEmpEmail, sSchoolName );

      // Act:

      // Assert:
      expect(e.getEmployeeName()).toEqual(sName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sEmpEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeSchool()).toEqual(sSchoolName);
    });

    // Exception test
    it( "should throw an error if key data doesn't exist", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 0;
      const sEmpEmail = "john.intern@idk.com"
      const sRole = 'Intern';
      const sSchoolName = 'SchoolOfHardKnocks';
      const e = new Intern( sName, iEmpID, sEmpEmail, sSchoolName );

      // Act:

      // Assert:
      expect(e.isMissingKeyInformation()).toEqual(false);
    });
    
  });

  describe( "Intern Modifications", () => {
    // Positive Tests
    it( "should allow modifications to Intern information", () => {
      // Arrange:
      const sName = "John";
      const sNewName = "John Doe";
      const iEmpID = 4321;
      const sEmpEmail = "john.intern@idk.com";
      const sNewEmail = "johndoe.intern@idk.com";
      const sRole = 'Intern';
      const sSchoolName = 'SchoolOfHardKnocks';
      const sNewSchool = "SchoolOfMasterMinds";
      const e = new Intern( sName, iEmpID, sEmpEmail, sSchoolName );

      // Act:
      e.setEmployeeName( sNewName );
      e.setEmployeeEmail( sNewEmail );
      e.setEmployeeSchool( sNewSchool );
      
      // Assert:
      expect(e.getEmployeeName()).toEqual(sNewName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sNewEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeSchool()).toEqual(sNewSchool);
    });
    
    // Negative Tests:
    it( "should throw an error if a data modification creates an error", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 4321;
      const sEmpEmail = "john@idk.com"
      const sRole = 'Intern';
      const sSchoolName = 'SchoolOfHardKnocks';
      const e = new Intern( sName, iEmpID, sEmpEmail, sSchoolName );

      // Act:
      e.setEmployeeSchool("");

      // Assert:
      expect(e.isMissingKeyInformation()).toEqual(true);
    });

  });

});
