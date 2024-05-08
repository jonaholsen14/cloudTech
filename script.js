document.getElementById('calculateBtn').addEventListener('click', function() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const now = new Date();

    const ageInMilliseconds = now - dob;

    const millisecondsPerSecond = 1000;
    const millisecondsPerMinute = millisecondsPerSecond * 60;
    const millisecondsPerHour = millisecondsPerMinute * 60;
    const millisecondsPerDay = millisecondsPerHour * 24;
    const millisecondsPerWeek = millisecondsPerDay * 7;
    const millisecondsPerMonth = millisecondsPerDay * 30.44; // Average month length
    const millisecondsPerYear = millisecondsPerDay * 365.25; // Average year length

    const years = Math.floor(ageInMilliseconds / millisecondsPerYear);
    const months = Math.floor(ageInMilliseconds / millisecondsPerMonth);
    const weeks = Math.floor(ageInMilliseconds / millisecondsPerWeek);
    const days = Math.floor(ageInMilliseconds / millisecondsPerDay);
    const hours = Math.floor(ageInMilliseconds / millisecondsPerHour);
    const minutes = Math.floor(ageInMilliseconds / millisecondsPerMinute);
    const seconds = Math.floor(ageInMilliseconds / millisecondsPerSecond);

    const result = document.getElementById('result');
    result.innerHTML = `
        <p>Your age is approximately:</p>
        <p>${years} years</p>
        <p>${months} months</p>
        <p>${weeks} weeks</p>
        <p>${days} days</p>
        <p>${hours} hours</p>
        <p>${minutes} minutes</p>
        <p>${seconds} seconds</p>
    `;
});

document.getElementById('darkModeBtn').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});
