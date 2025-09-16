loadFromSessionStorage();

if (isArrayEmpty(HeroesAndSkills)) {
    document.getElementById("addTroops").innerHTML = `<div class="troopsideheroes has1 active" onclick="addTroop()"><img src="Images/Heroes/add2.png"></div>`;
    updateLog(`Welcome! Start building your Troops!`, `bell`);
    selectWindow('Links');
    addTroop();
}
else {
    updateLog(`Welcome back!`, `bell`);
    selectWindow('HeroesAndSkills');
    document.getElementById("addTroops").innerHTML = `<div class="troopsideheroes has1 active" onclick="addTroop()"><img src="Images/Heroes/add2.png"></div>`;

}

for (let i = 0; i < 5; i++) {
    let countnone = [Object.values(HeroesAndSkills[i]).filter(value => value !== 0).length];
    let countnone2 = [Object.values(HeroesAndSkills[i]).filter(value => value !== 0)];

    if (countnone[0] > 1) {
        TroopCounter = parseInt(countnone2[0][0].replace('Troop ', ''));
        RefreshTroop();
        RefreshHero();
        SelectTroop(TroopCounter - 1)
        overviewHeroOutput();
        overvieweasy();

    }

}


function addTroop() {
    TroopCounter = TroopCounter + 1;
    if (TroopCounter > 1) { updateLog(`<span class="logcontent-span-green">[Added]</span> another Troop [${TroopCounter}/5]`, `ok`); };
    if (TroopCounter == 1) { updateLog(`<span class="logcontent-span-green">[Added]</span> the first Troop [${TroopCounter}/5]`, `ok`);};
    SelectTroop(TroopCounter - 1);
    //selectWindow('HeroesAndSkills');
}

function RefreshTroop() {
    document.getElementById("addTroops").innerHTML = ``;
    if (TroopCounter < 5 && TroopCounter > 0) {
        document.getElementById("addTroops").innerHTML = `<div class="troopsideheroes has1" onclick="addTroop()"><img src="Images/Heroes/add2.png"></div>`;
    }
    if (TroopCounter === 0) {
        document.getElementById("addTroops").innerHTML = `<div class="troopsideheroes has1 active" onclick="addTroop()"><img src="Images/Heroes/add2.png"></div>`;
    }
    for (let i = 0; i < TroopCounter; i++) {
        if (!isArrayEmpty(HeroesAndSkills)) {
            document.getElementById("troopsideheader").innerHTML = `<p id="troopcounter">${TroopCounter}/5</p><img src="Images/Gui/expand.png" class="troopsideheaderexpand" id="troopheaderexpand" onclick="selectWindow('Overview')">`;
        }
        else {
            document.getElementById("troopsideheader").innerHTML = `<p id="troopcounter">${TroopCounter}/5</p>`;
        }
        let active = `" onclick="SelectTroop(${i})"`;
        if (i === TroopSelected) { active = `active"`; }

        document.getElementById("addTroops").innerHTML += `
        <div class="troopsideheroes ${active} id="SideTroop${i}">
        <img src="Images/Heroes/${HeroesAndSkills[i]['HeroOneId'] <= 0 ? 'none' : Heroes[HeroesAndSkills[i]['HeroOneId'] - 1].name}.png">
        <img src="Images/Heroes/${HeroesAndSkills[i]['HeroTwoId'] <= 0 ? 'none' : Heroes[HeroesAndSkills[i]['HeroTwoId'] - 1].name}.png">
        <p>${i + 1}</p>
        </div>`;
    }
}
function hideTroop() {
    document.getElementById("newtroops").classList.remove('newtroops-active');
}

function SelectTroop(troop) {
    if (troop < 0) { troop = 0 }
    TroopSelected = troop;
    RefreshTroop();
    RefreshHero();
}

function RefreshHero() {
    const targetDiv = document.getElementById("newtroops");
    targetDiv.classList.remove('newtroops-active'); // Add the active class after a small delay
    setTimeout(() => {
        targetDiv.classList.add('newtroops-active'); // Add the active class after a small delay
        RefreshHeroOutput();
    }, 100);
}

function RefreshHeroOutput() {
    const targetDiv = document.getElementById("newtroops");
    targetDiv.innerHTML = ''; // Clear the existing content

    let Commander = '';
    let Hero = ['HeroOne', 'HeroTwo'];

    Hero.forEach(hero => {
        let HeroHtml = '';
        let Skill3Html = '';
        let Skill4Html = '';
        let HeadgearHtml = '';
        let WeaponHtml = '';
        let TopHtml = '';
        let BottomHtml = '';
        let MountSkill1Html = ``;
        let MountSkill2Html = ``;

        // Determine if this is the main or secondary commander
        if (hero === 'HeroOne') {
            Commander = 'Main Commander';
        } else {
            Commander = 'Secondary Commander';
        }
        const gradeNames = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
        // Fetch hero data based on ID
        const heroId = HeroesAndSkills[TroopSelected][`${hero}Id`];
        const heroData = Heroes[heroId - 1];

        const skill3Id = HeroesAndSkills[TroopSelected][`${hero}SkillSlot3Id`];
        const skill3Data = Skills[skill3Id - 1]; // Direct lookup

        const skill4Id = HeroesAndSkills[TroopSelected][`${hero}SkillSlot4Id`];
        const skill4Data = Skills[skill4Id - 1]; // Direct lookup

        const weaponId = HeroesAndSkills[TroopSelected][`${hero}WeaponSlotId`];
        const weaponData = Equipment[weaponId - 1]; // Direct lookup
        const weaponGradeId = HeroesAndSkills[TroopSelected][`${hero}WeaponGradeId`];
        const weaponGradeData = gradeNames[weaponGradeId <= 0 ? 0 : weaponGradeId - 1];

        const HeadgearId = HeroesAndSkills[TroopSelected][`${hero}HeadgearSlotId`];
        const HeadgearData = Equipment[HeadgearId - 1]; // Direct lookup
        const HeadgearGradeId = HeroesAndSkills[TroopSelected][`${hero}HeadgearGradeId`];
        const HeadgearGradeData = gradeNames[HeadgearGradeId <= 0 ? 0 : HeadgearGradeId - 1];

        const topId = HeroesAndSkills[TroopSelected][`${hero}TopSlotId`];
        const topData = Equipment[topId - 1]; // Direct lookup
        const topGradeId = HeroesAndSkills[TroopSelected][`${hero}TopGradeId`];
        const topGradeData = gradeNames[topGradeId <= 0 ? 0 : topGradeId - 1];


        const bottomId = HeroesAndSkills[TroopSelected][`${hero}BottomSlotId`];
        const bottomData = Equipment[bottomId - 1]; // Direct lookup
        const bottomGradeId = HeroesAndSkills[TroopSelected][`${hero}BottomGradeId`];
        const bottomGradeData = gradeNames[bottomGradeId <= 0 ? 0 : bottomGradeId - 1];

        const mountskill1Id = HeroesAndSkills[TroopSelected][`${hero}MountSkillSlot1Id`];
        const mountskill1Data = MountSkills[mountskill1Id - 1]; // Direct lookup

        const mountskill2Id = HeroesAndSkills[TroopSelected][`${hero}MountSkillSlot2Id`];
        const mountskill2Data = MountSkills[mountskill2Id - 1]; // Direct lookup

        const mountskillelement = HeroesAndSkills[TroopSelected][`${hero}MountSkillElement`];

        // Generate delete buttons if data exists
        if (heroData) {
            HeroHtml = `
            <img src="Images/Heroes/${heroData.name}.png" alt="${heroData.name}" title="${heroData.name} - Click for summary!" onclick="PopUpScreen(event, 'heroes', '${heroData.name}')"><h2>${heroData.name}</h2>
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}Id')" title="Remove">`;
        }
        else { HeroHtml = `<img src="Images/Heroes/addhero.png" alt="Add Hero" title="Add Hero" onclick="selectWindow('HeroesAndSkills')"><h2>None</h2>`; }

        if (skill3Data) {
            Skill3Html = `
            <div class="newtroopslot"><img src="Images/Skills/Small/${skill3Data.name.replace(/\s+/g, "-")}-small.png" alt="${skill3Data.name}" title="${skill3Data.name} - Click for summary!" onclick="PopUpScreen(event, 'skills', '${skill3Data.name}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}SkillSlot3Id')" title="Remove"></div>`;
        }
        else { Skill3Html = `<div class="newtroopslot" onclick="selectWindow('HeroesAndSkills');"><img src="Images/Skills/Small/add.png" alt="Add Skill" title="Add Skill"></img></div>`; }

        if (skill4Data) {
            Skill4Html = `
            <div class="newtroopslot"><img src="Images/Skills/Small/${skill4Data.name.replace(/\s+/g, "-")}-small.png" alt="${skill4Data.name}" title="${skill4Data.name} - Click for summary!" onclick="PopUpScreen(event, 'skills', '${skill4Data.name}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}SkillSlot4Id')" title="Remove"></div>`;
        }
        else { Skill4Html = `<div class="newtroopslot" onclick="selectWindow('HeroesAndSkills');"><img src="Images/Skills/Small/add.png" alt="Add Skill" title="Add Skill"></img></div>`; }

        if (weaponData) {
            WeaponHtml = `
            <div class="newtroopslot ${weaponGradeData}img"><img src="Images/Equipment/${weaponData.name.replace(/\s+/g, "-")}.png" title="${weaponData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${weaponData.name}','${weaponGradeData}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}WeaponSlotId','${hero}WeaponGradeId')" title="Remove"></div>`;
        }
        else { WeaponHtml = `<div class="newtroopslot noneimg" onclick="selectWindow('Equipment');"><img src="Images/Equipment/none.png" alt="Add Weapon" Title="Add Weapon"></div>`; }

        if (HeadgearData) {
            HeadgearHtml = `
            <div class="newtroopslot ${HeadgearGradeData}img"><img src="Images/Equipment/${HeadgearData.name.replace(/\s+/g, "-")}.png" title="${HeadgearData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${HeadgearData.name}','${HeadgearGradeData}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}HeadgearSlotId','${hero}HeadgearGradeId')" title="Remove"></div>`;
        }
        else { HeadgearHtml = `<div class="newtroopslot noneimg" onclick="selectWindow('Equipment');"><img src="Images/Equipment/none.png" alt="Add Headgear" Title="Add Headgear"></div>`; }

        if (topData) {
            TopHtml = `
            <div class="newtroopslot ${topGradeData}img"><img src="Images/Equipment/${topData.name.replace(/\s+/g, "-")}.png" title="${topData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${topData.name}','${topGradeData}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}TopSlotId','${hero}TopGradeId')" title="Remove"></div>`;
        }
        else { TopHtml = `<div class="newtroopslot noneimg" onclick="selectWindow('Equipment');"><img src="Images/Equipment/none.png" alt="Add Top" Title="Add Top"></div>`; }

        if (bottomData) {
            BottomHtml = `
            <div class="newtroopslot ${bottomGradeData}img"><img src="Images/Equipment/${bottomData.name.replace(/\s+/g, "-")}.png" title="${bottomData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${bottomData.name}','${bottomGradeData}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}BottomSlotId','${hero}BottomGradeId')" title="Remove"></div>`;
        }
        else { BottomHtml = `<div class="newtroopslot noneimg" onclick="selectWindow('Equipment');"><img src="Images/Equipment/none.png" alt="Add Bottom" Title="Add Bottom"></div>`; }

        if (mountskill1Data) {
            MountSkill1Html = `
            <div class="newtroopslot"><img src="Images/Skills/Mountskills/${mountskill1Data.name.replace(/\s+/g, "-")}-small.png" title="${mountskill1Data.name} - Click for summary!" onclick="PopUpScreen(event, 'mountskills', '${mountskill1Data.name}','${mountskillelement}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}MountSkillSlot1Id')" title="Remove">
            <img src="Images/Gui/${mountskillelement}-icon.png" class="mountskillelement" title="${mountskillelement}"></div>`;
        }
        else { MountSkill1Html = `<div class="newtroopslot" onclick="selectWindow('Mount');"><img src="Images/Skills/Small/add.png" alt="Add First Mountskill" Title="Add First MountSkill"></div>`; }

        if (mountskill2Data) {
            MountSkill2Html = `
            <div class="newtroopslot"><img src="Images/Skills/Mountskills/${mountskill2Data.name.replace(/\s+/g, "-")}-small.png" title="${mountskill2Data.name} - Click for summary!" onclick="PopUpScreen(event, 'mountskills', '${mountskill2Data.name}','${mountskillelement}')">
            <img src="Images/Gui/remove.png" class="newtroopremove" onclick="removeFromArray(${TroopSelected},'${hero}MountSkillSlot2Id')" title="Remove">
            <img src="Images/Gui/${mountskillelement}-icon.png" class="mountskillelement" title="${mountskillelement}"></div>`;
        }
        else { MountSkill2Html = `<div class="newtroopslot" onclick="selectWindow('Mount');"><img src="Images/Skills/Small/add.png" alt="Add Second Mountskill" Title="Add Second Mountskill"></div>`; }


        // Generate HTML for the hero and skills
        targetDiv.innerHTML += `
<div class="newtroop">
    <div class="newtroopimg">
     ${HeroHtml}
    </div>
    <div class="newtroopskills">
         ${Skill3Html}
        ${Skill4Html}
    </div>
    <div class="newtroopskills">
        ${MountSkill1Html} 
        ${MountSkill2Html}
    </div>
    <div class="newtroopequipment">
        ${WeaponHtml}
        ${HeadgearHtml}
        ${TopHtml} 
        ${BottomHtml}  
    </div>
    <h3>${Commander}</h3>
</div>
`;
    });
}

function updateTroopData(field, value) {
    const selectedTroop = HeroesAndSkills[TroopSelected];
    let Commander = ``;
    let Skillslotnr = ``;
    if (field === "HeroOneId" || field === "HeroOneSkillSlot3Id" || field === "HeroOneSkillSlot4Id") { Commander = `Main Commander` }
    else { Commander = `Secondary Commander` }
    if (field === "HeroOneSkillSlot3Id" || field === "HeroTwoSkillSlot3Id") { Skillslotnr = `third`; }
    if (field === "HeroOneSkillSlot4Id" || field === "HeroTwoSkillSlot4Id") { Skillslotnr = `fourth`; }

    // Check if the field is a hero (HeroOneId or HeroTwoId)
    if (field === "HeroOneId") {
        const nameHero = `${Heroes[value - 1].name}`;

        if (selectedTroop.HeroOneId === value) {
            // Reset HeroOne values
            resetHeroValues(selectedTroop, "HeroOne");
            updateLog(`<span class="logcontent-span-green">[Added]</span> <span class="logcontent-span-yellow">${nameHero}</span> was already added to ${Commander}. [Troop ${TroopSelected + 1}]`, `ok`);
        } else if (selectedTroop.HeroTwoId === value) {
            // Reset HeroTwo values
            resetHeroValues(selectedTroop, "HeroTwo");
            updateLog(`<span class="logcontent-span-blue">[Swapped]</span> <span class="logcontent-span-yellow">${nameHero}</span> to ${Commander}. [Troop ${TroopSelected + 1}]`, `swapped`);
        }
        else {
            updateLog(`<span class="logcontent-span-green">[Added]</span> <span class="logcontent-span-yellow">${nameHero}</span> as ${Commander}. [Troop ${TroopSelected + 1}]`, `ok`);
        }
        selectedTroop[field] = value;
    }

    if (field === "HeroTwoId") {
        const nameHero = `${Heroes[value - 1].name}`;

        if (selectedTroop.HeroOneId === value) {
            // Reset HeroOne values
            resetHeroValues(selectedTroop, "HeroOne");
            updateLog(`<span class="logcontent-span-blue">[Swapped]</span> <span class="logcontent-span-yellow">${nameHero}</span> to ${Commander}. [Troop ${TroopSelected + 1}]`, `swapped`);
        } else if (selectedTroop.HeroTwoId === value) {
            // Reset HeroTwo values
            resetHeroValues(selectedTroop, "HeroTwo");
            updateLog(`<span class="logcontent-span-green">[Added]</span> <span class="logcontent-span-yellow">${nameHero}</span> was already added to ${Commander}. [Troop ${TroopSelected + 1}]`, `ok`);
        }
        else {
            updateLog(`<span class="logcontent-span-green">[Added]</span> <span class="logcontent-span-yellow">${nameHero}</span> as ${Commander}. [Troop ${TroopSelected + 1}]`, `ok`);
        }
        selectedTroop[field] = value;
    }
    // Check if the field is a skill slot (HeroOneSkillSlot3Id, HeroOneSkillSlot4Id, HeroTwoSkillSlot3Id, HeroTwoSkillSlot4Id)
    else if (
        field === "HeroOneSkillSlot3Id" ||
        field === "HeroOneSkillSlot4Id" ||
        field === "HeroTwoSkillSlot3Id" ||
        field === "HeroTwoSkillSlot4Id"
    ) {
        const nameSkill = `${Skills[value - 1].name}`;

        // Check if the skill already exists in any skill slot for HeroOne or HeroTwo
        if (selectedTroop.HeroOneSkillSlot3Id === value) {
            selectedTroop.HeroOneSkillSlot3Id = 0; // Reset the skill slot
            updateLog(`<span class="logcontent-span-blue">[Swapped]</span> <span class="logcontent-span-yellow">${nameSkill}</span> from Main Commander's third skillslot to ${Commander} ${Skillslotnr} Skill slot. [Troop ${TroopSelected + 1}]`, `swapped`);
        } else if (selectedTroop.HeroOneSkillSlot4Id === value) {
            selectedTroop.HeroOneSkillSlot4Id = 0; // Reset the skill slot
            updateLog(`<span class="logcontent-span-blue">[Swapped]</span> <span class="logcontent-span-yellow">${nameSkill}</span> from Main Commander's fourth skillslot to ${Commander} ${Skillslotnr} Skill slot. [Troop ${TroopSelected + 1}]`, `swapped`);
        } else if (selectedTroop.HeroTwoSkillSlot3Id === value) {
            selectedTroop.HeroTwoSkillSlot3Id = 0; // Reset the skill slot
            updateLog(`<span class="logcontent-span-blue">[Swapped]</span> <span class="logcontent-span-yellow">${nameSkill}</span> from Secondary Commander's third skillslot ${Commander} ${Skillslotnr} Skill slot. [Troop ${TroopSelected + 1}]`, `swapped`);
        } else if (selectedTroop.HeroTwoSkillSlot4Id === value) {
            selectedTroop.HeroTwoSkillSlot4Id = 0; // Reset the skill slot
            updateLog(`<span class="logcontent-span-blue">[Swapped]</span> <span class="logcontent-span-yellow">${nameSkill}</span> from Secondary Commander's fourth skillslot to ${Commander} ${Skillslotnr} Skill slot. [Troop ${TroopSelected + 1}]`, `swapped`);
        }

        else {
            updateLog(`<span class="logcontent-span-green">[Added]</span> <span class="logcontent-span-yellow">${nameSkill}</span> to ${Commander} ${Skillslotnr} Skill slot. [Troop ${TroopSelected + 1}]`, `ok`);
        }
        selectedTroop[field] = value;
    }
    saveToSessionStorage();
    RefreshTroop();
    RefreshHeroOutput();
    overviewHeroOutput();
    overvieweasy();
}

// Helper function to reset hero values
function resetHeroValues(troop, heroPrefix) {
    const fieldsToReset = [
        "Id", "SkillSlot3Id", "SkillSlot4Id", "WeaponSlotId", "WeaponGradeId",
        "HeadgearSlotId", "HeadgearGradeId", "TopSlotId", "TopGradeId",
        "BottomSlotId", "BottomGradeId", "MountSkillSlot1Id", "MountSkillSlot2Id"
    ];

    fieldsToReset.forEach((field) => {
        troop[`${heroPrefix}${field}`] = 0; // Reset to 0 or "none" for string fields
    });
}

function updateEquipment(heroPrefix, equipmentType, mainId, gradeId) {
    // Get the selected troop
    let Commander = ``;
    if (heroPrefix === "HeroOne") { Commander = `Main Commander` } else { Commander = `Secondary Commander`; }
    updateLog(`<span class="logcontent-span-green">[Added]</span> <span class="logcontent-span-yellow">${Equipment[mainId - 1].name}</span> to ${Commander} ${equipmentType} slot. [Troop ${TroopSelected + 1}]`, `ok`);
    const selectedTroop = HeroesAndSkills[TroopSelected];
    selectedTroop[`${heroPrefix}${equipmentType}SlotId`] = mainId;
    selectedTroop[`${heroPrefix}${equipmentType}GradeId`] = gradeId;
    saveToSessionStorage();
    RefreshTroop();
    RefreshHeroOutput();
    overviewHeroOutput();
    overvieweasy();
}

function removeFromArray(Troop, Value, gradeId) {
    let Commander = `${Value.includes('HeroOne') ? 'Main Commander' : 'Secondary Commander'}`;
    let WhatIs = Value.slice(7).replace(/Slot|1|2|3|4|Id/gi, "");
    let NameOfWhat = '';

    if (WhatIs === "") { NameOfWhat = Heroes[HeroesAndSkills[Troop][Value] - 1].name }
    if (WhatIs === "Skill") { NameOfWhat = Skills[HeroesAndSkills[Troop][Value] - 1].name }
    if (WhatIs === "MountSkill") { NameOfWhat = MountSkills[HeroesAndSkills[Troop][Value] - 1].name }
    if (WhatIs === "Bottom" || WhatIs === "Top" || WhatIs === "Headgear" || WhatIs === "Weapon") { NameOfWhat = Equipment[HeroesAndSkills[Troop][Value] - 1].name }

    HeroesAndSkills[Troop][Value] = 0;
    if (gradeId) {
        HeroesAndSkills[Troop][gradeId] = 0;
    }
    slots.forEach(slotName => {
        if (Value == `Hero${slotName}MountSkillSlot1Id` && HeroesAndSkills[Troop][`Hero${slotName}MountSkillSlot2Id`] === 0) {
            HeroesAndSkills[Troop][`Hero${slotName}MountSkillElement`] = 0;
        }
        if (Value == `Hero${slotName}MountSkillSlot2Id` && HeroesAndSkills[Troop][`Hero${slotName}MountSkillSlot1Id`] === 0) {
            HeroesAndSkills[Troop][`Hero${slotName}MountSkillElement`] = 0;
        }
    });
    updateLog(`<span class="logcontent-span-red">[Removed]</span> <span class="logcontent-span-yellow">${NameOfWhat}</span> from ${Commander} [Troop ${TroopSelected + 1}]`, `removed`);
    saveToSessionStorage();
    RefreshHeroOutput();
    RefreshTroop();
    overviewHeroOutput();
    overvieweasy();
}

function updateMountSkills(herospot, mountskillid, mountskillelement, Element) {
    const selectedTroop = HeroesAndSkills[TroopSelected];
    let matchFound = false; // Flag to track if a match was found

    // Helper function to update skill and refresh UI
    const updateSkillAndRefresh = (skillId, element) => {
        selectedTroop[herospot] = skillId;
        selectedTroop[mountskillelement] = element;
        console.log(`Changed element to ${element}`);
        saveToSessionStorage();
        RefreshTroop();
        RefreshHeroOutput();
        overviewHeroOutput();
        overvieweasy();
        matchFound = true; // Set the flag to true since a match was found
    };

    // If the current element matches or is unset (0), update the skill and exit
    if (selectedTroop[mountskillelement] === Element || selectedTroop[mountskillelement] === 0) {
        updateSkillAndRefresh(mountskillid, Element);
        updateLog(`<span class="logcontent-span-green">[Added]</span> <img src="Images/Gui/${Element}-icon.png"> <span class="logcontent-span-yellow">${MountSkills[mountskillid - 1].name}</span> to ${herospot.includes("HeroOne") ? `Main Commander` : `Secondary Commander`}. [Troop ${TroopSelected + 1}]`, `ok`);
        return; // Exit early
    }

    // If the current element doesn't match, check for compatible elements in other slots
    slots.forEach(slotName => {
        const slot1Id = `Hero${slotName}MountSkillSlot1Id`;
        const slot2Id = `Hero${slotName}MountSkillSlot2Id`;

        // Determine which slot we're working with
        if (herospot === slot1Id || herospot === slot2Id) {
            const otherSlotId = herospot === slot1Id ? slot2Id : slot1Id;
            const mountelement = selectedTroop[otherSlotId];

            // If the other slot is empty, check if the new skill's elementtype matches the current element
            if (!mountelement) {
                const otherskilldataToCheck = MountSkills[mountskillid - 1];
                if (otherskilldataToCheck?.elementtype?.includes(selectedTroop[mountskillelement])) {
                    updateSkillAndRefresh(mountskillid, selectedTroop[mountskillelement]);
                    updateLog(`<span class="logcontent-span-green">[Added]</span> <img src="Images/Gui/${Element}-icon.png"> <span class="logcontent-span-yellow>">${MountSkills[mountskillid - 1].name}</span> to ${herospot.includes("HeroOne") ? `Main Commander` : `Secondary Commander`}. [Troop ${TroopSelected + 1}]`, `ok`);
                    return; // Exit the loop early since we found a match
                }
            }
            // If the other slot is populated, check for matching element types
            else {
                const skilldataToCheck = MountSkills[mountelement - 1];
                const otherskilldataToCheck = MountSkills[mountskillid - 1];

                // Check for matching element types
                if (skilldataToCheck?.elementtype && otherskilldataToCheck?.elementtype) {
                    const matchingElement = skilldataToCheck.elementtype.find(check =>
                        otherskilldataToCheck.elementtype.includes(check)
                    );

                    if (matchingElement) {
                        updateSkillAndRefresh(mountskillid, matchingElement);
                        updateLog(`<span class="logcontent-span-blue">[Changed]</span> Changed element to: <img src="Images/Gui/${matchingElement}-icon.png"> to match the other element of the other skill. Added: <span class="logcontent-span-yellow">${MountSkills[mountskillid - 1].name}</span> to ${herospot.includes("HeroOne") ? `Main Commander` : `Secondary Commander`}. [Troop ${TroopSelected + 1}]`, `swapped`);
                        return; // Exit the loop early since we found a match
                    }
                }
            }
        }
    });

    // If no match was found after all checks, log a message
    if (!matchFound) {
        updateLog(`<span class="logcontent-span-red">[Blocked]</span> The element: <img src="Images/Gui/${Element}-icon.png"> from <span class="logcontent-span-yellow">${MountSkills[mountskillid - 1].name}</span> does not match any elements from the other skill in ${herospot.includes("HeroOne") ? `Main Commander` : `Secondary Commander`}, the other skill has to match any of these element(s): <span class="logcontent-span-green">[${MountSkills[mountskillid - 1]?.elementtype.join(",")}]</span> to be able to work! Either remove the other mount skill from ${herospot.includes("HeroOne") ? `Main Commander` : `Secondary Commander`} or choose a different skill that matches element.`, `notice`);
        //console.log("No match was found. Details:");
        //console.log("Current Element:", selectedTroop[mountskillelement]);
        //console.log("New Skill Element:", Element);
        //console.log("New Skill elementtype:", MountSkills[mountskillid - 1]?.elementtype.join(","));
    }
}

function overviewHeroOutput() {
    for (let i = 0; i < 5; i++) {
        const targetDiv = document.getElementById(`overviewtroop${i + 1}`);
        targetDiv.innerHTML = ``;
        targetDiv.style.display = 'none'
        const summaryDiv = document.getElementById(`summarytroop${i + 1}`);
        summaryDiv.innerHTML = ``;
        summaryDiv.style.display = 'none';
    }

    for (let i = 0; i < TroopCounter; i++) {
        const targetDiv = document.getElementById(`overviewtroop${i + 1}`);
        const summaryDiv = document.getElementById(`summarytroop${i + 1}`);
        targetDiv.style.display = 'flex';
        summaryDiv.style.display = 'flex';
        targetDiv.innerHTML = ``;
        targetDiv.innerHTML = `<div class="overviewtroopnumber"><h1 title="Select Troop" onclick="SelectTroop(${i});">${i + 1}</h1></div>`;

        let Hero = ['HeroOne', 'HeroTwo'];

        Hero.forEach(hero => {
            let HeroHtml = '';
            let Skill3Html = '';
            let Skill4Html = '';
            let HeadgearHtml = '';
            let WeaponHtml = '';
            let TopHtml = '';
            let BottomHtml = '';
            let MountSkill1Html = ``;
            let MountSkill2Html = ``;

            const gradeNames = ['common', 'uncommon', 'rare', 'epic', 'legendary'];
            // Fetch hero data based on ID
            const heroId = HeroesAndSkills[i][`${hero}Id`];
            const heroData = Heroes[heroId - 1];

            const skill3Id = HeroesAndSkills[i][`${hero}SkillSlot3Id`];
            const skill3Data = Skills[skill3Id - 1]; // Direct lookup

            const skill4Id = HeroesAndSkills[i][`${hero}SkillSlot4Id`];
            const skill4Data = Skills[skill4Id - 1]; // Direct lookup

            const weaponId = HeroesAndSkills[i][`${hero}WeaponSlotId`];
            const weaponData = Equipment[weaponId - 1]; // Direct lookup
            const weaponGradeId = HeroesAndSkills[i][`${hero}WeaponGradeId`];
            const weaponGradeData = gradeNames[weaponGradeId <= 0 ? 0 : weaponGradeId - 1];

            const HeadgearId = HeroesAndSkills[i][`${hero}HeadgearSlotId`];
            const HeadgearData = Equipment[HeadgearId - 1]; // Direct lookup
            const HeadgearGradeId = HeroesAndSkills[i][`${hero}HeadgearGradeId`];
            const HeadgearGradeData = gradeNames[HeadgearGradeId <= 0 ? 0 : HeadgearGradeId - 1];

            const topId = HeroesAndSkills[i][`${hero}TopSlotId`];
            const topData = Equipment[topId - 1]; // Direct lookup
            const topGradeId = HeroesAndSkills[i][`${hero}TopGradeId`];
            const topGradeData = gradeNames[topGradeId <= 0 ? 0 : topGradeId - 1];


            const bottomId = HeroesAndSkills[i][`${hero}BottomSlotId`];
            const bottomData = Equipment[bottomId - 1]; // Direct lookup
            const bottomGradeId = HeroesAndSkills[i][`${hero}BottomGradeId`];
            const bottomGradeData = gradeNames[bottomGradeId <= 0 ? 0 : bottomGradeId - 1];

            const mountskill1Id = HeroesAndSkills[i][`${hero}MountSkillSlot1Id`];
            const mountskill1Data = MountSkills[mountskill1Id - 1]; // Direct lookup

            const mountskill2Id = HeroesAndSkills[i][`${hero}MountSkillSlot2Id`];
            const mountskill2Data = MountSkills[mountskill2Id - 1]; // Direct lookup

            const mountskillelement = HeroesAndSkills[i][`${hero}MountSkillElement`];

            // Generate delete buttons if data exists
            if (heroData) {
                HeroHtml = `
            <img src="Images/Heroes/${heroData.name}.png" alt="${heroData.name}" title="${heroData.name} - Click for summary!" onclick="PopUpScreen(event, 'heroes', '${heroData.name}')">
            `;
            }
            else { HeroHtml = `<img src="Images/Heroes/none.png" alt="None" title="None">`; }

            if (skill3Data) {
                Skill3Html = `
            <div class="newtroopslot"><img src="Images/Skills/Small/${skill3Data.name.replace(/\s+/g, "-")}-small.png" alt="${skill3Data.name}" title="${skill3Data.name} - Click for summary!" onclick="PopUpScreen(event, 'skills', '${skill3Data.name}')">
           </div>`;
            }
            else { Skill3Html = `<div class="newtroopslot"></div>`; }

            if (skill4Data) {
                Skill4Html = `
            <div class="newtroopslot"><img src="Images/Skills/Small/${skill4Data.name.replace(/\s+/g, "-")}-small.png" alt="${skill4Data.name}" title="${skill4Data.name} - Click for summary!" onclick="PopUpScreen(event, 'skills', '${skill4Data.name}')">
            </div>`;
            }
            else { Skill4Html = `<div class="newtroopslot"></div>`; }

            if (weaponData) {
                WeaponHtml = `
            <div class="newtroopslot ${weaponGradeData}img"><img src="Images/Equipment/${weaponData.name.replace(/\s+/g, "-")}.png" title="${weaponData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${weaponData.name}','${weaponGradeData}')">
           </div>`;
            }
            else { WeaponHtml = `<div class="newtroopslot noneimg"></div>`; }

            if (HeadgearData) {
                HeadgearHtml = `
            <div class="newtroopslot ${HeadgearGradeData}img"><img src="Images/Equipment/${HeadgearData.name.replace(/\s+/g, "-")}.png" title="${HeadgearData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${HeadgearData.name}','${HeadgearGradeData}')">
            </div>`;
            }
            else { HeadgearHtml = `<div class="newtroopslot noneimg"></div>`; }

            if (topData) {
                TopHtml = `
            <div class="newtroopslot ${topGradeData}img"><img src="Images/Equipment/${topData.name.replace(/\s+/g, "-")}.png" title="${topData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${topData.name}','${topGradeData}')">
            </div>`;
            }
            else { TopHtml = `<div class="newtroopslot noneimg"></div>`; }

            if (bottomData) {
                BottomHtml = `
            <div class="newtroopslot ${bottomGradeData}img"><img src="Images/Equipment/${bottomData.name.replace(/\s+/g, "-")}.png" title="${bottomData.name} - Click for summary!" onclick="PopUpScreen(event, 'equipment', '${bottomData.name}','${bottomGradeData}')">
            </div>`;
            }
            else { BottomHtml = `<div class="newtroopslot noneimg"></div>`; }

            if (mountskill1Data) {
                MountSkill1Html = `
            <div class="newtroopslot"><img src="Images/Skills/Mountskills/${mountskill1Data.name.replace(/\s+/g, "-")}-small.png" title="${mountskill1Data.name} - Click for summary!" onclick="PopUpScreen(event, 'mountskills', '${mountskill1Data.name}','${mountskillelement}')">
            <img src="Images/Gui/${mountskillelement}-icon.png" class="mountskillelement" title="${mountskillelement}"></div>`;
            }
            else { MountSkill1Html = `<div class="newtroopslot"></div>`; }

            if (mountskill2Data) {
                MountSkill2Html = `
            <div class="newtroopslot"><img src="Images/Skills/Mountskills/${mountskill2Data.name.replace(/\s+/g, "-")}-small.png" title="${mountskill2Data.name} - Click for summary!" onclick="PopUpScreen(event, 'mountskills', '${mountskill2Data.name}','${mountskillelement}')">
            <img src="Images/Gui/${mountskillelement}-icon.png" class="mountskillelement" title="${mountskillelement}"></div>`;
            }
            else { MountSkill2Html = `<div class="newtroopslot"></div>`; }


            // Generate HTML for the hero and skills
            targetDiv.innerHTML += `
                                    <div class="newtroop" style="width: 40%;">
                                        <div class="newtroopimg" style="width: 15%;">
                                        ${HeroHtml}
                                        </div>
                                        <div class="newtroopskills">
                                            ${Skill3Html}
                                            ${Skill4Html}
                                        </div>
                                        <div class="newtroopskills">
                                            ${MountSkill1Html} 
                                            ${MountSkill2Html}
                                        </div>
                                        <div class="newtroopequipment">
                                            ${WeaponHtml}
                                            ${HeadgearHtml}
                                            ${TopHtml} 
                                            ${BottomHtml}  
                                        </div>
                                    </div>
                                    `;
        });
        targetDiv.innerHTML += `<div class="removetroop"><img src="/Images/Gui/return.png" title="Remove Troop from que" onclick="deleteTroopAndShiftUp(${i});"> <img src="/Images/Gui/stats.png" title="Click for Troop summary." onclick="ShowHideSummary('summarytroop${i + 1}')"></div>`;
        summaryDiv.innerHTML = summaryHtml(i);
    }
}


function summaryHtml(troop) {
    const epics =
        ["Olena", "Cecia", "Leidolf", "Wooder", "Blessed Healing", "Bloody Rage", "Containment", "Fearless", "Gaining Momentum", "Splinter", "Dampened Spirits", "Halo of Sacrifice",
            "Heightened Chase", "Joint Offense", "Siege", "Tidal Attack", "Broken Armor", "Counterstrike", "Rage Purge", "Solitude", "Tenacity",
            "First strike", "Halo of Thorns", "Overdraft"];
    const gradeKeys = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];

    const arrayData = HeroesAndSkills[troop];
    if (!arrayData) return `<p>No data found for troop: ${troop}</p>`;

    const getHeroData = (heroId) => HeroesSkillsAndTalents[heroId - 1] || null;
    const getSkillData = (skillId) => Skills[skillId - 1] || null;
    const getMountSkillData = (mountSkillId) => MountSkills[mountSkillId - 1] || null;
    const getEquipmentData = (equipmentid) => Equipment[equipmentid - 1] || null;
    const getEquipmentGradeData = (equipment, equipmentgradeid) => {
        if (!equipment || !equipment.effectsByGrade) return null;
        const gradeKeys = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
        const gradeKey = gradeKeys[equipmentgradeid - 1]; // 
        return equipment.effectsByGrade[gradeKey] || null;
    };
    const MainHero = getHeroData(arrayData["HeroOneId"]);
    const SecondHero = getHeroData(arrayData["HeroTwoId"]);

    const MainHeroSkillOne = getSkillData(arrayData["HeroOneSkillSlot3Id"]);
    const SecondHeroSkillOne = getSkillData(arrayData["HeroTwoSkillSlot3Id"]);
    const MainHeroSkillTwo = getSkillData(arrayData["HeroOneSkillSlot4Id"]);
    const SecondHeroSkillTwo = getSkillData(arrayData["HeroTwoSkillSlot4Id"]);

    const MainHeroMountSkillOne = getMountSkillData(arrayData["HeroOneMountSkillSlot1Id"]);
    const SecondHeroMountSkillOne = getMountSkillData(arrayData["HeroTwoMountSkillSlot1Id"]);
    const MainHeroMountSkillTwo = getMountSkillData(arrayData["HeroOneMountSkillSlot2Id"]);
    const SecondHeroMountSkillTwo = getMountSkillData(arrayData["HeroTwoMountSkillSlot2Id"]);

    const MainHeroWeapon = getEquipmentData(arrayData["HeroOneWeaponSlotId"]);
    const MainHeroWeaponGrade = getEquipmentGradeData(MainHeroWeapon, arrayData["HeroOneWeaponGradeId"]);
    const SecondHeroWeapon = getEquipmentData(arrayData["HeroTwoWeaponSlotId"]);
    const SecondHeroWeaponGrade = getEquipmentGradeData(SecondHeroWeapon, arrayData["HeroTwoWeaponGradeId"]);

    const MainHeroHeadgear = getEquipmentData(arrayData["HeroOneHeadgearSlotId"]);
    const MainHeroHeadgearGrade = getEquipmentGradeData(MainHeroHeadgear, arrayData["HeroOneHeadgearGradeId"]);
    const SecondHeroHeadgear = getEquipmentData(arrayData["HeroTwoHeadgearSlotId"]);
    const SecondHeroHeadgearGrade = getEquipmentGradeData(SecondHeroHeadgear, arrayData["HeroTwoHeadgearGradeId"]);

    const MainHeroTop = getEquipmentData(arrayData["HeroOneTopSlotId"]);
    const MainHeroTopGrade = getEquipmentGradeData(MainHeroTop, arrayData["HeroOneTopGradeId"]);
    const SecondHeroTop = getEquipmentData(arrayData["HeroTwoTopSlotId"]);
    const SecondHeroTopGrade = getEquipmentGradeData(SecondHeroTop, arrayData["HeroTwoTopGradeId"]);

    const MainHeroBottom = getEquipmentData(arrayData["HeroOneBottomSlotId"]);
    const MainHeroBottomGrade = getEquipmentGradeData(MainHeroBottom, arrayData["HeroOneBottomGradeId"]);
    const SecondHeroBottom = getEquipmentData(arrayData["HeroTwoBottomSlotId"]);
    const SecondHeroBottomGrade = getEquipmentGradeData(SecondHeroBottom, arrayData["HeroTwoBottomGradeId"]);

    const renderPair = (mainData, secondData, label, FirstClass, SecondClass) => {
        let btag = `<b>`;
        let btag2 = `</b>`;
        if(FirstClass === "Description" || SecondClass === "Description"){btag = ""; btag2 = "";}
        if (!mainData && !secondData) { return ''; }

        if (label === "Probability:" && mainData) { mainData = mainData + "%"; }
        if (label === "Probability:" && secondData) { secondData = secondData + "%"; }
        if(!mainData) {FirstClass = `none`;}
        if(!secondData) {SecondClass = `none`;}
        return `
            <p class="${FirstClass}">${label} ${btag}${mainData || "None"}${btag2}</p>
            <p class="${SecondClass}">${label} ${btag}${secondData || "None"}${btag2}</p>
        `;
    };

    const formatKey = (key) => {
        // Add a space before uppercase letters and capitalize the first letter of each word
        return key
            .replace(/([A-Z])/g, ' $1') // Add space before uppercase letters
            .replace(/^./, (str) => str.toUpperCase()) // Capitalize the first letter
            .trim(); // Remove any leading or trailing spaces
    };

    const renderEquipmentGradeEffects = (mainGrade, secondGrade, label) => {
        let Class1 = ``;
        let Class2 = ``;
        if(!mainGrade){Class1 = `none`;}
        if(!secondGrade){Class2 = `none`;}
        let html = `<div class="${Class1}">`; // Start a div for Main Hero

        // Render Main Hero grade effects
        if (mainGrade) {
            for (const [key, value] of Object.entries(mainGrade)) {
                const formattedKey = formatKey(key);
                if (formattedKey != "Id") {
                    html += `<p>${label} ${formattedKey}: <span>${value}%</span></p>`;
                }
            }
        } else {
            html += ``;
        }

        html += `</div><div class="${Class2}">`; // Close Main Hero div and start Second Hero div

        // Render Second Hero grade effects
        if (secondGrade) {
            for (const [key, value] of Object.entries(secondGrade)) {
                const formattedKey = formatKey(key);
                if (formattedKey != "Id") {
                    html += `<p>${label} ${formattedKey}: <span>${value}%</span>`;
                }
            }
        } else {
            html += ``;
        }

        html += '</div>'; // Close Second Hero div

        return html;
    };

    let returnHtml = '';
    let maintypeclass = epics.includes(MainHero?.name) ? `Epic` : `Legendary`;
    let secondtypeclass = epics.includes(SecondHero?.name) ? `Epic` : `Legendary`;
    let skillmaintypeclass = epics.includes(MainHeroSkillOne?.name) ? `Epic` : `Legendary`;
    let skillsecondtypeclass = epics.includes(SecondHeroSkillOne?.name) ? `Epic` : `Legendary`;
    let skillmaintypeclass2 = epics.includes(MainHeroSkillTwo?.name) ? `Epic` : `Legendary`;
    let skillsecondtypeclass2 = epics.includes(SecondHeroSkillTwo?.name) ? `Epic` : `Legendary`;

    let mainweapongradeclass = gradeKeys[MainHeroWeaponGrade?.id - 1] ? gradeKeys[MainHeroWeaponGrade?.id - 1] : `none`;
    let secondweapongradeclass = gradeKeys[SecondHeroWeaponGrade?.id - 1] ? gradeKeys[SecondHeroWeaponGrade?.id - 1] : `none`;
    let mainheadgeargradeclass = gradeKeys[MainHeroHeadgearGrade?.id - 1] ? gradeKeys[MainHeroHeadgearGrade?.id - 1] : `none`;
    let secondheadgeargradeclass = gradeKeys[SecondHeroHeadgearGrade?.id - 1] ? gradeKeys[SecondHeroHeadgearGrade?.id - 1] : `none`;
    let maintopgradeclass = gradeKeys[MainHeroTopGrade?.id - 1] ? gradeKeys[MainHeroTopGrade?.id - 1] : `none`;
    let secondtopgradeclass = gradeKeys[SecondHeroTopGrade?.id - 1] ? gradeKeys[SecondHeroTopGrade?.id - 1] : `none`;
    let mainbottomgradeclass = gradeKeys[MainHeroBottomGrade?.id - 1] ? gradeKeys[MainHeroBottomGrade?.id - 1] : `none`;
    let secondbottomgradeclass = gradeKeys[SecondHeroBottomGrade?.id - 1] ? gradeKeys[SecondHeroBottomGrade?.id - 1] : `none`;


    // Hero Names
    returnHtml += renderPair(MainHero?.name, SecondHero?.name, "", `${maintypeclass} Hero`, `${secondtypeclass} Hero`);

    // First Skill
    returnHtml += renderPair(MainHero?.skillonename, SecondHero?.skillonename, "First Skill:", `${maintypeclass}`, `${secondtypeclass}`);
    returnHtml += renderPair(MainHero?.skillonetype, SecondHero?.skillonetype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHero?.skilloneprob, SecondHero?.skilloneprob, "Probability:", "Probability", "Probability");
    returnHtml += renderPair(MainHero?.skillonedescr, SecondHero?.skillonedescr, "", "Description", "Description");

    // Second Skill
    returnHtml += renderPair(MainHero?.skilltwoname, SecondHero?.skilltwoname, "Second Skill:", `${maintypeclass}`, `${secondtypeclass}`);
    returnHtml += renderPair(MainHero?.skilltwotype, SecondHero?.skilltwotype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHero?.skilltwoprob, SecondHero?.skilltwoprob, "Probability:", "Probability", "Probability");
    returnHtml += renderPair(MainHero?.skilltwodescr, SecondHero?.skilltwodescr, "", "Description", "Description");

    // Third Skill
    returnHtml += renderPair(MainHeroSkillOne?.name, SecondHeroSkillOne?.name, "Third Skill:", `${skillmaintypeclass}`, `${skillsecondtypeclass}`);
    returnHtml += renderPair(MainHeroSkillOne?.skilltype, SecondHeroSkillOne?.skilltype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHeroSkillOne?.probability, SecondHeroSkillOne?.probability, "Probability:", "Probability", "Probability");
    returnHtml += renderPair(MainHeroSkillOne?.description, SecondHeroSkillOne?.description, "", "Description", "Description");

    // Fourth Skill
    returnHtml += renderPair(MainHeroSkillTwo?.name, SecondHeroSkillTwo?.name, "Fourth Skill:", `${skillmaintypeclass2}`, `${skillsecondtypeclass2}`);
    returnHtml += renderPair(MainHeroSkillTwo?.skilltype, SecondHeroSkillTwo?.skilltype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHeroSkillTwo?.probability, SecondHeroSkillTwo?.probability, "Probability:", "Probability", "Probability");
    returnHtml += renderPair(MainHeroSkillTwo?.description, SecondHeroSkillTwo?.description, "", "Description", "Description");

    // Awakened Skill
    returnHtml += renderPair(MainHero?.skillawakename, SecondHero?.skillawakename, "Awakened Skill:", `${maintypeclass}`, `${secondtypeclass}`);
    returnHtml += renderPair(MainHero?.skillawaketype, SecondHero?.skillawaketype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHero?.skillawakeprob, SecondHero?.skillawakeprob, "Probability:", "Probability", "Probability");
    returnHtml += renderPair(MainHero?.skillawakedescr, SecondHero?.skillawakedescr, "", "Description", "Description");

    // First Mount Skill
    returnHtml += renderPair(MainHeroMountSkillOne?.name, SecondHeroMountSkillOne?.name, "First Mount Skill:", "Legendary", "Legendary");
    returnHtml += renderPair(MainHeroMountSkillOne?.skilltype, SecondHeroMountSkillOne?.skilltype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHeroMountSkillOne?.elementtype?.join(","), SecondHeroMountSkillOne?.elementtype?.join(","), "Elements:", "Elements", "Elements");
    returnHtml += renderPair(MainHeroMountSkillOne?.description, SecondHeroMountSkillOne?.description, "", "Description", "Description");

    // Second Mount Skill
    returnHtml += renderPair(MainHeroMountSkillTwo?.name, SecondHeroMountSkillTwo?.name, "Second Mount Skill:", "Legendary", "Legendary");
    returnHtml += renderPair(MainHeroMountSkillTwo?.skilltype, SecondHeroMountSkillTwo?.skilltype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHeroMountSkillTwo?.elementtype?.join(","), SecondHeroMountSkillTwo?.elementtype?.join(","), "Elements:", "Elements", "Elements");
    returnHtml += renderPair(MainHeroMountSkillTwo?.description, SecondHeroMountSkillTwo?.description, "", "Description", "Description");

    //talents
    returnHtml += renderPair(MainHero?.talentonename, SecondHero?.talentonename, "First Talent:", "Talent", "Talent");
    returnHtml += renderPair(MainHero?.talentonetype, SecondHero?.talentonetype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHero?.talentonedescr, SecondHero?.talentonedescr, "", "Description", "Description");

    returnHtml += renderPair(MainHero?.talenttwoname, SecondHero?.talenttwoname, "Third Talent:", "Talent", "Talent");
    returnHtml += renderPair(MainHero?.talentwotype, SecondHero?.talentwotype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHero?.talenttwodescr, SecondHero?.talenttwodescr, "", "Description", "Description");

    returnHtml += renderPair(MainHero?.talentthreename, SecondHero?.talentthreename, "Sixth Talent:", "Talent", "Talent");
    returnHtml += renderPair(MainHero?.talentthreetype, SecondHero?.talentthreetype, "Type:", "Type", "Type");
    returnHtml += renderPair(MainHero?.talentthreedescr, SecondHero?.talentthreedescr, "", "Description", "Description");

    // Equipment
    returnHtml += renderPair(MainHeroWeapon?.name, SecondHeroWeapon?.name, "Weapon:", `${mainweapongradeclass}`, `${secondweapongradeclass}`);
    returnHtml += renderEquipmentGradeEffects(MainHeroWeaponGrade, SecondHeroWeaponGrade, "");

    returnHtml += renderPair(MainHeroHeadgear?.name, SecondHeroHeadgear?.name, "Headgear:", `${mainheadgeargradeclass}`, `${secondheadgeargradeclass}`);
    returnHtml += renderEquipmentGradeEffects(MainHeroHeadgearGrade, SecondHeroHeadgearGrade, "");

    returnHtml += renderPair(MainHeroTop?.name, SecondHeroTop?.name, "Top:", `${maintopgradeclass}`, `${secondtopgradeclass}`);
    returnHtml += renderEquipmentGradeEffects(MainHeroTopGrade, SecondHeroTopGrade, "");

    returnHtml += renderPair(MainHeroBottom?.name, SecondHeroBottom?.name, "Bottom:", `${mainbottomgradeclass}`, `${secondbottomgradeclass}`);
    returnHtml += renderEquipmentGradeEffects(MainHeroBottomGrade, SecondHeroBottomGrade, "");
    return returnHtml;
}


function deleteTroopAndShiftUp(troopToDelete) {
    // Use troopToDelete directly as the index
    const indexToDelete = troopToDelete;

    // If the index is valid, remove the troop from the array
    if (indexToDelete >= 0 && indexToDelete < HeroesAndSkills.length) {
        HeroesAndSkills.splice(indexToDelete, 1);

        // Update the Troop property for the remaining entries
        for (let i = indexToDelete; i < HeroesAndSkills.length; i++) {
            HeroesAndSkills[i].Troop = `Troop ${i + 1}`;
        }
    } else {
        updateLog(`Invalid index: ${troopToDelete}.`, `notice`);
    }

    // Ensure there are always 5 troop entries
    while (HeroesAndSkills.length < 5) {
        const newTroopNumber = HeroesAndSkills.length + 1;
        HeroesAndSkills.push({
            Troop: `Troop ${newTroopNumber}`,
            HeroOneId: 0,
            HeroOneSkillSlot3Id: 0,
            HeroOneSkillSlot4Id: 0,
            HeroTwoId: 0,
            HeroTwoSkillSlot3Id: 0,
            HeroTwoSkillSlot4Id: 0,
            HeroOneWeaponSlotId: 0,
            HeroOneWeaponGradeId: 0,
            HeroOneHeadgearSlotId: 0,
            HeroOneHeadgearGradeId: 0,
            HeroOneTopSlotId: 0,
            HeroOneTopGradeId: 0,
            HeroOneBottomSlotId: 0,
            HeroOneBottomGradeId: 0,
            HeroTwoWeaponSlotId: 0,
            HeroTwoWeaponGradeId: 0,
            HeroTwoHeadgearSlotId: 0,
            HeroTwoHeadgearGradeId: 0,
            HeroTwoTopSlotId: 0,
            HeroTwoTopGradeId: 0,
            HeroTwoBottomSlotId: 0,
            HeroTwoBottomGradeId: 0,
            HeroOneMountSkillSlot1Id: 0,
            HeroOneMountSkillSlot2Id: 0,
            HeroTwoMountSkillSlot1Id: 0,
            HeroTwoMountSkillSlot2Id: 0,
            HeroOneMountSkillElement: 0,
            HeroTwoMountSkillElement: 0
        });
    }
    TroopCounter = TroopCounter - 1;
    updateLog(`<span class="logcontent-span-red">[Removed]</span><span class="logcontent-span-yellow"> Troop ${troopToDelete + 1}</span>!`, `removed`);
    saveToSessionStorage();
    if (TroopCounter <= 0) {
        TroopSelected = TroopCounter;
        RefreshTroop();
        overviewHeroOutput();
        overvieweasy();
        hideTroop();
        selectWindow('HeroesAndSkills');
        addTroop();
        RefreshTroop();
    }
    else {
        SelectTroop(TroopCounter - 1);
        RefreshHeroOutput();
        overviewHeroOutput();
        overvieweasy();
    }
}

function isArrayEmpty(troopArray) {
    // Check if the array has exactly 5 entries
    if (troopArray.length !== 5) {
        return false;
    }

    // Iterate through each troop entry
    for (let i = 0; i < troopArray.length; i++) {
        const troop = troopArray[i];

        // Check if the Troop property matches the expected value
        if (troop.Troop !== `Troop ${i + 1}`) {
            return false;
        }

        // Compare all other properties to the default template
        for (const key in defaultTroopTemplate) {
            if (key !== "Troop" && troop[key] !== defaultTroopTemplate[key]) {
                return false;
            }
        }
    }

    // If all checks pass, the array is filled with default values
    return true;
}

function ShowHideSummary(typeOfDiv) {
    const element = document.getElementById("OverviewHtml");  
    const windows = document.querySelectorAll('.summarytroop');
    windows.forEach(window => {
        if (window.id === typeOfDiv) {
            if (window.classList.contains('summaryactive')) {
                // If the div is already active, hide it
                window.classList.remove('summaryactive'); // Remove the active class
                window.style.display = 'flex'; // Keep it as a spacer (flex)
                element.scrollTop = 0;
            } else {
                // If the div is not active, show it
                window.style.display = 'flex'; // Ensure the element is visible
                window.classList.add('summaryactive'); // Add the active class after a small delay
                console.log(window.offsetTop - 115);
                element.scrollTop = window.offsetTop - 115;
            }
        } else {
            // Hide other divs
            window.classList.remove('summaryactive'); // Remove the active class
            window.style.display = 'flex'; // Keep it as a spacer (flex)
        }
    });
}

function overvieweasy() {
    const targetDiv = document.getElementById('ScreenshotHtml');
    targetDiv.innerHTML = ``;
    for (let i = 0; i < TroopCounter; i++) {
        let containerHtml = `<div class="herocardviewcontainer">`;
        let Hero = ['HeroOne', 'HeroTwo'];

        Hero.forEach(hero => {
            let HeroHtml = '';
            let Skill3Html = '';
            let Skill4Html = '';
            let MountSkill1Html = ``;
            let MountSkill2Html = ``;

            // Fetch hero data based on ID
            const heroId = HeroesAndSkills[i][`${hero}Id`];
            const heroData = Heroes[heroId - 1];

            const skill3Id = HeroesAndSkills[i][`${hero}SkillSlot3Id`];
            const skill3Data = Skills[skill3Id - 1]; // Direct lookup

            const skill4Id = HeroesAndSkills[i][`${hero}SkillSlot4Id`];
            const skill4Data = Skills[skill4Id - 1]; // Direct lookup

            const mountskill1Id = HeroesAndSkills[i][`${hero}MountSkillSlot1Id`];
            const mountskill1Data = MountSkills[mountskill1Id - 1]; // Direct lookup

            const mountskill2Id = HeroesAndSkills[i][`${hero}MountSkillSlot2Id`];
            const mountskill2Data = MountSkills[mountskill2Id - 1]; // Direct lookup

            const mountskillelement = String(HeroesAndSkills[i][`${hero}MountSkillElement`]).toLowerCase();

            // Generate delete buttons if data exists
            if (heroData) {
                HeroHtml = `<img src="Images/Heroes/${heroData.name}.png" alt="${heroData.name}"><h3>${heroData.name}</h3>`;
            }
            else { HeroHtml = `<img src="Images/Heroes/none.png" alt="None" title="None"><h3>None</h3>`; }

            if (skill3Data) {
                Skill3Html = `<div class="skilloneimage"><img src="Images/Skills/Small/${skill3Data.name.replace(/\s+/g, "-")}-small.png" alt="${skill3Data.name}"><p>${skill3Data.name}</p></div>`;
            }
            else { Skill3Html = ``; }

            if (skill4Data) {
                Skill4Html = `<div class="skilltwoimage"><img src="Images/Skills/Small/${skill4Data.name.replace(/\s+/g, "-")}-small.png" alt="${skill4Data.name}"><p>${skill4Data.name}</p></div>`;
            }
            else { Skill4Html = ``; }

            if (mountskill1Data) {
                MountSkill1Html = `<div class="mountskilloneimage" style="background-image: url('Images/Gui/mount${mountskillelement}-active.png');"><img src="Images/Skills/Mountskills/${mountskill1Data.name.replace(/\s+/g, "-")}-small.png" alt="${mountskill1Data.name}"><p>${mountskill1Data.name}</p></div>`;
            }
            else { MountSkill1Html = ``; }

            if (mountskill2Data) {
                MountSkill2Html = `<div class="mountskilloneimage" style="background-image: url('Images/Gui/mount${mountskillelement}-active.png');"><img src="Images/Skills/Mountskills/${mountskill2Data.name.replace(/\s+/g, "-")}-small.png" alt="${mountskill2Data.name}"><p>${mountskill2Data.name}</p></div>`;
            }
            else { MountSkill2Html = ``; }

            // Add hero card to container HTML
            containerHtml += `
                <div class="herocardview">
                    <div class="herocardviewimage">
                        ${HeroHtml}
                    </div>
                    <div class="herocardviewinfo">
                        <div class="herocardviewslots">
                            ${Skill3Html}
                            ${Skill4Html}
                            ${MountSkill1Html}
                            ${MountSkill2Html}
                        </div>
                    </div>
                </div>`;
        });

        // Close the container and add it to targetDiv
        containerHtml += `</div>`;
        targetDiv.innerHTML += containerHtml;
    }
}