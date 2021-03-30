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
                <Typography align='center' variant='h5'>Total Balance $100</Typography>
                <Typography variant='subtitle1' style={{lineHeight: '1.5em', marginTop: '20px'}}>
                    {/* InfoCard... */}
                    Try saying: Add income for $100in Category Salary for Monday ...
                    Changing what it says here!!
                    this is wh
                </Typography>
                <Divider />
                {/* <Doughnut data='DATA' /> */}
            </CardContent>
        </Card>
    );
};

export default Details;
