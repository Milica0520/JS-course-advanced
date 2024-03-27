"use strict";

function getHourlyData(dataList) {
  console.log(dataList);
  const hourlyArr = dataList.map((el) => {
    return {
      getIcon: (function () {
        const td = document.createElement("td");
        const icon = document.createElement("img");
        (icon.src = `http://openweathermap.org/img/w/${el.weather[0].icon}.png`),
          td.appendChild(icon);
        return td;
      })(),
      Weather: el.weather[0].description,
      Time: el.dt_txt,
      Temperature: `${Math.round(el.main.temp)} °C `,
      Humidity: `${el.main.humidity} %`,
      Windspeed: `${el.wind.speed.toFixed(1)} m/s`,
    };
  });

  const table = document.getElementById("tableResult");

  hourlyArr.forEach((el) => {
    const tr = document.createElement("tr");
    Object.values(el).forEach((value, kay) => {
      const td = document.createElement("td");
      if (kay === 0) {
        tr.appendChild(value);
      } else {
        td.textContent = value;
        tr.appendChild(td);
      }
    });

    table.appendChild(tr);
  });
}

export { getHourlyData };
