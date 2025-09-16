function selectWindow(typeOfWindow) {
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => {
      if (window.id === typeOfWindow) {
        window.style.display = 'block'; // Ensure the element is visible
        setTimeout(() => {
          window.classList.add('active'); // Add the active class after a small delay
        }, 10); // Small delay to ensure display is set before transition
      } else {
        window.classList.remove('active'); // Remove the active class
        setTimeout(() => {
          window.style.display = 'none'; // Hide the element after the transition
        }, 100); // Match the transition duration
      }
    });
  }
function updateLog(message, typeOfError) {
    logCounter = logCounter + 1;
    document.getElementById("logcounter").innerHTML = `${logCounter > 99 ? `99+` : `${logCounter}`}`;
    document.getElementById("logcontent").innerHTML += `<p class="log-entry ${typeOfError}">${message}</p>`;
    document.getElementById("logcontent").scrollTo(0, document.getElementById("logcontent").scrollHeight);
    //document.getElementById("logcontent").scrollTo = 0;
}