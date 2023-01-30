const Intern = require("../lib/Intern");

test ("Can set school via constructor", () => {
    const testSchool = "school name";
    const NewEmployee = new Intern("Alex", 1, "example@gmail.com", testSchool);
    expect(NewEmployee.school).toBe(testSchool);
});

test ("getRole() should return role of Intern", () => {
    const testSchool = "school name";
    const NewEmployee = new Intern("Alex", 1, "example@gmail,.com", testSchool);
    expect(NewEmployee.getRole()).toBe(testValue);
});

test("tesing getRole", () => {
    const testValue = "Intern";
    const NewEmployee = new Intern("Alex", 1, "example@gmail.com", "school name");
    expect(NewEmployee.getRole()).toBe(testValue);
});

