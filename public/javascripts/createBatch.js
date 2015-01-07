/**
 * Created by MADHUKAR on 1/3/2015.
 */

$(function (){

    $('#createBatchBtn').click(function (){

        var data = {
            batchName : batchInput.batchName,
            courseName : batchInput.courseName,
            instructor : batchInput.instructor
        }

        var endPointOptions = {
            "url": "http://localhost:4100/batches/",
            type: "GET",
            dataType: 'json',
            timeout: 10000,// load and performance testing LNP
            success: function(data,status,requestObj){

                var batchList = data.BatchList;

                var tableDataString = '';

                for(var i= 0 ; i < batchList.length; i++){
                    tableDataString  += '<tr><td>' + batchList[i].batchId +'</td><td>'
                        + '<a class="batchName" data-batchId="' + batchList[i].batchId   +'"href="' +  '">' + batchList[i].batchName + '</a></td><td>'+ batchList[i].courseName
                        + '</td><td>' + batchList[i].instructor + '</td></tr>';
                }


                $('#batchTable tbody').append(tableDataString);

                $('.batchData').show();
                $('.classData').hide();

                $('.panel-title').html('Batch Details');

            },
            error: function(requestObj,status,error){

                alert('error happenned');
            },
            complete: function(requestObj,status){

            }
        };
        // this is the

        $.ajax(endPointOptions);

    });

});