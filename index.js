import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    { name: "userGuessedNumber", type: "number", message: "Please Gusseing The Number Between 1 To 10" }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation you Choose The Right Numeber");
}
else {
    console.log("Wrong Number \n Please Try Again\n");
}
;
