$(document).ready(function () {
    var barber;
    $("#bookingContainer").addClass('d-none');
    $("#haircutView").addClass('d-none');
    $("#makeBooking").addClass('d-none');
    $("#dyeView").addClass('d-none');

    $('[data-toggle="tooltip"]').tooltip()

    $(document).on('change', 'input:radio[id="sHaircut"]', function (event) {
        //console.log($('input[name="showHaircut"]:checked').val());
        $("#dyeView").addClass('d-none');
        $("#haircutView").removeClass('d-none');
        $("#infoHere").html('');
        $("#makeBooking").addClass('d-none');


    });

    $(document).on('change', 'input:radio[id="dHaircut"]', function (event) {

        console.log($('input[name="showDye"]:checked').val());
        $("#haircutView").addClass('d-none');
        $("#dyeView").removeClass('d-none');
        $("#infoHere").html('');
        $("#makeBooking").addClass('d-none');

    });

    $(document).on('change', 'input:radio[id="num1"]', function (event) {

        $("#infoHere").html('<img src="https://i.imgur.com/8zxCuPZ.png" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="num2"]', function (event) {

        $("#infoHere").html('<img src="https://i.imgur.com/kQjcJxw.png" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="num3"]', function (event) {

        $("#infoHere").html('<img src="https://i.imgur.com/2gQB16K.png" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="blackColor"]', function (event) {

        $("#infoHere").html('<img src="https://www.menshairstylestoday.com/wp-content/uploads/2018/03/Black-Men-Hairstyles.jpg" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="greyColor"]', function (event) {

        $("#infoHere").html('<img src="https://menhairstylesworld.com/wp-content/uploads/2019/04/04.-crop.jpg" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });

    $(document).on('change', 'input:radio[id="blonde"]', function (event) {

        $("#infoHere").html('<img src="https://www.menshairstylestoday.com/wp-content/uploads/2016/03/Ash-Blonde-Hair-Men.jpg" class="img-fluid">');
        $("#makeBooking").removeClass('d-none');

    });


    $("#makeBooking").click(function () {
        $("#bookingContainer").removeClass('d-none');
    });

    $("#bookButton").click(function () {
        phoneRegex = RegExp('^[0123456789]{3}-[0123456789]{3}-[0123456789]{4}$');
        ccRegex = RegExp('^[0123456789]{4}-[0123456789]{4}-[0123456789]{4}-[0123456789]{4}$');
        dateRegex = RegExp('^[0123456789]{4}$');
        secRegex = RegExp('^[0123456789]{3}$');
        calendarRegex = RegExp('^(0[1-9]|1[012])/(0[1-9]|[12][0-9]|3[01])/(20)[0123456789]{2}$')

       let phoneNum =  $("#inputNumber").val();
        let ccNum =  $("#inputCC").val();
        let expNum =  $("#inputExp").val();
        let secNum =  $("#inputSec").val();
        let calendarDate = $("#sel2").val();


        if (!(calendarRegex.test(calendarDate))){
            $("#selectDateWarning").html('<p class="text-warning">Please select a date</p>');
        }else{
            $("#selectDateWarning").html('<p class="text-warning"></p>');
        }

        if (!(phoneRegex.test(phoneNum))){
            $("#phoneWarning").html('<p class="text-warning">Invalid input! (xxx-xxx-xxxx)</p>');
            $("#approved").html('<p class="text-info"></p>');
        }else{
            $("#phoneWarning").html('<p class="text-warning"></p>');
        }

        if (!(ccRegex.test(ccNum))){
            $("#creditWarning").html('<p class="text-warning">Invalid input! (xxxx-xxxx-xxxx-xxxx)</p>');
            $("#approved").html('<p class="text-info"></p>');
        }else{
            $("#creditWarning").html('<p class="text-warning"></p>');
        }


        if (!(dateRegex.test(expNum))){
            $("#dateWarning").html('<p class="text-warning">Invalid input! (MMYY)</p>');
            $("#approved").html('<p class="text-info"></p>');
        }else{
            $("#dateWarning").html('<p class="text-warning"></p>');
        }

        if (!(secRegex.test(secNum))){
            $("#codeWarning").html('<p class="text-warning">Invalid input! (eg 123)</p>');
            $("#approved").html('<p class="text-info"></p>');
        }else{
            $("#codeWarning").html('<p class="text-warning"></p>');
        }

        if (secRegex.test(secNum)&& dateRegex.test(expNum) && ccRegex.test(ccNum) && phoneRegex.test(phoneNum) & calendarRegex.test(calendarDate)){
            $("#approved").html('<p class="text-info">Appointment Booked!</p>');
        }



    });




    $( function() {
        $( "#sel2" ).datepicker({ beforeShowDay: function(date){

            if (barber =="Levi (Mon, Wed, Fri)") {
                return [date.getDay() == 1 || date.getDay() == 3 || date.getDay() == 5, ""]
            }else{
                return [date.getDay() == 1 || date.getDay() == 2 || date.getDay() == 4, ""]
            }

            },minDate: "0" ,maxDate: "+30D"});
    } );

    $("#sel1").change(function(){
        barber = $(this).children("option:selected").val();
        console.log(barber);
    });


});