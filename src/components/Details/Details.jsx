import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';

const Details = ({ title}) => {
    const classes = useStyles();

    return (
        <Card className={title === 'Income' ? classes.income : classes.expense}>
            <CardHeader title={ title} />
            <CardContent>
                <Typography variant='h5'>$50</Typography>
                <h1>Monthly expenses</h1>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                <Typography style={{marginTop: '20px'}}>
                    Try saying: Add income for $100in Category Salary for Monday ...
                    Changing what it says here!!
                </Typography>
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
                </Slide>
                <Doughnut data='DATA' />
            </CardContent>
        </Card>
    );
};

export default Details;
