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
//string
let firstName = 'Tobi'
let lastName = 'Olaoluwa'
let fullName = `Mr ${firstName} ${lastName}`
 // Mr Tobi Olaoluwa
alert (fullName)
let message = "welcome to ghana/my name is fasuyi/hope am welcome here"
alert(message)