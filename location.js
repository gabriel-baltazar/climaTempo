function getLocation(){
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude)
        }, function (error) {
            console.log(error)
        })
    } else {
        alert('ops, não foi possivel pegar localização')
    }
}
