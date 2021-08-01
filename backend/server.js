const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var cors = require('cors');
const { text } = require('body-parser');
app.use(cors());
const port = 3000

latex_cmds = {
    "≠": "\\neq",
    "≥": "\\geq",
    "≤": "\\leq",
    "π": "\\pi",
    "α": "\\alpha",
    "β": "\\beta",
    "δ": "\\Delta",
    "θ": "\\Theta",
    "⇒": "\\Rightarrow",
    "⇔": "\\leftrightarrow",
    "¬": "\\neg",
    "∧": "\\wedge",
    "∨": "\\vee",
    "⊥": "\\bot",
    "∈": "\\in",
    "∉": "\\not \\in",
    "∃": "\\exists",
    "∀": "\\forall",
    "∅": "\\empty",
    "×": "\\times",
    "⊂": "\\subset", 
    "⊄": "\\not \\subset",
    "⊆": "\\subseteq",
    "ℝ": "\\mathbb{R}",
    "ℕ": "\\mathbb{N}",
    "ℤ": "\\mathbb{Z}",
    "𝜇": "\\mu",
    "Ω": "\\Omega",
    "𝜒": "\\chi",
    "—": "\\edg",
    "→": "\\rightarrow",
}

app.post('/', (req, res) => {
  latex_code = ""
  let text = req.body["data"].trim().split(' ');
  text.forEach((e) => {
    code = latex_cmds[e];
    if (typeof code == 'undefined'){
      if (e.includes("√(")){
        var val = e.substring(e.lastIndexOf("(") + 1, e.lastIndexOf(")"));
        latex_code +=  " " + `\\sqrt{${val}}`;
      } else if (e.includes(":bar")) {
        var val = e.substring(0, e.lastIndexOf(":"));
        latex_code +=  " " + `\\bar{${val}}`;
      } else {
        latex_code += " " + e;
      }
    } else {
      latex_code += " " + code;
    }
  })
  res.send(latex_code);
})

app.listen(port, () => {
})