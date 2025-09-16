    
function filterEquipment() {
    // Get selected type, slot, and grade
    const selectedType = document.querySelector('input[name="equipment"]:checked')?.value || 'all';
    const selectedSlot = document.querySelector('input[name="weapon"]:checked')?.value || 'all';
    const selectedGrade = document.querySelector('input[name="grade"]:checked')?.value || 'all';

    // Get selected effects (checkboxes)
    const selectedEffects = Array.from(document.querySelectorAll('#Equipment input[type="checkbox"]:checked')).map(cb => cb.value);

    // Filter the equipment array
    const filteredEquipment = Equipment.filter(equip => {
        // Type filter
        const typeMatch = selectedType === 'all' || equip.type.toLowerCase() === selectedType;

        // Slot filter
        const slotMatch = selectedSlot === 'all' || equip.slot.toLowerCase() === selectedSlot;

        // Grade filter
        const gradeMatch = selectedGrade === 'all' || equip.effectsByGrade[selectedGrade.charAt(0).toUpperCase() + selectedGrade.slice(1)];

        // Effects filter
        const effectsMatch = selectedEffects.length === 0 || selectedEffects.some(effect => {
            const gradeEffects = equip.effectsByGrade[selectedGrade.charAt(0).toUpperCase() + selectedGrade.slice(1)];
            return gradeEffects && gradeEffects[effect];
        });

        return typeMatch && slotMatch && gradeMatch && effectsMatch;
    });

    // Display the filtered equipment
    displayEquipment(filteredEquipment);
}

function displayEquipment(equipmentList) {
    const container = document.getElementById('newequipment');
    if (!container) {
        console.error("Container for equipment not found!");
        return;
    }

    container.innerHTML = ''; // Clear previous results

    // Get selected effects (checkboxes)
    const selectedEffects = Array.from(document.querySelectorAll('#Equipment input[type="checkbox"]:checked')).map(cb => cb.value);

    equipmentList.forEach(equip => {
        const card = document.createElement('div');
        card.className = 'equipmentcard';

        // Get the effects for the selected grade
        const selectedGrade = document.querySelector('input[name="grade"]:checked')?.value || 'common';
        const gradeEffects = equip.effectsByGrade[selectedGrade.charAt(0).toUpperCase() + selectedGrade.slice(1)];
        const gradeid = {common: 1, uncommon: 2, rare: 3, epic: 4, legendary: 5}

        // Build the card content
        card.innerHTML = `
            <div class="equipmentcardheader">
                <div class="equipmentcardimg ${selectedGrade}img"><img src="Images/Equipment/${equip.name.replace(/\s+/g, '-')}.png"></div>
                <div class="equipmentheadtext">
                <p>${equip.type} - ${equip.slot}</p>
                <h4 class="${selectedGrade}h4">${equip.name}</h4>                
                </div>
                <div class="equipmentcardheaderbuttons">
                    <div class="buttona" onclick="updateEquipment('HeroOne', '${equip.slot}', ${equip.id}, ${gradeid[selectedGrade]})" title="Add as Main hero">
                        <div class="buttona-side-left gold"></div>
                        <div class="buttona-center gold"><p>Main Commander</p></div>
                        <div class="buttona-side-right gold"></div>
                    </div>
                    <div class="buttona" onclick="updateEquipment('HeroTwo', '${equip.slot}', ${equip.id}, ${gradeid[selectedGrade]})" title="Add as Secondary hero">
                        <div class="buttona-side-left green"></div>
                        <div class="buttona-center green"><p>Second Commander</p></div>
                        <div class="buttona-side-right green"></div>
                    </div>
                </div>
            </div>
            <div class="equipmentcardcontent">
                ${Object.entries(gradeEffects).map(([effect, value]) => {
                    if (effect !== 'id') {
                        const readableEffect = effect
                            .replace(/([A-Z])/g, ' $1') // Add a space before each uppercase letter
                            .trim() // Remove leading/trailing spaces
                            .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter

                        // Check if the effect is in the selectedEffects array
                        const isChecked = selectedEffects.includes(effect);

                        // Add the 'checked' class if the effect is selected
                        return `<p class="${isChecked ? 'checked' : ''}">${readableEffect} <span>${value}%</span></p>`;
                    }
                }).join('')}
            </div>
        `;

        container.appendChild(card);
    });
}

// Add event listeners to all radio buttons and checkboxes
// Add event listeners to specific radio buttons and checkboxes
document.querySelectorAll('#Equipment input[type="radio"], #Equipment input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', filterEquipment);
});
// Initial display of all equipment

