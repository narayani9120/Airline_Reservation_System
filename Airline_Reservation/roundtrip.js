var departFromInput, goingToInput;

document.addEventListener('DOMContentLoaded', function () {
    // DOM elements
    departFromInput = document.getElementById('departFrom');
    goingToInput = document.getElementById('goingTo');

    // Event listeners
    document.getElementById('goBackBtn').addEventListener('click', goBack);
    //document.getElementById('checkRefundBtn').addEventListener('click', checkRefund);
    document.getElementById('checkAvailabilityBtn').addEventListener('click', checkAvailability);

    // Round trip event listeners
    document.getElementById('roundGoBackBtn').addEventListener('click', roundGoBack);
    document.getElementById('CheckAvailabilityBtn').addEventListener('click', roundCheckAvailability);

    function goBack() {
        window.location.href = 'home.html';
    }

    function checkRefund() {
        alert('Check Your Refund button clicked');
    }

    function checkAvailability() {
        console.log("One Way Button clicked");
        // Get the values entered by the user
        var departFrom = departFromInput.value.toLowerCase();
        var goingTo = goingToInput.value.toLowerCase();

        // Define the allowed combinations and their corresponding HTML files for one way
        var allowedCombinations = {
            'newdelhi-hyderabad': 'fround1.html',
            'chennai-canada': 'fround2.html',
            'germany-southkorea': 'fround3.html'
            // Add more allowed combinations as needed
        };

        redirectToDestination(allowedCombinations, departFrom, goingTo);
    }

    function roundGoBack() {
        window.location.href = 'home.html';
    }

    function roundCheckAvailability() {
        console.log("Round Trip Button clicked");
        // Get the values entered by the user for round trip
        var departFrom = departFromInput.value.toLowerCase();
        var goingTo = goingToInput.value.toLowerCase();

        // Define the allowed combinations and their corresponding HTML files for round trip
        var allowedRoundCombinations = {
            'newdelhi-hyderabad': 'fround1.html',
            'chennai-canada': 'fround2.html',
            'germany-southkorea': 'fround3.html'
            // Add more allowed combinations for round trip as needed
        };

        redirectToDestination(allowedRoundCombinations, departFrom, goingTo);
    }

    function redirectToDestination(allowedCombinations, departFrom, goingTo) {
        // Check if the entered combination is allowed
        var combinationKey = departFrom + '-' + goingTo;
        if (allowedCombinations.hasOwnProperty(combinationKey)) {
            console.log('Redirecting to:', allowedCombinations[combinationKey]);
            // Redirect to the corresponding HTML file
            var destinationHTML = allowedCombinations[combinationKey];
            window.location.href = destinationHTML;
        } else {
            // Display a message if the combination is not allowed
            alert('No flights available for the entered combination.');
        }
    }
});
