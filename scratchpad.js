

//

let buffer = Buffer.from('hello')
let string64 = buffer.toString('base64')

//console.log (buffer)
//console.log (string64)

let string64A = Buffer.from('hello').toString('base64')

//console.log (string64A)
let test = "I really want to fucking solve this problem"
btoa(test)
let result = btoa("I really want to fucking solve this problem");
atob(result)
let decode = atob(result)
console.log(result)
console.log(decode)