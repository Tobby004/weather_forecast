let username= prompt("Enter your username")
console.log(validateUsername(username))


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