document.getElementById('signupButton').addEventListener('click', function() {
    var form = document.getElementById('signupForm');
    form.classList.toggle('hidden');
});
document.getElementById('toggleButton').addEventListener('click', function() {
    var passwordInput = document.getElementById('password');
    var typeAttribute = passwordInput.getAttribute('type');

    if (typeAttribute === 'password') {
        passwordInput.setAttribute('type', 'text');
    } else {
        passwordInput.setAttribute('type', 'password');
    }
});
let day = "Tuesday"

if (day == "Monday!"){
    alert("Today is Monday!") 
}
else if (day == "Tuesday!"){
    alert("Today is Tuesday!")
}
else if (day == "Wednesday!") {
    alert ("Today is Wednesday!")
}
else {
        alert("Today is neither Monday,Tuesday or Wednesday!")
}