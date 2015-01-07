/**
 * Created by MADHUKAR on 1/3/2015.
 */


var express = require('express');
var router = express.Router();

var moment = require('moment');
/* GET users listing. */
router.get('/', function(req, res) {

    req.getConnection(function(err,connection){

        connection.query('SELECT * FROM classes',function(err,rows)     {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({ "ClassList" : rows});
            //res.render('customers',{page_title:"Customers - Node.js",data:rows});

        });

    });


});

var counter = 0;

router.get('/getClasses/:batchId', function(req, res) {

    var batchId = req.params.batchId;
    req.getConnection(function(err,connection){

        connection.query('SELECT * FROM classes WHERE batchId = ?',[batchId],function(err,rows)
        {

            if(err)
                console.log("Error Selecting : %s ",err );

            res.json({ "ClassList" : rows});
        });

    });
});
    router.get('/insertClass', function(req, res) {
    req.getConnection(function(err,connection){

        for(var i = 0 ; i < classArr.length; i++) {

            classArr[i].classDate = moment(classArr[i].classDate).format('YYYY-MM-DD HH:mm:ss');

            var query = connection.query("INSERT INTO classes set ? ", classArr[i], function (err, rows) {

                if (err)
                    console.log("Error inserting : %s ", err);

                counter++;
                console.log("Success of " + counter +"th row and total rows"   );
                if(counter === (classArr.length - 1)){
                    console.dir(rows)
                    res.send('all data inserted successfully');
                }
            });


        }



    });
});

module.exports = router;



var classArr = [
    {
        "batchId": 75,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Cillum aliquip eu aliquip do. Do dolore eu ea veniam sit incididunt nulla Lorem velit. Tempor ad non labore proident eiusmod sunt cillum consectetur cillum aute culpa adipisicing. Sint incididunt dolore ea culpa consequat consectetur. Irure commodo esse in ea culpa non anim ut culpa ullamco duis ex enim. Proident occaecat sit culpa occaecat quis. Reprehenderit aliqua ea occaecat eiusmod ex.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 53,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Laborum nostrud est officia commodo voluptate tempor magna. Exercitation irure sunt cupidatat consectetur et. Proident aliqua aliqua aute ut nisi. Tempor non consequat et aliqua nostrud id commodo exercitation officia mollit dolor. Dolore laborum ullamco Lorem do magna aute labore ex cupidatat. Eu consequat amet adipisicing enim do. Qui adipisicing sunt ex anim labore in quis do excepteur exercitation.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 60,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Cillum laborum qui eu cupidatat adipisicing tempor eiusmod duis Lorem qui pariatur in. Ut do sit reprehenderit elit magna qui magna exercitation ullamco excepteur. Veniam minim magna veniam est aliqua labore tempor nulla non quis.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 17,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Aliqua aliqua dolor cupidatat exercitation tempor. Sunt irure deserunt excepteur sunt excepteur enim commodo ut voluptate elit nulla. Mollit in id do elit consequat duis pariatur labore aute ea minim occaecat cupidatat ipsum. Aliquip laboris nostrud non ullamco qui voluptate incididunt adipisicing dolore incididunt.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 86,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Adipisicing nulla reprehenderit duis cillum eiusmod nisi do labore est aliquip nisi deserunt ad ullamco. Et velit et excepteur Lorem. Non magna anim anim qui occaecat deserunt ut nostrud laboris Lorem mollit nostrud ad reprehenderit. Lorem nisi ex irure do amet magna culpa in fugiat ad sint amet reprehenderit laboris.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 76,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Dolore ad excepteur dolor proident elit qui excepteur. Anim nostrud pariatur consequat mollit excepteur ut quis sunt. Velit nisi ipsum consectetur sunt labore. Lorem sunt ullamco do et anim aliqua ea commodo tempor dolore laborum aute mollit. Tempor fugiat laboris veniam non exercitation commodo. Consectetur fugiat fugiat Lorem ad. Consectetur non incididunt esse ipsum velit ut in sunt quis qui sint.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 87,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Dolore non est occaecat cillum excepteur ut culpa consequat ipsum. Ipsum elit aute reprehenderit sit ad nulla esse ex cupidatat. Fugiat nostrud labore qui ipsum cupidatat. Fugiat aute proident duis incididunt eu proident anim commodo ea voluptate nulla. Cupidatat elit ullamco tempor tempor labore nostrud exercitation cillum id officia esse proident mollit ad. Adipisicing nostrud laboris do culpa Lorem voluptate non ex adipisicing.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 58,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Quis laborum velit exercitation esse labore duis voluptate nisi quis dolor. Sint eu aliqua esse ea quis. Irure enim exercitation cillum ex commodo. Laboris ad non Lorem excepteur nostrud ut anim.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 24,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Ullamco pariatur incididunt commodo officia officia occaecat enim. Enim cillum laboris duis dolore cupidatat aute duis quis est labore non. Sunt velit ex laboris nisi ea fugiat aute cillum exercitation voluptate commodo ipsum qui voluptate. Ea cupidatat aliquip in veniam non tempor ullamco. Culpa do consectetur irure Lorem excepteur sunt nisi exercitation aute pariatur do magna excepteur. Exercitation ipsum nostrud elit cupidatat eiusmod incididunt consequat reprehenderit irure cillum. Enim Lorem fugiat aute in sint pariatur magna dolor quis anim veniam.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 21,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Eu non et est mollit. Ut sunt dolor dolore anim. Non in consequat occaecat nostrud consectetur sit veniam voluptate in culpa. Do enim incididunt quis voluptate aliqua ad aute laborum pariatur.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 20,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Amet laborum id sunt nostrud. Lorem quis sunt est cupidatat laboris enim consequat amet occaecat. Duis exercitation sint duis culpa culpa enim laboris ex elit. Proident qui eiusmod adipisicing laboris cillum quis ut ea. Duis incididunt sit aliquip aliquip tempor sunt dolor anim aliquip nisi proident exercitation.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 3,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Consequat ex consectetur sunt eu. Ut deserunt aliquip quis sunt. Laborum occaecat exercitation aute adipisicing deserunt ipsum amet fugiat sunt proident nisi.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 77,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Voluptate anim aliquip Lorem Lorem. Enim esse ullamco eu sit duis mollit tempor quis dolore. Tempor aliqua aliqua sunt culpa eu quis exercitation dolore et duis laboris irure.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 64,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Aliquip fugiat mollit commodo laboris. Minim esse qui eiusmod aliqua pariatur non reprehenderit dolore aliquip ad quis ea veniam do. Consectetur cupidatat incididunt dolor amet tempor culpa mollit eu ullamco ex velit qui minim culpa. Exercitation minim nostrud dolore est et minim cupidatat aliqua ut incididunt magna nostrud. Ut consectetur aliqua culpa Lorem et exercitation velit culpa culpa.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 64,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Eu sit ad enim do cillum sunt irure voluptate eu incididunt tempor velit id dolor. Duis eu Lorem fugiat voluptate fugiat proident sunt exercitation elit ipsum et. Nisi velit deserunt sunt nisi exercitation eiusmod enim tempor veniam duis exercitation. Pariatur aliquip ea culpa esse.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 16,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Ut adipisicing laboris enim exercitation ad amet sit commodo ad deserunt labore. Fugiat minim ad laborum excepteur amet ex pariatur exercitation. Velit anim anim culpa irure in fugiat eiusmod amet cupidatat qui. Consequat veniam reprehenderit aliqua incididunt cillum quis anim officia proident irure excepteur.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 79,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Enim laboris ex eu minim magna adipisicing esse irure magna magna id officia laborum. Quis aliqua elit et aliquip do velit id elit sint. Deserunt velit laboris ut nostrud labore anim. Nisi fugiat duis mollit eiusmod amet commodo elit elit ut laboris. Deserunt occaecat adipisicing in dolore proident sint amet ex et sint excepteur enim est.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 72,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Laborum exercitation non sint incididunt dolor quis commodo pariatur id excepteur proident reprehenderit pariatur voluptate. Reprehenderit voluptate cupidatat sit ex laboris reprehenderit irure quis ullamco sunt. Duis occaecat do in enim tempor veniam. Mollit mollit exercitation magna ullamco ipsum pariatur. Ea ullamco minim ea duis ea ea. Officia sunt nostrud exercitation eu adipisicing enim. Ullamco non occaecat ipsum sit reprehenderit amet eu ea.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 7,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Tempor Lorem ex irure nisi. Irure enim anim sint est ex eu minim reprehenderit in sunt excepteur. Culpa culpa qui qui pariatur minim qui qui eu mollit exercitation duis irure ut consectetur. Nostrud non labore culpa proident voluptate culpa. Id id occaecat nulla sunt labore officia.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 93,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Veniam nulla nisi magna do adipisicing elit fugiat nisi ad anim. Deserunt aliquip sit culpa tempor nisi voluptate incididunt irure ipsum labore excepteur aliquip enim. Magna aliqua consectetur culpa cupidatat ad aliquip nulla cillum commodo tempor ad. Aute aute excepteur quis sunt aute cupidatat est tempor ullamco. Ipsum aute incididunt voluptate laboris aliquip consectetur pariatur aute do et. Incididunt velit ipsum do culpa proident cupidatat do occaecat qui in aliquip aute anim dolor.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 52,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Dolor mollit officia officia occaecat. Quis velit anim ipsum nisi non excepteur. Lorem do officia laborum elit consectetur laborum pariatur eu cupidatat quis consectetur nostrud cupidatat occaecat. Velit nulla laboris id eiusmod aliquip. Veniam sit consequat tempor quis elit sit irure adipisicing est veniam esse culpa.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 10,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Duis cupidatat mollit ullamco elit magna dolore ipsum amet. Ex veniam dolore excepteur ad tempor mollit dolore proident. Fugiat eu esse sunt incididunt consequat eu eiusmod ipsum. Enim veniam in id anim ea laborum nisi nostrud ut eiusmod. Pariatur nulla nostrud irure eu aute incididunt mollit veniam commodo ullamco laboris cupidatat id.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 77,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Adipisicing laboris eu ea commodo qui eiusmod anim. Velit irure ex cillum laborum. Excepteur irure minim proident ad deserunt voluptate enim. Ut esse excepteur Lorem eu proident. Mollit aliquip aliqua fugiat laborum pariatur laborum consectetur ea pariatur. Sit mollit velit reprehenderit quis ullamco eu est.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 32,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Officia dolore excepteur id cillum veniam anim. Minim deserunt do culpa sunt sunt eu laboris incididunt est sunt qui dolore cillum. Minim do veniam dolor cupidatat et laborum nostrud qui voluptate commodo do. In ea ullamco eu ipsum duis. Cillum cillum consectetur aliqua sint. Elit veniam Lorem occaecat eu dolore minim aliqua voluptate ad ullamco.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 30,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Qui pariatur sunt aliqua deserunt aliquip anim sunt proident velit aliqua quis. Qui ullamco eiusmod eiusmod magna labore ad aliqua elit tempor quis dolore et voluptate. Sit labore irure mollit do reprehenderit qui ad nulla ullamco veniam Lorem. Culpa in cillum esse laboris ex ipsum veniam ad veniam in officia voluptate. Nulla id ullamco sunt nisi ut incididunt nisi fugiat sit. Reprehenderit minim aliqua cupidatat consectetur amet laboris sit consequat velit ex in. Consequat eu laboris laboris excepteur culpa anim voluptate sit anim aute commodo Lorem.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 19,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Ad nisi cupidatat adipisicing fugiat qui eu incididunt laborum eu eu amet ut. Quis excepteur labore adipisicing et dolore officia quis mollit amet amet. Sunt exercitation eu velit est est ut dolor elit sit irure consectetur. Proident eu culpa velit ex ullamco aliqua exercitation dolor cupidatat aute ipsum nostrud laborum veniam.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 47,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Cillum consectetur ad occaecat irure proident officia. Et fugiat magna pariatur consequat est sit ad eiusmod reprehenderit reprehenderit dolore commodo adipisicing. Esse pariatur sunt consectetur laboris ut sit.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 15,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Incididunt est qui aute eu irure qui sint. Magna deserunt dolore cupidatat veniam sint incididunt adipisicing exercitation magna tempor. Consectetur ea Lorem ea cillum consectetur sit veniam veniam proident ex sunt. Eiusmod et quis id sit sint. Consectetur nulla nulla id eiusmod aute quis duis.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 24,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Pariatur incididunt non voluptate irure non sint enim in irure deserunt. Irure qui et in quis eu velit nostrud laboris esse veniam ipsum consectetur. Amet eu cillum cupidatat tempor. Ullamco proident id incididunt reprehenderit duis nostrud ex qui in consequat laborum proident nulla mollit. Laboris ea Lorem eiusmod incididunt Lorem labore quis. Lorem esse nisi excepteur occaecat labore eu do labore exercitation. Deserunt aliquip reprehenderit consequat laboris aute et qui minim labore deserunt labore.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 9,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Culpa ut adipisicing proident ipsum. Consectetur consectetur qui proident amet est nostrud esse. Laborum proident anim tempor nisi exercitation veniam ut.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 74,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Dolor fugiat culpa anim sit ut ex deserunt ea irure dolor aliquip ea. Quis aliqua exercitation duis commodo cupidatat deserunt duis adipisicing. Mollit elit nostrud sint nostrud ea esse consectetur esse sunt aute exercitation nisi. Minim ad deserunt sint ut ex dolore eiusmod irure Lorem incididunt voluptate laboris. Ad officia tempor laboris qui.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    },
    {
        "batchId": 79,
        "classDate": "2015-01-03 21:03:45",
        "topic": "Aliqua aute ex sunt in culpa voluptate nisi id incididunt est magna sint. Reprehenderit fugiat anim elit culpa dolor. Ea deserunt labore voluptate quis dolor.\r\n",
        "downloadvideourl": "http://placinteger(20, 40)ehold.it/32x32",
        "streamvideourl": "http://placinteger(20, 40)ehold.it/32x32"
    }
];