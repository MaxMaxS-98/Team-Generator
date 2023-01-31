const generateEmployees = team => {

    // this is manager card
    const generateManager = manager => {
        return `
        <div class="card worker-card">
        <div class="employee-header bg-primary">
            <h2 class="employee-name">${manager.getName()}</h2>
            <h3 class="employee-role"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            <div class="card-body">
            </div>
                <ul class="list-group">
                    <li class="list-group-item">${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">${manager.getOfficeNumber()}</li>
                </ul>
            </div>
            </div>`;
    };

    // this is engineer card
    const generateEngineer = engineer => {
        return `
        <div class="card worker-card">
                <div class="employee-header bg-primary">
                    <h2 class="employee-name">${engineer.getName()}</h2>
                    <h3 class="employee-role"><i class="fas fa-mug-hot mr-2"></i>${engineer.getRole()}</h3>
                    <ul class="list-group">
                        <li class="list-group-item">${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub <a href="Github:exampleGithub.com">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            </div>`;
    };
    // this is intern card
    const generateIntern = intern => {
        return `
        <div class="card worker-card">
        <div class="employee-header bg-primary">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
            <ul class="list-group">
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
        </div> `;
    };
    // this is the html that will be generated for the employee cards
    return team.map(employee => {
        if (employee.getRole() === "Manager") {
            return generateManager(employee);
        }

        if (employee.getRole() === "Engineer") {
            return generateEngineer(employee);
        }

        if (employee.getRole() === "Intern") {
            return generateIntern(employee);
        }
    })
        .join('');

};
// this is the html that will be generated for the employee cards and the team page

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
    <div class="container-fluid">
    <div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
    <h1 class="text-center">Employees</h1>
    </div>
    </div>
    </div>
    <div class="container">
    <div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
    ${generateEmployees(team)}
    </div>
    </div>
    </div>
    </body>
    </html> `;
};

// module.exports = generateEmployees;

