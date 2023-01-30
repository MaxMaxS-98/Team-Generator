const Employee = require("../lib/Employee");

test ("Can instantiate Employee instance", () => {
  const NewEmployee = new Employee();
  expect(typeof(NewEmployee)).toBe("object");
} );

test ("Can set name via constructor arguments", () => {
  const name = "Andrew";
  const NewEmployee = new Employee(name);
  expect(NewEmployee.name).toBe(name);
});

test ("Can set id via argument", () => {
  const id = 1;
  const NewEmployee = new Employee("Andrew", id);
  expect(NewEmployee.id).toBe(id);
});

test ("Can set email via constructor argument", () => {
    const email = "example@gmail.com";
    const NewEmployee = new Employee("Andrew", 1, email);
    expect(NewEmployee.email).toBe(email);
});

test ("Can get name via getName()", () => {
    const name = "Andrew";
    const NewEmployee = new Employee(name);
    expect(NewEmployee.getName()).toBe(name);
});

test ("Can get id via getId()", () => {
    const id = 1;
    const NewEmployee = new Employee("Andrew", id);
    expect(NewEmployee.getId()).toBe(id);
});

test ("Can get email via getEmail()", () => {
    const email = "example@gmail.com";
    const NewEmployee = new Employee("Andrew", 1, email);
    expect(NewEmployee.getEmail()).toBe(email);
});

test ("getRole()", () => {
    const role = "Employee";
    const NewEmployee = new Employee("Andrew", 1, "example@gmail.com");
    expect(NewEmployee.getRole()).toBe(role);
});
