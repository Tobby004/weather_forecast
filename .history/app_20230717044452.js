// Users database
const users = [
    {
        username: "TestUser",
        password: "TestPassword", // In real-world applications, never store passwords in plain text
        details: {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@example.com"
        }
    },
    // More users...
];

// Function to validate user and return details
function validateUser(username, password, callback) {
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        callback(null, user.details);
    } else {
        callback(new Error("Invalid username or password"), null);
    }
}

// Usage
validateUser("TestUser", "TestPassword", (error, userDetails) => {
    if (error) {
        console.error(error.message);
    } else {
        console.log(userDetails);
    }
});
