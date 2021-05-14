const Employee = require('../lib/employee');

describe( "Employee Object", () =>
{
  describe( "Object Initialization", () => {
    // Allocate:
    it("Can instantiate an Employee instance", () => {
      const sRole = 'Employee';
      const e = new Employee();
      expect(typeof e).toBe('object');
      expect(e instanceof Employee).toEqual(true);
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
    });

    // Positive test
    it( "should create an object with no information other than a role of 'Employeee'", () => {
      // Arrange
      const sRole = 'Employee';
      const e = new Employee();

      // Act:
      
      // Assert
      expect(e.getEmployeeRole()).toEqual(sRole);
      expect(e.getEmployeeName().length).toEqual(0);
      expect(e.getEmployeeId()).toEqual(0);
      expect(e.getEmployeeEmail().length).toEqual(0);
    });
  });

  describe( "Employee Initialization with data", () => {
  
    it( "Can set name during construction", () => {
      // Arrange:
      const sRole = 'Employee';
      const sName = 'John';
      const e = new Employee(sName);
      // Assert:
      expect(e.getEmployeeName()).toBe(sName);
      expect(e.getEmployeeId()).toBe(0);
      expect(e.getEmployeeEmail()).toBe("");
      expect(e.getEmployeeRole()).toBe(sRole);
    });

    // Positive Tests
    it( "should create an instance of Employee with all data and retrieve it", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 7428;
      const sEmpEmail = "john@idk.com"
      const sRole = 'Employee';
      const e = new Employee( sName, iEmpID, sEmpEmail );

      // Act:

      // Assert:
      expect(e.getEmployeeName()).toEqual(sName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sEmpEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
    });

    // Exception test
    it( "should throw an error if key data doesn't exist", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 0;
      const sEmpEmail = "john@idk.com"
      const sRole = 'Employee';
      const e = new Employee( sName, iEmpID, sEmpEmail );

      // Act:

      // Assert:
      expect(e.isMissingKeyInformation()).toEqual(true);
    });
    
  });

  describe( "Employee Modifications", () => {
    // Positive Tests
    it( "should allow modifications to employee information", () => {
      // Arrange:
      const sName = "John Doe";
      const sNewName = "John J. Doe";
      const iEmpID = 7428;
      const sEmpEmail = "john@idk.com";
      const sNewEmail = "john.doe@idk.com";
      const sRole = 'Employee';
      const e = new Employee( sName, iEmpID, sEmpEmail );

      // Act:
      e.setEmployeeName( sNewName );
      e.setEmployeeEmail( sNewEmail );
      
      // Assert:
      expect(e.getEmployeeName()).toEqual(sNewName);
      expect(e.getEmployeeId()).toEqual(iEmpID);
      expect(e.getEmployeeEmail()).toEqual(sNewEmail);
      expect(e.getEmployeeRole()).toEqual(sRole);
    });
    
    // Negative Tests:
    it( "should throw an error if a data modification creates an error", () => {
      // Arrange:
      const sName = "John";
      const iEmpID = 7438;
      const sEmpEmail = "john@idk.com"
      const sRole = 'Employee';
      const e = new Employee( sName, iEmpID, sEmpEmail );

      // Act:
      e.setEmployeeId(-7438);

      // Assert:
      expect(e.isMissingKeyInformation()).toEqual(true);
    });

  });

});

  // describe("getNextTodo", () => {
  //   // Positive test
  //   it("should return the 0th todo element in the 'todos' array without removing it", () => {
  //     // Arrange
  //     const todoList = new TodoList();
  //     const text1 = "Exercise";
  //     const text2 = "Wash Car";
  //     let nextTodo;

  //     // Act
  //     todoList.addTodo(text1);
  //     todoList.addTodo(text2);
  //     nextTodo = todoList.getNextTodo();

  //     // Assert
  //     expect(nextTodo instanceof Todo).toEqual(true);
  //     expect(nextTodo.text).toEqual(text1);
  //     expect(todoList.todos.length).toEqual(2);
  //   });

  //   // Negative test
  //   it("should return undefined if there are no todos", () => {
  //     // Arrange
  //     const todoList = new TodoList();
  //     let nextTodo;

  //     // Act
  //     nextTodo = todoList.getNextTodo();

  //     // Assert
  //     expect(typeof nextTodo).toEqual("undefined");
  //   });
  // });

  // describe("completeNextTodo", () => {
  //   // Positive test
  //   it("should return and remove the next todo in the list", () => {
  //     // Arrange
  //     const todoList = new TodoList();
  //     const text1 = "Make Dinner";
  //     const text2 = "Wash Dishes";
  //     let nextTodo;

  //     // Act
  //     todoList.addTodo(text1);
  //     todoList.addTodo(text2);
  //     nextTodo = todoList.completeNextTodo();

  //     // Assert
  //     expect(nextTodo instanceof Todo).toEqual(true);
  //     expect(nextTodo.text).toEqual(text1);
  //     expect(todoList.todos.length).toEqual(1);
  //     expect(todoList.getNextTodo().text).toEqual(text2);
  //   });
  // });


