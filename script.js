document.addEventListener("DOMContentLoaded", function () {
    // Current year auto update in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Contact form submission handling (opens default mail client with details)
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const name = document.getElementById("name").value;
            const business = document.getElementById("business").value;
            const email = document.getElementById("email").value;
            const service = document.getElementById("service").value;
            const message = document.getElementById("message").value;

            const recipient = "harvantratechnologies@gmail.com";
            const subject = encodeURIComponent(`New Inquiry from ${name} (${business || 'Individual'})`);
            const body = encodeURIComponent(
                `Name: ${name}\n` +
                `Business: ${business}\n` +
                `Email: ${email}\n` +
                `Service Required: ${service}\n\n` +
                `Requirement:\n${message}`
            );

            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        });
    }
});
