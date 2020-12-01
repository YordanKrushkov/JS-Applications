function attachEvents() {

    const button = document.getElementById('submit');
    let inputLocation = document.getElementById('location');
    let locationUrl = `https://judgetests.firebaseio.com/locations/.json`;
    let basicURL = `https://judgetests.firebaseio.com/forecast/`;
    let currentForcastElement = document.getElementById('current');
    let currentForcastPerent = document.getElementById('forecast');
    let upcomingForcastPerent = document.getElementById('upcoming');

    let symbols = {
        Sunny: "&#x2600", // ☀
        "Partly sunny": "&#x26C5", // ⛅
        Overcast: "&#x2601",// ☁
        Rain: "&#x2614", // ☂
        degrees: "&#176",   // °
    }

    button.addEventListener('click', () => {

        fetch(locationUrl)
            .then(response => response.json())
            .then((data) => {
                let { code } = data.find(c => c.name === inputLocation.value);

                let currentWeather = fetch(basicURL + `today/${code}.json`).then(response => response.json());
                let upcomingWeather = fetch(basicURL + `upcoming/${code}.json`).then(response => response.json());

                Promise.all([currentWeather, upcomingWeather])
                    .then(wheater)
                    .catch((e) => {
                        currentForcastPerent.textContent = 'ERROR';
                    })
            });
    });

    function createNewElements(type, classes, content) {
        let element = document.createElement(type);
        element.className = classes;
        element.innerHTML = content;

        return element;
    }

    function wheater([currentData, upcomingWeather]) {


        currentForcastPerent.style.display = 'block';
        currentWeatherForcast(currentData);
        upcommingWheatherForcast(upcomingWeather);

    }

    function currentWeatherForcast(currentData) {
        let forecastInfoDiv = createNewElements('div', 'forecast', '');

        let currentSymbol = symbols[currentData.forecast.condition]
        let conditionSymbolSpan = createNewElements('span', 'condition symbol', currentSymbol);

        let currentSpanPerent = createNewElements('span', "condition", '');
        let locationNameSpan = createNewElements('span', "forecast-data", currentData.name);
        let lowHigh = `${currentData.forecast.low}${symbols.degrees}/${currentData.forecast.high}${symbols.degrees}`;
        let currentTempritureSpan = createNewElements('span', "forecast-data", lowHigh);
        let currentConditionSpan = createNewElements('span', "forecast-data", currentData.forecast.condition);


        forecastInfoDiv.appendChild(conditionSymbolSpan);
        currentForcastElement.appendChild(forecastInfoDiv);

        currentSpanPerent.appendChild(locationNameSpan);
        currentSpanPerent.appendChild(currentTempritureSpan);
        currentSpanPerent.appendChild(currentConditionSpan);

        forecastInfoDiv.appendChild(currentSpanPerent);
    }
    function upcommingWheatherForcast(upcomingWeather) {
        let upcommingPerrant = createNewElements('div', "forecast-info", '');

        upcomingWeather.forecast.forEach(x => {
            let conditionSymbolSpan = createNewElements('span', 'symbol', symbols[x.condition]);
            let lowHigh = `${x.low}${symbols.degrees}/${x.high}${symbols.degrees}`;
            let currentTempritureSpan = createNewElements('span', "forecast-data", lowHigh);
            let currentConditionSpan = createNewElements('span', "forecast-data", x.condition);
            let spanPerant = createNewElements('span', 'upcoming', '');

            spanPerant.appendChild(conditionSymbolSpan);
            spanPerant.appendChild(currentTempritureSpan);
            spanPerant.appendChild(currentConditionSpan);
            upcommingPerrant.appendChild(spanPerant);
        })
        upcomingForcastPerent.appendChild(upcommingPerrant);
    }
}

attachEvents();