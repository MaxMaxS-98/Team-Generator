
const Employee = require("../lib/Employee");
// this is a test to see if the employee class can be instantiated
test ("Can instantiate Employee instance", () => {
  const NewEmployee = new Employee();
  expect(typeof(NewEmployee)).toBe("object");
} );
// this is a test to see if the employee class can set a name
test ("Can set name via constructor arguments", () => {
  const name = "Andrew";
  const NewEmployee = new Employee(name);
  expect(NewEmployee.name).toBe(name);
});
// this is a test to see if the employee class can set an id
test ("Can set id via argument", () => {
  const id = 1;
  const NewEmployee = new Employee("Andrew", id);
  expect(NewEmployee.id).toBe(id);
});
// this is a test to see if the employee class can set an email
test ("Can set email via constructor argument", () => {
    const email = "example@gmail.com";
    const NewEmployee = new Employee("Andrew", 1, email);
    expect(NewEmployee.email).toBe(email);
});
// this is a test to see if the employee class can get a name
test ("Can get name via getName()", () => {
    const name = "Andrew";
    const NewEmployee = new Employee(name);
    expect(NewEmployee.getName()).toBe(name);
});
// this is a test to see if the employee class can get an id
test ("Can get id via getId()", () => {
    const id = 1;
    const NewEmployee = new Employee("Andrew", id);
    expect(NewEmployee.getId()).toBe(id);
});
// this is a test to see if the employee class can get an email
test ("Can get email via getEmail()", () => {
    const email = "example@gmail.com";
    const NewEmployee = new Employee("Andrew", 1, email);
    expect(NewEmployee.getEmail()).toBe(email);
});
// this is a test to see if the employee class can get a role
test ("getRole()", () => {
    const role = "Employee";
    const NewEmployee = new Employee("Andrew", 1, "example@gmail.com");
    expect(NewEmployee.getRole()).toBe(role);
});
