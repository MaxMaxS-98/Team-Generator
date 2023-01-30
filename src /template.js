const generateEmployees = team => {

    const generateManager = manager => {
        return `
        div class="card employee-card">
            div class="card-header">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            div class="c-body">
            <ul class="li-group">
            <li class="li-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="li-item">ID: ${manager.getId()}</li>
            <li class="li-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
            </div>
        </div> `;
    };

    const generateEngineer = engineer => {
        return `
        div class="card employee-card">
            div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            div class="c-body">
            <ul class="li-group">
            <li class="li-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="li-item">ID: ${engineer.getId()}</li>
            <li class="li-item">GitHub: <a href="" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
            </ul>
            </div>
        </div> `;
    };

    const generateIntern = intern => {
        return `
        div class="card employee-card">
            div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            div class="c-body">
            <ul class="li-group">
            <li class="li-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="li-item">ID: ${intern.getId()}</li>
            <li class="li-item">School: ${intern.getSchool()}</li>
            </ul>
            </div>
        </div> `;
    };

    const html = [];

    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => generateManager(manager))
    .map(manager => generateManager(manager)));

    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => generateEngineer(engineer))
    .map(engineer => generateEngineer(engineer)));

    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => generateIntern(intern))
    .map(intern => generateIntern(intern))
    .join(""));

    return html.join("");

};


module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator</title>
    </head>
    <body>
    <header>
    <div class="container">
    <div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
    <h1 class="text-center">My Team</h1>
    </div>
    </div>
    </div>
    </header>
    <main class="container">
    <div class="row">
    <div class="team-area col-12 d-flex justify-content-center">
    ${generateEmployees(team)}
    </div>
    </div>
    </main>
    </body>
    </html> `;
};

             