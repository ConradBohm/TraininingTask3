var express = require('express');
var app = express();
var bodyParser = require('body-parser')
let {PythonShell} = require('python-shell');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res){
    res.render('index')
});

app.post('/', function(req,res){
    console.log(req.body.sum)
    var useSum = req.body.sum
    var options = {
        scriptPath: 'python/scripts/',
        args: [useSum]
    }
    PythonShell.run('calc.py', options, function(err, results){
        if (err) throw err;
        res.render('index', {results: results})
    })
});

app.listen(3000, function() {
    console.log('App listening at http://localholst:3000')
});
