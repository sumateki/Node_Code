//take 2 nums as cmd line args
//take one mathemathical op as runtime ques
//apply op to nums and output result
// for this we use switch case to perform arithmetic op
const inquirer = require("inquirer")
const argv = require("yargs")
  .option("n1", {
    alias: "number1",
    demandOption: true,
    describe: "The first num to perform an op on: ",
    type: "number"
  })
  .option("n2",{
    alias: "number2",
    demandOption: true,
    describe: "the scnd num to perform an op on ",
    type: "number"
  }).argv;

  const {number1, number2} = argv;
  inquirer.prompt([
    {
        type: "list",
        name: "operator",
        message: `enter the op u r going to apply: ${number1}, ${number2}`,
        choice: ["Add", "Subtract", "Multiply", "Divide"],
        filter: val =>{
            return val;
        }
    }
  ])
  .then(({op})=>
  {
    let ans;
    switch(op)
    {
        case "ADD":
            ans= number1 + number2;
            break;
        case "SUBTRACT":
            ans= number1 - number2;
            break;
        case "MULTIPLY":
            ans=number1 * number2;
            break;
        case "DIVIDE":
            ans=number1 / number2;
            break;
        default: 
            ans = -1;
    }
    console.log(`The result is: ${ans}`);
  });