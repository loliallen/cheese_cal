const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const {PORT} = require('./config');
// const ipv4 = '10.0.1.71';
// console.log(PASSWORD);
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const cheeses = require('./cheeses.json')
// console.log(cheeses);
app.get('/', (req,res)=>{
	res.render("main.ejs", {cheeses: cheeses});
});

console.log(PORT)
app.listen(PORT,()=>{
	console.log(`server listening on ${ipv4}:${PORT}`);
});

