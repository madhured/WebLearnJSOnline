/**
 * Created by MADHUKAR on 1/3/2015.
 */
$(function (){

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


    $('.backBtn').click(function(){
        $.ajax(endPointOptions);
       return false;
    });

    $('#batchTable').on('click','a.batchName',function(event){

      var batchId = $(this).attr('data-batchId');


        var ajaxOptions = {
            "url": "http://localhost:4100/classes/getClasses/"+ batchId,
            type: "GET",
            dataType: 'json',
            timeout: 10000,// load and performance testing LNP
            success: function(data,status,requestObj){

                var classList = data.ClassList;

                var tableDataString = '';
                $('.panel-title').html('Batch ' + batchId  + ' Details');
                if(classList.length === 0){
                    $('.batchData').hide();
                    $('.noClassMessage').removeClass('hide');
                    $('.classData').show();
                    $('#classTable').hide();
                    return false;
                }

                for(var i= 0 ; i < classList.length; i++){
                    tableDataString  += '<tr><td>' + classList[i].classId +'</td><td>'
                        +  classList[i].batchId   + '</td><td>'+ classList[i].classDate + '</td><td>'+ classList[i].topic
                        + '</td><td><a href="' + classList[i].downloadvideourl  + '">' + classList[i].downloadvideourl + '</a></td><td><a href="' +

                        classList[i].streamvideourl + '">' + classList[i].streamvideourl+ '</a></td></tr>';
                }


                $('#classTable tbody').append(tableDataString);


                $('.batchData').hide();
                $('.classData').show();
                $('#classTable').show();
                $('.noClassMessage').addClass('hide');

            },
            error: function(requestObj,status,error){

                alert('error happenned');
            },
            complete: function(requestObj,status){

            }
        };
        // this is the

        $.ajax(ajaxOptions);

       return false;

    });
});