const troopData = {
    baseStats: {
        stats: { attack: 0, defense: 0, health: 0, marchSpeed: 0, load: 0, might: 0 },
        trainingcosts: { food: 0, wood: 0, stone: 0, gold: 0 },
        healingcosts: { food: 0, wood: 0, stone: 0, gold: 0 },
        modifiers: { trainingTime: 0, healingTime: 0 }
    },
    
    porter: {
        baseStats: {
            trainingTime: 1,
            healingTime: 1
        },
        tiers: {
            t1: {
                name: "Grunts",
                stats: { attack: 58, defense: 111, health: 111, marchSpeed: "Fast", load: 18, might: 1 },
                modifiers: { trainingTime: 15, healingTime: 0 },
                trainingcosts: { food: 40, wood: 40, stone: 0, gold: 0 },
                healingcosts: { food: 15, wood: 15, stone: 0, gold: 0 }
            },
            t2: {
                name: "Porters",
                stats: { attack: 121, defense: 121, health: 121, marchSpeed: "Ordinary", load: 20, might: 2 },
                modifiers: { trainingTime: 30, healingTime: 1 },
                trainingcosts: { food: 65, wood: 65, stone: 50, gold: 0 },
                healingcosts: { food: 25, wood: 25, stone: 15, gold: 0 }
            },
            t3: {
                name: "Haulers",
                stats: { attack: 145, defense: 145, health: 145, marchSpeed: "Slow", load: 22, might: 4 },
                modifiers: { trainingTime: 45, healingTime: 2 },
                trainingcosts: { food: 115, wood: 115, stone: 85, gold: 15 },
                healingcosts: { food: 45, wood: 45, stone: 25, gold: 4 }
            },
            t4: {
                name: "Scavengers",
                stats: { attack: 156, defense: 156, health: 156, marchSpeed: "Slow", load: 24, might: 5 },
                modifiers: { trainingTime: 70, healingTime: 3 },
                trainingcosts: { food: 165, wood: 165, stone: 125, gold: 20 },
                healingcosts: { food: 55, wood: 55, stone: 40, gold: 6 }
            },
            t5: {
                name: "Marauders",
                stats: { attack: 174, defense: 174, health: 174, marchSpeed: "Very slow", load: 26, might: 7 },
                modifiers: { trainingTime: 95, healingTime: 3 },
                trainingcosts: { food: 300, wood: 300, stone: 150, gold: 50 },
                healingcosts: { food: 75, wood: 75, stone: 60, gold: 15 }
            },
            t6: {
                name: "Raiders",
                stats: { attack: 185, defense: 185, health: 185, marchSpeed: "Very slow", load: 30, might: 9 },
                modifiers: { trainingTime: 115, healingTime: 4 },
                trainingcosts: { food: 400, wood: 400, stone: 300, gold: 150 },
                healingcosts: { food: 90, wood: 90, stone: 90, gold: 45 }
            },
            t7: {
                name: "Pillagers",
                stats: { attack: 205, defense: 205, health: 205, marchSpeed: "Very slow", load: 34, might: 13 },
                modifiers: { trainingTime: 180, healingTime: 5 },
                trainingcosts: { food: 600, wood: 600, stone: 450, gold: 500 },
                healingcosts: { food: 135, wood: 135, stone: 135, gold: 150 }
            }
        }
    },
    pikemen: {
        baseStats: {
            trainingTime: 1,
            healingTime: 1
        },
        tiers: {
            t1: {
                name: "Pikemen",
                stats: { attack: 57, defense: 125, health: 108, marchSpeed: "Very Fast", load: 5, might: 1 },
                modifiers: { trainingTime: 15, healingTime: 0 },
                trainingcosts: { food: 40, wood: 40, stone: 0, gold: 0 },
                healingcosts: { food: 15, wood: 15, stone: 0, gold: 0 }
            },
            t2: {
                name: "Lancers",
                stats: { attack: 119, defense: 136, health: 117, marchSpeed: "Fast", load: 6, might: 2 },
                modifiers: { trainingTime: 30, healingTime: 1 },
                trainingcosts: { food: 65, wood: 65, stone: 50, gold: 0 },
                healingcosts: { food: 25, wood: 25, stone: 15, gold: 0 }
            },
            t3: {
                name: "Toughened Lancers",
                stats: { attack: 143, defense: 164, health: 141, marchSpeed: "Ordinary", load: 7, might: 4 },
                modifiers: { trainingTime: 45, healingTime: 2 },
                trainingcosts: { food: 115, wood: 115, stone: 85, gold: 15 },
                healingcosts: { food: 45, wood: 45, stone: 25, gold: 4 }
            },
            t4: {
                name: "Armored Lancers",
                stats: { attack: 154, defense: 176, health: 152, marchSpeed: "Ordinary", load: 8, might: 5 },
                modifiers: { trainingTime: 70, healingTime: 3 },
                trainingcosts: { food: 165, wood: 165, stone: 125, gold: 20 },
                healingcosts: { food: 55, wood: 55, stone: 40, gold: 6 }
            },
            t5: {
                name: "Heavy Lancers",
                stats: { attack: 172, defense: 196, health: 169, marchSpeed: "Slow", load: 10, might: 7 },
                modifiers: { trainingTime: 95, healingTime: 3 },
                trainingcosts: { food: 300, wood: 300, stone: 150, gold: 50 },
                healingcosts: { food: 75, wood: 75, stone: 60, gold: 15 }
            },
            t6: {
                name: "Elite Lancers",
                stats: { attack: 182, defense: 208, health: 180, marchSpeed: "Very slow", load: 12, might: 9 },
                modifiers: { trainingTime: 115, healingTime: 4 },
                trainingcosts: { food: 400, wood: 400, stone: 300, gold: 150 },
                healingcosts: { food: 90, wood: 90, stone: 90, gold: 45 }
            },
            t7: {
                name: "Blessed Lancers",
                stats: { attack: 202, defense: 231, health: 199, marchSpeed: "Very slow", load: 14, might: 13 },
                modifiers: { trainingTime: 180, healingTime: 5 },
                trainingcosts: { food: 600, wood: 600, stone: 450, gold: 500 },
                healingcosts: { food: 120, wood: 120, stone: 120, gold: 150 }
            }
        }
    },
    infantry: {
        baseStats: {
            trainingTime: 1,
            healingTime: 1
        },
        tiers: {
            t1: {
                name: "Infantry",
                stats: { attack: 55, defense: 111, health: 126, marchSpeed: "Very Fast", load: 7, might: 1 },
                modifiers: { trainingTime: 15, healingTime: 0 },
                trainingcosts: { food: 40, wood: 40, stone: 0, gold: 0 },
                healingcosts: { food: 15, wood: 15, stone: 0, gold: 0 }
            },
            t2: {
                name: "Axe Fighters",
                stats: { attack: 116, defense: 121, health: 136, marchSpeed: "Very fast", load: 9, might: 2 },
                modifiers: { trainingTime: 30, healingTime: 1 },
                trainingcosts: { food: 65, wood: 65, stone: 50, gold: 0 },
                healingcosts: { food: 25, wood: 25, stone: 15, gold: 0 }
            },
            t3: {
                name: "Axe Brawlers",
                stats: { attack: 139, defense: 145, health: 164, marchSpeed: "Fast", load: 11, might: 4 },
                modifiers: { trainingTime: 45, healingTime: 2 },
                trainingcosts: { food: 115, wood: 115, stone: 85, gold: 15 },
                healingcosts: { food: 45, wood: 45, stone: 25, gold: 4 }
            },
            t4: {
                name: "Axe Warriors",
                stats: { attack: 149, defense: 157, health: 177, marchSpeed: "Fast", load: 12, might: 5 },
                modifiers: { trainingTime: 70, healingTime: 3 },
                trainingcosts: { food: 165, wood: 165, stone: 125, gold: 20 },
                healingcosts: { food: 55, wood: 55, stone: 40, gold: 6 }
            },
            t5: {
                name: "Berserkers",
                stats: { attack: 166, defense: 174, health: 198, marchSpeed: "Ordinary", load: 13, might: 7 },
                modifiers: { trainingTime: 95, healingTime: 3 },
                trainingcosts: { food: 300, wood: 300, stone: 150, gold: 50 },
                healingcosts: { food: 75, wood: 75, stone: 60, gold: 15 }
            },
            t6: {
                name: "Bruisers",
                stats: { attack: 177, defense: 185, health: 209, marchSpeed: "Slow", load: 15, might: 9 },
                modifiers: { trainingTime: 115, healingTime: 4 },
                trainingcosts: { food: 400, wood: 400, stone: 300, gold: 150 },
                healingcosts: { food: 90, wood: 90, stone: 90, gold: 45 }
            },
            t7: {
                name: "Warring Guards",
                stats: { attack: 196, defense: 205, health: 231, marchSpeed: "Slow", load: 17, might: 13 },
                modifiers: { trainingTime: 180, healingTime: 5 },
                trainingcosts: { food: 600, wood: 600, stone: 450, gold: 500 },
                healingcosts: { food: 135, wood: 135, stone: 135, gold: 150 }
            }
        }
    },
    archer: {
        baseStats: {
            trainingTime: 1,
            healingTime: 1
        },
        tiers: {
            t1: {
                name: "Bowmen",
                stats: { attack: 64, defense: 110, health: 108, marchSpeed: "Very Fast", load: 6, might: 1 },
                modifiers: { trainingTime: 15, healingTime: 0 },
                trainingcosts: { food: 40, wood: 40, stone: 0, gold: 0 },
                healingcosts: { food: 15, wood: 15, stone: 0, gold: 0 }
            },
            t2: {
                name: "Bow Rangers",
                stats: { attack: 136, defense: 119, health: 117, marchSpeed: "Very fast", load: 7, might: 2 },
                modifiers: { trainingTime: 30, healingTime: 1 },
                trainingcosts: { food: 65, wood: 65, stone: 50, gold: 0 },
                healingcosts: { food: 25, wood: 25, stone: 15, gold: 0 }
            },
            t3: {
                name: "Bow Slingers",
                stats: { attack: 164, defense: 143, health: 141, marchSpeed: "Fast", load: 8, might: 4 },
                modifiers: { trainingTime: 45, healingTime: 2 },
                trainingcosts: { food: 115, wood: 115, stone: 85, gold: 15 },
                healingcosts: { food: 45, wood: 45, stone: 25, gold: 4 }
            },
            t4: {
                name: "Bow Hunters",
                stats: { attack: 176, defense: 154, health: 153, marchSpeed: "Fast", load: 9, might: 5 },
                modifiers: { trainingTime: 70, healingTime: 3 },
                trainingcosts: { food: 165, wood: 165, stone: 125, gold: 20 },
                healingcosts: { food: 55, wood: 55, stone: 40, gold: 6 }
            },
            t5: {
                name: "Marksman",
                stats: { attack: 196, defense: 172, health: 169, marchSpeed: "Slow", load: 11, might: 7 },
                modifiers: { trainingTime: 95, healingTime: 3 },
                trainingcosts: { food: 300, wood: 300, stone: 150, gold: 50 },
                healingcosts: { food: 75, wood: 75, stone: 60, gold: 15 }
            },
            t6: {
                name: "Snipers",
                stats: { attack: 209, defense: 183, health: 180, marchSpeed: "Very slow", load: 13, might: 9 },
                modifiers: { trainingTime: 115, healingTime: 4 },
                trainingcosts: { food: 400, wood: 400, stone: 300, gold: 150 },
                healingcosts: { food: 90, wood: 90, stone: 90, gold: 45 }
            },
            t7: {
                name: "Glory Sharpshooters",
                stats: { attack: 231, defense: 201, health: 200, marchSpeed: "Very slow", load: 15, might: 13 },
                modifiers: { trainingTime: 180, healingTime: 5 },
                trainingcosts: { food: 600, wood: 600, stone: 450, gold: 500 },
                healingcosts: { food: 135, wood: 135, stone: 135, gold: 150 }
            }
        }
    }
};
