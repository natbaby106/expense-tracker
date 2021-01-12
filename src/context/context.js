import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
    const [transactions, dispatch] = useReducer(contextReducer, intialState);

    const deleteTransactions = () => {
        
    }

    return (
        <ExpenseTrackerContext.Provider value={{ appName: 'Expense Tracker' }}>
            {children}
        </ExpenseTrackerContext.Provider>
    );
};
