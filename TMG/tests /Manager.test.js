const Manager = require("../lib/Manager");
// this is a test to see if the manager class can be instantiated
test ("Can set office number via constructor argument", () => {
    const officeNumber = 3;
    const NewEmployee = new Manager("Alex", 3, "example@gmail.com", officeNumber);
    expect(NewEmployee.officeNumber).toBe(officeNumber);
});
// this is a test to see if the manager class can get an office number
test ("Testing office number via getOfficeNumber()", () => {
    const officeNumber = 3;
    const NewEmployee = new Manager("Alex", 3, "example@gmail.com", officeNumber);
    expect(NewEmployee.getOfficeNumber()).toBe(officeNumber);
});
// this is a test to see if the manager class can get a role
test ("Testing role via getRole()", () => {
    const role = "Manager";
    const NewEmployee = new Manager("Alex", 3, "example@gmail.com", 3);
    expect(NewEmployee.getRole()).toBe(role);
});
