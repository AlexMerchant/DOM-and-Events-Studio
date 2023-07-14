// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init() {
    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    const rocket = document.getElementById('rocket');
    rocket.style.position= 'absolute';

    // Reset position of 'rocket'
    function resetRocketPosition() {
        rocket.style.left = '0px';
        rocket.style.bottom = '0px';
        spaceShuttleHeight.innerText = '0';
    }

    // Get buttons
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');;
    const rightButton = document.getElementById('right');;
    const leftButton = document.getElementById('left');;

    const ready = window.confirm('Confirm that the shuttle is ready for takeoff.');

    

    // If user confirms they are ready on o
    if(ready) {
        resetRocketPosition();
        flightStatus.innerText = 'Shuttle in flight.';
        shuttleBackground.style.backgroundColor = 'blue';
        spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;

        // If the 'Land' button is clicked
        landButton.addEventListener('click', function() {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerText = 'The shuttle has landed.';
            flightStatus.style.color = 'green';
            shuttleBackground.style.backgroundColor = 'green';
            resetRocketPosition();
        });

        // If the 'Abort Mission' button is clicked
        abortButton.addEventListener('click', function() {
            let abort = window.confirm("Confirm that you want to abort the mission.");

            if(abort) {
                flightStatus.innerText = 'Mission aborted.';
                flightStatus.style.color = 'red';
                shuttleBackground.style.backgroundColor = 'green';
                resetRocketPosition();
            }
        });


        // HANDLE DIRECTIONAL BUTTON 'CLICK' EVENTS
        upButton.addEventListener('click', function() {
            spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) + 10000;
            rocket.style.bottom = `${parseInt(rocket.style.bottom) + 10}px`;
        });

        downButton.addEventListener('click', function() {
            // BONUS: Prevent rocket from going to negative 'bottom' value (stay on screen)
            if (parseInt(rocket.style.bottom) > 0) {
                spaceShuttleHeight.innerText = parseInt(spaceShuttleHeight.innerText) - 10000;
                rocket.style.bottom = `${parseInt(rocket.style.bottom) - 10}px`;
            }
        });

        rightButton.addEventListener('click', function() {
            rocket.style.left = `${parseInt(rocket.style.left) + 10}px`;
        });

        leftButton.addEventListener('click', function() {
            // BONUS: Prevent rocket from going to negative 'left' value (stay on screen)
            if (parseInt(rocket.style.left) > 0) {
                rocket.style.left = `${parseInt(rocket.style.left) - 10}px`;
            }
        });

    }
}

window.addEventListener('load', init);
