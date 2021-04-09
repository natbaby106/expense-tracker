import React from 'react';
import {Grid } from '@material-ui/core';

import Main from './components/Main/Main';
import Details from './components/Details/Details';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems='center' justify='center' style={{height: '100vh'}}>
                <Grid item xs={12} sm={4}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Details title="Expense"/>
                    <h1>Monthly expenses</h1>
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                </Grid>
            </Grid>           
        </div>
    );
};

export default App;
