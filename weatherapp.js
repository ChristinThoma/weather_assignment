function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            //console.log(result);
            // look at the body under the response which is a readable stream. We can convert that to
            // JS object. json() will return a promise, because this method can take some time to run
            // in order to not stop the code it is implemented async.
            return result.json();
        })
        .then(data => {
            const today = data.consolidated_weather;
            let d = new Date().getDay();
            d = parseInt(d)
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            for (var i = 0; i < today.length; i++) {
                // console.log(data)
                console.log(`Temperature ${days[d + i]} in ${data.title} will be maximum ${Math.round(today[i].max_temp)}C and minimum ${Math.round(today[i].min_temp)}C`)
            }
        })

        .catch(error => {
            console.log(error);
        });
}

getWeather(8676);

// async function getWeather(){
//     fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
//     let data= await result;

// }