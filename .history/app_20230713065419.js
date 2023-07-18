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


 // conditional operator
 let age =29 
    let canVote = (age > 18) ? true : false
    console.log (canVote)
 