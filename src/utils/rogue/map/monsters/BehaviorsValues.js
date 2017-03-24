export default {
    WANDERING: {
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    LOOKING_FOR_FOOD: {
        lookingFor: ['KITCHEN', 'CANTINA', 'FOOD'],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    FLEEING: {
        lookingFor: ['MONSTER'],
        autoTarget: [],
        stayDistant: 3,
    },
    CLOSE_ATTACK: {
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 1,
    },
    LOOKING_FOR_TEMPLE: {
        lookingFor: ['IDOL'],
        autoTarget: ['PLAYER'],
        stayDistant: 1,
    },
    LOOKING_FOR_BED: {
        lookingFor: ['DORMITORY', 'BED'],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    SLEEPING: {
        lookingFor: [],
        autoTarget: [],
        stayDistant: 0,
    },
    ON_AMBUSH: {
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 0,
    },
    RANGED_ATTACK: {
        lookingFor: [],
        autoTarget: ['PLAYER'],
        stayDistant: 2,
    },
};

