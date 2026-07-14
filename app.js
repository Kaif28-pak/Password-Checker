import { password } from "@inquirer/prompts"

function checkPasswordStrength(password){
    const issue = []

    if(password.length < 8){
        issue.push("Too Short password length")
    }
    if(!/[a-z]/.test(password)){
        issue.push("Must be include small letter")
    }
    if(!/[A-Z]/.test(password)){
        issue.push("Must be include Capital letter")
    }
    if(!/[0-9]/.test(password)){
        issue.push("Must be include 0-9 digit")
    }
    if(!/[^0-9a-zA-Z]/.test(password)){
        issue.push("Must be include 0-9 digit")
    }

    return issue
}

function generatePassword(length = 12){
    const char = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"#$%&'()*+,-./:;<=>?@[\]^_{|}~`
    let password = ""

    for(let i = 0 ; i < length ; i++){
        // random password ek index return karega 
        let randomIndex = Math.floor(Math.random() * char.length)
        password += char[randomIndex]
    }
    return password
}

//  Main Program shuru

console.log("Password Strength Checker ")

// const password = readlineSync.question("Enter your password", {
//     hideEchoBack:true,
//     mask:"*"
// });

const userPassword = await password({
    message: 'Enter a password:',
    mask:'*'
 });

const issues = checkPasswordStrength(userPassword)
if(issues.length === 0){
    console.log("Strong Password! you are good to go ");
} else{
    console.log("\n ❌ You got a week password . Here is what is missing: ");
    issues.forEach(issue =>{
        console.log(`${issue}`);
    })
    const suggestion =  generatePassword();
    console.log("\n💡 Suggestion you a strong password");
    console.log(suggestion); 
}




