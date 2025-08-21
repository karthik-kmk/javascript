const accountId = 12345 // cannot be changed

let accountEmail = "kmk@kmk.com" // value can be changed but functional scope(pref use this)

var accountPassword = 123456 // value can be chaged but block scope(pref dont use this )(old version used this and caused lot of problems)

accountCity = "jaipur"//dont use this it works but dont use

let accountState;// can declare variable and just leave wo value ( will show undefined)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]) // console.table just like .log but displays in the table format