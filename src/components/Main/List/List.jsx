import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();

    const transactions = [
        { id: 1, type: 'Income', category: 'Salary', amount: 50, date: 'Tue Jan 05' },
        { id: 2, type: 'Expense', category: 'Business', amount: 200, date: 'Wed Dec 18' },
    ];

    console.log("these are the transactions", transactions);

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <h1>Monthly expenses</h1>
                    <ListItem>
                        <ListItemAvatar>
                        <h3>{transaction.date}</h3>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount}- ${transaction.date}`} />
                        <ListItemSecondaryAction>
                        
                    </ListItem>
                <Form />
                </Slide>
                <Doughnut data='DATA' />
                <h1>Monthly expenses</h1>
            </CardContent>
                
            ))}
        </MUIList>
    );
};

export default List;
