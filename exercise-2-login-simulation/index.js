const username = "ayoubyou";
const password = "123456789123";
let attempts = 0;
let isLoggedIn = false;
while(!isLoggedIn && attempts < 3){
    let enteredUsername = "ayoubyouu";
    let enteredPassword = "12345678912";
    if (enteredUsername === username && enteredPassword === password){
        isLoggedIn = true;
        console.log("Access Granted")
    }
    else {
        attempts++;
        console.log("Wrong Credentials")
    }

    }
    if (!isLoggedIn) {
    console.log("Account Locked");
}



