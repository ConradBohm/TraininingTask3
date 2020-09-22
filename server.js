var express = require('express');
var app = express();
//let {PythonShell} = require('python-shell');

app.set('view engine','pug');
app.set('views','./views');

app.get('/', function(req,res){
    res.render('index')
});

app.listen(3000, function() {
    console.log('App listening at http://localholst:3000')
})
