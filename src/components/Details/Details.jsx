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
                    Changing what it says here!!
                </Typography>
                <Button variant="contained" color="primary"  onClick={() => console.log(`clicked button`)}>
                        Expenses
                        </Button>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                    </Grid>
                </Grid>
                <h3>{transaction.date}</h3>
                <input type = "text" value = {this.state.data} 
                    onChange = {this.updateState} />
                <h4>{this.state.data}</h4>
                </Slide>
                <Doughnut data='DATA' />
            </CardContent>
        </Card>
    );
};

export default Details;
