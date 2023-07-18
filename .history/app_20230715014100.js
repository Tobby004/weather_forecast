function showCredentials (callBack){
    const username = "Tobi" ;
    const password = "Taiwo" ;
    callBack(username, password);
}

function displayCredentials (username , password) {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    alert(showCredentials)
}
showCredentials(displayCredentials);