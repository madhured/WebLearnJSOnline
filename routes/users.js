/**
 * Created by MADHUKAR on 1/3/2015.
 */
var express = require('express');
var router = express.Router();

var moment = require('moment');
/* GET users listing. */
router.get('/', function(req, res) {

    req.getConnection(function(err,connection){
        connection.query('SELECT * FROM users',function(err,rows)     {
            if(err)
                console.log("Error Selecting : %s ",err );
            res.json({ "UserList" : rows});
        });
});


});

router.post('/', function(req, res) {

    var userInput = JSON.parse(JSON.stringify(req.body));

    userInput.createdDate =  moment(userInput.createdOn).format('YYYY-MM-DD HH:mm:ss');
    req.getConnection(function (err, connection) {

        var data = {
            firstName : userInput.firstName,
            lastName : userInput.lastName,
            email : userInput.email,
            batchId : userInput.batchId,
            password: userInput.password,
            createdDate : userInput.createdDate
        };

        var query = connection.query("INSERT INTO users set ? ",data, function(err, rows)
        {

            if (err)
                console.log("Error inserting : %s ",err );

            res.json({
                message: 'User Created SuccessFully'
            });

        });
    });

});
module.exports = router;