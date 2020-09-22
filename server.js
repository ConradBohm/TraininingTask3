var express = require(express);
var app = express();
let {PythonShell} = require('python-shell');

//app.set('view engine','pug');
//app.set('views','./views');

app.get('/', function(req,res){
    res.sendFile('index')
});

