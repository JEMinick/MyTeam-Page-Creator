const Engineer = require('../lib/Engineer');

describe( "Engineer Object", () =>
{
  describe( "Object Initialization", () => {
   
    // Allocate:
    it("Can instantiate an Engineer object", () => {
      const sRole = 'Engineer';
      const e = new Engineer();
      expect(typeof e).toBe('object');
      expect(e instanceof Engineer).toEqual(true);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
    });

    // Positive test
    it( "should create an object with no information other than a role of 'Engineer'", () => {
      // Arrange
      const sRole = 'Engineer';
      const e = new Engineer();

      // Act:
      
      // Assert
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
      expect(e.getEmployeeGithub().length).toEqual(0);
    });
  });

  describe( "Engineer Initialization with data", () => {
  
    it( "Can set name during construction", () => {
      // Arrange:
      const sRole = 'Engineer';
      const sName = 'John';
      const e = new Engineer(sName);
      // Assert:
      expect(e.getEmployeeName()).toBe(sName);
      expect(e.getEmployeeId()).toBe(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
      expect(e.getEmployeeRole()).toBe(sRole);
      expect(e.getEmployeeGithub().length).toEqual(0);
    });

    // Positive Tests
    it( "should create an instance of Engineer with all data and retrieve it", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 1234;
      const sEmpEmail = "john@idk.com"
      const sRole = 'Engineer';
      const sGithubID = 'JohnOnGithub';
      const sEngineerLevel = "unknown";
      const e = new Engineer( sName, sEngineerLevel, iEmpID, sEmpEmail, sGithubID );

      // Act:

      // Assert:
      expect(e.getEmployeeName()).toEqual(sName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sEmpEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeGithub()).toEqual(sGithubID);
      expect(e.isSeniorEngineer()).toEqual(false);
    });

    // Negative test
    it( "should throw an error if key data doesn't exist", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 1234;
      const sEmpEmail = "john@idk.com"
      const sRole = 'Engineer';
      const sGithubID = 'JohnOnGithub';
      const sEngineerLevel = "unknown";
      const e = new Engineer( sName, sEngineerLevel, iEmpID, sEmpEmail, sGithubID );

      // Act:

      // Assert:
      expect(e.isMissingKeyInformation()).toEqual(false);
    });
    
  });

  describe( "Engineer Modifications", () => {
    // Positive Tests
    it( "should allow modifications to Engineer information", () => {
      // Arrange:
      const sName = "John";
      const sNewName = "John Doe";
      const iEmpID = 1234;
      const sEmpEmail = "john@idk.com";
      const sNewEmail = "john.doe@idk.com";
      const sRole = 'Engineer';
      const sGithubID = "JohnOnGithub";
      const sNewGithubID = "JohnnyEngineer";
      const sEngineerLevel = "Senior";
      const e = new Engineer( sName, sEngineerLevel, iEmpID, sEmpEmail, sGithubID );

      // Act:
      e.setEmployeeName( sNewName );
      e.setEmployeeEmail( sNewEmail );
      e.setEmployeeGithub( sNewGithubID );
      
      // Assert:
      expect(e.getEmployeeName()).toEqual(sNewName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sNewEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeGithub()).toEqual(sNewGithubID);
    });
    
    // Exception Tests:
    it( "should throw an error if a data modification creates an error", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 1234;
      const sEmpEmail = "john@idk.com"
      const sRole = 'Engineer';
      const sGithubID = 'JohnnyEngineer';
      const e = new Engineer( sName, "", iEmpID, sEmpEmail, sGithubID );

      // Act:
      e.setEmployeeId(0);

      // Assert:
      expect(e.isSeniorEngineer()).toEqual(false);
    });

  });

});
