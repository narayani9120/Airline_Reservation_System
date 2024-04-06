function goBack() {
    window.location.href = 'home.html'; 
}

function checkAvailability() {
    
    var departFrom = document.getElementById('departFrom').value.toLowerCase();
    var goingTo = document.getElementById('goingTo').value.toLowerCase();

   
    var allowedCombinations = {
        'newdelhi-mumbai': 'fightone1.html',
        'delhi-nepal': 'fightone3.html',
        'hyderabad-malaysia': 'fightone2.html'
        
    };

    
    var combinationKey = departFrom + '-' + goingTo;
    if (allowedCombinations.hasOwnProperty(combinationKey)) {
        
        var destinationHTML = allowedCombinations[combinationKey];
        window.location.href = destinationHTML;
    } else {
      
        alert('No flights available for the entered combination.');
    }
}
