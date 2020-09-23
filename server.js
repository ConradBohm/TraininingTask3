var express = require('express');
var app = express();
var bodyParser = require('body-parser')
let {PythonShell} = require('python-shell');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res){
    res.render('calculator')
});

app.post('/', function(req,res){
    console.log(req.body.display)
    var sum = req.body.display
    if (sum === ""){
        sum = "0"
    }
    var options = {
        scriptPath: 'python/scripts/',
        args: [sum]
    }
    PythonShell.run('calc.py', options, function(err, results){
        if (err) throw err;
        res.render('calculator', {results: results})
    })
});

app.listen(3000, function() {
    console.log('App listening at http://localholst:3000')
});
