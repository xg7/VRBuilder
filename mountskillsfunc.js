attributesMounts.forEach((attr, index) => {
    const ExplanationMounts = attributesExplanation[0][attr];
    const liMounts = document.createElement("li");
    liMounts.title = ExplanationMounts;
    const checkboxMounts = document.createElement("input");
    checkboxMounts.type = "checkbox";
    checkboxMounts.id = attr + "-mounts";
    checkboxMounts.value = attr;
    checkboxMounts.addEventListener("change", updateCheckedValuesForMounts);

    const labelMounts = document.createElement("label");
    labelMounts.htmlFor = attr + "-mounts";
    labelMounts.textContent = attr.charAt(0).toUpperCase() + attr.slice(1);
    labelMounts.id = attr + "-mounts-label";

    liMounts.appendChild(checkboxMounts);
    liMounts.appendChild(labelMounts);
    checkboxesContainerMounts.appendChild(liMounts);
});

// Update checked values
function updateCheckedValuesForMounts(event) {
    const checkbox = event.target;
    if (checkbox.checked) {
        checkedValuesForMounts.add(checkbox.value);
    } else {
        checkedValuesForMounts.delete(checkbox.value);
    }

    // Update both slots
    ShowMountSkills();
}

//Filter and sort heroes or skills
function filterByAttributesForMounts(items) {
    return items
        .map(item => {
            const trueValues = attributesMounts.filter(attr => checkedValuesForMounts.has(attr) && item[attr]);
            const othertrueValues = attributesMounts.filter(attr => !checkedValuesForMounts.has(attr) && item[attr]);
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

function sortByPropertiesForMounts(array, properties) {
    return array
        .map(item => {
            const othertrueValues = attributesMounts.filter(attr => !checkedValuesForMounts.has(attr) && item[attr]);
            return { ...item, othertrueValues };
        })
        .sort((a, b) => {
            for (let property of properties) {
                if (a[property] < b[property]) return -1;
                if (a[property] > b[property]) return 1;
            }
            return 0;
        });
}

function ShowMountSkills() {
    // Get the selected element type
    const selectedElement = document.querySelector('input[name="element"]:checked').value;

    // Update both slots
    slots.forEach(slotName => {
        const skillslotType = document.getElementById(`SkillSlot${slotName}Type`).value;
        const searchTerm = document.getElementById(`SkillSearch${slotName}`).value.trim().toLowerCase();

        //let filteredMountSkills = checkedValuesForMounts.size > 0 ? filterByAttributesForMounts(MountSkills) : MountSkills;
        let filteredMountSkills = checkedValuesForMounts.size > 0 ? filterByAttributesForMounts(MountSkills) : sortByProperties(MountSkills, ["skilltype", "name"]);

        // Filter by slot (direct comparison)
        let filteredOutput = filteredMountSkills.filter(skill => skill.mountskillslot === (slotName === "One" ? 1 : 2));

        // Apply search term if provided
        if (searchTerm) {
            filteredOutput = filteredOutput.filter(skill => skill.name.toLowerCase().includes(searchTerm));
        }

        // Apply skillslot type filter if not "All"
        if (skillslotType !== "All") {
            filteredOutput = filteredOutput.filter(skill => skill.skilltype.includes(skillslotType));
        }

        // Apply element type filter if not "All"
        if (selectedElement !== "all") {
            filteredOutput = filteredOutput.filter(skill => skill.elementtype.includes(selectedElement));
        }

        // Render the results
        const resultDiv = document.getElementById(`Skill${slotName}html`);
        resultDiv.innerHTML = filteredOutput.map(skill => 
            `<div class="equipmentcard">
            <div class="equipmentcardheader" style="background-color: #a36f33;">
<div class="equipmentcardimg" style="width: 15%;">
<img src="Images/Skills/Mountskills/${skill.name.replace(/\s+/g, "-")}-small.png" alt="${skill.name}" style="" title="${skill.name}">
</div>
<div class="equipmentheadtext">
<h4>${skill.name}</h4>   
</div>
</div>
<div class="equipmentcardcontent">
<p>
  <b>${skillslotType == skill.skilltype ? `<em>[${skill.skilltype}]</em>` : skill.skilltype}</b> - 
  <i>${skill.elementtype.map(element => 
    element === selectedElement ? 
      `<img src="Images/Gui/${element}-icon.png" title="${element}" class="element-icon selected">` : 
      `<img src="Images/Gui/${element}-icon.png" title="Also in ${element}" class="element-icon">`
  ).join("")}</i>
</p><p><em>${checkedValuesForMounts.size > 0 ? `[${skill.trueValues.join(", ")}]` : ""}</em> ${skill.othertrueValues.join(", ")}</p>            
<p class="description" style="background:#bcc3c4;">${skill.description}</p>
</div>
 <div class="equipmentcardbottombuttons">
 ${selectedElement !== "all" ?
                    `<div class="buttona" onclick="updateMountSkills('HeroOneMountSkillSlot${slotName == "One" ? 1 : 2}Id',${skill.id},'HeroOneMountSkillElement','${selectedElement}')" title="Add as Main hero">
                        <div class="buttona-side-left gold"></div>
                        <div class="buttona-center gold"><p>Main Commander</p></div>
                        <div class="buttona-side-right gold"></div>
                    </div>
                    <div class="buttona" onclick="updateMountSkills('HeroTwoMountSkillSlot${slotName == "One" ? 1 : 2}Id', ${skill.id},'HeroTwoMountSkillElement','${selectedElement}')" title="Add as Secondary hero">
                        <div class="buttona-side-left green"></div>
                        <div class="buttona-center green"><p>Second Commander</p></div>
                        <div class="buttona-side-right green"></div>
                    </div>` : `<p style="color:rgb(255, 97, 97);">Select Element to add to hero!</p>`}


                </div>
</div>`).join("");
resultDiv.scrollTop = 0;
    });
    
}







// Event Listeners for Radio Buttons
document.querySelectorAll('input[name="element"]').forEach(radio => {
    radio.addEventListener("change", () => {
        // Capture search terms from both text fields
        const searchTermOne = document.getElementById("SkillSearchOne").value.trim().toLowerCase();
        const searchTermTwo = document.getElementById("SkillSearchTwo").value.trim().toLowerCase();

        // Update both slots with their respective search terms
        ShowMountSkills();
    });
});

// Event Listeners for Search Inputs and Dropdowns
document.getElementById("SkillSearchOne").addEventListener("input", () => ShowMountSkills());
document.getElementById("SkillSlotOneType").addEventListener("change", () => ShowMountSkills());
document.getElementById("SkillSearchTwo").addEventListener("input", () => ShowMountSkills());
document.getElementById("SkillSlotTwoType").addEventListener("change", () => ShowMountSkills());

// Initial Load
document.addEventListener("DOMContentLoaded", () => {
    ShowMountSkills();
});