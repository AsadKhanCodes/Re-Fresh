import React from 'react'
import './App.css'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: theme.palette.success.light
    }
}));

function App() {
    const classes = useStyles();
    return (
        <Grid container spacing = {5} className={classes.grid}>
            <Grid item xs={12}>
                <Paper className= {classes.paper}>Optimized Sales and Future Orders</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className= {classes.paper}>Stock</Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className= {classes.paper}>Unit Sales</Paper>
            </Grid>
        </Grid>
        
    )
}

export default App
