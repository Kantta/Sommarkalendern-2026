document.addEventListener('DOMContentLoaded', () => {
    
    console.log("--- Calendar Script Started ---");

    const targetYear = 2026;
    const targetMonth = 5;

    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    console.log(`The script thinks today is: Year ${currentYear}, Month ${currentMonth}, Day ${currentDay}`);

    const doors = document.querySelectorAll('.calendar-door');

    doors.forEach(door => {
        const doorDate = parseInt(door.dataset.date);
        console.log(`Checking door #${doorDate}...`);

        let isTime_to_Open = false;
        if (currentYear === targetYear && currentMonth === targetMonth && currentDay >= doorDate) {
            isTime_to_Open = true;
        }

        if (currentYear > targetYear) {
            isTime_to_Open = true;
        }
        
        if (isTime_to_Open) {
            console.log(`---> SUCCESS: Unlocking door #${doorDate}`);
            door.classList.add('unlocked');
            door.addEventListener('click', () => {
                window.open(`day${doorDate}.html`, '_blank');
            });
        } else {
            door.classList.add('locked');
        }
    });

    console.log("--- Calendar Script Finished ---");
});