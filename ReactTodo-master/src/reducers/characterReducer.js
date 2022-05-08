const generateID = () => {
    return `${Date.now()}${Math.floor(Math.random() * 100)}`;
};

const DEFAULT_STATE = {
    characters: [
        { id: generateID(), name: 'Set Up Githib and Git Bash', initiative: 5, type: 'player' },
        { id: generateID(), name: 'Initiate Project 1', initiative: 4, type: 'player' },
        { id: generateID(), name: 'Hold First Group Meeting', initiative: 3, type: 'player' },
        { id: generateID(), name: 'Take and Review the Meeting Minutes', initiative: 2, type: 'player' },
        { id: generateID(), name: 'Compile Ideas', initiative: 1, type: 'player' },
    ],
    players: [],
};

const sortCharacters = (state) => {
    let newState = {
        characters: [ ...state.characters ],
        players: state.characters.filter(char => char.type === 'player'),
    };

    return newState;
};

const characterReducer = (state = sortCharacters(DEFAULT_STATE), action) => {
    switch (action.type) {
        case 'ADD_CHARACTER':
            const character = action.payload;
            character.id = generateID();
            state.characters.push(character);
            return sortCharacters(state);

        case 'REMOVE_CHARACTER':
            const { id } = action.payload;
            state.characters = state.characters.filter(char => {
                return char.id !== id;
            });
            return sortCharacters(state);

        default:
            return state;
    }
};

export default characterReducer;