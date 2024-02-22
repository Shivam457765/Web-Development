const accountId = 144553
let accountEmail = "shivam@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2    // Not allowed


accountEmail = "hc@hc.com"
accountPassword = "2121212121"
accountCity = "Bengaluru"

console.log(accountId);

// prefer not to use var
// because of the issue in block scope and functional scope

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);