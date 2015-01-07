/**
 * Created by MADHUKAR on 1/3/2015.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {

    req.getConnection(function(err,connection){

        connection.query('SELECT * FROM batches',function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({ "BatchList" : rows});
            //res.render('customers',{page_title:"Customers - Node.js",data:rows});

        });

    });


});



router.post('/', function(req, res) {

    var batchInput = JSON.parse(JSON.stringify(req.body));

    req.getConnection(function (err, connection) {

        var data = {
            batchName : batchInput.batchName,
            courseName : batchInput.courseName,
            instructor : batchInput.instructor
        };

        var query = connection.query("INSERT INTO batches set ? ",data, function(err, rows)
        {

            if (err)
                console.log("Error inserting : %s ",err );

            res.json({
                message: 'batch Created SuccessFully'
            });

        });
    });

});


module.exports = router;