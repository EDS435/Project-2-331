export const addCharacter = (name, initiative, type) => {
    return {
        type: 'ADD_CHARACTER',
        payload: {
            name, initiative, type
        }
    };
};

export const removeCharacter = (id) => {
    return {
        type: 'REMOVE_CHARACTER',
        payload: {
            id
        },
    };
};

export const nextTurn = () => {
    return { type: 'NEXT_TURN' };
};

export const prevTurn = () => {
    return { type: 'PREV_TURN' };
};