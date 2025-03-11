function sendMessage() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!validateEmail(email)) {
        alert("Invalid email format.");
        return false;
    }
    if(name.length > 100){
        alert("Message must be 100 characters or less");
        return false;
    }

    alert("Your message has been sent successfully!");
    document.getElementById("contactForm").reset();
    return false; 
}


function validateEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}