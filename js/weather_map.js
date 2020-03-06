(function () {
    "use strict";

    function generateWeather() {
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/29.4241,-98.4936").done(function (data) {
            var dailyWeather = data.daily;

            var forecast = [
                // today
                { feelsLike : data.currently.apparentTemperature,
                  tempHi:  dailyWeather.data[0].temperatureHigh,
                  tempLo:  dailyWeather.data[0].temperatureLow,
                  summary:   dailyWeather.data[0].summary
                },
                // tomorrow
                { tempHi: dailyWeather.data[1].temperatureHigh,
                  tempLo: dailyWeather.data[1].temperatureLow,
                  summary: dailyWeather.data[1].summary
                },
                // third day
                { tempHi: dailyWeather.data[2].temperatureHigh,
                  tempLo: dailyWeather.data[2].temperatureLow,
                  summary: dailyWeather.data[2].summary
                }
            ];
            console.log(forecast);
            $.each(data, function (index, weather) {
                var today = "";
                var tomorrow = "";
                var thirdDay = "";
                today +=
                    (


                        "<p>" + Math.floor(forecast[0].tempHi) + "&#176;" + " / " +
                        Math.floor(forecast[0].tempLo) + "&#176;" + "</p>" +
                        "<p>" + forecast[0].summary + "</p>"
                    );
                tomorrow +=
                    (
                        "<p>" + Math.floor(forecast[1].tempHi) + "&#176;" + " / " +
                        Math.floor(forecast[1].tempLo) + "&#176;" + "</p>" +
                        "<p>" + forecast[1].summary + "</p>"

                    );
                thirdDay +=
                    (
                        "<p>" + Math.floor(forecast[2].tempHi) + "&#176;" + " / " +
                        Math.floor(forecast[2].tempLo) + "&#176;" + "</p>" +
                        "<p>" + forecast[2].summary + "</p>"
                    );
                    $("#today").html(today);
                    $("#tomorrow").html(tomorrow);
                    $("#thirdDay").html(thirdDay);

            })
        });

    }
    generateWeather();













    // console.log(weather);
    // console.log(new Date(data.currently.time * 1000));
    // console.log(data.currently.temperature);
    // $.each(data, function (index, weatherThing) {
    //     var weatherContent = "";
    //     weatherContent +=
    //         (
    //             "<p>" + data.currently.temperature + "</p>"
    //         );
    //     $("#weather").html(weatherContent);
    //
    //
    // })

















})();