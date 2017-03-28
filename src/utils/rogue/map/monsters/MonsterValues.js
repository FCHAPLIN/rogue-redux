import Behaviors from 'utils/rogue/map/monsters/BehaviorsValues';

export default {
    'ORC': {
        'behaviors' : {type: 'pickone', value: [Behaviors.WANDERING]},
    	'indice': {type: 'value', value:1},
		'description': {type: 'value', value:'A massive humanoïd with green skin and boar tusks.'},
		'strength': {type: 'randomize', 'min':8, 'max':14},
		'dexterity': {type: 'randomize', 'min':4, 'max':12},
		"intellect": {type: 'randomize', 'min':2, 'max':10},
		'life': {type: 'randomize', 'min':8, 'max':14},
		'view': {type: 'value', value:4},
		'hear': {type: 'value', value:6},
		'smell': {type: 'value', value:6},
		'hunger': {type: 'randomize', 'min':5, 'max':20},
		'faith': {type: 'randomize', 'min':1, 'max':5},
		'patience': {type: 'randomize', 'min':1, 'max':5},
		'courage': {type: 'randomize', 'min':5, 'max':10},
		'fatigue': {type: 'randomize', 'min':1, 'max':10},
		'weapon' : {type: 'pickone', value: ['None', 'Club', 'Short sword']},
		'armor' : {type: 'pickone', value: ['None', 'Leather Jacket']},
		'parts' : {type: 'value', value: ['HEAD', 'LEFT_ARM', 'RIGHT_ARM', 'TORSO', 'ABDOMEN', 'LEFT_LEG', 'RIGHT_LEG']},
    },
    'GOBLIN': {
        'behaviors' : {type: 'pickone', value: [Behaviors.WANDERING]},
        'indice': {type: 'value', value:1},
        'description': {type: 'value', value:'A small humanoïd with green skin and a big head'},
		'strength': {type: 'randomize', 'min':6, 'max':12},
		'dexterity': {type: 'randomize', 'min':6, 'max':14},
		"intellect": {type: 'randomize', 'min':2, 'max':8},
		'view': {type: 'value', value: 3},
		'hear': {type: 'value', value: 4},
		'smell': {type: 'value', value: 4},
		'life': {type: 'randomize', 'min':4, 'max':10},
		'hunger': {type: 'randomize', 'min':5, 'max':20},
		'faith': {type: 'randomize', 'min':1, 'max':5},
		'patience': {type: 'randomize', 'min':1, 'max':5},
		'courage': {type: 'randomize', 'min':5, 'max':10},
		'fatigue': {type: 'randomize', 'min':1, 'max':10},
		'weapon' : {type: 'pickone', value: ['None', 'Club', 'Short sword']},
		'armor' : {type: 'pickone', value: ['None', 'Leather Jacket']},
        'parts' : {type: 'value', value: ['HEAD', 'LEFT_ARM', 'RIGHT_ARM', 'TORSO', 'ABDOMEN', 'LEFT_LEG', 'RIGHT_LEG']},
    },
    'CYCLOP': {
        'behaviors' : {type: 'pickone', value: [Behaviors.WANDERING]},
        'indice': {type: 'value', value:1},
        'description': {type: 'value', value:'A very big humanoïd with dark skin. He has only one big eye on his face.'},
		'strength': {type: 'randomize', 'min':12, 'max':16},
		'dexterity': {type: 'randomize', 'min':6, 'max':10},
		'intellect': {type: 'randomize', 'min':3, 'max':10},
		'life': {type: 'randomize', 'min':9, 'max':20},
		'view': {type: 'value', value: 3},
		'hear': {type: 'value', value: 2},
		'smell': {type: 'value', value: 2},
		'hunger': {type: 'randomize', 'min':10, 'max':30},
		'faith': {type: 'randomize', 'min':1, 'max':5},
		'patience': {type: 'randomize', 'min':1, 'max':5},
		'courage': {type: 'randomize', 'min':15, 'max':25},
		'fatigue': {type: 'randomize', 'min':15, 'max':25},
		'weapon' : {type: 'pickone', value: ['Club']},
		'armor' : {type: 'pickone', value: ['None', 'Leather Jacket']},
        'parts' : {type: 'value', value: ['HEAD', 'LEFT_ARM', 'RIGHT_ARM', 'TORSO', 'ABDOMEN', 'LEFT_LEG', 'RIGHT_LEG']},
    }
};
