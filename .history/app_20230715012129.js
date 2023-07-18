function showCredentials(callback) {
    const username = "TestUser";
    const password = "TestPassword";
    callback(username, password);
}

function displayCredentials(username, password) {
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
}

showCredentials(displayCredentials);
