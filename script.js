//your JS code here. If required.
 // Validation patterns
    const patterns = {
      name: /^[A-Za-z]{3,}/,
      email: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/，
      mobile: /^[0-9]{10}/
    };

    // Validation messages
    const messages = {
      name: "Name must be at least 3 letters (A-Z only)",
      email: "Please enter a valid email address",
      mobile: "Mobile number must be exactly 10 digits"
    };

    // Function to validate input
    function validateInput(inputId) {
      const input = document.getElementById(inputId);
      const messageEl = document.getElementById(inputId + '-message');
      const value = input.value.trim();
      
      // Check if pattern matches
      if (patterns[inputId].test(value)) {
        // Valid input
        input.classList.remove('invalid');
        input.classList.add('valid');
        messageEl.textContent = "✓ Valid";
        input.parentElement.classList.remove('invalid');
        input.parentElement.classList.add('valid');
      } else {
        // Invalid input (only if user has entered something)
        input.classList.remove('valid');
        input.classList.add('invalid');
        messageEl.textContent = "✗ " + messages[inputId];
        input.parentElement.classList.remove('valid');
        input.parentElement.classList.add('invalid');
      }
    }

    // Add event listeners for real-time validation
    document.getElementById('name').addEventListener('input', function() {
      if (this.value.trim() !== '') {
        validateInput('name');
      } else {
        // Clear validation when input is empty
        this.classList.remove('valid', 'invalid');
        this.parentElement.classList.remove('valid', 'invalid');
        document.getElementById('name-message').textContent = '';
      }
    });

    document.getElementById('email').addEventListener('input', function() {
      if (this.value.trim() !== '') {
        validateInput('email');
      } else {
        // Clear validation when input is empty
        this.classList.remove('valid', 'invalid');
        this.parentElement.classList.remove('valid', 'invalid');
        document.getElementById('email-message').textContent = '';
      }
    });

    document.getElementById('mobile').addEventListener('input', function() {
      if (this.value.trim() !== '') {
        validateInput('mobile');
      } else {
        // Clear validation when input is empty
        this.classList.remove('valid', 'invalid');
        this.parentElement.classList.remove('valid', 'invalid');
        document.getElementById('mobile-message').textContent = '';
      }
    });
