// waiting for the page to load
document.addEventListener('DOMContentLoaded', () => {
    // selecting all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // adding click events to the links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // first remove the 'current' class from everyone
            navLinks.forEach(l => l.classList.remove('current'));
            // add it to the one just clicked
            this.classList.add('current');
        });
    });

    // Form Toggle Logic (Email / WhatsApp)
    const toggleBtns = document.querySelectorAll('.toggle-btn');
    const submitBtn = document.querySelector('.submit-form-btn');
    const contactForm = document.querySelector('.group-contact-form');

    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            toggleBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Update the main button text based on selection
            const method = this.innerText;
            submitBtn.innerText = `Send via ${method}`;
        });
    });

    // Handle Form Submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = this.querySelector('input[placeholder="Enter your full name"]').value;
            const email = this.querySelector('input[placeholder="Enter your email address"]').value;
            const phone = this.querySelector('input[placeholder="Enter your phone number"]').value;
            const service = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;

            const activeMethod = document.querySelector('.toggle-btn.active').innerText;

            // Simple validation
            if (!name || !email || !message) {
                alert("Please fill in all required fields (Name, Email, and Message).");
                return;
            }

            // Construct the message body
            const fullMessage = `Hello Group 5,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${service}\n\nMessage: ${message}`;

            if (activeMethod === 'Email') {
                // Open default email client (Leader's email)
                const mailtoUrl = `mailto:kipronoleleito594@gmail.com?subject=Inquiry: ${service}&body=${encodeURIComponent(fullMessage)}`;
                window.location.href = mailtoUrl;
            } else {
                // Open WhatsApp (Leader's number)
                const whatsappUrl = `https://wa.me/254705926417?text=${encodeURIComponent(fullMessage)}`;
                window.open(whatsappUrl, '_blank');
            }
        });
    }
});
