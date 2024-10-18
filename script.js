// Prevent the default form submission for demonstration purposes
document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});
