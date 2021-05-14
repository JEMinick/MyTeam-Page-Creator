const Manager = require('../lib/Manager');

describe( "Manager Object", () =>
{
  describe( "Object Initialization", () => {
    // Allocate:
    it("Can instantiate a Manager object", () => {
      const sRole = 'Manager';
      const e = new Manager();
      expect(typeof e).toBe('object');
      expect(e instanceof Manager).toEqual(true);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
    });

    // Positive test
    it( "should create an object with no information other than a role of 'Manager'", () => {
      // Arrange
      const sRole = 'Manager';
      const e = new Manager();

      // Act:
      
      // Assert
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
      expect(e.getOfficeNumber()).toEqual(0);
    });
  });

  describe( "Manager Initialization with data", () => {
  
    it( "Can set name during construction", () => {
      // Arrange:
      const sRole = 'Manager';
      const sName = 'Jane';
      const e = new Manager(sName);
      // Assert:
      expect(e.getEmployeeName()).toBe(sName);
      expect(e.getEmployeeId()).toBe(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
      expect(e.getEmployeeRole()).toBe(sRole);
      expect(e.getOfficeNumber()).toEqual(0);
    });

    // Positive Tests
    it( "should create an instance of Manager with all data and retrieve it", () => {
      // Arrange:
      const sName = "Jane";
      const iEmpID = 9876;
      const sEmpEmail = "jane@idk.com"
      const sRole = 'Manager';
      const iOfficeNo = 9999;
      const e = new Manager( sName, iEmpID, sEmpEmail, iOfficeNo );

      // Act:

      // Assert:
      expect(e.getEmployeeName()).toEqual(sName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sEmpEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getOfficeNumber()).toEqual(iOfficeNo);
    });

    // Exception test
    it( "should throw an error if key data doesn't exist", () => {
      // Arrange:
      const sName = "Jane";
      const iEmpID = 0;
      const sEmpEmail = "jane@idk.com"
      const sRole = 'Manager';
      const e = new Manager( sName, iEmpID, sEmpEmail );

      // Act:

      // Assert:
      expect(e.isMissingKeyInformation()).toEqual(true);
    });
    
  });

  describe( "Manager Modifications", () => {
    // Positive Tests
    it( "should allow modifications to Manager information", () => {
      // Arrange:
      const sName = "Jane";
      const sNewName = "Jane Doe";
      const iEmpID = 9876;
      const sEmpEmail = "jane@idk.com";
      const sNewEmail = "jane.doe@idk.com";
      const sRole = 'Manager';
      const iOfficeNo = 9998;
      const iNewOfficeNo = 9999;
      const e = new Manager( sName, iEmpID, sEmpEmail, iOfficeNo );

      // Act:
      e.setEmployeeName( sNewName );
      e.setEmployeeEmail( sNewEmail );
      e.setOfficeNumber( iNewOfficeNo );
      
      // Assert:
      expect(e.getEmployeeName()).toEqual(sNewName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sNewEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getOfficeNumber()).toEqual(iNewOfficeNo);
    });
    
    // Negative Tests:
    it( "should throw an error if a data modification creates an error", () => {
      // Arrange:
      const sName = "Jane";
      const iEmpID = 9876;
      const sEmpEmail = "jane@idk.com"
      const sRole = 'Manager';
      const e = new Manager( sName, iEmpID, sEmpEmail );

      // Act:
      e.setEmployeeId(-9876);

      // Assert:
      expect(e.isMissingKeyInformation()).toEqual(true);
    });

  });

});
