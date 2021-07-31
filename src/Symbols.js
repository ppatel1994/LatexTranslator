import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export function Symbols(props){
    const [text, setText] = useState('');
    const [latexCode, setCode] = useState('');
    const [singleInput, setSingleInput] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleChangeSingle(e){
        setSingleInput(e.target.value)
    }

    function handleClick(e){
        setText(text + " " + e.currentTarget.value);
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

    function handleClickTranslate(){
        alert(text);
    }

    function handleClickSingleInput(e){
        let inp;
        if (e.currentTarget.value == "√()"){
            inp = "√(" + singleInput + ")";
        } else {
            inp = singleInput + ":bar";
        }
        setText(text + " " + inp);

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
                        <Button onClick={handleClick} value = "≠" style = {{margin:"1%"}} size = "small" variant="contained">≠</Button>
                        <Button onClick={handleClick} value = "≥" style = {{margin:"1%"}} size = "small" variant="contained">≥</Button>
                        <Button onClick={handleClick} value = "≤" style = {{margin:"1%"}} size = "small" variant="contained">≤</Button>
                        <Button onClick={handleClick} value = "π" style = {{margin:"1%"}} size = "small" variant="contained">π</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <Button onClick={handleClick} value = "α" style = {{margin:"1%"}} size = "small" variant="contained">α</Button>
                        <Button onClick={handleClick} value = "β" style = {{margin:"1%"}} size = "small" variant="contained">β</Button>
                        <Button onClick={handleClick} value = "δ" style = {{margin:"1%"}} size = "small" variant="contained">δ</Button>
                        <Button onClick={handleClick} value = "θ" style = {{margin:"1%"}} size = "small" variant="contained">θ</Button>
                   </div>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"green"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>Logical Notation</h2>
                        <Button onClick={handleClick} value = "⇒" style = {{margin:"1%"}} size = "small" variant="contained">⇒</Button>
                        <Button onClick={handleClick} value = "⇔" style = {{margin:"1%"}} size = "small" variant="contained">⇔</Button>
                        <Button onClick={handleClick} value = "¬" style = {{margin:"1%"}} size = "small" variant="contained">¬</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <Button onClick={handleClick} value = "∧" style = {{margin:"1%"}} size = "small" variant="contained">∧</Button>
                        <Button onClick={handleClick} value = "∨" style = {{margin:"1%"}} size = "small" variant="contained">∨</Button>
                        <Button onClick={handleClick} value = "⊥" style = {{margin:"1%"}} size = "small" variant="contained">⊥</Button>
                   </div>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"blue"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>Set Notation</h2>
                        <Button onClick={handleClick} value = "∈" style = {{margin:"1%"}} size = "small" variant="contained">∈</Button>
                        <Button onClick={handleClick} value = "∉" style = {{margin:"1%"}} size = "small" variant="contained">∉</Button>
                        <Button onClick={handleClick} value = "∃" style = {{margin:"1%"}} size = "small" variant="contained">∃</Button>
                        <Button onClick={handleClick} value = "∀" style = {{margin:"1%"}} size = "small" variant="contained">∀</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <Button onClick={handleClick} value = "∅" style = {{margin:"1%"}} size = "small" variant="contained">∅</Button>
                        <Button onClick={handleClick} value = "×" style = {{margin:"1%"}} size = "small" variant="contained">×</Button>
                        <Button onClick={handleClick} value = "⊂" style = {{margin:"1%"}} size = "small" variant="contained">⊂</Button>
                        <Button onClick={handleClick} value = "⊄" style = {{margin:"1%"}} size = "small" variant="contained">⊄</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <Button onClick={handleClick} value = "⊆" style = {{margin:"1%"}} size = "small" variant="contained">⊆</Button>
                        <Button onClick={handleClick} value = "ℝ" style = {{margin:"1%"}} size = "small" variant="contained">ℝ</Button>
                        <Button onClick={handleClick} value = "ℕ" style = {{margin:"1%"}} size = "small" variant="contained">ℕ</Button>
                        <Button onClick={handleClick} value = "ℤ" style = {{margin:"1%"}} size = "small" variant="contained">ℤ</Button>
                   </div>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}>
                <Grid item xs={3} style = {{backgroundColor:"red"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>Probability</h2>
                        <Button onClick={handleClick} value = "𝜇" style = {{margin:"1%"}} size = "small" variant="contained">𝜇</Button>
                        <Button onClick={handleClick} value = "Ω" style = {{margin:"1%"}} size = "small" variant="contained">Ω</Button>
                    </div>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"green"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>Graph Theory</h2>
                        <Button onClick={handleClick} value = "𝜒" style = {{margin:"1%"}} size = "small" variant="contained">𝜒</Button>
                        <Button onClick={handleClick} value = "—" style = {{margin:"1%"}} size = "small" variant="contained">—</Button>
                        <Button onClick={handleClick} value = "→" style = {{margin:"1%"}} size = "small" variant="contained">→</Button>
                    </div>
                </Grid>
                <Grid item xs={3} style = {{backgroundColor:"green"}}>
                    <div style = {{textAlign:"center"}}>
                        <h2>Single Input</h2>
                        <Button onClick={handleClickSingleInput} value = "√()" style = {{margin:"1%"}} size = "small" variant="contained">√(x)</Button>
                        <Button onClick={handleClickSingleInput} value = "(:bar)" style = {{margin:"1%"}} size = "small" variant="contained">x̄</Button>
                    </div>
                    <div style = {{textAlign:"center"}}>
                        <input value = {singleInput} onChange={handleChangeSingle} placeholder = "x"></input>
                    </div>
                </Grid>
            </Grid>

            <div>
                <p1 style = {{}}>Enter equation:</p1>
                <textarea value = {text} onChange={handleChange}></textarea>
                <button onClick = {handleClickTranslate}>Translate</button>
            </div>
            <p1>Your latex code</p1>
            <textarea className = "equation"></textarea>
            <button onClick = {handleClickClear}>Clear</button>
            <button onClick = {copyText}>Copy To Clipboard</button>
        </div>
    );
}