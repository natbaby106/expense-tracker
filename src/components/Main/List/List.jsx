import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';

import useStyles from './styles';

const List = () => {
    const classes = useStyles();

    const transactions = [
        { id: 1, type: 'Income', category: 'Salary', amount: 50, date: 'Tue Jan 05' },
        { id: 2, type: 'Expense', category: 'Pets', amount: 50, date: 'Tue Jan 05' },
        { id: 3, type: 'Income', category: 'Business', amount: 150, date: 'Wed Dec 18' },
        { id: 4, type: 'Income', category: 'Business', amount: 200, date: 'Wed Dec 18' },
    ];

    console.log('all transactns', transactions);

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map((transaction) => (
                <Slide direction='down' in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount}- ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge='end' aria-label='delete' onClick=''> 
                                <Delete />
                            </IconButton>
                            <IconButton edge='end' aria-label='delete' onClick=''> 
                                <MoneyOff />
                            </IconButton>
                            <IconButton edge='end' aria-label='delete' onClick=''> 
                                <MoneyOff />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
};

export default List;
