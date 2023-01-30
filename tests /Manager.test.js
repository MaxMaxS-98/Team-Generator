const Manager = require("../lib/Manager");

test ("Can set office number via constructor argument", () => {
    const officeNumber = 3;
    const NewEmployee = new Manager("Alex", 3, "example@gmail.com", officeNumber);
    expect(NewEmployee.officeNumber).toBe(officeNumber);
});

test ("Testing office number via getOfficeNumber()", () => {
    const officeNumber = 3;
    const NewEmployee = new Manager("Alex", 3, "example@gmail.com", officeNumber);
    expect(NewEmployee.getOfficeNumber()).toBe(officeNumber);
});

test ("Testing role via getRole()", () => {
    const role = "Manager";
    const NewEmployee = new Manager("Alex", 3, "example@gmail.com", 3);
    expect(NewEmployee.getRole()).toBe(role);
});
