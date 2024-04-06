document.getElementById('signinButton').addEventListener('click', function() {
    // Redirect to signup page considering different scenarios
    if (confirm('Do you want to sign up for a new account?')) {
      window.location.href = 'sign.html'; // Replace with your actual signup page URL
    } else {
      // Handle user opting out of signup (optional)
      alert('Signup cancelled.');
    }
  });
  var users = [
    { id: 'C001', password: '1234@' },
    { id: 'C002', password: '7890%' },
    { id: 'C003', password: 'fly78%' },
    { id: 'C004', password: '9898@' },
    { id: 'C005', password: '1150:' }
];

function login() {
    // Get input values
    var enteredID = document.getElementById('customerIDTextField').value;
    var enteredPassword = document.getElementById('passwordPasswordField').value;

    // Check if entered credentials match any user
    var validUser = users.find(function(user) {
        return user.id === enteredID && user.password === enteredPassword;
    });

    if (validUser) {
        // Redirect to the home page or perform any other action
        window.location.href = 'home.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
}