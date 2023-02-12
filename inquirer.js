const inquirer = require("inquirer");
inquirer.prompt([
    {
        type: "list",
        name: "inputHandlingReview",
        message: `Wat is ur fav clr? \n Your fav clr is: `,
        choices: ["Blue","Pink","White"],
        filter: val =>{
            return val
        }
    }
])
.then(ans =>{
    console.log(`Your fav color is: ${ans} `);
});