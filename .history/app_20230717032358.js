let username = prompt("Enter your username")
validateUsername(username)

let password = prompt("Enter your password") 
console.log(validatePassword(password))

function validateUsername(username) {
    if (username == null) {
        return false
    }
    
    if (username.length > 10) {
        return false
    } else {
        return true
    }
    
} 
function validatePassword(password){
    if (password == null) {
        return false
    }
    if (password.length < 6) {
        return false
    } else {
        return true
    }
}