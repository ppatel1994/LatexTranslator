import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export function Symbols(props){
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }
    function handleClick(e){
        setText(text + " " + e.target.value);
    }

    function handleClickClear(e){
        setText("");
        document.getElementsByClassName("equation")[0].value = "";
    }

    function copyText(){
        var text = document.getElementsByClassName("equation")[0];
        text.select();
        document.execCommand("copy");
    }

    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}>
                <Grid item xs={3} style = {{backgroundColor:"red"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>General</h2>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≠</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≥</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≤</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">π</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">α</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">β</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">δ</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">θ</Button>
                   </div>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"green"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>Logical Notation</h2>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≠</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≥</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≤</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">π</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">α</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">β</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">δ</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">θ</Button>
                   </div>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"blue"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>Set Notation</h2>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≠</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≥</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">≤</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">π</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">α</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">β</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">δ</Button>
                        <Button style = {{margin:"1%"}} size = "small" variant="contained">θ</Button>
                   </div>
                </Grid>

            </Grid>

            <div>
                <p1 style = {{}}>Enter equation:</p1>
                <textarea value = {text} onChange={handleChange}></textarea>
                <button>Translate</button>
            </div>
            <p1>Your latex code</p1>
            <textarea className = "equation"></textarea>
            <button onClick = {handleClickClear}>Clear</button>
            <button onClick = {copyText}>Copy To Clipboard</button>
        </div>
    );
}