function displayWelcomeMessage() {
            var name = document.getElementById('name').value;
            var welcomeMessage = document.getElementById('welcome-message');
            welcomeMessage.textContent = "Welcome, Mr./Ms. " + name;
        }