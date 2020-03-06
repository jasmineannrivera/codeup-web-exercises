(function () {
    "use strict";


    function generateWeather() {

        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyToken + "/29.4241,-98.4936").done(function (data) {

            var dailyWeather = data.daily;

            var forecast = [
                // today
                {
                  tempHi:  dailyWeather.data[0].temperatureHigh,
                  tempLo:  dailyWeather.data[0].temperatureLow,
                  summary:   dailyWeather.data[0].summary,
                  humidity: (dailyWeather.data[0].humidity * 100 + "%"),
                  dewPoint: Math.floor(dailyWeather.data[0].dewPoint)
                },
                // tomorrow
                { tempHi: dailyWeather.data[1].temperatureHigh,
                  tempLo: dailyWeather.data[1].temperatureLow,
                  summary: dailyWeather.data[1].summary,
                  humidity: (dailyWeather.data[1].humidity * 100 + "%"),
                  dewPoint: Math.floor(dailyWeather.data[1].dewPoint)
                },
                // third day
                { tempHi: dailyWeather.data[2].temperatureHigh,
                  tempLo: dailyWeather.data[2].temperatureLow,
                  summary: dailyWeather.data[2].summary,
                  humidity: (dailyWeather.data[2].humidity * 100 + "%"),
                  dewPoint: Math.floor(dailyWeather.data[2].dewPoint)
                }
            ];

            console.log(forecast[0].humidity);
            $.each(data, function (index, weather) {
                var today = "";
                var tomorrow = "";
                var thirdDay = "";
                today +=
                    (


                        "<p>" + "Hi/Lo: " + Math.floor(forecast[0].tempHi) + "&#176;" + " | " +
                        Math.floor(forecast[0].tempLo) + "&#176;" + "</p>" +
                        "<p>" + forecast[0].summary + "</p>" +
                        "<p>" + "Humidity: " + forecast[0].humidity + "</p>" +
                        "<p>" + "Dew Point: " + forecast[0].dewPoint + "&#176;" + "</p>"
                    );
                tomorrow +=
                    (
                        "<p>" + "Hi/Lo: " + Math.floor(forecast[1].tempHi) + "&#176;" + " | " +
                        Math.floor(forecast[1].tempLo) + "&#176;" + "</p>" +
                        "<p>" + forecast[1].summary + "</p>" +
                        "<p>" + "Humidity: " + forecast[1].humidity + "</p>" +
                        "<p>" + "Dew Point: " + forecast[1].dewPoint + "&#176;" + "</p>"

                    );
                thirdDay +=
                    (
                        "<p>" + "Hi/Lo: " + Math.floor(forecast[2].tempHi) + "&#176;" + " | " +
                        Math.floor(forecast[2].tempLo) + "&#176;" + "</p>" +
                        "<p>" + forecast[2].summary + "</p>" +
                        "<p>" + "Humidity: " + forecast[2].humidity + "</p>" +
                        "<p>" + "Dew Point: " + forecast[2].dewPoint + "&#176;" + "</p>"
                    );
                    $("#today").html(today);
                    $("#tomorrow").html(tomorrow);
                    $("#thirdDay").html(thirdDay);





            })
            //dew pt and humidity stuff here

        });

    }
    generateWeather();



//dew points
    // 15-30 dry dew
    // 30-40 mid-range
    // 40-60 optimal
    // 60+ high dew

//humidity
    // below 30% - dry
    // 30-60%- optimal
    // 60%+ - humid














})();