const accountId = 1234
let accountEmail = "shreya@google.com"
var accountPassword = "0507"
accountCity = "Pune"

accountEmail = "ssa2503@gmail.com"
accountPassword = "1005"
accountCity = "Bengaluru"

/*
Prefer not to use var
because of issue in block and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);