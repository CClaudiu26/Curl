   $('#btntime').click(function() {
 

    $.ajax({
        url: "libs/php/curl.php",
        type: 'POST',
        dataType: 'json',
        data:{
            lat: $('#LAT').val(),
            lng: $('#LNG').val()
        },


        success: function(result){
            console.log(result);
          
                $('#countryname').html(result['data']['countryName']);
                $('#time').html(result['data']['time']);
                $('#sunrise').html(result['data']['sunrise']);
                $('#sunset').html(result['data']['sunset']);
        
            
        }

    });
});

$('#btncode').click(function() {
 

    $.ajax({
        url: "libs/php/curl1.php",
        type: 'POST',
        dataType: 'json',
        data:{
            lat: $('#LATC').val(),
            lng: $('#LNGC').val()
        },


        success: function(result){
            console.log(result);

          
                $('#cname').html(result['data']['countryName']);
                $('#clanguages').html(result['data']['languages']);
                $('#ccode').html(result['data']['countryCode']);
                
        
            
        }

    });
});

$('#btnweather').click(function() {
 

    $.ajax({
        url: "libs/php/curl2.php",
        type: 'POST',
        dataType: 'json',
        data:{
            lat: $('#LATW').val(),
            lng: $('#LNGW').val()
        },


        success: function(result){
            console.log(result);

                $('#countrycode').html(result['data']['countryCode']);
                $('#temperature').html(result['data']['temperature']);
                $('#humidity').html(result['data']['humidity']);
                $('#wind').html(result['data']['windSpeed']);
                
        
            
        }

    });
});