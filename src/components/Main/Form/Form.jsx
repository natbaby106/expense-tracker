import React from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    ... 
                </Typography>
                <Typography variant='h5'>$50</Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select>
                        <MenuItem value='Business'>Business</MenuItem>
                        <MenuItem value='Salary'>Salary</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                        <List />
                        <Button variant="contained" color="primary"  onClick={() => console.log(`clicked button`)}>
                        Disable elevation
                        </Button>
                    </Grid>
            <Button className={classes.button} variant='outlined' color='primary' fullWidth>Create</Button>
        </Grid>
    );
};

export default Form;
