const initialState = {
    status: {
        active : false,
        counter: 0
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'toggle':
            const newStatus = { active: !state.status.active, counter: state.status.counter + 1 }
            return {...state, status: newStatus};
        default:
            return state;
    }
};
