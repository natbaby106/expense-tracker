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
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField id="standard-basic" label="Standard" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </form>
                        <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                                <h3>{transaction.date}</h3>
                            </Avatar>
                            <FormControl key={variable}>
                  <Select
                    name={variable}
                    value={configVars[variable]}
                    onChange={handleConfigVarChange(variable)}
                  >
                    {defaults.map(value => (
                      <MenuItem key={value} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
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
                <FormControlLabel
                    value="end"
                    control={<Switch color="primary" />}
                    label="End"
                    labelPlacement="end"
                    /><FormControlLabel
                    value="end"
                    control={<Switch color="primary" />}
                    label="End"
                    labelPlacement="end"
                />
                <Typography id="discrete-slider-small-steps" gutterBottom>
                    Small steps
                    </Typography>
                    <Slider
                    defaultValue={0.00000005}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-small-steps"
                    step={0.00000001}
                    marks
                    min={-0.00000005}
                    max={0.0000001}
                    valueLabelDisplay="auto"
                    />
                <Divider />
                <Button variant="contained" color="primary"  onClick={() => console.log(`clicked button`)}>
                    Disable elevation
                </Button>
                <Link href="#" onClick={preventDefault}>
                    Link
                </Link>
                <Link href="#" onClick={preventDefault} color="inherit">
                    {'color="inherit"'}
                </Link>
                <Link href="#" onClick={preventDefault} variant="body2">
                    {'variant="body2"'}
                </Link><Avatar className={classes.purple}>OP</Avatar>
                <Button variant="outlined" color="primary" onClick={handleToggle}>
                Show backdrop
                </Button>
                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit" />
                <form className={classes.root} noValidate autoComplete="off">
  <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
  <TextField
    id="filled-secondary"
    label="Filled secondary"
    variant="filled"
    color="secondary"
  />
  <TextField
    id="outlined-secondary"
    label="Outlined secondary"
    variant="outlined"
    color="secondary"
  />
</form>
<Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={<Checkbox />}
            label="I acknowledge that I should stop the focus event propagation"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            The focus event of the nested action will propagate up and also focus the accordion
            unless you explicitly stop it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
                </Backdrop>
                <Autocomplete
                    id="combo-box-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            </CardContent>
        </Card>
    );
};

export default Main;
