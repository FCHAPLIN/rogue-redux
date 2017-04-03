const BehaviorsValues = {
    WANDERING: {
        behaviorValue: 'WANDERING',
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    LOOKING_FOR_FOOD: {
        behaviorValue: 'LOOKING_FOR_FOOD',
        lookingFor: ['KITCHEN', 'CANTINA', 'FOOD'],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    FLEEING: {
        behaviorValue: 'FLEEING',
        lookingFor: ['MONSTER'],
        autoTarget: [],
        stayDistant: 5,
    },
    CLOSE_ATTACK: {
        behaviorValue: 'CLOSE_ATTACK',
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 1,
    },
    LOOKING_FOR_TEMPLE: {
        behaviorValue: 'LOOKING_FOR_TEMPLE',
        lookingFor: ['IDOL'],
        autoTarget: ['PLAYER'],
        stayDistant: 1,
    },
    LOOKING_FOR_BED: {
        behaviorValue: 'LOOKING_FOR_BED',
        lookingFor: ['DORMITORY', 'BED'],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    LOOKING_FOR_HEAL: {
        behaviorValue: 'LOOKING_FOR_HEAL',
        lookingFor: [],
        autoTarget: [],
        stayDistant: 0,
    },
    SLEEPING: {
        behaviorValue: 'SLEEPING',
        lookingFor: [],
        autoTarget: [],
        stayDistant: 0,
    },
    ON_AMBUSH: {
        behaviorValue: 'ON_AMBUSH',
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    PROTECTING: {
        behaviorValue: 'PROTECTING',
        lookingFor: [],
        autoTarget: [],
        stayDistant: 2,
    },
    RANGED_ATTACK: {
        behaviorValue: 'RANGED_ATTACK',
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 2,
    },
};
export { BehaviorsValues };
