import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {
    const classes = useStyles();

    console.log('Hello from the main page'); 
    
    return (
        <Card className={classes.root}>
            <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />   
            <CardContent>
            <h1>Monthly expenses</h1>
            </Slide>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{lineHeight: '2.5em', marginTop: '20px'}}>
                    {/* InfoCard... */}
                    Try saying: Add income for $100in Category Salary for Monday ...
                </Typography>
                <Divider />
            </CardContent>
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                        <Button variant="contained" color="primary"  onClick={() => console.log(`clicked button`)}>
                        Disable elevation
                        </Button>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    {/* InfoCard... */}
                    Try saying: Add income for $100in Category Salary for Monday ...
                    Changing what it says here!!
                    this is wh
                </Typography>
                
                <Divider />
                <Form />
            </CardContent>
        </Card>
    );
};

export default Main;
