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
 //let age = 18
    //let canVote = (age > 16) ? true : false
    //console.log (canVote)

 // while loop
 let i = 0;

 whlie (i =10){
    console.log(i)
    i++
 }