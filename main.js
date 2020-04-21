const d = new Date();
console.log(d)

const todayDayNumber = d.getDay();
console.log(todayDayNumber)


const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(weekday[3]);


const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5334799&appid=17ddd591be9b48501a52fd56a9e33ce3&units=imperial";

fetch(apiURL)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);

        const mylist = data.list;
        console.log(mylist)

        document.getElementById('place').innerHTML = data.city.name + ', CA';

        let forecastDayNumber = todayDayNumber;


        for (i = 0; i < mylist.length; i++) {
            let time = mylist[i].dt_txt;

            if (time.includes('21:00:00')) {

                forecastDayNumber += 1;
                if (forecastDayNumber === 7) {
                    forecastDayNumber = 0;
                }

                let theTemp = document.createElement('p')
                theTemp.textContent = data.list[i].main.temp + '\xB0';

                let iconCode = data.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconCode + ".png";
                let theIcon = document.createElement('img')
                theIcon.src = iconPath;

                
                let theDayName = document.createElement('span');
                theDayName.textContent = weekday[forecastDayNumber];
                console.log(">" + weekday[forecastDayNumber])

                let theDay = document.createElement('div');
                theDay.appendChild(theDayName)
                theDay.appendChild(theTemp)
                theDay.appendChild(theIcon)

                document.getElementById('weatherforecast').appendChild(theDay)
            }
        }






    });

