var express = require('express');
var router = express.Router();
var connection  = require('../database.js');
 
 
/* GET home page. */
router.get('/', function(req, res, next) {

	const config = {
	    host: 'db',
	    user: 'root',
	    password: 'root',
	    database: 'nodedb'
	};
	
	const mysql = require('mysql');
	const connection2 = mysql.createConnection(config);

	const sql = "INSERT INTO people(name) values('Edson')";

	connection2.query(sql);

	connection2.end();


	connection.query('SELECT * FROM people',function(err,rows)     {
		  
		if(err){
       			req.flash('error', err); 
	       		res.render('list',{page_title:"Users - Node.js",data:''});   
		}else{
	             
       			res.render('list',{page_title:"Users - Node.js",data:rows});
		}
		                             
	});
	        
});
 
 
module.exports = router;
