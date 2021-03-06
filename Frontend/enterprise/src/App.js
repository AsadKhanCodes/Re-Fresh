import React, {useState, useEffect} from 'react';
import './App.css'
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import { Bar } from 'react-chartjs-2';

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: 'white'
    }
}));

function App() {
    const classes = useStyles();
    useEffect(() => {
        getTest();
    }, []);
    async function getTest() {
        console.log(fetch('http://localhost:3001').then(response => {
            return response.json();
        }));
        
    }
    async function postTest() {
        let query = "SELECT * FROM consumer";
        console.log(
            fetch(
                'http://localhost:3001/post/consumer',
                {method: "POST"}
               ).then(response => {
            return response.json();
        }));
        
    }

    async function optimize() {
        console.log(
            fetch(
                'http://localhost:3001/optimize',
                {method: "POST"}
               ).then(response => {
            return response.json();
        }));
        
    }


    return (
        <Grid container spacing = {5} className={classes.grid}>
            <Grid item xs={12}>
                <Paper className= {classes.paper}>
                    Optimized Sales and Future Orders
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className= {classes.paper}>
                <button onClick={optimize}>t</button>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className= {classes.paper}>
                    <button onClick={getTest}>test</button>
                </Paper>
            </Grid>
        </Grid>

        
        
    )
}

export default App
