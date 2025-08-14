document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Stop form from submitting

  // Get form values
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  // Error message elements
  let nameError = document.getElementById('nameError');
  let emailError = document.getElementById('emailError');
  let messageError = document.getElementById('messageError');
  let successMsg = document.getElementById('successMsg');

  // Reset errors
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMsg.textContent = '';

  // Email regex
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  let isValid = true;

  // Name validation
  if (name === '') {
    nameError.textContent = 'Name is required';
    isValid = false;
  }

  // Email validation
  if (email === '') {
    emailError.textContent = 'Email is required';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = 'Invalid email format';
    isValid = false;
  }

  // Message validation
  if (message === '') {
    messageError.textContent = 'Message is required';
    isValid = false;
  }

  // If valid, show success
  if (isValid) {
    successMsg.textContent = '✅ Message sent successfully (simulation only)';
    document.getElementById('contactForm').reset();
  }
});
