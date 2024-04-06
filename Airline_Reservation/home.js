function selectTripType(tripType) {
    if (tripType === 'one-way') {
        window.location.href = 'onetrip.html'; 
    } else if (tripType === 'round-trip') {
        window.location.href = 'roundtrip.html';
    }
}