const Engineer = require("../lib/Engineer");
// this is a test to see if the engineer class can be instantiated
test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const NewEmployee = new Engineer("Alex", 1, "example@gmail.com", testValue);
    expect(NewEmployee.github).toBe(testValue);
});
// this is a test to see if the engineer class can get a github
test("Testing getGithub should return gitHub ", () => {
    const testGit = "Engineer";
    const NewEmployee = new Engineer("Alex", 1, "example@gmail.com", testGit);
    expect(NewEmployee.getGithub()).toBe(testGit);
});

// this is a test to see if the engineer class can get a role
test("Testing getRole", () => {
    const testRole = "Engineer";
    const NewEmployee = new Engineer("Alex", 1, "example@gmail.com", testRole);
    expect(NewEmployee.getRole()).toBe(testRole);
});
