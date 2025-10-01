document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple validation (in a real app, send to a service like Formspree)
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && message) {
        document.getElementById('form-message').textContent = 'Thanks! I\'ll get back to you soon. (This is a demo—form not sent.)';
        this.reset();
    } else {
        document.getElementById('form-message').textContent = 'Please fill out all fields.';
    }
});