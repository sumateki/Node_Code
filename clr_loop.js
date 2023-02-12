const chalk =require("chalk");
const clr=["blue","green","white"];
clr.forEach(function(colour){
    console.log(chalk[colour]("hello, world"));
});