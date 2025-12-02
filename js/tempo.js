const calcDistance = document.getElementById('calcDistance');
const calcHours = document.getElementById('calcHours');
const calcMinutes = document.getElementById('calcMinutes');
const calcSeconds = document.getElementById('calcSeconds');

function calculatePace() {
    const distance = parseFloat(calcDistance.value) || 0;
    const hours = parseFloat(calcHours.value) || 0;
    const minutes = parseFloat(calcMinutes.value) || 0;
    const seconds = parseFloat(calcSeconds.value) || 0;

    
    if (distance <= 0) return;

    const totalSeconds = (hours * 3600) + (minutes * 60) + seconds;
    
    if (totalSeconds === 0) return;

    const totalMinutes = totalSeconds / 60;
    const paceDecimal = totalMinutes / distance;
    
    const paceMin = Math.floor(paceDecimal); 
    const paceSec = Math.round((paceDecimal - paceMin) * 60); 
    
    const paceString = `${paceMin}:${paceSec.toString().padStart(2, '0')}`;

    const totalHours = totalSeconds / 3600;
    const speed = (distance / totalHours).toFixed(2); 

    document.getElementById('paceResult').innerHTML = `${paceString} <span class="text-base font-normal">p/km</span>`;
    document.getElementById('speedResult').innerHTML = `${speed} <span class="text-base font-normal">km/h</span>`;
}

[calcDistance, calcHours, calcMinutes, calcSeconds].forEach(input => {
    input.addEventListener('input', calculatePace);
});