const AccountId = 14432
let AccountEmail = "code@gmail.com"
var AccountPassword = "123"
AccountCity = "Udaipur"
let AccountState ; //undefined

// AccountId = 10  // not allowed

AccountEmail = "abc@gmail.com"
AccountPassword = "321"
AccountCity = "Jaipur"

console.log(AccountId)

/*
Prefer not to use var
Because of issue in block and functional scope
*/

console.table([AccountId, AccountEmail, AccountPassword, AccountCity, AccountState])