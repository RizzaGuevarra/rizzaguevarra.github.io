<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
    (function(){
        emailjs.init("8ICrIV4jgX0zC8ZGw"); 
    })();

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();

        // Collect form data
        let params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        // Send email using EmailJS
        emailjs.send("service_pn4yeya", "template_ltfrzgl", params)
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send message. Please try again.");
        });
    });
</script>
