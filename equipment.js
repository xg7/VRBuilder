const Equipment = [
    {
        id: 1,
        name: "Hatchet",
        type: "Basic",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 1,
                PikemenAttackIncrease: 0.5,
                PveDamageIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 2,
                PikemenAttackIncrease: 1,
                PveDamageIncrease: 0.5
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 3,
                PikemenAttackIncrease: 1.5,
                PveDamageIncrease: 1
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 4,
                PikemenAttackIncrease: 2,
                PveDamageIncrease: 1.5
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 6.25,
                PikemenAttackIncrease: 3,
                PveDamageIncrease: 2.25
            }
        }
    },
    {
        id: 2,
        name: "Spear",
        type: "Basic",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 1,
                ArcherAttackIncrease: 0.5,
                PorterAttackIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 2,
                ArcherAttackIncrease: 1,
                PorterAttackIncrease: 0.5
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 3,
                ArcherAttackIncrease: 1.5,
                PorterAttackIncrease: 1
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 4,
                ArcherAttackIncrease: 2,
                PorterAttackIncrease: 1.5
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 6.25,
                ArcherAttackIncrease: 3,
                PorterAttackIncrease: 2.25
            }
        }
    },
    {
        id: 3,
        name: "Bow",
        type: "Basic",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 1,
                InfantryAttackIncrease: 0.5,
                MarchSpeedIncrease: 0.2
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 2,
                InfantryAttackIncrease: 1,
                MarchSpeedIncrease: 0.4
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 3,
                InfantryAttackIncrease: 1.5,
                MarchSpeedIncrease: 0.6
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 4,
                InfantryAttackIncrease: 2,
                MarchSpeedIncrease: 0.8
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 6.25,
                InfantryAttackIncrease: 3,
                MarchSpeedIncrease: 1
            }
        }
    },
    {
        id: 4,
        name: "Viking Shield",
        type: "Basic",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 0.5,
                PorterAttackIncrease: 0.25,
                GatheringEfficiency: 1
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 1,
                PorterAttackIncrease: 0.5,
                GatheringEfficiency: 1.75
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 1.5,
                PorterAttackIncrease: 1,
                GatheringEfficiency: 2.5
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 2,
                PorterAttackIncrease: 1.5,
                GatheringEfficiency: 3.5
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 3,
                PorterAttackIncrease: 2.25,
                GatheringEfficiency: 5.75
            }
        }
    },
    {
        id: 5,
        name: "Sword",
        type: "Basic",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 0.5,
                MarchSpeedIncrease: 0.2,
                PveDamageIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 1,
                MarchSpeedIncrease: 0.4,
                PveDamageIncrease: 0.5
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 1.5,
                MarchSpeedIncrease: 0.6,
                PveDamageIncrease: 1
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 2,
                MarchSpeedIncrease: 0.8,
                PveDamageIncrease: 1.5
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 3,
                MarchSpeedIncrease: 1,
                PveDamageIncrease: 2.25
            }
        }
    },
    {
        id: 6,
        name: "Leather Hat",
        type: "Basic",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenDefenseIncrease: 1,
                ArcherAttackIncrease: 0.5,
                InfantryHealthIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                PikemenDefenseIncrease: 1.75,
                ArcherAttackIncrease: 1,
                InfantryHealthIncrease: 0.5
            },
            Rare: {
                id: 3,
                PikemenDefenseIncrease: 2.5,
                ArcherAttackIncrease: 1.5,
                InfantryHealthIncrease: 0.75
            },
            Epic: {
                id: 4,
                PikemenDefenseIncrease: 3.5,
                ArcherAttackIncrease: 2,
                InfantryHealthIncrease: 1
            },
            Legendary: {
                id: 5,
                PikemenDefenseIncrease: 5.25,
                ArcherAttackIncrease: 3,
                InfantryHealthIncrease: 1.75
            }
        }
    },
    {
        id: 7,
        name: "Viking Helmet",
        type: "Basic",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenDefenseIncrease: 1,
                InfantryHealthIncrease: 0.25,
                ArcherAttackIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                PikemenDefenseIncrease: 1.75,
                InfantryHealthIncrease: 0.5,
                ArcherAttackIncrease: 1
            },
            Rare: {
                id: 3,
                PikemenDefenseIncrease: 2.5,
                InfantryHealthIncrease: 0.75,
                ArcherAttackIncrease: 1.5
            },
            Epic: {
                id: 4,
                PikemenDefenseIncrease: 3.5,
                InfantryHealthIncrease: 1,
                ArcherAttackIncrease: 2
            },
            Legendary: {
                id: 5,
                PikemenDefenseIncrease: 5.25,
                InfantryHealthIncrease: 1.75,
                ArcherAttackIncrease: 3
            }
        }
    },
    {
        id: 8,
        name: "Wolf Headdress",
        type: "Basic",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherDefenseIncrease: 1,
                PikemenHealthIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                ArcherDefenseIncrease: 1.75,
                PikemenHealthIncrease: 0.5
            },
            Rare: {
                id: 3,
                ArcherDefenseIncrease: 2.5,
                PikemenHealthIncrease: 0.75
            },
            Epic: {
                id: 4,
                ArcherDefenseIncrease: 3.5,
                PikemenHealthIncrease: 1
            },
            Legendary: {
                id: 5,
                ArcherDefenseIncrease: 5.25,
                PikemenHealthIncrease: 1.75
            }
        }
    },
    {
        id: 9,
        name: "Coarse Bandana",
        type: "Basic",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                GatheringEfficiency: 1,
                SquadLoad: 0.5,
                PorterDefenseIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                GatheringEfficiency: 1.75,
                SquadLoad: 1.25,
                PorterDefenseIncrease: 0.75
            },
            Rare: {
                id: 3,
                GatheringEfficiency: 2.5,
                SquadLoad: 2,
                PorterDefenseIncrease: 1
            },
            Epic: {
                id: 4,
                GatheringEfficiency: 3.5,
                SquadLoad: 3,
                PorterDefenseIncrease: 1.5
            },
            Legendary: {
                id: 5,
                GatheringEfficiency: 5.75,
                SquadLoad: 4.25,
                PorterDefenseIncrease: 2.25
            }
        }
    },
    {
        id: 10,
        name: "Felt Hat",
        type: "Basic",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                PveDamageIncrease: 0.75,
                PikemenAttackIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                PveDamageIncrease: 1.5,
                PikemenAttackIncrease: 1
            },
            Rare: {
                id: 3,
                PveDamageIncrease: 2.25,
                PikemenAttackIncrease: 1.5
            },
            Epic: {
                id: 4,
                PveDamageIncrease: 3,
                PikemenAttackIncrease: 2
            },
            Legendary: {
                id: 5,
                PveDamageIncrease: 4.5,
                PikemenAttackIncrease: 3
            }
        }
    },
    {
        id: 11,
        name: "Corset Belt",
        type: "Basic",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 1,
                ArcherAttackIncrease: 0.5,
                PorterHealthIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 2,
                ArcherAttackIncrease: 1,
                PorterHealthIncrease: 0.5
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 3,
                ArcherAttackIncrease: 1.5,
                PorterHealthIncrease: 0.75
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 4,
                ArcherAttackIncrease: 2,
                PorterHealthIncrease: 1
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 6.25,
                ArcherAttackIncrease: 3,
                PorterHealthIncrease: 1.75
            }
        }
    },
    {
        id: 12,
        name: "Linen Cape",
        type: "Basic",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenDefenseIncrease: 1,
                MarchSpeedIncrease: 0.2
            },
            Uncommon: {
                id: 2,
                PikemenDefenseIncrease: 1.75,
                MarchSpeedIncrease: 0.4
            },
            Rare: {
                id: 3,
                PikemenDefenseIncrease: 2.5,
                MarchSpeedIncrease: 0.6
            },
            Epic: {
                id: 4,
                PikemenDefenseIncrease: 3.5,
                MarchSpeedIncrease: 0.8
            },
            Legendary: {
                id: 5,
                PikemenDefenseIncrease: 5.25,
                MarchSpeedIncrease: 1
            }
        }
    },
    {
        id: 13,
        name: "Cloak",
        type: "Basic",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherHealthIncrease: 0.5,
                PorterDefenseIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                ArcherHealthIncrease: 1,
                PorterDefenseIncrease: 0.75
            },
            Rare: {
                id: 3,
                ArcherHealthIncrease: 1.5,
                PorterDefenseIncrease: 1
            },
            Epic: {
                id: 4,
                ArcherHealthIncrease: 2.25,
                PorterDefenseIncrease: 1.5
            },
            Legendary: {
                id: 5,
                ArcherHealthIncrease: 3.25,
                PorterDefenseIncrease: 2.25
            }
        }
    },
    {
        id: 14,
        name: "Coarse Shirt",
        type: "Basic",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                GatheringEfficiency: 1,
                MarchSpeedIncrease: 0.2
            },
            Uncommon: {
                id: 2,
                GatheringEfficiency: 1.75,
                MarchSpeedIncrease: 0.4
            },
            Rare: {
                id: 3,
                GatheringEfficiency: 2.5,
                MarchSpeedIncrease: 0.6
            },
            Epic: {
                id: 4,
                GatheringEfficiency: 3.5,
                MarchSpeedIncrease: 0.8
            },
            Legendary: {
                id: 5,
                GatheringEfficiency: 5.75,
                MarchSpeedIncrease: 1
            }
        }
    },
    {
        id: 15,
        name: "Wool Shawl",
        type: "Basic",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                PveDamageIncrease: 0.75,
                InfantryDefenseIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                PveDamageIncrease: 1.5,
                InfantryDefenseIncrease: 1
            },
            Rare: {
                id: 3,
                PveDamageIncrease: 2.25,
                InfantryDefenseIncrease: 1.5
            },
            Epic: {
                id: 4,
                PveDamageIncrease: 3,
                InfantryDefenseIncrease: 2
            },
            Legendary: {
                id: 5,
                PveDamageIncrease: 4.5,
                InfantryDefenseIncrease: 2.75
            }
        }
    },
    {
        id: 16,
        name: "Coarse Trousers",
        type: "Basic",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenHealthIncrease: 0.5,
                PorterHealthIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                PikemenHealthIncrease: 1,
                PorterHealthIncrease: 0.5
            },
            Rare: {
                id: 3,
                PikemenHealthIncrease: 1.5,
                PorterHealthIncrease: 0.75
            },
            Epic: {
                id: 4,
                PikemenHealthIncrease: 2.25,
                PorterHealthIncrease: 1
            },
            Legendary: {
                id: 5,
                PikemenHealthIncrease: 3.25,
                PorterHealthIncrease: 1.75
            }
        }
    },
    {
        id: 17,
        name: "Chauses",
        type: "Basic",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryHealthIncrease: 0.5,
                PorterDefenseIncrease: 0.25,
                MarchSpeedIncrease: 0.2
            },
            Uncommon: {
                id: 2,
                InfantryHealthIncrease: 1,
                PorterDefenseIncrease: 0.75,
                MarchSpeedIncrease: 0.4
            },
            Rare: {
                id: 3,
                InfantryHealthIncrease: 1.5,
                PorterDefenseIncrease: 1,
                MarchSpeedIncrease: 0.6
            },
            Epic: {
                id: 4,
                InfantryHealthIncrease: 2.25,
                PorterDefenseIncrease: 1.5,
                MarchSpeedIncrease: 0.8
            },
            Legendary: {
                id: 5,
                InfantryHealthIncrease: 3.25,
                PorterDefenseIncrease: 2.25,
                MarchSpeedIncrease: 1
            }
        }
    },
    {
        id: 18,
        name: "Linen Trousers",
        type: "Basic",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 1,
                MarchSpeedIncrease: 0.2
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 2,
                MarchSpeedIncrease: 0.4
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 3,
                MarchSpeedIncrease: 0.6
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 4,
                MarchSpeedIncrease: 0.8
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 6.25,
                MarchSpeedIncrease: 1
            }
        }
    },
    {
        id: 19,
        name: "Coarse Leggings",
        type: "Basic",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                PveDamageIncrease: 0.75,
                ArcherHealthIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                PveDamageIncrease: 1.5,
                ArcherHealthIncrease: 0.5
            },
            Rare: {
                id: 3,
                PveDamageIncrease: 2.25,
                ArcherHealthIncrease: 0.75
            },
            Epic: {
                id: 4,
                PveDamageIncrease: 3,
                ArcherHealthIncrease: 1
            },
            Legendary: {
                id: 5,
                PveDamageIncrease: 4.5,
                ArcherHealthIncrease: 1.75
            }
        }
    },
    {
        id: 20,
        name: "Shoes",
        type: "Basic",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                GatheringEfficiency: 1,
                PorterAttackIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                GatheringEfficiency: 1.75,
                PorterAttackIncrease: 0.5
            },
            Rare: {
                id: 3,
                GatheringEfficiency: 2.5,
                PorterAttackIncrease: 1
            },
            Epic: {
                id: 4,
                GatheringEfficiency: 3.5,
                PorterAttackIncrease: 1.5
            },
            Legendary: {
                id: 5,
                GatheringEfficiency: 5.75,
                PorterAttackIncrease: 2.25
            }
        }
    },
    {
        id: 21,
        name: "Cursed Arrow",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 1.5,
                PorterAttackIncrease: 1,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 3,
                PorterAttackIncrease: 2,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 4.75,
                PorterAttackIncrease: 3.25,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 6.5,
                PorterAttackIncrease: 4.5,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 0.6
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 9.75,
                PorterAttackIncrease: 6.75,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 0.75
            }
        }
    },
    {
        id: 22,
        name: "Death Dagger",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 1.5,
                PikemenAttackIncrease: 1.5,
                PorterAttackIncrease: 1,
                MarchSpeedIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 3,
                PikemenAttackIncrease: 3,
                PorterAttackIncrease: 2,
                MarchSpeedIncrease: 1
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 4.75,
                PikemenAttackIncrease: 4.75,
                PorterAttackIncrease: 3.25,
                MarchSpeedIncrease: 1.5
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 6.5,
                PikemenAttackIncrease: 6.5,
                PorterAttackIncrease: 4.5,
                MarchSpeedIncrease: 2
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 9.75,
                PikemenAttackIncrease: 9.75,
                PorterAttackIncrease: 6.75,
                MarchSpeedIncrease: 3
            }
        }
    },
    {
        id: 23,
        name: "Serpent Sword",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 2.25,
                PorterAttackIncrease: 1,
                PorterDefenseIncrease: 0.25,
                SquadLoad: 0.75
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 4.25,
                PorterAttackIncrease: 2,
                PorterDefenseIncrease: 0.5,
                SquadLoad: 2.25
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 6.25,
                PorterAttackIncrease: 3.25,
                PorterDefenseIncrease: 1,
                SquadLoad: 4
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 8.75,
                PorterAttackIncrease: 4.5,
                PorterDefenseIncrease: 1.5,
                SquadLoad: 5.75
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 13.25,
                PorterAttackIncrease: 6.75,
                PorterDefenseIncrease: 2.25,
                SquadLoad: 8.25
            }
        }
    },
    {
        id: 24,
        name: "Mountain Shield",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 1.5,
                MarchSpeedIncrease: 0.25,
                RallyCapacityIncrease: 0.15,
                SquadLoad: 1.25
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 3,
                MarchSpeedIncrease: 0.75,
                RallyCapacityIncrease: 0.3,
                SquadLoad: 3.75
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 4.75,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.45,
                SquadLoad: 6.25
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 6.5,
                MarchSpeedIncrease: 1.25,
                RallyCapacityIncrease: 0.6,
                SquadLoad: 8.75
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 9.75,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 0.75,
                SquadLoad: 12.5
            }
        }
    },
    {
        id: 25,
        name: "Bow of Greed",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 2.25,
                ArcherDefenseIncrease: 0.5,
                MarchSpeedIncrease: 0.5,
                SquadLoad: 0.75
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 4.25,
                ArcherDefenseIncrease: 0.75,
                MarchSpeedIncrease: 1,
                SquadLoad: 2.25
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 6.5,
                ArcherDefenseIncrease: 1.25,
                MarchSpeedIncrease: 1.5,
                SquadLoad: 4
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 8.75,
                ArcherDefenseIncrease: 1.75,
                MarchSpeedIncrease: 2,
                SquadLoad: 5.75
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 13.25,
                ArcherDefenseIncrease: 2.75,
                MarchSpeedIncrease: 3,
                SquadLoad: 8.25
            }
        }
    },
    {
        id: 26,
        name: "Axe of Rage",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 2.25,
                InfantryDefenseIncrease: 0.5,
                ArcherAttackIncrease: 0.5,
                PveDamageIncrease: 1
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 4.25,
                InfantryDefenseIncrease: 0.75,
                ArcherAttackIncrease: 1,
                PveDamageIncrease: 2
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 6.5,
                InfantryDefenseIncrease: 1.25,
                ArcherAttackIncrease: 1.5,
                PveDamageIncrease: 3
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 8.75,
                InfantryDefenseIncrease: 1.75,
                ArcherAttackIncrease: 2,
                PveDamageIncrease: 4.25
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 13.25,
                InfantryDefenseIncrease: 2.75,
                ArcherAttackIncrease: 3,
                PveDamageIncrease: 6.75
            }
        }
    },
    {
        id: 27,
        name: "Lethal Spear",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 1.5,
                ArcherAttackIncrease: 0.5,
                RallyCapacityIncrease: 0.15,
                PveDamageIncrease: 1
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 3,
                ArcherAttackIncrease: 1,
                RallyCapacityIncrease: 0.3,
                PveDamageIncrease: 2
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 4.75,
                ArcherAttackIncrease: 1.5,
                RallyCapacityIncrease: 0.45,
                PveDamageIncrease: 3
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 6.5,
                ArcherAttackIncrease: 2,
                RallyCapacityIncrease: 0.6,
                PveDamageIncrease: 4.25
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 9.75,
                ArcherAttackIncrease: 3,
                RallyCapacityIncrease: 0.75,
                PveDamageIncrease: 6.75
            }
        }
    },
    {
        id: 28,
        name: "Tusked Hammer",
        type: "Monster",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 0.5,
                PikemenAttackIncrease: 2.25,
                PikemenDefenseIncrease: 1.25,
                SquadLoad: 0.75
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 1,
                PikemenAttackIncrease: 4.25,
                PikemenDefenseIncrease: 2.5,
                SquadLoad: 2.25
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 1.5,
                PikemenAttackIncrease: 6.5,
                PikemenDefenseIncrease: 3.75,
                SquadLoad: 4
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 2,
                PikemenAttackIncrease: 8.75,
                PikemenDefenseIncrease: 5,
                SquadLoad: 5.75
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 3,
                PikemenAttackIncrease: 13.25,
                PikemenDefenseIncrease: 7.5,
                SquadLoad: 8.25
            }
        }
    },
    {
        id: 29,
        name: "Feathered Crown",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 2.25,
                ArcherHealthIncrease: 0.25,
                MarchSpeedIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 4.25,
                ArcherHealthIncrease: 0.5,
                MarchSpeedIncrease: 1
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 6.5,
                ArcherHealthIncrease: 0.75,
                MarchSpeedIncrease: 1.5
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 8.75,
                ArcherHealthIncrease: 1,
                MarchSpeedIncrease: 2
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 13.25,
                ArcherHealthIncrease: 1.75,
                MarchSpeedIncrease: 3
            }
        }
    },
    {
        id: 30,
        name: "Howlers Crown",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryDefenseIncrease: 1.25,
                PikemenHealthIncrease: 0.75,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                InfantryDefenseIncrease: 2.5,
                PikemenHealthIncrease: 1.25,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                InfantryDefenseIncrease: 3.75,
                PikemenHealthIncrease: 2,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                InfantryDefenseIncrease: 5,
                PikemenHealthIncrease: 2.75,
                RallyCapacityIncrease: 0.6
            },
            Legendary: {
                id: 5,
                InfantryDefenseIncrease: 7.75,
                PikemenHealthIncrease: 4.25,
                RallyCapacityIncrease: 0.75
            }
        }
    },
    {
        id: 31,
        name: "Twin Circlet",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherDefenseIncrease: 1.25,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                ArcherDefenseIncrease: 2.5,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                ArcherDefenseIncrease: 3.75,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                ArcherDefenseIncrease: 5,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 0.6
            },
            Legendary: {
                id: 5,
                ArcherDefenseIncrease: 7.75,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 0.75
            }
        }
    },
    {
        id: 32,
        name: "Monolith Helm",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryHealthIncrease: 0.75,
                MarchSpeedIncrease: 0.5,
                PveDamageIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                InfantryHealthIncrease: 1.5,
                MarchSpeedIncrease: 1,
                PveDamageIncrease: 1.5
            },
            Rare: {
                id: 3,
                InfantryHealthIncrease: 2.25,
                MarchSpeedIncrease: 1.5,
                PveDamageIncrease: 2.25
            },
            Epic: {
                id: 4,
                InfantryHealthIncrease: 3.25,
                MarchSpeedIncrease: 2,
                PveDamageIncrease: 3
            },
            Legendary: {
                id: 5,
                InfantryHealthIncrease: 5,
                MarchSpeedIncrease: 3,
                PveDamageIncrease: 4.5
            }
        }
    },
    {
        id: 33,
        name: "Brutal Headgear",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 1.5,
                PorterAttackIncrease: 0.25,
                PveDamageIncrease: 1
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 3,
                PorterAttackIncrease: 0.5,
                PveDamageIncrease: 2
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 4.75,
                PorterAttackIncrease: 1,
                PveDamageIncrease: 3
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 6.5,
                PorterAttackIncrease: 1.5,
                PveDamageIncrease: 4.25
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 9.75,
                PorterAttackIncrease: 2.25,
                PveDamageIncrease: 6.75
            }
        }
    },
    {
        id: 34,
        name: "Savage Headgear",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenDefenseIncrease: 1.75,
                PikemenHealthIncrease: 0.25,
                PveDamageIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                PikemenDefenseIncrease: 3.25,
                PikemenHealthIncrease: 0.5,
                PveDamageIncrease: 1.5
            },
            Rare: {
                id: 3,
                PikemenDefenseIncrease: 5,
                PikemenHealthIncrease: 0.75,
                PveDamageIncrease: 2.25
            },
            Epic: {
                id: 4,
                PikemenDefenseIncrease: 6.75,
                PikemenHealthIncrease: 1,
                PveDamageIncrease: 3
            },
            Legendary: {
                id: 5,
                PikemenDefenseIncrease: 10,
                PikemenHealthIncrease: 1.75,
                PveDamageIncrease: 4.5
            }
        }
    },
    {
        id: 35,
        name: "Misty Hood",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenDefenseIncrease: 1.25,
                MarchSpeedIncrease: 0.5,
                PveDamageIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                PikemenDefenseIncrease: 2.5,
                MarchSpeedIncrease: 1,
                PveDamageIncrease: 1.5
            },
            Rare: {
                id: 3,
                PikemenDefenseIncrease: 3.75,
                MarchSpeedIncrease: 1.5,
                PveDamageIncrease: 2.25
            },
            Epic: {
                id: 4,
                PikemenDefenseIncrease: 5,
                MarchSpeedIncrease: 2,
                PveDamageIncrease: 3
            },
            Legendary: {
                id: 5,
                PikemenDefenseIncrease: 7.75,
                MarchSpeedIncrease: 3,
                PveDamageIncrease: 4.5
            }
        }
    },
    {
        id: 36,
        name: "Abundance Hat",
        type: "Monster",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                PorterAttackIncrease: 1.5,
                PorterDefenseIncrease: 1,
                GatheringEfficiency: 0.25
            },
            Uncommon: {
                id: 2,
                PorterAttackIncrease: 3,
                PorterDefenseIncrease: 2,
                GatheringEfficiency: 0.5
            },
            Rare: {
                id: 3,
                PorterAttackIncrease: 4.75,
                PorterDefenseIncrease: 3,
                GatheringEfficiency: 0.75
            },
            Epic: {
                id: 4,
                PorterAttackIncrease: 6.25,
                PorterDefenseIncrease: 4,
                GatheringEfficiency: 1.25
            },
            Legendary: {
                id: 5,
                PorterAttackIncrease: 9.25,
                PorterDefenseIncrease: 6.25,
                GatheringEfficiency: 2
            }
        }
    },
    {
        id: 37,
        name: "Sunset Cape",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryDefenseIncrease: 1.25,
                PikemenAttackIncrease: 1.5,
                PveDamageIncrease: 1
            },
            Uncommon: {
                id: 2,
                InfantryDefenseIncrease: 2.5,
                PikemenAttackIncrease: 3,
                PveDamageIncrease: 2
            },
            Rare: {
                id: 3,
                InfantryDefenseIncrease: 3.75,
                PikemenAttackIncrease: 4.75,
                PveDamageIncrease: 3
            },
            Epic: {
                id: 4,
                InfantryDefenseIncrease: 5,
                PikemenAttackIncrease: 6.5,
                PveDamageIncrease: 4.25
            },
            Legendary: {
                id: 5,
                InfantryDefenseIncrease: 7.75,
                PikemenAttackIncrease: 9.75,
                PveDamageIncrease: 6.75
            }
        }
    },
    {
        id: 38,
        name: "Magma Plate",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 2.25,
                PorterHealthIncrease: 0.75,
                SquadLoad: 0.75
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 4.25,
                PorterHealthIncrease: 1.25,
                SquadLoad: 2.25
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 6.5,
                PorterHealthIncrease: 2,
                SquadLoad: 4
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 8.75,
                PorterHealthIncrease: 2.75,
                SquadLoad: 5.75
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 13.25,
                PorterHealthIncrease: 4.25,
                SquadLoad: 8.25
            }
        }
    },
    {
        id: 39,
        name: "Encircling Girdle",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherDefenseIncrease: 0.5,
                ArcherHealthIncrease: 0.75,
                PveDamageIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                ArcherDefenseIncrease: 0.75,
                ArcherHealthIncrease: 1.5,
                PveDamageIncrease: 1.5
            },
            Rare: {
                id: 3,
                ArcherDefenseIncrease: 1.25,
                ArcherHealthIncrease: 2.25,
                PveDamageIncrease: 2.25
            },
            Epic: {
                id: 4,
                ArcherDefenseIncrease: 1.75,
                ArcherHealthIncrease: 3.25,
                PveDamageIncrease: 3
            },
            Legendary: {
                id: 5,
                ArcherDefenseIncrease: 2.75,
                ArcherHealthIncrease: 5,
                PveDamageIncrease: 4.5
            }
        }
    },
    {
        id: 40,
        name: "Earths Embrace",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryHealthIncrease: 0.75,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                InfantryHealthIncrease: 1.25,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                InfantryHealthIncrease: 2,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                InfantryHealthIncrease: 2.75,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 0.6
            },
            Legendary: {
                id: 5,
                InfantryHealthIncrease: 4.25,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 0.75
            }
        }
    },
    {
        id: 41,
        name: "Wolfhide Spaulders",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenHealthIncrease: 0.75,
                PorterDefenseIncrease: 1,
                MarchSpeedIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                PikemenHealthIncrease: 1.5,
                PorterDefenseIncrease: 2,
                MarchSpeedIncrease: 1
            },
            Rare: {
                id: 3,
                PikemenHealthIncrease: 2.25,
                PorterDefenseIncrease: 3,
                MarchSpeedIncrease: 1.5
            },
            Epic: {
                id: 4,
                PikemenHealthIncrease: 3.25,
                PorterDefenseIncrease: 4,
                MarchSpeedIncrease: 2
            },
            Legendary: {
                id: 5,
                PikemenHealthIncrease: 5,
                PorterDefenseIncrease: 6.25,
                MarchSpeedIncrease: 3
            }
        }
    },
    {
        id: 42,
        name: "Fury Armor",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenDefenseIncrease: 1.25,
                ArcherHealthIncrease: 0.75,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                PikemenDefenseIncrease: 2.5,
                ArcherHealthIncrease: 1.25,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                PikemenDefenseIncrease: 3.75,
                ArcherHealthIncrease: 2,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                PikemenDefenseIncrease: 5,
                ArcherHealthIncrease: 2.75,
                RallyCapacityIncrease: 0.6
            },
            Legendary: {
                id: 5,
                PikemenDefenseIncrease: 7.75,
                ArcherHealthIncrease: 4.25,
                RallyCapacityIncrease: 0.75
            }
        }
    },
    {
        id: 43,
        name: "Venom Armor",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 2.25,
                InfantryHealthIncrease: 0.75,
                SquadLoad: 0.75
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 4.25,
                InfantryHealthIncrease: 1.25,
                SquadLoad: 2.25
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 6.5,
                InfantryHealthIncrease: 2,
                SquadLoad: 4
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 8.75,
                InfantryHealthIncrease: 2.75,
                SquadLoad: 5.75
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 13.25,
                InfantryHealthIncrease: 4.25,
                SquadLoad: 8.25
            }
        }
    },
    {
        id: 44,
        name: "Bristle Shawl",
        type: "Monster",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenHealthIncrease: 0.75,
                ArcherDefenseIncrease: 1.25,
                MarchSpeedIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                PikemenHealthIncrease: 1.25,
                ArcherDefenseIncrease: 2.5,
                MarchSpeedIncrease: 1
            },
            Rare: {
                id: 3,
                PikemenHealthIncrease: 2,
                ArcherDefenseIncrease: 3.75,
                MarchSpeedIncrease: 1.5
            },
            Epic: {
                id: 4,
                PikemenHealthIncrease: 2.75,
                ArcherDefenseIncrease: 5,
                MarchSpeedIncrease: 2
            },
            Legendary: {
                id: 5,
                PikemenHealthIncrease: 4.25,
                ArcherDefenseIncrease: 7.75,
                MarchSpeedIncrease: 3
            }
        }
    },
    {
        id: 45,
        name: "Cryptic Boots",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 2.25,
                PorterAttackIncrease: 1,
                SquadLoad: 0.75
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 4.25,
                PorterAttackIncrease: 5,
                SquadLoad: 2.25
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 6.5,
                PorterAttackIncrease: 3.25,
                SquadLoad: 4
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 8.75,
                PorterAttackIncrease: 4.5,
                SquadLoad: 5.75
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 13.25,
                PorterAttackIncrease: 6.75,
                SquadLoad: 8.25
            }
        }
    },
    {
        id: 46,
        name: "Rippers Greaves",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 2.25,
                ArcherAttackIncrease: 1.5,
                MarchSpeedIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 4.25,
                ArcherAttackIncrease: 3,
                MarchSpeedIncrease: 1
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 6.5,
                ArcherAttackIncrease: 4.75,
                MarchSpeedIncrease: 1.5
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 8.75,
                ArcherAttackIncrease: 6.5,
                MarchSpeedIncrease: 2
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 13.25,
                ArcherAttackIncrease: 9.75,
                MarchSpeedIncrease: 3
            }
        }
    },
    {
        id: 47,
        name: "Slither Boots",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryHealthIncrease: 0.25,
                ArcherDefenseIncrease: 1.75,
                PorterHealthIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                InfantryHealthIncrease: 0.5,
                ArcherDefenseIncrease: 3.25,
                PorterHealthIncrease: 1.25
            },
            Rare: {
                id: 3,
                InfantryHealthIncrease: 0.75,
                ArcherDefenseIncrease: 5,
                PorterHealthIncrease: 2
            },
            Epic: {
                id: 4,
                InfantryHealthIncrease: 1,
                ArcherDefenseIncrease: 6.75,
                PorterHealthIncrease: 2.75
            },
            Legendary: {
                id: 5,
                InfantryHealthIncrease: 1.75,
                ArcherDefenseIncrease: 10,
                PorterHealthIncrease: 4.25
            }
        }
    },
    {
        id: 48,
        name: "Earthquake Boots",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryDefenseIncrease: 1.75,
                PorterHealthIncrease: 0.75,
                MarchSpeedIncrease: 0.5
            },
            Uncommon: {
                id: 2,
                InfantryDefenseIncrease: 3.25,
                PorterHealthIncrease: 1.25,
                MarchSpeedIncrease: 1
            },
            Rare: {
                id: 3,
                InfantryDefenseIncrease: 5,
                PorterHealthIncrease: 2,
                MarchSpeedIncrease: 1.5
            },
            Epic: {
                id: 4,
                InfantryDefenseIncrease: 6.75,
                PorterHealthIncrease: 2.75,
                MarchSpeedIncrease: 2
            },
            Legendary: {
                id: 5,
                InfantryDefenseIncrease: 10,
                PorterHealthIncrease: 4.25,
                MarchSpeedIncrease: 3
            }
        }
    },
    {
        id: 49,
        name: "Spiked Boots",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 1.5,
                ArcherHealthIncrease: 0.75,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 3,
                ArcherHealthIncrease: 1.25,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 4.75,
                ArcherHealthIncrease: 2,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 6.5,
                ArcherHealthIncrease: 2.75,
                RallyCapacityIncrease: 0.6
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 9.75,
                ArcherHealthIncrease: 4.25,
                RallyCapacityIncrease: 0.75
            }
        }
    },
    {
        id: 50,
        name: "Strength Leggings",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 1.5,
                PikemenDefenseIncrease: 1.25,
                PveDamageIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 3,
                PikemenDefenseIncrease: 2.5,
                PveDamageIncrease: 1.5
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 4.75,
                PikemenDefenseIncrease: 3.75,
                PveDamageIncrease: 2.25
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 6.5,
                PikemenDefenseIncrease: 5,
                PveDamageIncrease: 3
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 9.75,
                PikemenDefenseIncrease: 7.75,
                PveDamageIncrease: 4.5
            }
        }
    },
    {
        id: 51,
        name: "Appendage Chausses",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryDefenseIncrease: 1.25,
                PikemenHealthIncrease: 0.75,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                InfantryDefenseIncrease: 2.5,
                PikemenHealthIncrease: 1.25,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                InfantryDefenseIncrease: 3.75,
                PikemenHealthIncrease: 2,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                InfantryDefenseIncrease: 5,
                PikemenHealthIncrease: 2.75,
                RallyCapacityIncrease: 0.6
            },
            Legendary: {
                id: 5,
                InfantryDefenseIncrease: 7.75,
                PikemenHealthIncrease: 4.25,
                RallyCapacityIncrease: 0.75
            }
        }
    },
    {
        id: 52,
        name: "Gluttons Greaves",
        type: "Monster",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherDefenseIncrease: 1.25,
                MarchSpeedIncrease: 0.5,
                PveDamageIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                ArcherDefenseIncrease: 2.5,
                MarchSpeedIncrease: 1,
                PveDamageIncrease: 1.5
            },
            Rare: {
                id: 3,
                ArcherDefenseIncrease: 3.75,
                MarchSpeedIncrease: 1.5,
                PveDamageIncrease: 2.25
            },
            Epic: {
                id: 4,
                ArcherDefenseIncrease: 1.25,
                MarchSpeedIncrease: 0.5,
                PveDamageIncrease: 0.75
            },
            Legendary: {
                id: 5,
                ArcherDefenseIncrease: 5,
                MarchSpeedIncrease: 2,
                PveDamageIncrease: 3
            }
        }
    },
    {
        id: 53,
        name: "Immolated Axe",
        type: "Blessed",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 3.25,
                RallyCapacityIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 6.75,
                RallyCapacityIncrease: 0.75
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 10,
                RallyCapacityIncrease: 1
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 13.25,
                RallyCapacityIncrease: 1.25,
                BasicAttackDamageIncrease: 4,
                CounterattackDamageIncrease: 2.75
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 20,
                RallyCapacityIncrease: 2,
                BasicAttackDamageIncrease: 10,
                CounterattackDamageIncrease: 6.75
            }
        }
    },
    {
        id: 54,
        name: "Marine Halberd",
        type: "Blessed",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 3.25,
                RallyCapacityIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 6.75,
                RallyCapacityIncrease: 0.75
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 10,
                RallyCapacityIncrease: 1
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 13.25,
                RallyCapacityIncrease: 1.25,
                BasicAttackDamageIncrease: 2.75,
                CounterattackDamageIncrease: 4
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 20,
                RallyCapacityIncrease: 2,
                BasicAttackDamageIncrease: 6.75,
                CounterattackDamageIncrease: 10
            }
        }
    },
    {
        id: 55,
        name: "Gleaming Longbow",
        type: "Blessed",
        slot: "Weapon",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 3.25,
                RallyCapacityIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 6.75,
                RallyCapacityIncrease: 0.75
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 10,
                RallyCapacityIncrease: 1
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 13.25,
                RallyCapacityIncrease: 1.25,
                BasicAttackDamageIncrease: 2.75,
                CounterattackDamageIncrease: 4
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 20,
                RallyCapacityIncrease: 2,
                BasicAttackDamageIncrease: 6.75,
                CounterattackDamageIncrease: 10
            }
        }
    },
    {
        id: 56,
        name: "Blazing Helmet",
        type: "Blessed",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 2.5,
                InfantryDefenseIncrease: 2,
                InfantryHealthIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 5,
                InfantryDefenseIncrease: 4,
                InfantryHealthIncrease: 1.5
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 7.5,
                InfantryDefenseIncrease: 6,
                InfantryHealthIncrease: 2.25
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 10,
                InfantryDefenseIncrease: 8.25,
                InfantryHealthIncrease: 3.25,
                DamageIncrease: 1.25
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 15,
                InfantryDefenseIncrease: 12.5,
                InfantryHealthIncrease: 5,
                DamageIncrease: 3.25
            }
        }
    },
    {
        id: 57,
        name: "Abyssal Crown",
        type: "Blessed",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 2.5,
                PikemenDefenseIncrease: 2,
                PikemenHealthIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 5,
                PikemenDefenseIncrease: 4,
                PikemenHealthIncrease: 1.5
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 7.5,
                PikemenDefenseIncrease: 6,
                PikemenHealthIncrease: 2.25
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 10,
                PikemenDefenseIncrease: 8.25,
                PikemenHealthIncrease: 3.25,
                DamageIncrease: 1.25
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 15,
                PikemenDefenseIncrease: 12.5,
                PikemenHealthIncrease: 5,
                DamageIncrease: 3.25
            }
        }
    },
    {
        id: 58,
        name: "Divine Crown",
        type: "Blessed",
        slot: "Headgear",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 2.5,
                ArcherDefenseIncrease: 2,
                ArcherHealthIncrease: 0.75
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 5,
                ArcherDefenseIncrease: 4,
                ArcherHealthIncrease: 1.5
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 7.5,
                ArcherDefenseIncrease: 6,
                ArcherHealthIncrease: 2.25
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 10,
                ArcherDefenseIncrease: 8.25,
                ArcherHealthIncrease: 3.25,
                DamageIncrease: 2
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 15,
                ArcherDefenseIncrease: 12.5,
                ArcherHealthIncrease: 5,
                DamageIncrease: 5
            }
        }
    },
    {
        id: 59,
        name: "Inferno Armor",
        type: "Blessed",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryHealthIncrease: 1.75,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                InfantryHealthIncrease: 3.25,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.75
            },
            Rare: {
                id: 3,
                InfantryHealthIncrease: 5,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 1
            },
            Epic: {
                id: 4,
                InfantryHealthIncrease: 6.75,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 1.25,
                BasicAttackDamageIncrease: 4,
                CounterattackDamageIncrease: 2.75
            },
            Legendary: {
                id: 5,
                InfantryHealthIncrease: 10,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 2,
                BasicAttackDamageIncrease: 10,
                CounterattackDamageIncrease: 6.75
            }
        }
    },
    {
        id: 60,
        name: "Bylgjas Armor",
        type: "Blessed",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenHealthIncrease: 1.75,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                PikemenHealthIncrease: 3.75,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.75
            },
            Rare: {
                id: 3,
                PikemenHealthIncrease: 5,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 1
            },
            Epic: {
                id: 4,
                PikemenHealthIncrease: 6.75,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 1.25,
                BasicAttackDamageIncrease: 2.75,
                CounterattackDamageIncrease: 4
            },
            Legendary: {
                id: 5,
                PikemenHealthIncrease: 10,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 2,
                BasicAttackDamageIncrease: 6.75,
                CounterattackDamageIncrease: 10
            }
        }
    },
    {
        id: 61,
        name: "Verdant Armor",
        type: "Blessed",
        slot: "Top",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherHealthIncrease: 1.75,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.25
            },
            Uncommon: {
                id: 2,
                ArcherHealthIncrease: 3.25,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.75
            },
            Rare: {
                id: 3,
                ArcherHealthIncrease: 5,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 1
            },
            Epic: {
                id: 4,
                ArcherHealthIncrease: 6.75,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 1.25,
                BasicAttackDamageIncrease: 4,
                CounterattackDamageIncrease: 2.75
            },
            Legendary: {
                id: 5,
                ArcherHealthIncrease: 10,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 2,
                BasicAttackDamageIncrease: 10,
                CounterattackDamageIncrease: 6.75
            }
        }
    },
    {
        id: 62,
        name: "Ferocious Boots",
        type: "Blessed",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                InfantryAttackIncrease: 3.25,
                InfantryDefenseIncrease: 2,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                InfantryAttackIncrease: 6.75,
                InfantryDefenseIncrease: 4,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                InfantryAttackIncrease: 10,
                InfantryDefenseIncrease: 6,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                InfantryAttackIncrease: 13.25,
                InfantryDefenseIncrease: 8.25,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 0.65,
                DamageTakenReduction: 2
            },
            Legendary: {
                id: 5,
                InfantryAttackIncrease: 20,
                InfantryDefenseIncrease: 12.5,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 1,
                DamageTakenReduction: 5
            }
        }
    },
    {
        id: 63,
        name: "Tsunami Plated Boots",
        type: "Blessed",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                PikemenAttackIncrease: 3.25,
                PikemenDefenseIncrease: 2,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                PikemenAttackIncrease: 6.75,
                PikemenDefenseIncrease: 4,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                PikemenAttackIncrease: 10,
                PikemenDefenseIncrease: 6,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                PikemenAttackIncrease: 13.25,
                PikemenDefenseIncrease: 8.25,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 0.65,
                DamageTakenReduction: 2
            },
            Legendary: {
                id: 5,
                PikemenAttackIncrease: 20,
                PikemenDefenseIncrease: 12.5,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 1,
                DamageTakenReduction: 5
            }
        }
    },
    {
        id: 64,
        name: "Thicket Boots",
        type: "Blessed",
        slot: "Bottom",
        effectsByGrade: {
            Common: {
                id: 1,
                ArcherAttackIncrease: 3.25,
                ArcherDefenseIncrease: 2,
                MarchSpeedIncrease: 0.5,
                RallyCapacityIncrease: 0.15
            },
            Uncommon: {
                id: 2,
                ArcherAttackIncrease: 6.75,
                ArcherDefenseIncrease: 4,
                MarchSpeedIncrease: 1,
                RallyCapacityIncrease: 0.3
            },
            Rare: {
                id: 3,
                ArcherAttackIncrease: 10,
                ArcherDefenseIncrease: 6,
                MarchSpeedIncrease: 1.5,
                RallyCapacityIncrease: 0.45
            },
            Epic: {
                id: 4,
                ArcherAttackIncrease: 13.25,
                ArcherDefenseIncrease: 8.25,
                MarchSpeedIncrease: 2,
                RallyCapacityIncrease: 0.65,
                DamageTakenReduction: 1.25
            },
            Legendary: {
                id: 5,
                ArcherAttackIncrease: 20,
                ArcherDefenseIncrease: 12.5,
                MarchSpeedIncrease: 3,
                RallyCapacityIncrease: 1,
                DamageTakenReduction: 3.25
            }
        }
    }
];

