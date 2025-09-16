function saveToSessionStorage() {
    sessionStorage.setItem("HeroesAndSkills", JSON.stringify(HeroesAndSkills));
}

function loadFromSessionStorage() {
    const data = sessionStorage.getItem("HeroesAndSkills");
    if (data) {
        HeroesAndSkills = JSON.parse(data);
    }
}

async function shareBuild() {
    try {
        showShareMessage("Generating share link...", "info");
        
        const response = await fetch('save_build.php', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(HeroesAndSkills),
            credentials: 'include'
        });

        // First check if the response is OK
        if (!response.ok) {
            throw new Error(`Server returned ${response.status} status`);
        }

        // Parse the JSON response
        const result = await response.json();
        
        // Debugging: log the response
        console.log("Server response:", result);

        if (result.success && result.url) {
            // Update the share URL input
            const shareUrlInput = document.getElementById('shareurl');
            shareUrlInput.value = result.url;
            
            // Show success message
            showShareMessage("Share link generated! Click 'Get URL' to share.", "success");
            
            // Return the URL in case other functions need it
            return result.url;
        } else {
            // Handle server-side errors
            const errorMsg = result.error || 'Failed to generate share link';
            throw new Error(errorMsg);
        }
    } catch (error) {
        console.error('Sharing failed:', error);
        showShareMessage("Error: " + error.message, "error");
        return null;
    }
}

async function copyToClipboard() {
    const copyText = document.getElementById("shareurl");
    let url = copyText.value;
    
    // If no URL exists, generate one first
    if (!url) {
        if (isArrayEmpty(HeroesAndSkills)) {
            showShareMessage("No data to share", "error");
            return;
        }
        else {
        url = await shareBuild();
        if (!url) return; // Exit if URL generation failed
        }
    }
    
    try {
        await navigator.clipboard.writeText(url);
        showShareMessage("Copied to clipboard!", "success");
    } catch (err) {
        // Fallback method
        copyText.select();
        document.execCommand("copy");
        showShareMessage("Copied! (Using fallback method)", "success");
    }
}

// Helper Functions
function showShareMessage(message, type) {
    const element = document.getElementById('sharetext');
    element.textContent = message;
    element.className = type; // Adds CSS class for styling
    
    if (type === "success") {
        setTimeout(() => element.textContent = "", 3000);
    }
}

function updateUIAfterLoad() {
    // Implement this to update your form fields with the loaded data
    console.log("UI should update with:", HeroesAndSkills);
}
//loadFromSessionStorage();
// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Load any existing session data
    const savedData = loadFromSessionStorage();
    if (savedData) {
        HeroesAndSkills = savedData;
    }
    
    // Check for shared build in URL
    
    // Set up click event for the share URL input
    //document.getElementById('shareurl').addEventListener('click', copyToClipboard);
});

function deleteUrl() {
    document.getElementById('shareurl').value = "";
    showShareMessage("Url deleted", "success");
}