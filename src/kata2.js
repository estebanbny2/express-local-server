var laps = [1.27, 1.35, 1.32, 1.28, 1.40, 1.29];

function countSlowLaps(laps, threshold) {
    var count = 0;
    for (var i = 0; i < laps.length; i++) {
        if (laps[i] > threshold) {
            count++;
        }
    }
    return count;
}

var slowLapCount = countSlowLaps(laps, 1.30);
console.log("🐢 Tours au-dessus de 1.30s :", slowLapCount);
