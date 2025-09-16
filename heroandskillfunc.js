let attributes2 = [
    "burn", "bleed", "poison", "slow", "retribution", "counterattack", "basicattack",
    "shield", "heal", "rage", "silence", "disarm", "brokenblade", "evasion", "dispel",
    "directdamage", "immunitycontrol", "purify", "devastation", "damagereduction", "lacerate"
];

const attributes = attributes2.sort();



const checkedValues = new Set();

// Dynamically generate checkboxes
const checkboxesContainer = document.getElementById("checkboxes");

attributes.forEach((attr, index) => {
    const Explanation = attributesExplanation[0][attr];
    const li = document.createElement("li");
    li.title = Explanation;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = attr;
    checkbox.value = attr;
    checkbox.addEventListener("change", updateCheckedValues);

    const label = document.createElement("label");
    label.htmlFor = attr;
    label.textContent = attr.charAt(0).toUpperCase() + attr.slice(1);

    li.appendChild(checkbox);
    li.appendChild(label);
    checkboxesContainer.appendChild(li);
});

// Update checked values
function updateCheckedValues(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        checkedValues.add(checkbox.value);
    } else {
        checkedValues.delete(checkbox.value);
    }
    handleHeroSearch();
    handleSkillSearch();
}

// Event listeners for dropdowns
document.getElementById("Herotype").addEventListener("change", () => Showheroes());
document.getElementById("Skilltype").addEventListener("change", () => Showskills());

// Search functionality for heroes
function handleHeroSearch() {
    const searchTerm = document.getElementById("heroSearch").value.trim().toLowerCase();
    Showheroes(searchTerm);
}

// Search functionality for skills
function handleSkillSearch() {
    const searchTerm = document.getElementById("skillSearch").value.trim().toLowerCase();
    Showskills(searchTerm);
}

//Filter and sort heroes or skills
function filterByAttributes(items) {
    return items
        .map(item => {
            const trueValues = attributes.filter(attr => checkedValues.has(attr) && item[attr]);
            const othertrueValues = attributes.filter(attr => !checkedValues.has(attr) && item[attr]);
            return { ...item, trueValues, othertrueValues };
        })
        .filter(item => item.trueValues.length > 0)
        .sort((a, b) => {
            if (b.trueValues.length !== a.trueValues.length) {
                return b.trueValues.length - a.trueValues.length;
            }
            if (a.herotype) {
                const herotypeComparison = a.herotype.localeCompare(b.herotype);
                if (herotypeComparison !== 0) {
                    return herotypeComparison;
                }
            }
            if (a.skilltype) {
                const skillComparison = a.skilltype.localeCompare(b.skilltype);
                if (skillComparison !== 0) {
                    return skillComparison;
                }
            }
            return a.name.localeCompare(b.name);
        });
}



// Sort by multiple properties
function sortByProperties(array, properties) {
    return array
        .map(item => {
            const othertrueValues = attributes.filter(attr => !checkedValues.has(attr) && item[attr]);
            return { ...item, othertrueValues };
        })
        //.filter(item => item.othertrueValues.length > 0)
        .sort((a, b) => {
            for (let property of properties) {
                if (a[property] < b[property]) return -1;
                if (a[property] > b[property]) return 1;
            }
            return 0;
        });
}

// Show heroes
function Showheroes(searchTerm = "") {
    const heroType = document.getElementById("Herotype").value;
    let filteredHeroes = checkedValues.size > 0 ? filterByAttributes(Heroes) : sortByProperties(Heroes, ["herotype", "name"]);
    // Filter by search term
    if (searchTerm) {
        filteredHeroes = filteredHeroes.filter(hero => hero.name.toLowerCase().includes(searchTerm));
    }
    if (heroType != "All") {
        filteredHeroes = filteredHeroes.filter(hero => hero.herotype.includes(heroType));
    }


    /////////////////////
    const resultDiv = document.getElementById("heroes");
    resultDiv.innerHTML = ``;
    filteredHeroes.forEach(hero => {
        resultDiv.innerHTML += `
                <div class="herocard herolist">
                    <div class="heroimg">
                        <img src="Images/Heroes/${hero.name}.png" alt="${hero.name}" title="${hero.name} - Click for summary" style="margin-top: -3px;" onclick="PopUpScreen(event, 'heroes', '${hero.name}')">
                    </div>
                    <div class="heroinfo">
                        <h3>${hero.name}</h3>
                        <p><b>${hero.herotype}</b> - <i>${hero.heroclass}</i></p>
                        <p class="attri"><span>${checkedValues.size > 0 ? `[${hero.trueValues.join(", ")}]` : ""} </span> ${hero.othertrueValues.join(", ")} </p>

                        <div class="heroattributes">
                            <div class="buttona" onclick="updateTroopData('HeroOneId',${hero.id})" title="Add as Main hero">
                                <div class="buttona-side-left gold"></div>
                                <div class="buttona-center gold">
                                    <p>Main Commander</p>
                                </div>
                                <div class="buttona-side-right gold"></div>
                            </div>
                            <div class="buttona" onclick="updateTroopData('HeroTwoId',${hero.id})" title="Add as Secondary hero">
                                <div class="buttona-side-left green"></div>
                                <div class="buttona-center green">
                                    <p>Second Commander</p>
                                </div>
                                <div class="buttona-side-right green"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
    });
    resultDiv.scrollTop = 0;
}


// Show skills
function Showskills(searchTerm = "") {
    const skillType = document.getElementById("Skilltype").value;
    let filteredSkills = checkedValues.size > 0 ? filterByAttributes(Skills) : sortByProperties(Skills, ["skilltype", "name"]);

    // Filter by search term
    if (searchTerm) {
        filteredSkills = filteredSkills.filter(skill => skill.name.toLowerCase().includes(searchTerm));
    }

    if (skillType != "All") {
        filteredSkills = filteredSkills.filter(skill => skill.skilltype.includes(skillType));
    }
    const resultDiv = document.getElementById("skills");
    resultDiv.innerHTML = ``;
    filteredSkills.forEach(skill => {
        resultDiv.innerHTML += `
<div class="herocard herolist">
    <div class="heroimg">
        <img src="Images/Skills/${skill.name.replace(/\s+/g, "-")}.png" alt="${skill.name}" style="margin-top: 6px;" title="${skill.name} - click for Description" onclick="PopUpScreen(event, 'skills', '${skill.name}')" title="Description">
    </div>
    <div class="heroinfo">
        <h3>${skill.name}</h3>
        <p>${skill.skilltype} - ${skill.probability}%</p>
        <p class="attri"><span>${checkedValues.size > 0 ? `[${skill.trueValues.join(", ")}]` : ""} </span> ${skill.othertrueValues.join(", ")} </p>
        <div class="heroattributes">

            <div class="buttona" onclick="updateTroopData('HeroOneSkillSlot3Id',${skill.id})" title="Main Commander's 3d skill slot">
                <div class="buttona-side-left gold"></div>
                <div class="buttona-center gold">
                    <p>1st</p>
                </div>
                <div class="buttona-side-right gold"></div>
            </div>

            <div class="buttona" onclick="updateTroopData('HeroOneSkillSlot4Id',${skill.id})" title="Main Commander's 4th skill slot">
                <div class="buttona-side-left gold"></div>
                <div class="buttona-center gold">
                    <p>2nd</p>
                </div>
                <div class="buttona-side-right gold"></div>
            </div>

            <div class="buttona" onclick="updateTroopData('HeroTwoSkillSlot3Id',${skill.id})" title="Secondary Commander's 3d skill slot">
                <div class="buttona-side-left green"></div>
                <div class="buttona-center green">
                    <p>1st</p>
                </div>
                <div class="buttona-side-right green"></div>
            </div>

            <div class="buttona" onclick="updateTroopData('HeroTwoSkillSlot4Id',${skill.id})" title="Secondary Commander's 4th skill slot">
                <div class="buttona-side-left green"></div>
                <div class="buttona-center green">
                    <p>2nd</p>
                </div>
                <div class="buttona-side-right green"></div>
            </div>

        </div>
    </div>
</div>
        `;

    });
    resultDiv.scrollTop = 0;
}


function PopUpScreen(event, Wat, NameOf, Grade) {
    event.stopPropagation();

    // Remove existing popup if it exists
    if (newDiv) {
        newDiv.remove();
        newDiv = null;
    }

    const container = document.getElementById('game-ui');
    if (!container) {
        console.error('Container #game-ui not found!');
        return;
    }

    // Get the container's position relative to the viewport
    const containerRect = container.getBoundingClientRect();
    const scale = containerRect.width / container.offsetWidth;

    // Get cursor position relative to the container
    // Use clientX/Y and adjust for container's position in the viewport
    const cursorX = (event.clientX - containerRect.left) / scale;
    const cursorY = (event.clientY - containerRect.top) / scale;

    // Get container dimensions
    const containerTrueWidth = container.offsetWidth;
    const containerTrueHeight = container.offsetHeight;


    // Create the new div
    newDiv = document.createElement('div');
    newDiv.classList.add('infoDiv');
    newDiv.style.position = 'absolute'; // Ensure absolute positioning
    newDiv.innerHTML = ``;

    // Populate content
    if (Wat === "heroes") {
        const epics = 
        ["Olena", "Cecia", "Leidolf", "Wooder"];
        let h4class = epics.includes(NameOf) ? `infoDiv-epic` : `infoDiv-legendary`;
        let infoHero = HeroesSkillsAndTalents.filter(hero => hero.name.includes(NameOf));
        infoHero.forEach(hero => {
            newDiv.innerHTML += `    
                <h4 class="${h4class}">${hero.skillonename}</h4>
                <p class="infotype">Type: ${hero.skillonetype}</p>
                <p class="infoprobability">Probability: ${hero.skilloneprob}%</p>
                <p class="infop">${hero.skillonedescr}</p>
                <h4 class="${h4class}">${hero.skillawakename}-(${hero.skillonename} Awakened)</h4>
                <p class="infotype">Type: Awaken</p>
                <p class="infoprobability">Probability: ${hero.skillawakeprob}%</p>
                <p class="infop">${hero.skillawakedescr}</p>    
                <h4 class="${h4class}">${hero.skilltwoname}</h4>
                <p class="infotype">Type: ${hero.skilltwotype}</p>
                <p class="infoprobability">Probability: ${hero.skilltwoprob}%</p>
                <p class="infop">${hero.skilltwodescr}</p>      
                <h5>${hero.talentonename} (Talent 1)</h5>
                <p class="infotype">Type: ${hero.talentonetype}</p>
                <p class="infop">${hero.talentonedescr}</p>    
                <h5>${hero.talenttwoname} (Talent 3)</h5>
                <p class="infotype">Type: ${hero.talentwotype}</p>
                <p class="infop">${hero.talenttwodescr}</p>   
                <h5>${hero.talentthreename} (Talent 6)</h5>
                <p class="infotype">Type: ${hero.talentthreetype}</p>
                <p class="infop">${hero.talentthreedescr}</p>   
            `;
        });
    }
    if (Wat === "skills") {
        const epics = 
        ["Blessed Healing", "Bloody Rage", "Containment", "Fearless", "Gaining Momentum", "Splinter", "Dampened Spirits", "Halo of Sacrifice", 
        "Heightened Chase", "Joint Offense", "Siege", "Tidal Attack", "Broken Armor", "Counterstrike", "Rage Purge", "Solitude", "Tenacity", 
        "First strike", "Halo of Thorns", "Overdraft"];
        let h4class = epics.includes(NameOf) ? `infoDiv-epic` : `infoDiv-legendary`;
        let infoHero = Skills.filter(hero => hero.name.includes(NameOf));
        infoHero.forEach(hero => {
            newDiv.innerHTML += `
                <h4 class="${h4class}">${hero.name}</h4>
                <p class="infotype">Type: ${hero.skilltype}</p>
                <p class="infoprobability">Probability: ${hero.probability}%</p>
                <p class="infop">${hero.description}</p>
            `;
        });
    }

    if (Wat === "mountskills") {
        let infoHero = MountSkills.filter(hero => hero.name.includes(NameOf));
        infoHero.forEach(hero => {
            newDiv.innerHTML += `
                <h4 class="infoDiv-legendary">${hero.name}</h4>
                <p class="infotype">Type: ${hero.skilltype}</p>
                <p class="infoprobability">Skill Element: <img src="Images/Gui/${Grade}-icon.png" class="element-icon selected"></p>
                <p class="infotype">Mount Skill Slot: ${hero.mountskillslot}</p>
                <p class="infop">${hero.description}</p>
            `;
        });
    }

    if (Wat === "equipment") {
        const gradeNames = { common: 0, uncommon: 1, rare: 2, epic: 3, legendary: 4 };
        let infoHero = Equipment.filter(hero => hero.name.includes(NameOf));
        const gradeEffects = infoHero[0].effectsByGrade[Grade.charAt(0).toUpperCase() + Grade.slice(1)]
        infoHero.forEach(hero => {
            newDiv.innerHTML += `
                <h4 class="infoDiv-${Grade}">${hero.name}</h4>
                <p class="infotype">Type: ${hero.type}</p>
                <p class="infoprobability">Slot: ${hero.slot}</p>
                ${Object.entries(gradeEffects).map(([effect, value]) => {
                if (effect !== 'id') {
                    const readableEffect = effect
                        .replace(/([A-Z])/g, ' $1') // Add a space before each uppercase letter
                        .trim() // Remove leading/trailing spaces
                        .replace(/^./, (str) => str.toUpperCase()); // Capitalize the first letter

                    // Add the 'checked' class if the effect is selected
                    return `<p class="infop">${readableEffect} <span>${value}%</span></p>`;
                }
            }).join('')}
            `;
        });
    }

    // Append the new div to the container
    container.appendChild(newDiv);

    // Define the size of the new div
    const divWidth = newDiv.offsetWidth;
    const divHeight = newDiv.offsetHeight;

    // Default position: right side of the cursor, top-aligned
    let divX = cursorX ;
    let divY = cursorY + 15;

    // Check if the div overflows to the right
    const wouldOverflowRight = (divX + divWidth) > containerTrueWidth;

    // Check if the div overflows at the bottom
    const wouldOverflowBottom = (divY + divHeight) > containerTrueHeight;

    // Flip to the left side if it overflows to the right
    if (wouldOverflowRight) {
        divX = cursorX - divWidth;
    }

    // Flip to align bottom edge with cursor if it overflows at the bottom
    if (wouldOverflowBottom) {
        divY = cursorY - divHeight;
    }

    // Clamp to container bounds
    if (divX < 0) divX = 0; // Left edge
    if (divY < 0) divY = 0; // Top edge
    if (divX + divWidth > containerTrueWidth) divX = containerTrueWidth - divWidth; // Right edge
    if (divY + divHeight > containerTrueHeight) divY = containerTrueHeight - divHeight; // Bottom edge

    newDiv.style.left = `${divX}px`;
    newDiv.style.top = `${divY}px`;

    // Fade in
    setTimeout(() => {
        newDiv.style.opacity = '1';
    }, 10);

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (newDiv && !newDiv.contains(e.target)) {
            newDiv.remove();
            newDiv = null;
        }
    }, { once: true }); // Use once: true to avoid multiple listeners
}