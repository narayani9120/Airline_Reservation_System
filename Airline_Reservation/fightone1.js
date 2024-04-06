let availableTickets = 10;

        function bookTicket() {
            if (availableTickets > 0) {
                availableTickets--;
                document.getElementById("available-tickets").innerHTML = `There are currently ${availableTickets} tickets available.`;
                
            } else {
                alert('No more tickets available.');
            }
          
        }
