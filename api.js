///function getLocation(){
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude
            var lon = position.coords.longitude
            //console.log(position)
        }, function (error) {
            console.log(error)
        })
    } else {
        alert('ops, não foi possivel pegar localização')
    }
    $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=51b9113b2a2f4a3d6cbcb6cf5283b1a7&lang=pt_br&units=metric`,
        type: "GET",
        success: function(response){
            console.log(response)
            $("#cidade").html(response.name);
        }
    })
//}



