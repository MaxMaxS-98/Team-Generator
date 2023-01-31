const Intern = require("../lib/Intern");
// this is a test to see if the intern class can be instantiated
test ("Can set school via constructor", () => {
    const testSchool = "school name";
    const NewEmployee = new Intern("Alex", 1, "example@gmail.com", testSchool);
    expect(NewEmployee.school).toBe(testSchool);
});

// this is a test to see if the intern class can get a school
test ("getRole() should return role of Intern", () => {
    const testSchool = "school name";
    const NewEmployee = new Intern("Alex", 1, "example@gmail,.com", testSchool);
    expect(NewEmployee.getRole()).toBe(testValue);
});
// this is a test to see if the intern class can get a role
test("tesing getRole", () => {
    const testValue = "Intern";
    const NewEmployee = new Intern("Alex", 1, "example@gmail.com", "school name");
    expect(NewEmployee.getRole()).toBe(testValue);
});

