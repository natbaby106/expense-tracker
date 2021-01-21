const contextReducer = (state, action) => {
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t) => t.id !== action.payload);
            console.log('transactions', transactions);

            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            console.log('transactions', transactions);

            return transactions;
        default:
            return state;
    };
};

export default contextReducer;