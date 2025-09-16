        // Configuration - easier to modify thresholds and colors
        const STAT_CONFIG = {
            attack: { max: 231, goodThreshold: 154, mediumThreshold: 77 },
            defense: { max: 231, goodThreshold: 154, mediumThreshold: 77 },
            health: { max: 231, goodThreshold: 154, mediumThreshold: 77 },
            load: { max: 34 } // Example max for load
        };

        function changeTroopInfo(type) {


            const troopType = document.getElementById('train-troop-type').value;
            const tier = document.getElementById(`${type}-tier`).value;

            // Default empty values
            const troopInfo = {
                name: 'None',
                stats: {
                    attack: 0,
                    defense: 0,
                    health: 0,
                    marchSpeed: '-',
                    might: 0,
                    load: 0
                },
                trainingcosts: {
                    food: 0,
                    wood: 0,
                    stone: 0,
                    gold: 0
                }
            };

            // Get troop data if not t0
            if (tier !== "t0") {
                troopInfo.name = troopData[troopType].tiers[tier].name;
                troopInfo.stats = { ...troopData[troopType].tiers[tier].stats };
                troopInfo.trainingcosts = { ...troopData[troopType].tiers[tier].trainingcosts };
            }

            // Update UI elements
            updateTroopImage(type, troopInfo.name);
            updateTroopHeader(type, troopInfo.name);
            updateTroopStats(type, troopInfo.stats);
            updateTroopRssCosts(type, troopInfo.trainingcosts);
            calculateTraining();

        }

        function updateTroopRssCosts(type, trainingcosts) {
            const rssTypes = ['food', 'wood', 'stone', 'gold'];
            rssTypes.forEach(rss => {
                const costElement = document.getElementById(`${rss}-cost-${type}`);
                costElement.textContent = trainingcosts[rss] || 0;
            });
        }

        // Helper functions for better organization
        function updateTroopImage(type, name) {
            //if (name === 'None') return;

            const imgElement = document.getElementById(`${type}trooptext`).querySelector('img');
            imgElement.src = `Images/Gui/${name.replace(" ", "-")}.png`;
            //imgElement.onerror = () => { imgElement.style.display = 'none' }; // Handle missing images
        }

        function updateTroopHeader(type, name) {
            document.getElementById(`${type}troop`).querySelector('h5').textContent = name;
        }

        function updateTroopStats(type, stats) {
            const statElements = document.getElementById(`${type}troopstats`).querySelectorAll('.stat');

            // Clear previous styling
            statElements.forEach(stat => {
                const div = stat.querySelector('div');
                div.className = ''; // Clear all classes
                div.style.cssText = ''; // Clear all inline styles
            });

            // Update each stat
            updateStatElement(statElements[0], 'Attack', stats.attack, STAT_CONFIG.attack);
            updateStatElement(statElements[1], 'Marchspeed', stats.marchSpeed);
            updateStatElement(statElements[2], 'Defense', stats.defense, STAT_CONFIG.defense);
            updateStatElement(statElements[3], 'Might', stats.might);
            updateStatElement(statElements[4], 'Health', stats.health, STAT_CONFIG.health);
            updateStatElement(statElements[5], 'Load', stats.load);
        }

        function updateStatElement(element, label, value, config = {}) {
            const div = element.querySelector('div');
            div.textContent = `${label}: ${value}`;

            // Clear previous background classes first
            div.classList.remove('bg-red', 'bg-gold', 'bg-green');

            // Skip styling for non-numeric stats or when no config provided
            if (typeof value !== 'number' || !config.max) return;

            // Calculate progress percentage
            const percentage = Math.min(100, (value / config.max) * 100);

            // Determine background color class
            let bgClass = '';
            if (config.goodThreshold && value >= config.goodThreshold) {
                bgClass = 'bg-green';
            } else if (config.mediumThreshold && value >= config.mediumThreshold) {
                bgClass = 'bg-gold';
            } else if (value > 0) {
                bgClass = 'bg-red';
            }

            // Only add background class if we have one
            if (bgClass) {
                div.classList.add(bgClass);
            }

            // Update progress bar
            div.style.backgroundSize = `${percentage}% 4px`;
        }

        function selectTroopTypeToTrain() {
            const troopType = document.getElementById("train-troop-type").value;
            const troopImage = document.getElementById("imageselect").querySelector("img");
            switch (troopType) {
                case "porter":
                    troopImage.src = "Images/Gui/porter-icon.png";
                    break;
                case "pikemen":
                    troopImage.src = "Images/Gui/pikemen-icon.png";
                    break;
                case "infantry":
                    troopImage.src = "Images/Gui/infantry-icon.png";
                    break;
                case "archer":
                    troopImage.src = "Images/Gui/archer-icon.png";
                    break;
            }
            changeTroopInfo('to');
            changeTroopInfo('from');
            calculateTraining()

        }

        function calculateTraining() {
            const troopType = document.getElementById('train-troop-type').value;
            const fromTier = document.getElementById('from-tier').value;
            const toTier = document.getElementById('to-tier').value;
            const quantity = parseInt(document.getElementById('troop-amount').value) || 1000;
            const buffPercentage = parseFloat(document.getElementById('troop-train-buff').value) || 0;
            const resourceBoost = parseFloat(document.getElementById('troop-train-rssbuff').value) || 0;

            try {
                // Calculate base costs
                const fromCosts = fromTier === 't0'
                    ? troopData.baseStats.trainingcosts
                    : troopData[troopType].tiers[fromTier].trainingcosts;

                const toCosts = troopData[troopType].tiers[toTier].trainingcosts;

                const fromMight = fromTier === 't0'
                    ? troopData.baseStats.stats
                    : troopData[troopType].tiers[fromTier].stats;

                const toMight = troopData[troopType].tiers[toTier].stats;

                const mightGained = (toMight.might - fromMight.might) * quantity;

                // Calculate cost reduction multiplier
                const resourceMultiplier = (100 - resourceBoost) / 100;

                // Apply boost to costs
                const costs = {
                    food: Math.round((toCosts.food - fromCosts.food) * quantity * resourceMultiplier),
                    wood: Math.round((toCosts.wood - fromCosts.wood) * quantity * resourceMultiplier),
                    stone: Math.round((toCosts.stone - fromCosts.stone) * quantity * resourceMultiplier),
                    gold: Math.round((toCosts.gold - fromCosts.gold) * quantity * resourceMultiplier)
                };

                // Calculate base costs (without boost) for comparison
                const baseCosts = {
                    food: (toCosts.food - fromCosts.food) * quantity,
                    wood: (toCosts.wood - fromCosts.wood) * quantity,
                    stone: (toCosts.stone - fromCosts.stone) * quantity,
                    gold: (toCosts.gold - fromCosts.gold) * quantity
                };

                // Calculate time (same as before)
                const fromTime = fromTier === 't0'
                    ? troopData.baseStats.modifiers.trainingTime
                    : troopData[troopType].tiers[fromTier].modifiers.trainingTime;

                const toTime = troopData[troopType].tiers[toTier].modifiers.trainingTime;
                const baseTotalSeconds = (toTime - fromTime) * quantity;
                const buffedTotalSeconds = calculateTimeWithBuffs(baseTotalSeconds, buffPercentage);

                // Formatting and display (update to show both original and reduced costs)
                const baseFormattedTime = formatTime(baseTotalSeconds);
                const buffedFormattedTime = formatTime(buffedTotalSeconds);
                const timeReduction = baseTotalSeconds - buffedTotalSeconds;
                const reductionFormatted = formatTime(timeReduction);

                // Display results with cost comparison
                if (baseCosts.food === costs.food && baseCosts.wood === costs.wood && baseCosts.stone === costs.stone && baseCosts.gold === costs.gold) {
                    document.getElementById('base-meat-amount').innerHTML = `<span style="color: #fff;"></span>`;
                    document.getElementById('boosted-meat-amount').textContent = costs.food.toLocaleString(undefined);
                    document.getElementById('base-wood-amount').innerHTML = `<span style="color: #fff;"></span>`;
                    document.getElementById('boosted-wood-amount').textContent = costs.wood.toLocaleString(undefined);
                    document.getElementById('base-stone-amount').innerHTML = `<span style="color: #fff;"></span>`;
                    document.getElementById('boosted-stone-amount').textContent = costs.stone.toLocaleString(undefined);
                    document.getElementById('base-gold-amount').innerHTML = `<span style="color: #fff;"></span>`;
                    document.getElementById('boosted-gold-amount').textContent = costs.gold.toLocaleString(undefined);
                }
                else {

                    document.getElementById('base-meat-amount').innerHTML = `<span style="color: #cbcbcb;">${baseCosts.food.toLocaleString(undefined)}</span>`;
                    document.getElementById('boosted-meat-amount').textContent = costs.food.toLocaleString(undefined);
                    document.getElementById('base-wood-amount').innerHTML = `<span style="color: #cbcbcb;">${baseCosts.wood.toLocaleString(undefined)}</span>`;
                    document.getElementById('boosted-wood-amount').textContent = costs.wood.toLocaleString(undefined);
                    document.getElementById('base-stone-amount').innerHTML = `<span style="color: #cbcbcb;">${baseCosts.stone.toLocaleString(undefined)}</span>`;
                    document.getElementById('boosted-stone-amount').textContent = costs.stone.toLocaleString(undefined);
                    document.getElementById('base-gold-amount').innerHTML = `<span style="color: #cbcbcb;">${baseCosts.gold.toLocaleString(undefined)}</span>`;
                    document.getElementById('boosted-gold-amount').textContent = costs.gold.toLocaleString(undefined);
                }
                document.getElementById('train-time').innerHTML = `<p><strong>Original Time:</strong> <span class="time-display">${baseFormattedTime}</span></p>`;
                document.getElementById('train-time-reduce').innerHTML = `<p><strong>Reduced Time:</strong> <span style="color:#008058;">- ${reductionFormatted}</span></p>`;
                document.getElementById('train-time-buffed').innerHTML = `<p><strong>Actual Time:</strong> <span style="color:#00bc54;"><strong> ${buffedFormattedTime}</strong></span></p>`;
                document.getElementById('might-gain').innerHTML = `<p><strong>Might gained:</strong> ${mightGained.toLocaleString(undefined)}</p>`;

                /*                 document.getElementById('train-results').innerHTML = `
                            <div class="cost-item"><strong>Original Food Cost:</strong> ${baseCosts.food}</div>
                            <div class="cost-item"><strong>Boosted Food Cost:</strong> ${costs.food} <span class="time-display">(${resourceBoost}% saved: ${baseCosts.food - costs.food})</span></div>
                            <div class="cost-item"><strong>Original Wood Cost:</strong> ${baseCosts.wood}</div>
                            <div class="cost-item"><strong>Boosted Wood Cost:</strong> ${costs.wood} <span class="time-display">(${resourceBoost}% saved: ${baseCosts.wood - costs.wood})</span></div>
                            <div class="cost-item"><strong>Original Stone Cost:</strong> ${baseCosts.stone}</div>
                            <div class="cost-item"><strong>Boosted Stone Cost:</strong> ${costs.stone} <span class="time-display">(${resourceBoost}% saved: ${baseCosts.stone - costs.stone})</span></div>
                            <div class="cost-item"><strong>Original Gold Cost:</strong> ${baseCosts.gold}</div>
                            <div class="cost-item"><strong>Boosted Gold Cost:</strong> ${costs.gold} <span class="time-display">(${resourceBoost}% saved: ${baseCosts.gold - costs.gold})</span></div>
                        `; */

                // Rest of your display code...

                /*  document.getElementById('train-time').innerHTML = `
                     <div class="cost-item"><strong>Actual Training Time:</strong> <span class="time-display">${buffedFormattedTime}</span></div>
                 `;
 
                 document.getElementById('train-time-comparison').innerHTML = `
                     <div class="cost-item"><strong>Original Time:</strong> ${baseFormattedTime}</div>
                     <div class="cost-item"><strong>Time Reduction:</strong> -${reductionFormatted}</div>
                     <div class="cost-item"><strong>Buffs:</strong> ${buffPercentage}%</div>
                 `;
 
                 document.getElementById('might-gained').innerHTML = `
                     <div class="cost-item"><strong>Might gained</strong> ${mightGained}</div>
                 `; */
            } catch (error) {
                console.error('Error calculating training:', error);
                document.getElementById('train-results').innerHTML = '<p>Error calculating training. Please check your inputs.</p>';
            }
        }

        // Function to convert seconds to D:H:M:S format
        function formatTime(seconds) {
            const days = Math.floor(seconds / (3600 * 24));
            seconds %= 3600 * 24;
            const hours = Math.floor(seconds / 3600);
            seconds %= 3600;
            const minutes = Math.floor(seconds / 60);
            seconds %= 60;

            let result = [];
            if (days > 0) result.push(`${days}d`);
            if (hours > 0) result.push(`${hours}h`);
            if (minutes > 0) result.push(`${minutes}m`);
            if (seconds > 0 || result.length === 0) result.push(`${Math.round(seconds)}s`);

            return result.join(' ');
        }

        // Function to calculate time with buffs
        function calculateTimeWithBuffs(baseSeconds, buffPercentage) {
            const multiplier = 1 + (buffPercentage / 100);
            return baseSeconds / multiplier;
        }

        function addBuff(amount, inputId) {
            const buffInput = document.getElementById(inputId);
            const currentValue = parseFloat(buffInput.value) || 0;
            buffInput.value = currentValue + amount;
            calculateTraining();
        }
        function removeBuff(amount, inputId) {
            const buffInput = document.getElementById(inputId);
            const currentValue = parseFloat(buffInput.value) || 0;
            if (currentValue > 0) {
                if (currentValue - amount < 0) {
                    buffInput.value = 0;
                } else {
                    buffInput.value = currentValue - amount;
                    calculateTraining();
                }
            }
        }
