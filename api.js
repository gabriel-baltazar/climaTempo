function getLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var lat = position.coords.latitude
            var lon = position.coords.longitude
            var img = window.document.getElementById('foto')

            $.ajax({
                url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=51b9113b2a2f4a3d6cbcb6cf5283b1a7&lang=pt_br&units=metric`,
                type: "GET",
                success: function (response) {
                    var temp = response.weather[0].main
                    $("#cidade").html(`Cidade: ${response.name}`);
                    $("#tempMin").html(`Temperatura min: ${response.main.temp_min}°C`);
                    $("#tempMax").html(`Temperatura max: ${response.main.temp_max}°C`);
                    $("#tempo").html(`Tempo: ${response.weather[0].description}`);


                    if (temp == "Clouds") {
                        img.src = 'img/nublado.png'

                    }
                    else if (temp == "Rain") {
                        img.src = 'img/chuvoso.png'
                    }
                    else if (temp == "Thunderstorm") {
                        img.src = 'img/chuvoso.png'

                    }
                    else if (temp == "Clear") {
                        img.src = 'img/ensolarado.png'

                    }



                }
            })
        }, function (error) {
            alert(error)
        })
    } else {
        alert('ops, não foi possivel pegar localização')
    }
}



