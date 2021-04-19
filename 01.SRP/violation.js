class Employee {
  constructor(name, position) {
    this.name = name;
    this.posiiton = position;
  }

  hireEmployee(text) {
    // => save to db
  }

  terminateEmployee(index) {
    // remove from db
  }

  printEmployeeReportInXML() {
    // reportFormatter
  }
  printEmployeeReportInJSON() {}

  getSalary() {
    // calculates salary
  }
}

module.exports = Employee;
